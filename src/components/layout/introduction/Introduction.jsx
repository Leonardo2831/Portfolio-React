import Button from "../../ui/Button";
import CirclePulse from "../../ui/CirclePulse";
import TitleApresentation from "./TitleApresentation";
import Img from "../../ui/Img";
import React from "react";

export default function Introduction({ isTheme }) {
    function updateTime() {
        const date = new Date();
        const formattedHour = date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

        return `${formattedHour} BRT`;
    }

    const [isTime, setIsTime] = React.useState(updateTime());

    setInterval(() => {
        setIsTime(updateTime());
    }, 1000);

    return (
        <div className="bg-(--background)">
            <section className="container pt-24 pb-35 flex items-center justify-center flex-wrap gap-20 text-sm">
                <article className="flex-1 flex flex-col gap-7">
                    <div className="flex items-center flex-wrap gap-2.5 text-xs">
                        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-(--background-elevated) border border-(--border-gray)">
                            <CirclePulse color="green" />
                            <p>disponível para projetos</p>
                        </div>
                        <span>·</span>
                        <p>São João da Boa Vista - BR</p>
                        <span>·</span>
                        <p>{isTime}</p>
                    </div>
                    <TitleApresentation />
                    <p className="font-sans font-light text-(--dim) text-lg max-w-[50ch]">
                        {/* Texto reformular ! */}
                        Estudante de Engenharia de Software na UNIFAE (3º
                        semestre), no caminho fullstack. Construo interfaces que
                        unem código limpo, performance e atenção obsessiva ao
                        detalhe.
                    </p>
                    <div className="flex items-center gap-2.5">
                        <Button color="red" text="ver projetos" children={<Img src={isTheme ? "/icons/arrow-right.svg" : "/icons/arrow-right-light.svg"} alt="Ver Projetos" classStyle="w-3.5 h-3.5" />} />
                        <Button color="black" text="baixar CV" children={<Img src={isTheme ? "/icons/download.svg" : "/icons/download-light.svg"} alt="Baixar Currículo" classStyle="w-3.5 h-3.5" />} />
                    </div>
                </article>
                <figure className="basis-100 max-w-162.5 flex-1 relative bg-(--background-elevated) border border-(--border-gray) rounded-sm overflow-hidden">
                    <Img src="/images/perfil.jpg" alt="Foto de perfil" classStyle="object-cover" />
                    <p className="px-2.5 py-1.25 text-(--foreground) bg-(--background)/70 border border-(--border-gray) rounded-sm text-[10px] leading-4 absolute z-20 bottom-4 left-4">leonardo.jpg</p>
                </figure>
            </section>
        </div>
    );
}