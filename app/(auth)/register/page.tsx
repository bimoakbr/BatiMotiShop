"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';

export default function Register() {
   const router = useRouter() 

   const onSubmit = async(form : FormData) => {
       const data = {
          name : form.get('name') as string,
          address : form.get('address') as string,
          password : form.get('password') as string,
          email : form.get('email') as string,
          phone_number : form.get('phoneNumber') as string
      }
      try {
        const resp = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        router.push("/login")
      } catch (error) {
        toast.error("Error On Server")
      }
   }
    return (
        <div className="wrapper">
    <h2>Registration</h2>
    <form action={onSubmit} >
      <div className="input-box">
        <input type="text" placeholder="Enter your name" name="name" id="name" required/>
      </div>
      <div className="input-box">
        <input type="tel" placeholder="Enter your phone number"  name="phoneNumber" id="phoneNumber" required/>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your address"  name="address" id="address" required/>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email"  name="email" id="email" required/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password"  name="password" id="password" required/>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Register Now"/>
      </div>
      <div className="text">
        <h3>Already have an account? <Link href="/login">Login now</Link></h3>
      </div>
    </form>
  </div>
    )
}