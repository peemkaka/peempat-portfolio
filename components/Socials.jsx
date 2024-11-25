import Link from 'next/link';

import {FaGithub,FaInstagram,FaYoutube,FaFacebook} from'react-icons/fa'

const socials = [
    {icon: <FaGithub/>,path:"https://github.com/peemkaka"},
    {icon: <FaInstagram/>,path:"https://www.instagram.com/puseahboi/"},
    {icon: <FaYoutube/>,path:"https://www.youtube.com/@Hardboy420"},
    {icon: <FaFacebook/>,path:"https://www.facebook.com/peem.prat"},
]

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
                );
        })}
    </div>
  )
}

export default Socials