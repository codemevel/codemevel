import type { Metadata } from 'next';
import { Viewport } from 'next';

import { Raleway } from 'next/font/google';
import './globals.css';

const railway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
export const metadata: Metadata = {
  title: 'CodeMevel - Building Trust through Exceptional Web Development',
  description:
    'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites. ',
  openGraph: {
    images: [
      {
        url: 'https://codemevel.com/og.png',
      },
    ],
    type: 'website',
    url: 'https://codemevel.com',
    title: 'CodeMevel - Building Trust through Exceptional Web Development',
    description:
      'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites. ',
  },
  twitter: {
    creator: 'codemevel',
    creatorId: '@codemevel',
    site: 'https://codemevel.com',
    card: 'summary_large_image',
    title: 'CodeMevel - Building Trust through Exceptional Web Development',
    description:
      'Explore the experiences of our satisfied clients and their journey with CodeMevel. Trust our expertise in crafting websites. ',
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={railway.className}>{children}</body>
    </html>
  );
}
