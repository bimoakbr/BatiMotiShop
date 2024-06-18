"use client"
import Image from "next/image";
import { useSession} from "next-auth/react"
import { redirect } from 'next/navigation'

const orderPage = () => {

  const { data: session} = useSession()

  if (!session) {
    redirect('/')
 }

  return (
    <div className="bg-gray-100 py-8 mb-90">
      <div className="container mx-auto mt-[90px] px-4">
      <h1 className="font-bold text-[20px] text-[#192a56]">Checkout</h1>
        <div className="w-full mt-5 p-10 bg-white rounded-lg">
          <h1 className="text-[16px] mb-5 font-semibold text-[#192a56]">
            <i className="bx bxs-map" />
            Alamat Pengiriman
          </h1>
          <div className="flex items-center justify-between text-[14px]">
            <p className="text-[#666]">Anggara Kuncoro</p>
            <p className="text-[#666]">
              Jalan Jengki Gang Sahabat No.6, RT.1/RW.2, Kebon, Makasar, KOTA
              JAKARTA TIMUR - MAKASAR, DKI JAKARTA, ID 13650
            </p>
            <button className="px-2 py-2 border border-primary rounded-lg bg-[#192a56] hover:bg-[#27ae60] text-white">
              Ubah
            </button>
          </div>
        </div>
        <div className="mt-10 w-full p-10 bg-white rounded-lg">
          <table className="w-full p-5 text-left border-b-2 border-white-three">
            <thead>
              <tr className="text-[16px] text-[#192a56]">
                <th className="font-semibold">
                  <h1>Produk Dipesan</h1>
                </th>
                <th className="font-semibold">Harga satuan</th>
                <th className="font-semibold">Jumlah</th>
                <th className="font-semibold">Subtotal Produk</th>
              </tr>
            </thead>
            <tbody >
              <tr className="text-[13px] text-[#666]">
                <td className="flex items-center gap-3 py-2">
                  <Image
                    src="/image/beras.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[95px] bg-[#eee] rounded-[8px]"
                  />
                  <p>
                    Beras Emas 50gram
                  </p>
                </td>
                <td>
                  <p>Rp. 635.000</p>
                </td>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>Rp. 635.000</p>
                </td>
              </tr>
              <tr className="text-[13px] text-[#666]">
                <td className="flex items-center gap-3 py-2">
                  <Image
                    src="/image/beras.png"
                    alt=""
                    width={900}
                    height={900}
                    className="w-[95px] bg-[#eee] rounded-[8px]"
                  />
                  <p>
                    Beras Emas 50gram
                  </p>
                </td>
                <td className="mt-10">
                  <p>Rp. 635.000</p>
                </td>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>Rp. 635.000</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-end items-center gap-3 mt-5 pr-40 text-[13px]">
            <p className="text-[#666]">Total pesanan (2 Produk):</p>
            <p className="font-semibold text-[#192a56]">Rp. 1.270.000</p>
          </div>
        </div>
        <div className="mt-10 w-full p-10 bg-white rounded-lg">
          <h1 className="text-[16px] font-semibold text-[#192a56] mb-3">Payment</h1>
          <p className="text-white-secondary text-[13px] text-[#666]">All transactions are secure and encrypted.</p>
          <div className="">
      <div className="w-full p-5 rounded-t-lg border border-solid border-[#192a56] flex items-center justify-between">
        <h1 className="text-xl text-[#192a56]">Payments By MidTrans</h1>
        <div className="flex items-center gap-3">
          <Image
            src="/image/payment1.png"
            alt=""
            width={900}
            height={900}
            className="w-[40px]"
          />
          <Image
            src="/image/payment2.png"
            alt=""
            width={900}
            height={900}
            className="w-[40px]"
          />
          <Image
            src="/image/payment3.png"
            alt=""
            width={900}
            height={900}
            className="w-[40px]"
          />
          <Image
            src="/image/payment4.png"
            alt=""
            width={900}
            height={900}
            className="w-[40px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#eee] rounded-lg py-9">
        <i className="bx bx-credit-card text-[15rem] text-[#474747]" />
        <p className="max-w-[420px] text-[#474747] text-center text-lg">After clicking “Pay Now”, you will be redirected to Payments By MidTrans to complete your purchase securely.</p>
      </div>
      <button className="mt-10 w-full px-2 py-2 border border-primary rounded-lg bg-[#192a56] hover:bg-[#27ae60] text-white text-xl">Pay Now</button>
    </div>
        </div>
      </div>
    </div>
  )
}

export default orderPage;
