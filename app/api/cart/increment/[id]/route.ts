import { NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function PATCH(request : Request, { params }: { params: { id: string } }) {
  
    try {
        const exitedCart =  await db.cartItems.findUnique({
            where: {
               id: parseInt(params.id)
            }
        })
        if (!exitedCart) {
            return NextResponse.json({ message: "Errors", status: 500,  }, {status: 500});
        }

        const updateCart = await db.cartItems.update({
            where: {
                id: exitedCart.id
            },
            data: {
                total: {increment: 1, }
            },
            include: {
                product: true
            }
        })
    
        return NextResponse.json({ message: "Success", status: 200, data: updateCart }, {status: 200});
      } catch (error) {
        return NextResponse.json({ message: "Failed", status: 500 });
      }
}