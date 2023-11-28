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
    routePath: "https://photograpthy.tomvisions.com",
    icon: <CgInpicture />,
  },
  {
    id: 3,
    name: "Github",
    routePath: "https://github.com/tomvisions",
    icon: <FiCodesandbox />,
  },
  {
    id: 5,
    name: "Contact",
    routePath: "/contact",
    icon: <RiContactsBookLine />,
  },
];
