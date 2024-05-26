import React, { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreemClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UniteMeet",
  description: "Video Calling App.",
};



const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
