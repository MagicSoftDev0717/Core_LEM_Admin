import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { Prisma } from "@prisma/client";
import { School } from "@prisma/client";

let school_data: School[] = []; // Array of Lead model objects


export async function GET(req: Request) {
  try {
    // Extract page number from query parameters (default to 1 if not provided)
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const itemsPerPage = parseInt(url.searchParams.get("items") || "5");
    // const searchName = url.searchParams.get("searchQuery") || "";
    const selectedLvl = url.searchParams.get("selectedLvl") || "all";
    const selectedType = url.searchParams.get("selectedType") || "all";
    // const selectedYear = url.searchParams.get("selectedYear") || "all";
    // const dateOfStart = url.searchParams.get("dateOfStart") || "";
    // const dateOfEnd= url.searchParams.get("dateOfEnd") || "";
    //const skip = (page - 1) * itemsPerPage;

    // Fetch messages with pagination and order by date descending
    //let whereCondition: any = {}; // Initialize an empty filter object
    const whereCondition: Prisma.SchoolWhereInput = {}; 
    // Apply filters based on searchName and selectedLdSts conditions
    // if (searchName !== "") {
    //   whereCondition.OR = [
    //     { fname: { contains: searchName } },
    //     { lname: { contains: searchName } },
    //   ];
    // }

    if (selectedLvl !== "all") {
      whereCondition.level = selectedLvl;
    }

    if (selectedType !== "all") {
        whereCondition.type = selectedType;
      }

    // if (selectedYear !== "all") {
    //   whereCondition.year = Number(selectedYear);
    // }


    // if (dateOfStart !== "") {
    //   const startDate = new Date(dateOfStart); // Convert input to Date object
    //   const nextDay = new Date(startDate);
    //   nextDay.setDate(nextDay.getDate() + 1);
    //   whereCondition.updatedAt = {
    //     gte: nextDay, // Get records where updatedAt is GREATER THAN or EQUAL TO dateOfStart
    //   };
    // }

    // if (dateOfEnd !== "") {
    //   const endDate = new Date(dateOfEnd); // Convert input to Date object
    //   const oldDay = new Date(endDate);
    //   oldDay.setDate(oldDay.getDate() + 1);
    //   whereCondition.updatedAt = {
    //     lte: oldDay, // Get records where updatedAt is GREATER THAN or EQUAL TO dateOfStart
    //   };
    // }

    school_data = await prisma.school.findMany({
      orderBy: { updatedAt: "desc" },
      take: page * itemsPerPage,
      where: whereCondition,
    });


    // Get the total count of messages for calculating the number of pages
    const totalSchool = await prisma.school.count({ where: whereCondition });
    

    return NextResponse.json({ school_data, totalSchool });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

