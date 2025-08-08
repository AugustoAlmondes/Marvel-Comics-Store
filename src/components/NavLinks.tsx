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
        },
        {
            name: "Shopping car",
            path: "#shopping-car",
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: .5 }}
            className={`flex items-center space-x-10 text-[12px] md:text-sm`}>
            {links.map((link, index) => (
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    key={index} href={link.path} className={`hover:text-white transition-colors`}>
                    {link.name}
                </motion.a>
            ))}
        </motion.div>
    );
};