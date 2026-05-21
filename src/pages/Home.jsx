import React from "react";
import Header from "../components/layout/header/Header";
import Introduction from "../components/layout/introduction/Introduction";
import Section from "../components/ui/Section";
import Sobre from "../components/layout/about/Sobre";
import Skills from "../components/layout/skills/Skills";

export default function Home(){
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

    return (
        <>
            <Header isTheme={isTheme} toggleTheme={toggleTheme} />
            <Introduction isTheme={isTheme} />
            <Section idSection="sobre" number={1} title="Sobre mim" code="get-content about.md" >
                <Sobre />
            </Section>
            <Section idSection="skills" number={2} title="stack" code="ls -force .\skills" >
                <Skills />
            </Section>
        </>
    );  
}