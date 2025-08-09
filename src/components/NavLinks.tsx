import { motion } from 'motion/react'
import { Link } from 'react-router';
export default function NavLinks() {

    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Products",
            path: "/products"
        },
        {
            name: "Cart",
            path: "/cart",
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: .5 }}
            className={`flex items-center space-x-10 text-[12px] md:text-sm`}>
            {links.map((link, index) => (
                <Link key={index} to={link.path}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        key={index} className={`hover:text-white transition-colors`}>
                        {link.name}
                    </motion.p>
                </Link>
            ))}
        </motion.div>
    );
};