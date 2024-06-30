import Head from 'next/head';
import Image from 'next/image';

function AdminProduk() {
  return (
        <div className="main2">

            <div className="details">
                <div className="recentOrders2">
                    <div className="cardHeader">
                        <h2>Daftar Barang</h2>
                    </div>

                    <div className="text-right">
                        <a href="#" className="text-white py-2 px-4 rounded-lg text-[17px] bg-[#27ae60] hover:bg-[#3dc475]">Tambah Produk</a>
                    </div>

                    <table className='mt-48'>
                        <thead className='bg-slate-800 text-white'>
                            <tr>
                                <td>Nama Produk</td>
                                <td>Deskripsi</td>
                                <td>Harga</td>
                                <td>Jumlah Stok</td>
                                <td>Aksi</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className='text-[16px]'>
                                <td>
                                    <div className="flex items-center">
                                        <Image className="mr-4 bg-[#eee] rounded-[8px]" src="/image/beras.png" alt="Product image" width={85} height={85}/>
                                        <span className="font-semibold">Sosis Cap enak joss</span>
                                    </div>
                                </td>
                                <td><p className='w-[300px] whitespace-nowrap text-ellipsis overflow-hidden'>asdasdasdasda sda sdasdasd adsdsad asdadas dasdasdasdasdasd</p></td>
                                <td>Rp. 100.000</td>
                                <td>100</td>
                                <td>
                                    <div className='grid gap-4 grid-cols-2'>
                                    <i className='bx bx-edit text-[20px] cursor-pointer hover:text-[#27ae60]'></i> 
                                    <i className='bx bx-trash text-[20px] cursor-pointer hover:text-red-600'></i>
                                    </div>
                                </td>
                            </tr>
                            <tr className='text-[16px]'>
                                <td>
                                    <div className="flex items-center">
                                        <Image className="mr-4 bg-[#eee] rounded-[8px]" src="/image/beras.png" alt="Product image" width={85} height={85}/>
                                        <span className="font-semibold">Sosis Cap enak joss</span>
                                    </div>
                                </td>
                                <td><p className='w-[300px] whitespace-nowrap text-ellipsis overflow-hidden'>asdasdasdasda sda sdasdasd adsdsad asdadas dasdasdasdasdasd</p></td>
                                <td>Rp. 100.000</td>
                                <td>100</td>
                                <td>
                                    <div className='grid gap-4 grid-cols-2'>
                                    <i className='bx bx-edit text-[20px] cursor-pointer hover:text-[#27ae60]'></i> 
                                    <i className='bx bx-trash text-[20px] cursor-pointer hover:text-red-600'></i>
                                    </div>
                                </td>
                            </tr>
                            <tr className='text-[16px]'>
                                <td>
                                    <div className="flex items-center">
                                        <Image className="mr-4 bg-[#eee] rounded-[8px]" src="/image/beras.png" alt="Product image" width={85} height={85}/>
                                        <span className="font-semibold">Sosis Cap enak joss</span>
                                    </div>
                                </td>
                                <td><p className='w-[300px] whitespace-nowrap text-ellipsis overflow-hidden'>asdasdasdasda sda sdasdasd adsdsad asdadas dasdasdasdasdasd</p></td>
                                <td>Rp. 100.000</td>
                                <td>100</td>
                                <td>
                                    <div className='grid gap-4 grid-cols-2'>
                                    <i className='bx bx-edit text-[20px] cursor-pointer hover:text-[#27ae60]'></i> 
                                    <i className='bx bx-trash text-[20px] cursor-pointer hover:text-red-600'></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
}

export default AdminProduk;