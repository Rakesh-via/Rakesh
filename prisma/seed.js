import { PrismaClient } from '@prisma/client';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

const books = [
  {
    title: "India After Gandhi",
    author: "Ramachandra Guha",
    description: "A comprehensive history of India since its independence in 1947, covering the political, social, and cultural transformations of the world's largest democracy.",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    year: 2007,
    pages: 900
  },
  {
    title: "The Great Partition",
    author: "Yasmin Khan",
    description: "An authoritative account of the partition of India in 1947, examining the human tragedy and political upheaval that accompanied independence.",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    year: 2007,
    pages: 272
  },
  {
    title: "Early India",
    author: "Romila Thapar",
    description: " magisterial survey of Indian history from the earliest times to the end of the first millennium AD, by one of India's foremost historians.",
    imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=400&h=600&fit=crop",
    year: 2002,
    pages: 560
  },
  {
    title: "The Argumentative Indian",
    author: "Amartya Sen",
    description: "A collection of essays exploring India's intellectual heritage and its tradition of public reasoning and pluralistic dialogue.",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    year: 2005,
    pages: 409
  },
  {
    title: "The Wonder That Was India",
    author: "A.L. Basham",
    description: "A classic study of ancient Indian civilization, covering the Vedic period to the coming of the Muslims, with rich detail on culture and society.",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    year: 1954,
    pages: 568
  },
  {
    title: "Mughal Empire",
    author: "John F. Richards",
    description: "A comprehensive history of the Mughal dynasty that ruled India from 1526 to 1857, examining its political, military, and cultural achievements.",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
    year: 1993,
    pages: 340
  },
  {
    title: "India: A History",
    author: "John Keay",
    description: "A sweeping narrative of Indian history from the Indus Valley civilization to the nuclear age, capturing the subcontinent's complexity and diversity.",
    imageUrl: "https://images.unsplash.com/photo-1507842217121-ad66185f9118?w=400&h=600&fit=crop",
    year: 2000,
    pages: 608
  },
  {
    title: "The Last Mughal",
    author: "William Dalrymple",
    description: "A gripping account of the fall of Delhi in 1857, focusing on Zafar, the last Mughal emperor, and the tragic end of a dynasty.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    year: 2006,
    pages: 580
  },
  {
    title: "The Discovery of India",
    author: "Jawaharlal Nehru",
    description: "Written during imprisonment, this is Nehru's personal and intellectual exploration of India's history, culture, and identity.",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    year: 1946,
    pages: 656
  },
  {
    title: "The Emperor's Writings",
    author: "Mukund R. Kulkarni",
    description: "An examination of Akbar the Great's administrative reforms and his vision for a pluralistic empire in medieval India.",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    year: 2012,
    pages: 320
  }
];

try {
  await prisma.book.createMany({
    data: books,
    skipDuplicates: true,
  });
  console.log('✅ Seeded 10 Indian history books successfully');
} catch (error) {
  console.error('❌ Error seeding books:', error);
} finally {
  await prisma.$disconnect();
}