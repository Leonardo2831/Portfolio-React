import TitleName from "./TitleName";
import Nav from "./Nav";
import ButtonConfig from "../../ui/ButtonConfig";
import Img from "../../ui/Img";
import MenuMobile from "./MenuMobile";
import React from "react";

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const [isTheme, setIsTheme] = React.useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    React.useEffect(() => {
        document.body.classList.toggle('dark', isTheme);
    }, [isTheme]);

    const toggleTheme = () => {
        setIsTheme(!isTheme);
        localStorage.setItem('theme', !isTheme ? 'dark' : 'light');
    };

    const src = isTheme ? '/icons/dark-theme.svg' : '/icons/light-theme.svg';
    const alt = isTheme ? 'Tema escuro' : 'Tema claro';
    const classStyle = 'w-4 h-4';

    return (
        <div className="bg-(--background) text-(--foreground)">
            <header className="relative container flex items-center justify-between gap-5">
                <TitleName />
                <Nav classMenu={`md:block ${isMobileOpen ? 'block' : 'hidden'}`} />
                <div className="flex items-center justify-center flex-wrap gap-2">
                    <ButtonConfig id="pt" name="language" type="radio" children="PT" defaultChecked />
                    <ButtonConfig id="en" name="language" type="radio" children="EN" />
                    <ButtonConfig onClick={toggleTheme} id="dark" name="theme" type="checkbox" children={<Img src={src} alt={alt} classStyle={classStyle} />} />
                    <ButtonConfig onClick={toggleMobileMenu} id="menu" name="menu" type="checkbox" children={<MenuMobile />} visible="md:hidden" />
                </div>
            </header>
        </div>
    );
}