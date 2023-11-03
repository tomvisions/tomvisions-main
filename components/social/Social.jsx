import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 2,
      link: "https://twitter.com/tomvisions",
      icon: <FaTwitter />,
      iconClass: "text-[#1C9CEA]",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/thomas-cruickshank-a815842/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
