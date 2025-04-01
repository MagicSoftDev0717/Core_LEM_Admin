import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma"; // Ensure your Prisma client is correctly set up
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const {school_id, v_date, reason, p_visiting, p_visited, leaflet, notes } = await req.json();

        if (!v_date) {
            return NextResponse.json({ error: "Date is required" }, { status: 400 });
        }

        const visit = await prisma.schoolVisit.create({
            data: { 
                school_id,
                v_date, 
                reason, 
                p_visiting, 
                p_visited, 
                leaflet, 
                notes 
            },
        });

        return NextResponse.json(visit, { status: 201 });
    } catch (error) {
        console.error("Error saving visit:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
