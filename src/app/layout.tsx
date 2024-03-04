import type { Metadata } from 'next';

import { BLOG_TITLE, LIGHT_TOKENS, DARK_TOKENS } from '@/lib/constants';
import { mainFont } from '../../public/fonts/fonts';

import './globals.css';

export const metadata: Metadata = {
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
      <body
        style={{
          background: 'var(--color-lightGrey)',
          fontFamily: mainFont.className,
        }}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
