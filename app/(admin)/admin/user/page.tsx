import Head from 'next/head';
import Image from 'next/image';

function AdminUser() {
  return (
        <div className="main2">

            <div className="details">
                <div className="recentOrders2">
                    <div className="cardHeader">
                        <h2>Daftar Pelanggan</h2>
                    </div>

                    <table className='mt-48'>
                        <thead className='bg-slate-800 text-white'>
                            <tr>
                                <td>Email</td>
                                <td>Nama</td>
                                <td>No. HP</td>
                                <td>Alamat</td>
                                <td>Aksi</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className='text-[14px]'>
                                <td><p className='!normal-case'>diashafizhan23@gmail.com</p></td>
                                <td><p className='whitespace-nowrap'>Angga Yunan</p></td>
                                <td>089589567832</td>
                                <td><p>Jl. Lkr. Sari, RT.14/RW.9, Kalisari, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta</p></td>
                                <td>
                                    <div>
                                    <i className='bx bx-trash text-[20px] cursor-pointer w-28 hover:text-red-600'></i>
                                    </div>
                                </td>
                            </tr>
                            <tr className='text-[14px]'>
                                <td><p className='!normal-case'>AnggaYunan21@gmail.com</p></td>
                                <td><p className='whitespace-nowrap'>Angga Yunan</p></td>
                                <td>089589567832</td>
                                <td><p>Jl. Lkr. Sari, RT.14/RW.9, Kalisari, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta</p></td>
                                <td>
                                    <div>
                                    <i className='bx bx-trash text-[20px] cursor-pointer w-28 hover:text-red-600'></i>
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

export default AdminUser;