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
      <script
        defer
        src="https://umi.gokay.works/script.js"
        data-website-id="b4bdcc6b-e75d-46d5-af4b-088663966012"
      ></script>
    </html>
  );
}
