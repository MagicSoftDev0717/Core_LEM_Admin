import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// import { Student } from "@prisma/client";

// let student_data: Student[] = []; // Array of Lead model objects

export async function GET(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  //   const url = new URL(req.url);
  //   const page = Number(url.searchParams.get("page")) || null;
  //   const itemsPerPage = Number(url.searchParams.get("items")) || null;
  try {
    // if (page && itemsPerPage ) {

    //   student_data = await prisma.student.findMany({
    //     take: page * itemsPerPage,
    //     where: { id: Number(id) },
    //   });
    //   const totalStu = await prisma.student.count({ where: { id: Number(id) } });

    //   return NextResponse.json({ student_data, totalStu });
    // }
    // else {
    const visits = await prisma.schoolVisit.findMany({
      where: { school_id: Number(id) }
    });

    return NextResponse.json(visits);
  }
  catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
