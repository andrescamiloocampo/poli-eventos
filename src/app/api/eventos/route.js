import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";
import axios from "axios";

export async function GET(){
    let eventos;
    try {
        const response = await axios.get('http://localhost:8080');
        eventos = response.data;
        console.log(eventos);
    } catch (error) {
        console.log(error);
    }
    return NextResponse.json(eventos);
}