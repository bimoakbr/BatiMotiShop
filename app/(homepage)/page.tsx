"use client"
import { db } from "@/lib/db";
import { CardItems } from "./items/_components/card-items";
import { CarouselHome } from "./items/_components/carousel-home";

export default async function Page() {

    const produk = await db.produk.findMany({
        take: 3
    })

    const carouselItem = await db.produk.findMany({
        take: 3,
        orderBy: {
            id: "desc"
        }
    }) 


  return (
<main>
<section className="home bg-white" id="home">
<CarouselHome data={carouselItem}/>

</section>

<section className="items" id="popular">

<h3 className="sub-heading font-bold"> our items </h3>
<h1 className="heading font-bold"> popular items </h1>

<div className="box-container">
{produk.map((produk) => (
             <CardItems produk={produk}/>
            ))}
</div>

</section>
  
</main>
)
}
