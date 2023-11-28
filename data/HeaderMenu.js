import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
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
    icon: <AiOutlinePicture />,
  },
  {
    id: 3,
    name: "Github",
    routePath: "https://github.com/tomvisions",
    icon: <AiOutlineGithub />,
  },
  {
    id: 5,
    name: "Contact",
    routePath: "/contact",
    icon: <RiContactsBookLine />,
  },
];
