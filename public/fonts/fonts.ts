import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';

// for everything other than code blocks
export const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});

// for code blocks
export const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});
