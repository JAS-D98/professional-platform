import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProfessional = async (req, res) => {
  try {
    const { userId, bio, category, location } = req.body;
    const professional = await prisma.professional.create({
      data: { userId, bio, category, location },
    });
    res.status(201).json(professional);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllProfessionals = async (_, res) => {
  try {
    const professionals = await prisma.professional.findMany({
      include: { user: true, reviews: true },
    });
    res.json(professionals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProfessionalById = async (req, res) => {
  try {
    const { id } = req.params;
    const professional = await prisma.professional.findUnique({
      where: { id },
      include: { user: true, reviews: true },
    });
    if (!professional) {
      return res.status(404).json({ error: "Professional not found" });
    }
    res.json(professional);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
