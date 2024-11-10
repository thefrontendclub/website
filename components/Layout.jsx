import { motion } from "framer-motion";
import DarkModeButton from "./DarkModeButton";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import BottomNavBar from "./BottomNavBar";
import { useEffect, useState } from "react";

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, darkMode, onClick, header, animate }) => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(window.innerWidth <= 480);
	}, []);

	return (
		<div className="max-w-[1280px] w-full min-h-screen h-max m-auto relative">
			<Header header={header} />
			{animate ? (
				<motion.main
					initial="hidden"
					animate="enter"
					exit="exit"
					variants={variants}
					transition={{ type: "linear", duration: 0.8 }}>
					{children}
				</motion.main>
			) : (
				children
			)}
			<footer className="text-xl w-full text-center absolute bottom-[48px] md:bottom-[20px] pointer-events-none">
				©{new Date().getFullYear()} {header.name}. All Rights Reserved.
			</footer>
			<ScrollToTop />
      <DarkModeButton darkMode={darkMode} onClick={onClick} />
      {isMobile && <BottomNavBar />}
		</div>
	);
};

export default Layout;
