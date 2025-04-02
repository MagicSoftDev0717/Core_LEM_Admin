import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { Prisma } from "@prisma/client";
import { Student } from "@prisma/client";

let student_data: Student[] = []; // Array of Lead model objects


export async function GET(req: Request) {
  try {
    // Extract page number from query parameters (default to 1 if not provided)
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const itemsPerPage = parseInt(url.searchParams.get("items") || "5");
    const searchName = url.searchParams.get("searchQuery") || "";
    const dateOfStart = url.searchParams.get("dateOfStart") || "";
    const dateOfEnd = url.searchParams.get("dateOfEnd") || "";

    const sort = url.searchParams.get("sort") || "createdAt"; // Default sorting by createdAt
    const direction = url.searchParams.get("direction") === "desc" ? "desc" : "asc";


    // Fetch messages with pagination and order by date descending

    const whereCondition: Prisma.StudentWhereInput = {};

    // Apply filters based on searchName and selectedLdSts conditions
    if (searchName !== "") {
      whereCondition.OR = [
        { fname: { contains: searchName } },
        { lname: { contains: searchName } },
      ];
    }

    if (dateOfStart !== "") {
      const startDate = new Date(dateOfStart); // Convert input to Date object
      const nextDay = new Date(startDate);
      nextDay.setDate(nextDay.getDate() + 1);
      whereCondition.updatedAt = {
        gte: nextDay, // Get records where updatedAt is GREATER THAN or EQUAL TO dateOfStart
      };
    }

    if (dateOfEnd !== "") {
      const endDate = new Date(dateOfEnd); // Convert input to Date object
      const oldDay = new Date(endDate);
      oldDay.setDate(oldDay.getDate() + 1);
      whereCondition.updatedAt = {
        lte: oldDay, // Get records where updatedAt is GREATER THAN or EQUAL TO dateOfStart
      };
    }

    student_data = await prisma.student.findMany({
      // orderBy: { updatedAt: "desc" },
      orderBy: { [sort]: direction },
      take: page * itemsPerPage,
      where: whereCondition,
    });

    // Get the total count of students for calculating the number of pages
    const totalStu = await prisma.student.count({ where: whereCondition });

    return NextResponse.json({ student_data, totalStu });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fname, lname, gender, birth, pguardian,
      a_pschool, a_sschool, a_yeargrp, a_ies,
      a_ims, l_startdate, parent_id } = body;

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
    const newStudent = await prisma.student.create({
      data: {
        fname, lname, gender, birth,
        pguardian, a_pschool, a_sschool,
        a_yeargrp, a_ies, a_ims, l_startdate, parent_id
      },
    });

    return NextResponse.json({ success: true, student: newStudent }, { status: 201 });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}