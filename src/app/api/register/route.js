import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function POST(request){        
    const requestData = await request.json()
    requestData.cod_facultad = parseInt(requestData.cod_facultad)
    requestData.codigo_sede = parseInt(requestData.codigo_sede)
    requestData.lugar_nacimiento = parseInt(requestData.lugar_nacimiento)
    await prisma.empleados.create({
        data:{
            ...requestData
        }        
    })
    return NextResponse.json(requestData)
}
