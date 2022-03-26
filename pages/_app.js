import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="md:flex justify-start bg-bgColor">
                <NavBar />
            </div>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
