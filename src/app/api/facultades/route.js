import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET(){
    const facultades = await prisma.facultades.findMany()
    return NextResponse.json(facultades)
}