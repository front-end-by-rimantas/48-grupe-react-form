import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export function NotFound() {
    return (
        <>
            <Header />
            <main>
                <h1>Page not found</h1>
                <h2>Find your way home ;)</h2>
            </main>
            <Footer />
        </>
    );
}