import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id }  = await params; 
  try {
 
    const student_data = await prisma.student.findUnique({
      where: { id: Number(id) },
    });

    if (!student_data) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json({student_data: student_data});
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch Students" }, { status: 500 });
  }
}
