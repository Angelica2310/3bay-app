import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
export const metadata = {
  title: "3Bay",
  description: "3D product marketplace",
  icons: "logo.png",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NavBar>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </NavBar>

          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
