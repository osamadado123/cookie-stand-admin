"use client";
import './globals.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeWrapper from "./contexts/theme";
import { AuthWrapper } from './contexts/auth';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <AuthWrapper>
      <ThemeWrapper>
      <body class="bg-gray-400 font-sans leading-normal tracking-normal">
        <Header />
        {children}
        <Footer />
      </body>
      </ThemeWrapper>
      </AuthWrapper>
    </html>
  );
}
