
import "./globals.css";
import Providers from "./components/Providers";
import Header from "./components/Header";

export const metadata = {
  title: "Next-Auth demo",
  description: "by roman",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <Providers>
        <div className="min-h-full">
          <Header />
          {children}
        </div>
          
        </Providers>
      </body>
    </html>
  );
}