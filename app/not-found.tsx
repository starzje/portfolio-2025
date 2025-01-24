"use client";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-grow flex-col items-center justify-center bg-slate-800 ">
        <h1 className="text-4xl font-bold text-gray-300 mb-4">Oops!</h1>
        <p className="text-lg text-gray-400 mb-6">We couldn't find the page you were looking for.</p>
        <Link
          href="/"
          className="
        
        btn text-white bg-gradient-to-t from-blue-900 to-blue-700 hover:to-blue-800 rounded-lg w-full shadow-lg         ">
          Go back to Home page
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
