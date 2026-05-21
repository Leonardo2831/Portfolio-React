import TagMark from "./TagMark";

export default function Sobre(){
    const getAge = () => {
        const today = new Date();
        const birthDate = new Date(2006, 7, 31);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const age = getAge();

    const about = [
        { label: "nome", value: "Leonardo R. Ferraz" },
        { label: "idade", value: `${age} anos` },
        { label: "local", value: "Andradas, MG" },
        { label: "curso", value: "Eng. de Software" },
        { label: "período", value: "3º semestre" },
        { label: "foco", value: "Front-end · UI/UX" }
    ];

    return (
        <div className="flex justify-between mt-10">
            <div className="flex-1">
                <ul className="space-y-2.5">
                    {about.map((item, index) => (
                        <li key={index} className="text-xs space-x-3">
                            <span className="text-(--dim) inline-block w-20">{item.label}</span>
                            <span className="text-(--foreground)">{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <article className="space-y-6 flex-1 *:text-(--foreground) *:text-2xl *:font-sans *:font-light">
                <p>
                    Comecei programando porque queria entender o que acontece <TagMark text="por trás do botão" />. 
                    Hoje, depois de quase dois anos construindo interfaces, sou apaixonado por 
                    <span className="text-accent-crimson"> transformar problemas complexos em produtos simples</span> de usar.
                </p>
                <p>
                    Tenho base sólida em <TagMark text="HTML5" />, <TagMark text="CSS3" /> com 
                    seu framework <TagMark text="Tailwindcss" />
                     e <TagMark text="Javascript" /> — e agora
                    estou expandindo para o back-end com <span className="text-accent-crimson">Java e SQLite</span>, no
                    caminho de me tornar um desenvolvedor fullstack completo.
                </p>
            </article>
        </div>
    );
}