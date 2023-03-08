import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Next Turbo App",
  description: "Supermomo turbo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="h-[100vh] bg-no-repeat bg-gradient-to-br from-secondary-yellow to-primary-purple"> */}
      <body
        className={" bg-no-repeat font-normal " + inter.className}
        style={{
          background: "linear-gradient(138.11deg, #FEF452 0%, #942F70 121.92%)",
        }}
      >
        <div className="mx-28">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
