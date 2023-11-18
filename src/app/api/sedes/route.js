import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET(){

 const ciudades = await prisma.sedes.findMany()
 return NextResponse.json(ciudades)    
}