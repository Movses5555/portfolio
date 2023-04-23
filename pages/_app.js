import "@/styles/globals.scss";
import "animate.css";
import { ThemeProvider } from "@/theme/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
