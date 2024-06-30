'use client'
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

function FormProduk() {
    const [image, setImage] = useState<string | null>(null)
    const [file, setFile] = useState<File | null>(null)
    const [product, setProduct] = useState({
        namaproduk: "",
        deskripsi: "",
        merek: "",
        harga: 0,
        kuantitas: 0,
        kategori: "",
    })


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === "kuantitas" || event.target.name === "harga") {

        }
        setProduct((prevState) => {
            return {
                ...prevState,
                [event.target.name] : (event.target.name === "kuantitas" || event.target.name === "harga" ? parseInt(event.target.value) : event.target.value) 
            }
        })
    }

    const onImageChange = (event : ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setFile(event.target.files[0])
        }
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    if (!image) {
      alert('Please select a file');
      return;
    }
    if (!file) {
        alert('Please select a file');
        return;
      }
    try {
      const formData = new FormData();
     
      formData.append("image", file)
      formData.append("nama_produk", product.namaproduk)
      formData.append("deskripsi", product.deskripsi)
      formData.append("merek", product.merek)
      formData.append("kuantitas", product.kuantitas.toString())
      formData.append("kategori", product.kategori)
      formData.append("harga", product.harga.toString())



      const response = await axios.post('/api/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success("berhasil menambahkan produk")
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error("gagal menambahkan produk")
    }
    }
    return (
        <div className="main2">
            <form className='p-8 space-y-2' onSubmit={onSubmit}>
                
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Nama Produk" name="namaproduk" id="namaproduk" required onChange={handleChange}/>
                </div>
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Merek" name="merek" id="merek" required onChange={handleChange} />
                </div>
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Deskripsi Produk" name="deskripsi" id="deskripsi" required onChange={handleChange} />
                </div>
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Kategori" name="kategori" id="kategori" required onChange={handleChange} />
                </div>
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Harga" name="harga" id="harga" required onChange={handleChange}/>
                </div>
                <div className="input-box2">
                    <input type="text" placeholder="Masukkan Jumlah Stok" name="jumlahstok" id="jumlahstok" required onChange={handleChange} />
                </div>
                <div className="input-box2">
                    <input type="file" name="name" id="name" className='p-4' onChange={onImageChange}  />
                </div>
                {image ? 
                <div className='file-gambar'>
                    <div className='w-[300px] h-[300px]'>
                        <Image alt="preview image" src={image} width={100} height={100} className='object-cover object-center w-full h-full justify-center' unoptimized/>
                    </div>
                </div>
                 : null}
                <div className="input-box2 button">
                    <input type="Submit" value="Simpan" />
                </div>
            </form>
        </div>
    );
}

export default FormProduk;