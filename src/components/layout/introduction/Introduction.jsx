import CirclePulse from "../../ui/CirclePulse";

export default function Introduction() {
    return (
        <div className="bg-(--background)">
            <section className="container flex items-center gap-20 text-sm">
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-(--background-elevated)">
                        <CirclePulse color="green" />
                        <p>disponível para projetos</p>
                    </div>
                    <span>·</span>
                    <p>São João da Boa Vista · BR</p>
                    <span>·</span>
                    <p>23:30 BRT</p>
                </div>
                <div>

                </div>
            </section>
        </div>
    );
}