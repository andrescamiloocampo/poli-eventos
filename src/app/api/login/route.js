import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function POST(request){    
    const requestData = await request.json()
    const user = await prisma.empleados.findUnique({
        where:{
            ...requestData
        }
    })
    return NextResponse.json(user)
}