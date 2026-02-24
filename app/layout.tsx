import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import "./globals.css";
import { inter, roboto } from './fonts';           // ← import here

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={`${inter.className} antialiased`}>
      
        {children}
      </body>
    </html>
  );
}
