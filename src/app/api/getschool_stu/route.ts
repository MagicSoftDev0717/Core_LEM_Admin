
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
      const url = new URL(req.url);
      const level = url.searchParams.get("level"); // "primary" or "secondary"
  
      if (!level) {
        return NextResponse.json({ error: "Level is required" }, { status: 400 });
      }
  
      // Fetch schools based on level
      const schools = await prisma.school.findMany({
        where: { level }, // Fetch schools with the specified level
        select: { id: true, sname: true }, // Only return id and name
      });
  
      return NextResponse.json({ schools });
    } catch (error) {
      console.error("Error fetching schools:", error);
      return NextResponse.json({ error: "Failed to fetch schools" }, { status: 500 });
    }
  }
  