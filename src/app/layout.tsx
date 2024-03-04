import type { Metadata } from 'next';
import clsx from 'clsx';

import { BLOG_TITLE, LIGHT_TOKENS, DARK_TOKENS } from '@/lib/constants';
import { mainFont, monoFont } from '../../public/fonts/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: "A blog about what I've learned through my Biblical studies",
  authors: [
    { name: 'Daniel Arzanipour', url: 'https://github.com/DanielArzani' },
  ],
  openGraph: {
    title: 'Your Page Title',
    description: 'Brief description',
    images: '/some-image.png',
    url: '/this-page.html',
    siteName: 'Your Site Name',
  },
  twitter: {
    card: 'summary_large_image',
    images: 'Image description',
  },
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
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body
        style={{
          background: 'var(--color-lightGrey)',
        }}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
