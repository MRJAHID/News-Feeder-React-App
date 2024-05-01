import LogoImg from '../../assets/logo_light.png';

const Logo = () => {
    return (
        <img
            className="max-md:col-span-2"
            src={LogoImg}
            alt="lws"
        />
    );
};

export default Logo;
