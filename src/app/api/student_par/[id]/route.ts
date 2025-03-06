import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Student } from "@prisma/client";

let student_data: Student[] = []; // Array of Lead model objects


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
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const itemsPerPage = parseInt(url.searchParams.get("items") || "5");
   
     student_data = await prisma.student.findMany({
      take: page * itemsPerPage,
      where: { id: Number(id) },
    });
    const totalStu = await prisma.student.count({ where: {id: Number(id)} });
    
    return NextResponse.json( {student_data, totalStu} );
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
