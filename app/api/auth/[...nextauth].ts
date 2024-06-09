import type { NextApiRequest, NextApiResponse } from "next"
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
   const providers = [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: {},
            password: {},
        },
        async authorize(credentials, req) {
            const credentialDetails = {
                email: credentials?.email,
                password: credentials?.password,
              };
      
              const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(credentialDetails),
              });

              const user = await res.json()
              if (res.status === 200 && user) {
                const { nama, id, address, phoneNumber,email} = user?.data.data;
                const userData = {
                  id,
                  name: nama,
                  phoneNumber,
                  address,
                  email,
            };
              return userData
            }
              // Return null if user data could not be retrieved
              return null
          },
    }
       
    ),
   ]


  return await NextAuth(req, res, {

    session: {
        strategy: "jwt",
      },   
    pages: {
        signIn: "/login",
    },
    providers,

    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.user = user
            }
      
            return token;
          },
          session: ({ session, token, user }) => {
            if (token) {
                session.user = token.user!
            }
            return session;
          },
      }
  })
}