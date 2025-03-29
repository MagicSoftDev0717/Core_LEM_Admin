import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { Prisma } from "@prisma/client";
import { Comcon } from "@prisma/client";

// let comcon_data: Comcon[] = []; // Array of Lead model objects


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fname, lname, institution, role, email, mobile, descrip } = body;

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
    const newComcon = await prisma.comcon.create({
      data: { fname, lname, institution, role,  email, mobile, descrip},
    });

    return NextResponse.json({ success: true, comcon: newComcon }, { status: 201 });
  } catch (error) {
    console.error("Error saving contract:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}