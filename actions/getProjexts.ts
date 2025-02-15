"use server";

import prisma from "@/lib/db";

const getProjects = async () => {
  try {
    const res = await prisma.project.findMany({
      take: 6
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default async function handler() {
  const res = await getProjects();
  return res;
}
