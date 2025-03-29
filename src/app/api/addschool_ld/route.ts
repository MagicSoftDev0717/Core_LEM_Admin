import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { Prisma } from "@prisma/client";
import { School } from "@prisma/client";

let school_data: School[] = []; // Array of Lead model objects


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sname, level, type, enroll, site, email, area, number_s, postalCode } = body;

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
    const newSchool = await prisma.school.create({
      data: { sname, level, type, enroll, site, email, area, 
        number_s: number_s ? parseInt(number_s, 10) : null,
        postalCode: postalCode ? parseInt(postalCode, 10) : null,
        },
    });

    return NextResponse.json({ success: true, school: newSchool }, { status: 201 });
  } catch (error) {
    console.error("Error saving School:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}