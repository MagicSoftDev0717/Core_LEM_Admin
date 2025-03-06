import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const body = await req.json();

  try {
    const updatedStu = await prisma.student.update({
      where: { id: Number(id) },
      data: { fname: body.fname, lname: body.lname, 
              gender: body.gender, year: body.year, 
              schoolYear: body.schoolYear, school: body.school,
              teacher: body.teacher },
    });
    return NextResponse.json(updatedStu);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update Lead", details: error }, { status: 500 });
  }
}


// Handle DELETE request to remove a student
export async function DELETE(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  try {
    await prisma.student.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: "One Student removed" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete Student", details: error }, { status: 500 });
  }
}


export async function GET(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  try {
   
    const students = await prisma.student.findMany({
      where: { parent_id: Number(id) },
    });

  
    return NextResponse.json(students);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}


