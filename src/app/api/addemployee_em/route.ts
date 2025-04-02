import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { Prisma } from "@prisma/client";
import { Employee } from "@prisma/client";

let employee_data: Employee[] = []; // Array of Lead model objects


export async function GET(req: Request) {
  try {
   
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const itemsPerPage = parseInt(url.searchParams.get("items") || "5");
    const selectedRole = url.searchParams.get("selectedRole") || "all";
    const selectedPriCen = url.searchParams.get("selectedPriCen") || "all";
    const selectedSts = url.searchParams.get("selectedSts") || "all";
    const dateOfHire = url.searchParams.get("dateOfHire") || "";
    const sort = url.searchParams.get("sort") || "createdAt"; // Default sorting by createdAt
    const direction = url.searchParams.get("direction") === "desc" ? "desc" : "asc";


    // Fetch messages with pagination and order by date descending

    const whereCondition: Prisma.EmployeeWhereInput = {};

    if (selectedSts !== "all") {
      whereCondition.e_status = selectedSts;
    }

    if (selectedRole !== "all") {
      whereCondition.e_role = selectedRole;
    }

    if (selectedPriCen !== "all") {
      whereCondition.e_pricen = selectedPriCen;
    }

    if (dateOfHire !== "") {
      // const hireDate = new Date(dateOfHire); // Convert input to Date object
      // const nextDay = new Date(hireDate);
      // nextDay.setDate(nextDay.getDate() + 1);
      whereCondition.e_hiredate = dateOfHire;
    }

    // if (dateOfEnd !== "") {
    //   const endDate = new Date(dateOfEnd); // Convert input to Date object
    //   const oldDay = new Date(endDate);
    //   oldDay.setDate(oldDay.getDate() + 1);
    //   whereCondition.updatedAt = {
    //     lte: oldDay, // Get records where updatedAt is GREATER THAN or EQUAL TO dateOfStart
    //   };
    // }

    employee_data = await prisma.employee.findMany({
      //  orderBy: { updatedAt: "desc" },
      orderBy: { [sort]: direction },
      take: page * itemsPerPage,
      where: whereCondition,
    });

    const totalEmp = await prisma.employee.count({ where: whereCondition });

    return NextResponse.json({ employee_data, totalEmp });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fname, lname, gender, birth, email, mobile, e_title, e_manager, e_type, 
            e_hiredate, e_status, e_role, e_pricen, e_bgcheck, address1, address2, city, 
            county, country, postalCode, descript
      } = body;

    // Validate input
    // if (!fname || !email || !mobile) {
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
    const newEmployee = await prisma.employee.create({
      data: {
        fname, lname, gender, birth, email, mobile, e_title, e_manager, e_type, 
        e_hiredate, e_bgcheck, address1, address2, city, county, country, 
        postalCode: postalCode ? parseInt(postalCode, 10) : null,
        e_status, e_role, e_pricen, descript
      },
    });

    return NextResponse.json({ success: true, employee: newEmployee }, { status: 201 });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}