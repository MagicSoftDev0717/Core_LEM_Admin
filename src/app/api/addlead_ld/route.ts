import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
      // Extract page number from query parameters (default to 1 if not provided)
      const url = new URL(req.url);
      const page = parseInt(url.searchParams.get("page") || "1");
      const itemsPerPage = parseInt(url.searchParams.get("items") || "5");
      const skip = (page - 1) * itemsPerPage;
  
      // Fetch messages with pagination and order by date descending
      const lead_data = await prisma.lead.findMany({
        orderBy: { updatedAt: "desc" },
        skip,
        take: itemsPerPage,
      });
  
      // Get the total count of messages for calculating the number of pages
      const totalLead = await prisma.lead.count();
  
      return NextResponse.json({ lead_data, totalLead });
    } catch (error) {
      console.error("Error fetching messages:", error);
      return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }
  }

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {fname, lname, email, mobile, status } = body;

        // Validate input
        // if (!name || !email || !mobile || !lead) {
        //     return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        // }

        //Check if email already exists
        const existingLead = await prisma.lead.findUnique({
            where: { email },
        });

        if (existingLead) {
            return NextResponse.json({ message: "Email already exists" }, { status: 400 });
        }

        // Save new lead in the database
        const newLead = await prisma.lead.create({
            data: {fname, lname, email, mobile, status},
        });

        return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
    } catch (error) {
        console.error("Error saving lead:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}