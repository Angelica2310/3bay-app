import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "3Bay",
  description: "3D product marketplace",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="h-screen w-screen flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
