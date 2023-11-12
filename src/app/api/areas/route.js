import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET(){
    const areas = await prisma.areas.findMany()
    return NextResponse.json(areas)
}