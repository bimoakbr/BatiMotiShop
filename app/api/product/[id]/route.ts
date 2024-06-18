import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET(request : Request, { params }: { params: { id: string } }) {
    try {
        const detailProduk = await db.produk.findUnique({
            where: {
                id: parseInt(params.id)
            }
        })
        return NextResponse.json({ Message: "Success", status: 200, data: detailProduk }, {status: 200});
    } catch (error) {
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
}