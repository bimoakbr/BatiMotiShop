import Link from "next/link";


export default function Footer(){
    return (
        <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3 className="font-bold">location</h3>
            <Link href="https://maps.app.goo.gl/Q2jfddizfVarjG759">The Mozz 9 Residence. Jl. Lkr. Sari, RT.14/RW.9, Kalisari, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta</Link>
        </div>

        <div className="box">
            <h3 className="font-bold">quick links</h3>
            <Link href="/">home</Link>
            <Link href="/items">items</Link>
            <Link href="/about">about</Link>
        </div>

        <div className="box">
            <h3 className="font-bold">contact info</h3>
            <a href="#">0895-1034-5014</a>
            <a href="#">b1mo4kbar@gmail.com</a>
            <a href="#">jakarta, indonesia - 13790</a>
        </div>

        <div className="box">
            <h3 className="font-bold">follow us</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
        </div>

    </div>
    
    <div className="credit"> copyright @ 2024 by <span>bimoakbr</span></div>

</section>
    )
}