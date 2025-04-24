import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Hydration from "./components/Hydration";
import Header from "./components/Header";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MyGoalFitness",
  description: "fitness coach",
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
