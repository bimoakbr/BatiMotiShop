"use client"
import Head from 'next/head';
import Image from 'next/image';

function UserTransaksi() {
  return (
<div className="main2 bg-gray-100 py-8 mb-90">
      <div className="container mx-auto mt-[20px] px-4">
        <h1 className="font-bold text-[20px] text-[#192a56]">Daftar Transaksi</h1>
        <div className="mt-8 w-10/12 h-fit mx-auto p-8 drop-shadow-md bg-white rounded-lg">
          <table className="w-full h-fit p-5">
            <thead>
              {/* <tr className="text-[16px] text-[#192a56]">
                <th className="font-semibold border-b-2 text-left border-gray-200">
                  <h1>Produk Dipesan</h1>
                </th>
                <th className="font-semibold border-b-2 text-center border-gray-200">
                  <h1>jumlah</h1>
                </th>
                <th className="font-semibold border-b-2 text-center border-gray-200">
                  <h1>harga total</h1>
                </th>
              </tr> */}
            </thead>
            <tbody>
              <tr className="text-[13px] text-[#666]">
                <td className="flex w-5/6 items-center gap-5 pt-2 py-2">
                  <Image
                    src="/image/beras.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[55px] bg-[#eee] rounded-[8px]"
                  />
                  {/* contoh modif */}
                  <div>

                  <p className="text-[17px]">
                    Beras Emas 50gram 
                  </p>
                  <p className="text-[15px]">Rp. 40.000</p>
                  </div>
                </td>
                <td>
                    <p className="text-[17px] text-center">1</p>
                </td>
                <td>
                    <p className="text-[17px] text-center">Rp. 40.000</p>
                </td>
              </tr>
              {/* <tr className="text-[13px] text-[#666]">
                <td className="flex w-5/6 items-center gap-5 pt-2 py-2">
                  <Image
                    src="/image/beras.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[55px] bg-[#eee] rounded-[8px]"
                  />
                  <p className="text-[17px]">
                    Beras Emas 50gram <p className="text-[15px]">Rp. 40.000</p>
                  </p>
                </td>
                <td>
                    <p className="text-[17px] text-center">1</p>
                </td>
                <td>
                    <p className="text-[17px] text-center">Rp. 40.000</p>
                </td>
              </tr> */}
            </tbody>
          </table>
          <div className="w-full flex justify-end pr-[5px] text-[14px]">
          <button type="submit" className="px-16 py-2 border border-primary rounded-lg bg-[#192a56] hover:bg-[#27ae60] text-white">Beli lagi</button>            
          </div>
        </div>
        <div className="mt-8 w-10/12 h-fit mx-auto p-8 drop-shadow-md bg-white rounded-lg">
          <table className="w-full h-fit p-5">
            <thead>
              <tr className="text-[16px] text-[#192a56]">
                <th className="font-semibold border-b-2 text-left border-gray-200">
                  <h1>Produk Dipesan</h1>
                </th>
                <th className="font-semibold border-b-2 text-center border-gray-200">
                  <h1>jumlah</h1>
                </th>
                <th className="font-semibold border-b-2 text-center border-gray-200">
                  <h1>harga total</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[13px] text-[#666]">
                <td className="flex w-5/6 items-center gap-5 pt-2 py-2">
                  <Image
                    src="/image/beras.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[55px] bg-[#eee] rounded-[8px]"
                  />
                  <p className="text-[17px]">
                    Beras Emas 50gram <p className="text-[15px]">Rp. 40.000</p>
                  </p>
                </td>
                <td>
                    <p className="text-[17px] text-center">1</p>
                </td>
                <td>
                    <p className="text-[17px] text-center">Rp. 40.000</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-end pr-[5px] text-[14px]">
          <button type="submit" className="px-16 py-2 border border-primary rounded-lg bg-[#192a56] hover:bg-[#27ae60] text-white">Beli lagi</button>            
          </div>
        </div>
        <div className="mt-8 w-10/12 h-fit mx-auto p-8 drop-shadow-md bg-white rounded-lg">
          <table className="w-full h-fit p-5">
            <thead>
              <tr className="text-[16px] text-[#192a56]">
                <th className="font-semibold border-b-2 text-left border-gray-200">
                  <h1>Produk Dipesan</h1>
                </th>
                <th className="font-semibold border-b-2 text-center border-gray-200">
                  <h1>jumlah</h1>
                </th>
                <th className="font-semibold border-b-2 text-center border-gray-200">
                  <h1>harga total</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[13px] text-[#666]">
                <td className="flex w-5/6 items-center gap-5 pt-2 py-2">
                  <Image
                    src="/image/beras.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[55px] bg-[#eee] rounded-[8px]"
                  />
                  <p className="text-[17px]">
                    Beras Emas 50gram <p className="text-[15px]">Rp. 40.000</p>
                  </p>
                </td>
                <td>
                    <p className="text-[17px] text-center">1</p>
                </td>
                <td>
                    <p className="text-[17px] text-center">Rp. 40.000</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-end pr-[5px] text-[14px]">
          <button type="submit" className="px-16 py-2 border border-primary rounded-lg bg-[#192a56] hover:bg-[#27ae60] text-white">Beli lagi</button>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTransaksi;