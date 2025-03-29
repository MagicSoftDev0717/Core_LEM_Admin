import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id }  = await params; // Convert id to number
  try {
    // Fetch messages with pagination and order by date descending
    const teacher_data = await prisma.teacher.findUnique({
      where: { id: Number(id) },
    });

    if (!teacher_data) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json({teacher_data: teacher_data});
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
