import type { Metadata } from 'next';
import clsx from 'clsx';

import { BLOG_TITLE, LIGHT_TOKENS, DARK_TOKENS } from '@/lib/constants';

import './globals.css';

export const metadata = {
  title: BLOG_TITLE,
  description: "A blog about what I've learned through my Biblical studies",
};

// An MDX style blog
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = 'light';

  return (
    <html
      lang='en'
      data-color-theme={theme}
      style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
