import { dbConnect } from "@/db/connectDB";
import { Poppins } from "next/font/google";
import image from "../public/cover.png";
import Navbar from "./components/Navbar";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Khana Khazana - Home",
  description: "An application to serve food.",
  openGraph: {
    images: [image],
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
