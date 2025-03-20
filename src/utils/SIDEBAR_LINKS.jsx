import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaBoxesSolid } from "react-icons/lia";
import { GrCart } from "react-icons/gr";
import { BsBasket3 } from "react-icons/bs";


export const SIDEBAR_LINKS = [
    {
        title: "Dashboard",
        icon: <MdOutlineSpaceDashboard/>,
        link: '/',
    },
    {
        title: 'Stock',
        icon: <LiaBoxesSolid />,
        link: '/',
    },
    {
        title: 'Achat',
        icon: <GrCart />,
        link: '/',
    },
    {
        title: 'Ventes',
        icon: <BsBasket3 />,
        link: '/',
    },
];