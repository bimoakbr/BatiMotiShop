import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(request : Request) {
    const { email, password} = await request.json();

    try {
        const user = await db.user.findFirst({
            where: {
                email: email,
            }
        })

        if (user?.password != password) {
            return NextResponse.json({ Message: "Error", status: 500}, {status:500})    
        }
        return NextResponse.json({ Message: "Success", status: 200, data: user }, {status:200})
    } catch (error) {
        return NextResponse.json({ Message: "Error", status: 500}, {status:500})
    }
}