import { FiShoppingCart } from "react-icons/fi";
import { motion } from 'motion/react'
export default function NavLinks() {

    const links = [
        {
            name: "Home",
            path: "#home"
        },
        {
            name: "About",
            path: "#about"
        },
        {
            name: "Contact",
            path: "#contact"
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: .5 }}
            className={`flex items-center space-x-10`}>
            {links.map((link, index) => (
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    key={index} href={link.path} className="hover:text-white transition-colors">
                    {link.name}
                </motion.a>
            ))}
            <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + 3 * 0.1 }}
                href='#' className="flex items-center hover:text-white transition-colors">
                <FiShoppingCart size={26} className="mr-1" />
            </motion.a>
        </motion.div>
    );
};