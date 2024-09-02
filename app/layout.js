import "./globals.css";
import Lenis from "./lenis"

export const metadata = {
  title: "YogaS7",
  description: "YogaS7 studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Lenis>
          {children}
        </Lenis>
      </body>
    </html>
  );
}
