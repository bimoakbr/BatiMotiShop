'use client'
import { formatRupiah } from "@/lib/format"
import { AppDispatch, RootState } from "@/lib/redux/store"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { Produk } from "@prisma/client"
import { CartInput, addItems } from "@/lib/redux/reducer/cartSlice"
import { useSession} from "next-auth/react"
import { toast } from "react-hot-toast"


interface ItemsPageProps {
    params : {
        itemId : string,
    }
}
export default function page({params}:ItemsPageProps) {
   
    const { data: session} = useSession()
    const dispatch = useDispatch<AppDispatch>()
    const {isLoading, error} = useSelector((state: RootState) => state.cartReducer)
    const [produk, setProduct] = React.useState<Produk|null>(null)


    React.useEffect(() => {
        const fetchProduk = async () => {
            const {data} = await axios.get(`/api/product/${params.itemId}`)
            setProduct(data.data)
        }
        fetchProduk()
    }, [])

    if (!produk) {
        return null;
    }

    const handleAddToCart = (formData: FormData) => {
        console.log("session data ");
        console.log(session?.user);
        console.log("akhir");
        const data: CartInput = {
            productID: parseInt(params.itemId),
            userID : session?.user.id!,
            total:parseInt( formData.get("quantity") as string)
        }

        
        
        dispatch(addItems({data}))
        toast.success("Success add product to cart")
    }
    
    const productTersedia = produk?.kuantitas  < 1
     

   return (
    
        <div className="order-container bg-white">
            <div className="image">
                <Image src={`/${produk?.gambar}` || ""} alt="gambar product" width={100} height={100} unoptimized priority/>
            </div>
            <form className="content" action={handleAddToCart}>
                <h3>{produk?.namaProduk} {produk?.merek}</h3>
                <hr className="h-1 bg-[#192a56] mb-8"/>
                <span>{formatRupiah(produk?.harga)}</span>
                <p>{produk?.deskripsi}</p>
                <p>Kategori : {produk?.kategori} </p>
                <label htmlFor="quantity">Kuantitas : </label>
                <input type="number" id="quantity" name="quantity" min="0" max="100" className="text-[14px]"/><br/>
                <p>Merek : {produk?.merek}</p>
                <div className="flex gap-4 items-center text-[14px] text-slate-600">Ketersediaan : {productTersedia ? <div className="bg-red-400 text-white p-2 rounded-lg text-[12px]">Tidak Tersedia</div>: <div className="bg-emerald-400 rounded-lg text-white p-2 text-[12px] w-fit">Tersedia</div>} </div>
                <button type="submit" className="btn">Pesan</button>
            </form>
        </div>
 
   )
}