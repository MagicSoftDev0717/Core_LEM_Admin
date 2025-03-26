import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { Prisma } from "@prisma/client";
import { Lead } from "@prisma/client";

let lead_data: Lead[] = []; // Array of Lead model objects


export async function GET(req: Request) {
  try {
    // Extract page number from query parameters (default to 1 if not provided)
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const itemsPerPage = parseInt(url.searchParams.get("items") || "5");
    const searchName = url.searchParams.get("searchQuery") || "";
    const selectedLdSts = url.searchParams.get("selectedLdSts") || "All";
    const dateOfStart = url.searchParams.get("dateOfStart") || "";
    const dateOfEnd= url.searchParams.get("dateOfEnd") || "";
    //const skip = (page - 1) * itemsPerPage;

    // Fetch messages with pagination and order by date descending
    //let whereCondition: any = {}; // Initialize an empty filter object
    const whereCondition: Prisma.LeadWhereInput = {}; 
    // Apply filters based on searchName and selectedLdSts conditions
    if (searchName !== "") {
      whereCondition.OR = [
        { fname: { contains: searchName } },
        { lname: { contains: searchName } },
      ];
    }

    if (selectedLdSts !== "All") {
      whereCondition.status = selectedLdSts;
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

    lead_data = await prisma.lead.findMany({
      orderBy: { updatedAt: "desc" },
      take: page * itemsPerPage,
      where: whereCondition,
    });



    // if (searchName === "" && selectedLdSts === "All") {
    //   lead_data = await prisma.lead.findMany({
    //     orderBy: { updatedAt: "desc" },
    //     // skip,
    //     take: page * itemsPerPage,
    //   });
    // }
    // else if (searchName !== "" && selectedLdSts === "All") {
    //   lead_data = await prisma.lead.findMany({
    //     orderBy: { updatedAt: "desc" },
    //     // skip,
    //     take: page * itemsPerPage,
    //     where: {
    //       OR: [
    //         { fname: { contains: searchName } },
    //         { lname: { contains: searchName } }
    //       ],
    //     },
    //   });
    // }
    // else if (searchName === "" && selectedLdSts !== "All") {
    //   lead_data = await prisma.lead.findMany({
    //     orderBy: { updatedAt: "desc" },
    //     // skip,
    //     take: page * itemsPerPage,
    //     where: { status: selectedLdSts },
    //   });
    // }
    // else if (searchName !== "" && selectedLdSts !== "All") {
    //   lead_data = await prisma.lead.findMany({
    //     orderBy: { updatedAt: "desc" },
    //     // skip,
    //     take: page * itemsPerPage,
    //     where: whereCondition,
    //   });
    // }





    // Get the total count of messages for calculating the number of pages
    const totalLead = await prisma.lead.count({ where: whereCondition });

    return NextResponse.json({ lead_data, totalLead });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fname, lname, email, mobile, status } = body;

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
    const newLead = await prisma.lead.create({
      data: { fname, lname, email, mobile, status },
    });

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}