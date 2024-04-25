import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import Date from "./Date.jsx";
import Menu from "./Menu.jsx";

const Header = () => {
    return (
        <nav className="border-b border-black py-6 md:py-8">
            <div
                className="container mx-auto flex flex-wrap items-center justify-between gap-6"
            >
                <Date/>
                <Logo/>
                <Search/>
            </div>
          <Menu/>
        </nav>
    );
};

export default Header;
