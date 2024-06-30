'use client'

import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import { useSession} from "next-auth/react"
import { signOut } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/lib/redux/store"
import {useEffect} from "react"
import { fetchCartItems } from "@/lib/redux/reducer/cartSlice"


export const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {cart} = useSelector((state: RootState) => state.cartReducer)
    const pathname = usePathname()
    const router = useRouter()
    const { data: session} = useSession()

    const totaltemInCart = () => {
        var total = 0

        cart.forEach((cart) => {
            total += cart.total
        })
        return total
    }
    
    useEffect(() => {
        if(session) {
            dispatch(fetchCartItems(session?.user.id!))
        }
    }, [])

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
    <Link href="/" className="logo"><i className='bx bx-store' ></i>BatiMotiShop</Link>
    <nav className="navbar">
        <Link className={pathname === "/" ? `active` : ""} href="/">home</Link>
        <Link className={pathname === "/items" ? `active` : ""} href="/items">Items</Link>
        <Link className={pathname === "/about" ? `active` : ""} href="/about">About</Link>
    </nav>



{session ? <div className="icons flex">
    <i className='bx bx-menu' id="menu-bars"></i>
    {/* <i className='bx bx-search-alt-2' id="search-icon" onClick={() => console.log(cart)}></i> */}
    <div className="relative">
        <i className='bx bx-cart' onClick={()=>router.push('/keranjang')}></i>
        {totaltemInCart() <= 0 ? null : <div className='absolute right-[-5px] top-[-5px] w-[25px] h-[25px] bg-[#27ae60] text-white rounded-full flex items-center justify-center text-sm transition-all '>{totaltemInCart()}</div>}
    </div>
    
    <i className='bx bx-log-out' onClick={()=> handleSignOut()}></i>
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