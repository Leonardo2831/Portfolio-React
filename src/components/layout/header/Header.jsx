import TitleName from "./TitleName";
import Nav from "./Nav";
import ButtonConfig from "../../ui/ButtonConfig";
import Img from "../../ui/Img";
import MenuMobile from "./MenuMobile";
import React from "react";

export default function Header() {
    const src = 'public/icons/light-theme.svg';
    const alt = 'Tema escuro';
    const classStyle = 'w-4 h-4';

    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    return (
        <div className="bg-(--background) text-(--foreground)">
            <header className="relative px-6 sm:px-10 py-3 sm:py-4 max-w-7xl mx-auto flex items-center justify-between gap-5">
                <TitleName />
                <Nav classMenu={`md:block ${isMobileOpen ? 'block' : 'hidden'}`} />
                <div className="flex items-center justify-center flex-wrap gap-2">
                    <ButtonConfig id="pt" name="language" type="radio" children="PT" defaultChecked />
                    <ButtonConfig id="en" name="language" type="radio" children="EN" />
                    <ButtonConfig id="dark" name="theme" type="checkbox" children={<Img src={src} alt={alt} classStyle={classStyle} />} />
                    <ButtonConfig onClick={toggleMobileMenu} id="menu" name="menu" type="checkbox" children={<MenuMobile />} visible="md:hidden" />
                </div>
            </header>
        </div>
    );
}