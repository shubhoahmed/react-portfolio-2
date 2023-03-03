import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
const HeaderSocial = () => {
    return (
        <div className="header_social">
            <a href="https://www.linkedin.com/in/shubho-ahmed-narsingdi/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
            <a href="https://github.com/shubhoahmed" target="_blank" rel="noreferrer" ><BsGithub/></a>
            <a href="https://www.facebook.com/shuvo090/" target="_blank" rel="noreferrer" ><BsFacebook/></a>          
        </div>
    );
};

export default HeaderSocial;