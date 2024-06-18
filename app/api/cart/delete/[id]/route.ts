import { NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function POST(request : Request, { params }: { params: { id: string } }) {
  
    try {
        const exitedCart =  await db.cartItems.findUnique({
            where: {
               id: parseInt(params.id)
            }
        })
        if (!exitedCart) {
            return NextResponse.json({ message: "Errors", status: 500,  }, {status: 500});
        }

   
        const deletedCart = await db.cartItems.delete({
            where: {
                id: exitedCart.id
            },
        })
    
        return NextResponse.json({ message: "Success", status: 200, data: deletedCart}, {status: 200});
      } catch (error) {
        return NextResponse.json({ message: "Failed", status: 500 });
      }
}