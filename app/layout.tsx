import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { PostHogProvider } from "./providers"
import './globals.css'
 const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: 'أحمد منصور | مطور برمجيات وواجهة المستخدم',
  description: 'مرحبًا، أنا أحمد منصور. مطور برمجيات متخصص في React وNext.js. استعرض مشاريعي وتواصل معي.',
  keywords: ['أحمد منصور', 'مطور برمجيات', 'React', 'Next.js', 'تطوير ويب', 'واجهة المستخدم'],
  openGraph: {
    title: 'أحمد منصور | مطور برمجيات وواجهة المستخدم',
    description: 'استعرض أحدث مشاريعي في تطوير الويب والتطبيقات.',
    url: 'https://my-website-7.vercel.app/',
    siteName: 'موقع أحمد منصور',
    images: [
      {
        url: 'position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:cover;color:transparent',
        width: 1200,
        height: 630,
        alt: 'صورة لموقع أحمد منصور',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أحمد منصور | مطور برمجيات وواجهة المستخدم',
    description: 'استعرض أحدث مشاريعي في تطوير الويب والتطبيقات.',
    images: ['https://my-website-7.vercel.app/twitter-image.jpg'],
    creator: '@ahmed_mansour',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <PostHogProvider>
        <Navbar />
        {children}
        <Footer/>
        </PostHogProvider>
      </body>
    </html>
  )
}




