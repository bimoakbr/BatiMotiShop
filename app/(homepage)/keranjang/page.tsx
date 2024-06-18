'use client'
import Image from "next/image"
import { AppDispatch, RootState } from "@/lib/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { useSession} from "next-auth/react"
import Link from "next/link"
import { formatRupiah } from "@/lib/format"
import { decrementQuantityItems, deleteItems, incrementQuantityItems } from "@/lib/redux/reducer/cartSlice"
import { redirect } from 'next/navigation'

const keranjangPage = () => {
    const { data: session} = useSession()
    const dispatch = useDispatch<AppDispatch>()
    const {cart, isLoading} = useSelector((state: RootState) => state.cartReducer)
    
    if (!session) {
       redirect('/')
    }

    const subTotal = () => {
        var total = 0
        cart.forEach((cart) => {
            total += cart.total * cart.product.harga
        })
        return total
    }

    const taxes = () => {
        return subTotal() * 0.11
    }

    const handleIncremet = (id : Number) => {
        dispatch(incrementQuantityItems({id}))
    }

    const handleDecrement = (id : Number) => {
        dispatch(decrementQuantityItems({id}))
    }

    const handleDelete = (id: Number) => {
        dispatch(deleteItems({id}))
    }
    return (
        <div className="bg-gray-100 h-full py-8">
    <div className="container mx-auto px-4 mt-[90px]">
        <h1 className="font-bold mb-4 text-[20px] text-[#192a56]">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[16px] text-[#192a56]">
                                <th className="text-left font-semibold pl-[47px]">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity</th>
                                <th className="text-left font-semibold">Total</th>
                                <th className="text-left font-semibold">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#666]">
                            {cart.map((cart) => (
                                <tr>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <Image className="h-[150px] w-[150px] mr-4 bg-[#eee] rounded-[8px]" src={`/${cart.product.gambar}`} alt="Product image" width={100} height={100}/>
                                        <span className="font-semibold text-[14px]">{cart.product.namaProduk}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-[14px]">{formatRupiah(cart.product.harga)}</td>
                                <td className="py-4 text-[14px]">
                                    <div className="flex items-center">
                                        <button className="border rounded-md py-2 px-4 mr-2" disabled={isLoading === "loading"} onClick={() => handleDecrement(cart.id)}>-</button>
                                        <span className="text-center w-8">{cart.total}</span>
                                        <button className="border rounded-md py-2 px-4 ml-2" disabled={isLoading === "loading"} onClick={() => handleIncremet(cart.id)}>+</button>
                                    </div>
                                </td>
                                <td className="py-4 text-[14px]">{formatRupiah(cart.product.harga * cart.total)}</td>
                                <td className="py-4 text-[23px]"><i className='bx bxs-trash cursor-pointer hover:text-red-500' onClick={() => handleDelete(cart.id)}></i></td>
                            </tr>
                            ))}
                            

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4 text-[16px] text-[#192a56]">Summary</h2>
                    <div className="flex justify-between mb-2 text-[14px] text-[#666]">
                        <span>Subtotal</span>
                        <span>{formatRupiah(subTotal())}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-[14px] text-[#666]">
                        <span>Taxes</span>
                        <span>{formatRupiah(taxes())}</span>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex justify-between mb-2 text-[14px] text-[#192a56]">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">{formatRupiah(subTotal() + taxes())}</span>
                    </div>
                    <Link href="/order"><button className="bg-[#192a56] hover:bg-[#27ae60] text-white py-2 px-4 rounded-lg mt-4 w-full text-[14px]">Checkout</button></Link>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default keranjangPage