import { AiOutlineHome } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

module.exports = [
  {
    id: 1,
    name: "Home",
    routePath: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "Gallery",
    routePath: "https://gallery.tomvisions.com",
    icon: <CgNotes />,
  },
  {
    id: 3,
    name: "Github",
    routePath: "https://github.com/tomvisions",
    icon: <FiCodesandbox />,
  },
  {
    id: 4,
    name: "Wedding",
    routePath: "https://wedding.tomvisions.com",
    icon: <FaBlogger />,
  },
  {
    id: 4,
    name: "Projects",
    routePath: "/blog",
    icon: <FaBlogger />,
  },
  {
    id: 5,
    name: "Contact",
    routePath: "/contact",
    icon: <RiContactsBookLine />,
  },
];
