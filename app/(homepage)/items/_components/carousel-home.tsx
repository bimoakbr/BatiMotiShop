'use client'
import Image from "next/image";
import { Produk } from "@prisma/client";
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const CarouselHome = ({data} : {data : Produk[]}) => {
    // const data = [
    //     {
    //         nama: "Beras putih",
    //         deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia excepturi consequatur, recusandae",
    //         gambar: "/image/beras.png"
    //     },
    //     {
    //         nama: "Otak Otak",
    //         deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia excepturi consequatur, recusandae",
    //         gambar: "/image/beras.png"
    //     },
    //     {
    //         nama: "Sosis",
    //         deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia excepturi consequatur, recusandae",
    //         gambar: "/image/beras.png"
    //     },
    // ]
    return (
        <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
  >
      {data.map((produk) => (
      <SwiperSlide key={produk.id}>
        <div className="slide">

           <div className="content">
                <span className="font-semibold">frozen food</span>
                <h3 className="font-bold">{produk.namaProduk}</h3>
                <p>{produk.deskripsi}</p>
                <a href="#" className="btn">Buat Pesanan</a>
            </div>
            <div className="image">
                <Image src={produk.gambar} alt="" width={100} height={100} unoptimized/>
            </div>
        </div>
      </SwiperSlide>
      ))}
     
     
  </Swiper>
    )
}