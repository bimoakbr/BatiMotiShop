import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { db } from "@/lib/db";

export async function POST(request : Request) {
    const formData = await request.formData()
    const file = formData.get("image") as File;
   
    if (!file || file.size <= 0) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    
    try {
        await writeFile(
          path.join(process.cwd(), "public/uploads/" + filename),
          buffer
        );
        const newProduk = await db.produk.create({
            data: {
                namaProduk: formData.get('nama_produk') as string,
                harga: parseInt(formData.get('harga') as string),
                merek: formData.get('merek') as string,
                kategori: formData.get('kategori') as string,
                gambar: `uploads/${filename}`,
                kuantitas: parseInt(formData.get('kuantitas') as string),
                deskripsi: formData.get("deskripsi") as string,
            }
        })
        return NextResponse.json({ Message: "Success", status: 201, Data: newProduk }, {status: 201});
      } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
      }
}