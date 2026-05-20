export default function TitleApresentation() {
    return (
        <h1 className="flex flex-col sm:gap-1">
            <span className="font-sans font-light text-5xl xs:text-7xl lg:text-8xl text-(--foreground) tracking-[-3.6px] leading-[0.95] sm:leading-[0.9]">Leonardo Reis Ferraz</span>
            <span className="font-sans font-light text-(--dim) text-4xl xs:text-6xl lg:text-7xl tracking-[-3.6px] leading-[0.95] sm:leading-[0.9]">Desenvolvedor</span>
            <span className="font-serif italic text-accent-crimson text-5xl xs:text-7xl lg:text-8xl tracking-[-3.6px] leading-[0.95] sm:leading-[0.9] lowercase">Front-End</span>
        </h1>
    );
}