import { IoLogoYoutube } from "react-icons/io";
import { FaTwitch, FaTiktok } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const LINK = [
    {
        id: 1,
        href: "https://www.youtube.com/@JajouGoat",
        title: "Youtube",
        component: <IoLogoYoutube />,
        css: "flex items-center justify-center gap-4"

    },
    {
        id: 2,
        href: "https://twitch.tv/jajougoat",
        title: "Twitch",
        component: <FaTwitch />,
    },
    {
        id: 3,
        href: "https://www.tiktok.com/@jajougoat",
        title: "Tiktok",
        component: <FaTiktok />,
    },
    {
        id: 4,
        href: "https://www.instagram.com/jajou.goat/",
        title: "Instagram",
        component: <GrInstagram />,
    }
]

function Link() {
    return LINK.map(link => <div key={link.id}><a className={link.css} href={link.href}>{link.title}<span>{link.component}</span></a></div>)
}

export default Link