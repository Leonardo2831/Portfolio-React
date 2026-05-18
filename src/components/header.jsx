import { useState, useEffect } from 'react';

function Header() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Verifica se há preferência salva no localStorage ou pega do body atual
        const savedTheme = localStorage.getItem('theme');
        const bodyHasDark = document.body.classList.contains('dark');
        
        if (savedTheme === 'light' || (!savedTheme && !bodyHasDark)) {
            setIsDark(false);
            document.body.classList.remove('dark');
        } else {
            setIsDark(true);
            document.body.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <header className="bg-background text-foreground flex justify-between p-4">
            <h1 className="text-3xl font-bold">Logo</h1>
            <button 
                onClick={toggleTheme}
                className="px-4 py-2 bg-foreground text-background rounded-md cursor-pointer"
            >
                {isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
            </button>
        </header>
    )
}

export default Header;