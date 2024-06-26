'use client'
import { Produk } from "@prisma/client"
import { formatRupiah } from "@/lib/format"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"




export const CardItems = ({produk} : {produk: Produk}) => {
    const router = useRouter()
    return (
        <div className="box cursor-pointer" onClick={() => router.push(`/items/${produk.id}`)} >
                <Image src={produk.gambar} alt="" width={100} height={100} unoptimized/>
                <h3>{produk.namaProduk}</h3>
                <span>{formatRupiah(produk.harga)}</span>
                <br />
                <Link href={`/items/${produk.id}`} className="btn">Buat Pesanan</Link>
            </div>
    ) 
}