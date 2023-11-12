import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET(){
    const paises = await prisma.paises.findMany()
    return NextResponse.json(paises)
}