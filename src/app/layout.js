import localFont from "next/font/local";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import ReduxProvider from "./store/ReduxProvider";
import BackToTop from "@/component/BackToTop";
import { Toaster } from "react-hot-toast";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {

    title: {
       default: "SkillHive",
     template: "SkillHive | %s",
    absolute:'',
  },
  description: "SkillHive - Hire skilled professionals",
  keywords: [
    "SkillHive",
    "Hire skilled professionals",
    "Hire skilled professionals",
    "Hire skilled professionals",
  ]
  
};

export default function RootLayout({ children }) {
  return (
  <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       
        <ReduxProvider>
           <Header/>
             <Toaster position="top-center" reverseOrder={false} />
          {children}
          <BackToTop/>
          <Footer/>
        </ReduxProvider> 
       
      </body>
    </html>
  
  );
}
