'use client'

import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import { useSession} from "next-auth/react"
import { signOut } from "next-auth/react"


export const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const { data: session} = useSession()
    console.log(session);

    const handleSignOut = () => {
        signOut().then(() => {
            router.push("/")
        }).catch((e) => {
            console.log(e);
        })
    }
    return (
        <>
        
        <header>
    <Link href="/" className="logo"><i className='bx bxs-bowl-hot' ></i>BatiMotiShop.</Link>
    <nav className="navbar">
        <Link className={pathname === "/" ? `active` : ""} href="/">home</Link>
        <Link className={pathname === "/items" ? `active` : ""} href="/items">Items</Link>
        <Link className={pathname === "/about" ? `active` : ""} href="/about">About</Link>
    </nav>



{session ? <div className="icons">
    <i className='bx bx-menu' id="menu-bars"></i>
    <i className='bx bx-search-alt-2' id="search-icon"></i>
    <i className='bx bx-cart' onClick={()=>router.push('/keranjang')}></i>
    <i className='bx bx-cart' onClick={()=> handleSignOut()}></i>
</div>: <div className="justify-between navbar">
        <Link className="" href="/login">Login</Link>
        <Link className="" href="/register">Register</Link>
</div>}


</header>

<form action="" id="search-form">
     <input type="search" name="" placeholder="search here..." id="search-box"/>
     <label htmlFor="search-box" className="bx bx-search-alt-2" id="search-logo"></label>
     <i className='bx bx-x' id="close"></i>
</form>
        </>

    )
}