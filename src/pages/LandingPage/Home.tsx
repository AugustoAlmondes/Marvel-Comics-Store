import About from "./About";
import BestProducts from "./BestProducts";
import Welcome from "./Welcome";
import { Bounce, ToastContainer } from 'react-toastify';

export default function Home() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
            <Welcome />
            <BestProducts />
            <About />
        </>
    );
}