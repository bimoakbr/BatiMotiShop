
import { db } from "@/lib/db";
import { CardItems } from "./_components/card-items";


export default async function page(){

    const produk = await db.produk.findMany()
 
  
    console.log(produk);
    return(
        <section className="items" id="items">
        <h1 className="heading-items font-bold"> our items </h1>
        <div className="box-container">
            {produk.map((produk) => (
              <CardItems produk={produk} key={produk.id}/>
            ))}
            {/* <div className="box">
                <a href="#" className="bx bx-heart"></a>
                <Image src="image/beras.png" alt="" width={100} height={100} unoptimized/>
                <h3>item terpopuler</h3>
                <span>Rp 40.000</span>
                <a href="#" className="btn">tambah ke keranjang</a>
            </div>
            <div className="box">
                <a href="#" className="bx bx-heart"></a>
                <Image src="image/beras.png" alt="" width={100} height={100} unoptimized/>
                <h3>item terpopuler</h3>
                <span>Rp 40.000</span>
                <a href="#" className="btn">tambah ke keranjang</a>
            </div>
    
            <div className="box">
                <a href="#" className="bx bx-heart"></a>
                <Image src="image/beras.png" alt="" width={100} height={100} unoptimized/>
                <h3>item terpopuler</h3>
                <span>Rp 40.000</span>
                <a href="#" className="btn">tambah ke keranjang</a>
            </div>
    
            <div className="box">
                <a href="#" className="bx bx-heart"></a>
                <Image src="image/beras.png" alt="" width={100} height={100} unoptimized/>
                <h3>item terpopuler</h3>
                <span>Rp 40.000</span>
                <a href="#" className="btn">tambah ke keranjang</a>
            </div>
    
            <div className="box">
                <a href="#" className="bx bx-heart"></a>
                <Image src="image/beras.png" alt="" width={100} height={100} unoptimized/>
                <h3>item terpopuler</h3>
                <span>Rp 40.000</span>
                <a href="#" className="btn">tambah ke keranjang</a>
            </div>
     */}
        </div>
    
    </section>
    );
}