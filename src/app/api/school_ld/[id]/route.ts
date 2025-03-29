import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const body = await req.json();

  try {
    const updatedSchool = await prisma.school.update({
      where: { id: Number(id) },
      data: { sname: body.sname, level: body.level, type: body.type, enroll: body.enroll,
         email: body.email,  site: body.site, area: body.area, postalCode: Number(body.postalCode) },
    });
    return NextResponse.json(updatedSchool);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update School", details: error }, { status: 500 });
  }
}

