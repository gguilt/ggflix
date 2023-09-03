import { Metadata } from "next";
import { Providers } from "./providers";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Soleil",
  description: "TV Show Search App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
