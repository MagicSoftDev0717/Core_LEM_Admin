import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET(req: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name }  = await params; // Convert id to number
  try {
    // Fetch messages with pagination and order by date descending
    const lead_data = await prisma.lead.findFirst({
      where: { lname: name },
    });

    if (!lead_data) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({lead_data: lead_data});
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
