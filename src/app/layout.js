import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { GlobalProvider } from "./GlobalProvider";
export const metadata = {
  title: "3Bay",
  description: "3D product marketplace",
  icons: "logo.png",
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
          <GlobalProvider>
            <NavBar />
            {children}
            <Footer />
          </GlobalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
