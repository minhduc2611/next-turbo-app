import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../components/Toast";
import "./globals.css";
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
      <body
        className={"min-h-[100vh] bg-no-repeat font-normal " + inter.className}
        style={{
          background: "linear-gradient(138.11deg, #FEF452 0%, #942F70 121.92%)",
        }}
      >
        <div className="mx-8 lg:mx-28">
          <Header />
          {children}
          <Toast />
        </div>
      </body>
    </html>
  );
}
