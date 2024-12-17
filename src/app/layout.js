import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
export const metadata = {
  title: "3Bay",
  description: "3D product marketplace",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#127475",
          colorText: "black",
        },
      }}
    >
      <html lang="en">
        <body className="h-screen w-screen flex flex-col">
          <NavBar />

          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
