
import { db } from "@/lib/db"
import { formatRupiah } from "@/lib/format"
import Image from "next/image"
import Link from "next/link"


interface ItemsPageProps {
    params : {
        itemId : string,
    }
}
export default async function page({params} : ItemsPageProps) {
    const detailProduct = await db.produk.findUnique({
        where: {
            id: parseInt(params.itemId)
        }
    })

    if (!detailProduct) {
        return null;
    }
    
    const productTersedia = detailProduct?.kuantitas  < 1
     

   return (
    
        <div className="order-container bg-white">
            <div className="image">
                <Image src={`/${detailProduct?.gambar}` || ""} alt="gambar product" width={100} height={100} unoptimized priority/>
            </div>
            <div className="content">
                <h3>{detailProduct?.namaProduk} {detailProduct?.merek}</h3>
                <hr className="h-1 bg-[#192a56] mb-8"/>
                <span>{formatRupiah(detailProduct?.harga)}</span>
                <p>{detailProduct?.deskripsi}</p>
                <p>Kategori : {detailProduct?.kategori} </p>
                <label htmlFor="quantity">Kuantitas : </label>
                <input type="number" id="quantity" name="quantity" min="0" max="100" className="text-[14px]"/><br/>
                <p>Merek : {detailProduct?.merek}</p>
                <div className="flex gap-4 items-center text-[14px] text-slate-600">Ketersediaan : {productTersedia ? <div className="bg-red-400 text-white p-2 rounded-lg text-[12px]">Tidak Tersedia</div>: <div className="bg-emerald-400 rounded-lg text-white p-2 text-[12px] w-fit">Tersedia</div>} </div>
                <Link href="#" className="btn">memesan</Link>
            </div>
        </div>
 
   )
}