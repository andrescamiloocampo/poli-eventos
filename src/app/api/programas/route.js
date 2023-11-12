import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET(){
    const programas = await prisma.programas.findMany()
    return NextResponse.json(programas)
}