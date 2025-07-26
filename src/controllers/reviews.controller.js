import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createReview = async (req, res) => {
  try {
    const { rating, comment, reviewerId, professionalId } = req.body;

    const review = await prisma.review.create({
      data: { rating, comment, reviewerId, professionalId },
    });

    const reviews = await prisma.review.findMany({
      where: { professionalId },
    });

    const avg =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    await prisma.professional.update({
      where: { id: professionalId },
      data: { rating: avg },
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllReviews = async (_, res) => {
  try {
    const reviews = await prisma.review.findMany({
      include: { reviewer: true, professional: true },
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
