// app/fonts.ts    (or lib/fonts.ts, ui/fonts.ts – anywhere you like)
import { Inter, Roboto, Poppins, Amiri } from 'next/font/google';

// Primary font (e.g. headings + body)
export const inter = Amiri({
  subsets: ['latin'],
  display: 'swap',           // prevents invisible text (FOIT)
  variable: '--font-Amiri',  // optional – useful with Tailwind or CSS variables
  weight: ['400', '700'],
  
  });

// Secondary font (e.g. code blocks, quotes)
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
});