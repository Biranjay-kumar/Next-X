import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import News from "@/components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X-colne",
  description: "Front End next Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">
          <div>
            <SideBar />
          </div>
          <div>{children}</div>
          <div className="shadow-xl lg:flex-col h-screen hidden lg:flex w-[21rem]">
            <div className="sticky top-0 bg-white py-2">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-200 text-sm w-full p-1 rounded-lg bg-gray-100"
              ></input>
            </div>
            <News />
          </div>
        </div>
      </body>
    </html>
  );
}
