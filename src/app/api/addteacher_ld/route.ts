import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// import { Prisma } from "@prisma/client";
// import { Teacher } from "@prisma/client";

// let teacher_data: Teacher[] = []; // Array of Lead model objects


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fname, lname, gender, email, mobile, status, academicY, curStu } = body;

    // Validate input
    // if (!name || !email || !mobile || !lead) {
    //     return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    // }

    //Check if email already exists
    // const existingLead = await prisma.lead.findUnique({
    //   where: { email },
    // });

    // if (existingLead) {
    //   return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    // }

    // Save new lead in the database
    const newTeacher = await prisma.teacher.create({
      data: { fname, lname, gender, email, mobile, status, academicY, curStu},
    });

    return NextResponse.json({ success: true, teacher: newTeacher }, { status: 201 });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}