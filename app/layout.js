import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "CYON ADC Website",
  description:
    "Catholic Youth Organisation of Nigeria [CYON] Archdiocese of Lagos",
  applicationName: "CYON ADC",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CYON ADC",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export const viewport = {
  themeColor: "#CFB471",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
