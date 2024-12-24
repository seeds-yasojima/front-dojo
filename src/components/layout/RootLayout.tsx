import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto]">
      <Header />
      <main className="bg-slate-50">
        <div className="container mx-auto py-6 px-4 sm:px-0">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
