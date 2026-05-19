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
        console.log("Abrindo/fechando menu. Novo estado:", !isMobileOpen);
        setIsMobileOpen(!isMobileOpen);
    };

    return (
        <div className="bg-(--background) text-(--foreground)">
            <header className="relative px-10 py-4 max-w-7xl mx-auto flex items-center justify-between">
                <TitleName />
                <Nav classMenu={`md:block ${isMobileOpen ? 'block' : 'hidden'}`} />
                <div className="flex items-center gap-2">
                    <ButtonConfig id="pt" name="language" type="radio" children="PT" defaultChecked />
                    <ButtonConfig id="en" name="language" type="radio" children="EN" />
                    <ButtonConfig id="dark" name="theme" type="checkbox" children={<Img src={src} alt={alt} classStyle={classStyle} />} />
                    <ButtonConfig onClick={toggleMobileMenu} id="menu" name="menu" type="checkbox" children={<MenuMobile />} />
                </div>
            </header>
        </div>
    );
}