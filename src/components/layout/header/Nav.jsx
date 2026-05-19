export default function Nav({ classMenu }) {
    return (
        <nav className={`${classMenu} absolute top-full right-10 z-20 p-4 rounded-lg border border-(--border-soft) md:static md:p-0 md:border-none`}>
            <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:gap-1 text-sm lg:gap-0">
                <li className="*:px-3 *:py-1.5 *:space-x-1 *:lowercase text-(--dim) hover:text-(--foreground) transition-all">
                    <a href="#sobre">
                        <span className="text-(--faint)">/</span><span>Sobre</span>
                    </a>
                </li>
                <li className="*:px-3 *:py-1.5 *:space-x-1 *:lowercase text-(--dim) hover:text-(--foreground) transition-all">
                    <a href="#skills">
                        <span className="text-(--faint)">/</span><span>Skills</span>
                    </a>
                </li>
                <li className="*:px-3 *:py-1.5 *:space-x-1 *:lowercase text-(--dim) hover:text-(--foreground) transition-all">
                    <a href="#trajetoria">
                        <span className="text-(--faint)">/</span><span>Trajetória</span>
                    </a>
                </li>
                <li className="*:px-3 *:py-1.5 *:space-x-1 *:lowercase text-(--dim) hover:text-(--foreground) transition-all">
                    <a href="#projetos">
                        <span className="text-(--faint)">/</span><span>Projetos</span>
                    </a>
                </li>
                <li className="*:px-3 *:py-1.5 *:space-x-1 *:lowercase text-(--dim) hover:text-(--foreground) transition-all">
                    <a href="#contato">
                        <span className="text-(--faint)">/</span><span>Contato</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}