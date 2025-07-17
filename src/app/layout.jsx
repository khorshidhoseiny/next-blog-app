import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import vazirFont from "@/constants/LocalFont";
import AuthProvider from "@/context/AuthContext";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";

export const metadata = {
  title: "Blog Next Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.variable} font-sans min-h-screen `}
        cz-shortcut-listen="true"
      >
        <Toaster />
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
