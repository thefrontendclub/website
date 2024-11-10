import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SocialMedia = ({ socials }) => (
	<div className="flex justify-center items-center gap-4">
		<a
			className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
			href={socials.discord}
			title="Join Our Discord !"
			target="_blank"
			rel="noopener noreferrer">
			<FaDiscord className="w-8 h-8 md:w-12 md:h-12" size="3rem" />
		</a>
		<a
			className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
			href={socials.linkedin}
			title="Follow us on Linkedin"
			target="_blank"
			rel="noopener noreferrer">
			<AiFillLinkedin className="w-8 h-8 md:w-12 md:h-12" size="3rem" />
		</a>
		<a
			className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
			href={socials.twitter}
			title="Follow us on Twitter"
			target="_blank"
			rel="noopener noreferrer">
			<FaTwitter className="w-8 h-8 md:w-12 md:h-12" size="3rem" />
		</a>
		<a
			className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
			href={socials.whatsapp}
			title="Join our WhatsApp Community"
			target="_blank"
			rel="noopener noreferrer">
			<FaWhatsapp className="w-8 h-8 md:w-12 md:h-12" size="3rem" />
		</a>
		<a
			className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
			href={socials.instagram}
			title="Send directly an email"
			target="_blank"
			rel="noopener noreferrer">
			<CgInstagram className="w-8 h-8 md:w-12 md:h-12" size="3rem" />
		</a>
	</div>
);

const Header = ({ header }) => {
	const [isMobile, setIsMobile] = useState(false);
	const router = useRouter();
	useEffect(() => {
		setIsMobile(window.innerWidth <= 480);
	}, []);

	return (
		<header className="flex flex-row flex-auto justify-between py-8 px-4 sticky top-0 bg-bodyBgColor dark:bg-bodyBgColor-dark z-[21] items-center ">
			<div className="flex flex-row content-center text-[1.5rem] md:text-[2.5rem] font-bold font-title">
				<Link href="/">
					<div className="flex">
						<div className="hidden dark:block">
							<Image
								alt="logo"
								src="/logoWhite.svg"
								width={isMobile ? 30 : 40}
								height={isMobile ? 40 : 30}
							/>
						</div>
						<div className="dark:hidden">
							<Image
								alt="logo"
								src="/logoBlack.svg"
								width={isMobile ? 30 : 40}
								height={isMobile ? 40 : 30}
							/>
						</div>
						{!isMobile && <p className="ml-2">{header.userTag}</p>}
					</div>
				</Link>
			</div>
			{!isMobile && (
				<div className="flex gap-8 text-2xl md:text-3xl">
					<Link to="/" href="/">
						<span
							className={`${
								router.asPath === "/"
									? "text-primary dark:text-primary-dark"
									: "text-primary/60 dark:text-primary-dark/60"
							} font-bold cursor-pointer hover:text-primary hover:dark:text-primary-dark`}>
							Home
						</span>
					</Link>
					<Link to="/events" href="/events">
						<span
							className={`${
								router.asPath === "/events"
									? "text-primary dark:text-primary-dark"
									: "text-primary/60 dark:text-primary-dark/60"
							} font-bold cursor-pointer hover:text-primary hover:dark:text-primary-dark`}>
							Events
						</span>
					</Link>
					<Link to="/team" href="/team">
						<span
							className={`${
								router.asPath === "/team"
									? "text-primary dark:text-primary-dark"
									: "text-primary/60 dark:text-primary-dark/60"
							} font-bold cursor-pointer hover:text-primary hover:dark:text-primary-dark`}>
							Team
						</span>
					</Link>
				</div>
			)}
			<SocialMedia socials={header.socials} />
		</header>
	);
};

export default Header;
