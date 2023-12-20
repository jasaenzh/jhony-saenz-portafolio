import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-red-300 mx-6 mt-16 flex-1 h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export { Layout };
