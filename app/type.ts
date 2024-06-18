import { DefaultSession, DefaultUser } from "next-auth";

// Extend the default session type to include custom properties
declare module "next-auth" {
    interface User extends DefaultUser {
        id: number;
        phoneNumber: string;
        address: string;
      }

  interface Session {
    user: {
      /** The user's postal address. */
      id:Number;
      phoneNumber: string;
      address: string;
      // Add other custom properties here
    } & DefaultSession["user"];
  }

 
  interface JWT {
    user: {
      id: number;
      phoneNumber: string;
      address: string;
      name: string;
      email: string;
    };
  }
}