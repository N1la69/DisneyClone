import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiPlus, HiStar, HiTv } from "react-icons/hi2";
import { disney, marvel, nationalG, pixar, starwar } from './../assets/Images/index.js';
import { disneyV, marvelV, national_geographicV, pixarV, star_warsV } from './../assets/Videos/index.js';

export const Menu = [
    {
        name: "HOME",
        icon: HiHome
    },
    {
        name: "SEARCH",
        icon: HiMagnifyingGlass
    },
    {
        name: "WATCH LIST",
        icon: HiPlus
    },
    {
        name: "ORIGINALS",
        icon: HiStar
    },
    {
        name: "MOVIES",
        icon: HiPlayCircle
    },
    {
        name: "SERIES",
        icon: HiTv
    }
]

export const productionHouseList = [
    {
        id: 1,
        image: disney,
        video: disneyV
    },
    {
        id: 2,
        image: marvel,
        video: marvelV
    },
    {
        id: 3,
        image: nationalG,
        video: national_geographicV
    },
    {
        id: 4,
        image: pixar,
        video: pixarV
    },
    {
        id: 5,
        image: starwar,
        video: star_warsV
    }
]

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "About Us", link: '/' },
            { name: "Careers", link: '/' }
        ]
    },
    {
        title: "View Website in",
        links: [
            { name: "English", link: '/' },
            { name: "Hindi", link: '/' },
            { name: "Bengali", link: '/' }
        ]
    },
    {
        title: "Need Help?",
        links: [
            { name: "Visit Help Center", link: '/' },
            { name: "Share Feedback", link: '/' }
        ]
    },
    {
        title: "Connect With Us",
        links: [
            { name: "hotstarIndia@disney+.com", link: "mailto:hotstarIndia@disney+.com" },
            { name: "+91-9007050971", link: "mob:+91-9007050971" },
        ]
    }
]