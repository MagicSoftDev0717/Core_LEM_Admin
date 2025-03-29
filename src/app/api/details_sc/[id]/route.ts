import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id }  = await params; 
  try {
 
    const school_data = await prisma.school.findUnique({
      where: { id: Number(id) },
    });

    if (!school_data) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    return NextResponse.json({school_data: school_data});
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
