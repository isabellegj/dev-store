import { Inter } from "next/font/google";
import { GlobalStateProvider } from "../context/GlobalStateContext";
import Head from "next/head";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Store",
  description:
    "Desafio Dev Store para vaga de Dev Front-end Júnior na Sorte Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <GlobalStateProvider>
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </GlobalStateProvider>
      </body>
    </html>
  );
}
