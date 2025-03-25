import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaBoxesSolid } from "react-icons/lia";
import { GrCart } from "react-icons/gr";
import { BsBasket3, BsTools  } from "react-icons/bs";



export const SIDEBAR_LINKS = [
    {
        title: "Dashboard",
        icon: <MdOutlineSpaceDashboard/>,
        link: '/',
    },
    {
        title: "Administration",
        icon: <BsTools />,
        link: '/administration',
    },
    {
        title: 'Stock',
        icon: <LiaBoxesSolid />,
        link: '/stock',
    },
    {
        title: 'Purchases',
        icon: <GrCart />,
        link: '/purchases',
    },
    {
        title: 'Sales',
        icon: <BsBasket3 />,
        link: '/sales',
    },
];