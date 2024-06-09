import Image from "next/image"

export default function Page() {
    return (
        <main className="bg-white">

        <section className="about" id="about">

        <h3 className="heading-items font-bold"> About us </h3>

        <div className="row">

            <div className="image">
                <Image src="image/logoBMS.png" alt="" width={100} height={100} unoptimized className="rounded-[10px]"/>
            </div>

            <div className="content">
                <h3 className="font-semibold">BatiMotiShop</h3>
                <p>BatiMotiShop merupakan tempat yang menjual belikan makanan frozen food. disini Kami menyediakan produk-produk frozen food terbaik dari merek-merek terpercaya. Setiap item dipilih dengan teliti untuk memastikan kualitas dan rasa yang terbaik. Dari sosis, nugget, bakso, hingga seafood beku, kami memiliki berbagai macam produk yang siap memuaskan selera Anda. </p>
                <p>Terima kasih telah memilih BatiMotiShop sebagai partner kuliner Anda. Selamat berbelanja dan menikmati hidangan lezat dari kami!</p>
                <p>Lokasi Kami : The Mozz 9 Residence. Jl. Lkr. Sari, RT.14/RW.9, Kalisari, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta</p>
                <div className="icons-container">
                    <div className="icons">
                        <i className='bx bxs-package'></i>
                        <span>free delivery</span>
                    </div>
                    <div className="icons">
                        <i className='bx bx-dollar-circle'></i>
                        <span>easy payments</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </main>
    )
}