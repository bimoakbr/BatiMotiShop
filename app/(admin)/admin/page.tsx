import Head from 'next/head';
import Image from 'next/image';

function AdminPanel() {
  return (
        <div className="main2">
            <div className="cardBox text-[20px] mt-10">
                <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Jumlah Produk</div>
                    </div>

                    <div className="iconBx">
                        <i className="eye-outline"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Penjualan</div>
                    </div>

                    <div className="iconBx">
                        <i className="cart-outline"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">Rp. 7,842,000,000</div>
                        <div className="cardName">Pendapatan</div>
                    </div>

                    <div className="iconBx">
                        <i className="cash-outline"></i>
                    </div>
                </div>
            </div>

            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Histori Transaksi</h2>
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-white py-2 px-4 rounded-lg text-[17px] bg-[#192a56] hover:bg-[#27ae60]">Lihat Semua</a>
                    </div>

                    <table>
                        <thead className='bg-slate-800 text-white'>
                            <tr>
                                <td>Nama</td>
                                <td>No. Hp</td>
                                <td>Alamat</td>
                                <td>Harga</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody className='text-[16.5px] cursor-pointer'>
                            <tr>
                                <td>Angga Yunan</td>
                                <td>089589567832</td>
                                <td>Jakarta Timur, Pasar Rebo, Kalisari, jl. Lingkarsari</td>
                                <td>Rp. 120.000</td>
                                <td><span className="status delivered">Lunas</span></td>
                            </tr>

                            <tr>
                                <td>Kuncoro Adi Wiguna</td>
                                <td>089589567832</td>
                                <td>Jakarta Timur, Pasar Rebo, Kalisari, jl. Lingkarsari</td>
                                <td>Rp. 12.000.000</td>
                                <td><span className="status return">Belum Dibayar</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
}

export default AdminPanel;