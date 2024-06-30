'use client'
import Head from 'next/head';
import Image from 'next/image';
import { ChangeEvent, useState } from "react";

function UserPanel() {
    const [image, setImage] = useState<string | null>(null)

    const onImageChange = (event : ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    return (
        <div className="main2">
            <form className='p-8 space-y-2'>
                
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Nama Anda" name="name" id="name" required />
                </div>
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Alamat Anda" name="address" id="address" required />
                </div>
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Password Anda" name="password" id="password" required />
                </div>
                {/* <div className="input-box2">
                    <input type="text" placeholder="Masukkan Jumlah Stok" name="password" id="password" required />
                </div> */}
                {/* <div className="input-box2">
                    <input type="file" name="name" id="name" className='p-4' onChange={onImageChange} required />
                </div>
                {image ? 
                <div className='file-gambar'>
                    <div className='w-[300px] h-[300px]'>
                        <Image alt="preview image" src={image} width={100} height={100} className='object-cover object-center w-full h-full justify-center' unoptimized/>
                    </div>
                </div>
                 : null} */}
                <div className="input-box2 button">
                    <input type="Submit" value="Simpan" />
                </div>
            </form>
        </div>
    );
  }
  
  export default UserPanel;