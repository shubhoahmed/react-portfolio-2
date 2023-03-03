import cv from '../../assetes/Resume - of Shubho Ahmed-1.pdf';
import HeaderSocial from './HeaderSocial';
const CTA = () => {
    return (
        <div className="cta">
            <a href= {cv} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            <HeaderSocial/>
        </div>
        
    );
};

export default CTA;