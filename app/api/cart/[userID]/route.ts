import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request : Request, { params }: { params: { userID: string } }) {
    try {
        const cart = await db.cartItems.findMany({
            where: {
                userID: parseInt(params.userID)
            }, include: {
                product: true
            }
        })

        return NextResponse.json({message: "Success Get Cart Items", data: cart, status:200}, {status:200})
    } catch (error) {
        return NextResponse.json({ message: "Failed", status: 500 }, {status: 500});
    }
}