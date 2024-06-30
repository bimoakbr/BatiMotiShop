// import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, {NextAuthOptions, Session} from "next-auth"
import { NextApiHandler } from 'next';

// export interface MySession extends Session{
//     user:{
//         id: string,
//         name: string,
//         email: string,
//         phone: string,
//         isAdmin: boolean,
//         image: string
//     }
// }
// interface MyUser extends User{
//     id: string,
//     name: string,
//     email: string,
//     phone: string,
//     isAdmin: boolean,
// }

export const options: NextAuthOptions = {
       providers : [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
        
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string; password: string };
                const credentialDetails = {
                    email: email,
                    password: password,
                  };

                  
                  try {
                    const res = await fetch("http://localhost:3000/api/auth/login", {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentialDetails),
                      });
        
                      const user = await res.json()
                      
                        const { nama, id, address, phoneNumber,email, role} = user?.data;
                        const userData = {
                          id,
                          name: nama,
                          phoneNumber,
                          address,
                          email,
                          role
                        };
                      return userData
                    
                  } catch (error) {
                    console.log(error);
                    throw new Error('Next Auth - Authorize: Authentication error');
                  }
                 
              },
        }
        ),
    ],
        session: {
            strategy: "jwt",
          },   
        pages: {
            signIn: "/login",
        },
        secret: "adauidgiaga",
        callbacks: {
            jwt: async ({ token, user }) => {
                console.log("jwt callback",{token: token, user: user});
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
                console.log("sess callback",{sees: session, token: token, user: user});
                if (token) {
                    session.user.id = token.id as Number
                    session.user.address = token.address as string
                    session.user.email = token.email 
                    session.user.phoneNumber = token.phoneNumber as string
                    session.user.name = token.name 
                    session.user.image = token.picture
                }
                console.log(session);
                return session;
              },
          }
      }
    
const Handler: NextApiHandler = (req, res) => NextAuth(req, res, options);


export  {Handler as GET, Handler as POST}