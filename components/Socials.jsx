import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiTwitterLine,
  RiWhatsappLine,
  RiTelegramLine,
  RiTelegramFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://youtube.com/awkwardpy",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/awkwardpy",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/awkwardpy",
    Icon: RiFacebookLine,
  },
  {
    name: "Twitter",
    link: "https://facebook.com/awkwardpy",
    Icon: RiTwitterLine,
  },
  {
    name: "Telegram",
    link: "https://t.me/awkwardpy",
    Icon: RiTelegramLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/7465814952",
    Icon: RiWhatsappLine,
  },
  
  {
    name: "Github",
    link: "https://github.com/awkward-py",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
