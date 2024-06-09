import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(request : Request) {
    const { name, email, password, phone_number, address } = await request.json();

    try {
        const user = await db.user.create({
            data: {
                nama: name,
                email,
                password,
                phoneNumber: phone_number,
                address
            }
        })

        return NextResponse.json({ Message: "Success", status: 201}, {status:201})
    } catch (error) {
        
    }
}