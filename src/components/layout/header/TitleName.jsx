import ItemPulse from "../../ui/ItemPulse";

export default function TitleName(){
    return (
        <div className="flex items-center gap-2.5">
            <ItemPulse color="crimson" />
            <h1 className="text-sm font-medium *:text-sm">
                <span className="text-(--dim)">leonardo</span>
                <span className="text-(--foreground) font-bold">.dev</span>
                <span className="text-(--dim)">()</span>
            </h1>
        </div>
    );
}