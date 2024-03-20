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