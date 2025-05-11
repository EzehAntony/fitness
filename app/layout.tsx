import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Hydration from "./components/Hydration";
import Header from "./components/Header";
import siteContent from "./data/siteContent";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteContent.general.title,
  description: `Professional Fitness Training and Wellness Coaching by ${siteContent.general.title}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>
        <Hydration>
          <Header />
          {children}
        </Hydration>
      </body>
    </html>
  );
}
