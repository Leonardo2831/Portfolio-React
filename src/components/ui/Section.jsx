import HeaderSection from "./HeaderSection";

export default function Section(props){
    return (
        <div className="bg-(--background)">
            <section id={props.idSection} className="container py-10 md:py-15 border-t border-(--border-soft)">
                <HeaderSection number={props.number} title={props.title} code={props.code} />
                {props.children}
            </section>
        </div>
    );
}