import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const body = await req.json();

  try {
    const updatedTeacher = await prisma.teacher.update({
      where: { id: Number(id) },
      data: { fname: body.fname, lname: body.lname, 
              email: body.email, mobile: body.mobile, 
              status: body.status, gender: body.gender,
              academicY: body.academic, curStu: body.curstu },
    });
    return NextResponse.json(updatedTeacher);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update Lead", details: error }, { status: 500 });
  }
}


// Handle DELETE request to remove a message
export async function DELETE(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  try {
    await prisma.lead.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: "One Lead removed" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete Lead", details: error }, { status: 500 });
  }
}
