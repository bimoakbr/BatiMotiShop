import { NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function POST(request : Request) {
    const body = await request.json()
    try {
        const exitedCart =  await db.cartItems.findFirst({
            where: {
                productID: body.productID as number,
                userID: body.userID as number,
            }
        })
        if (exitedCart) {
            const updateCart = await db.cartItems.update({
                where: {
                    id: exitedCart.id
                },
                data: {
                    total: {increment:body.total as number, }
                },
                include: {
                    product: true
                }
            })
            return NextResponse.json({ message: "Success", status: 200, data: updateCart }, {status: 200});
        }
        const cartItems = await db.cartItems.create({
            data: {
                productID: body.productID as number,
                userID: body.userID as number,
                total: body.total as number,
            },
            include: {
                product: true
            }
        })
        return NextResponse.json({ message: "Success", status: 201, data: cartItems }, {status: 201});
      } catch (error) {
        return NextResponse.json({ message: "Failed", status: 500 });
      }
}