"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';


export default function Login() {
  const router = useRouter()
  const onSubmit = async(form: FormData) => {
    const res = await signIn("credentials", {
      email: form.get("email") as string,
      password: form.get("password") as string,
      redirect: false,
    });
    if (res?.error) {
      toast.error("email or password invalid")
      return
    };
    router.push("/");
  }
    return (
        <div className="wrapper">
        <h2>Login</h2>
        <form action={onSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" name="email" id="email" required/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Enter your password" name="password" id="password" required/>
          </div>
          <div className="input-box button">
            <input type="Submit" value="Login Now"/>
          </div>
          <div className="text">
            <h3>Doesn't have an account? <Link href="/register">Register now</Link></h3>
          </div>
        </form>
      </div>         
    );
}