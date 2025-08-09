import { Outlet } from "react-router";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Layout() {
    useScrollToTop();
    return (
        <div className={`min-h-screen bg-[#0A0A0A] text-white`}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}