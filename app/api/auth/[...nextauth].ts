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
              token.id = user.id
              token.email = user.email
              token.address = user.address
              token.phoneNumber = user.phoneNumber
              token.name = user.name
            }
      
            return token;
          },
          session: ({ session, token, user }) => {
            if (token) {
                session.user.id = token.id as Number
                session.user.address = token.address as string
                session.user.email = token.email 
                session.user.phoneNumber = token.phoneNumber as string
                session.user.name = token.name 
                session.user.image = token.picture
            }
            return session;
          },
      }
  })
}