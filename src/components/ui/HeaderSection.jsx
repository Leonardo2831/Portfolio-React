export default function HeaderSection(props){
    return (
        <div className="flex gap-3.5 text-xs tracking-wide *:xs:whitespace-nowrap">
            <span className="text-accent-crimson" >{String(props.number).padStart(2, '0')}</span>
            <span className="text-(--faint)" >~/</span>
            <span className="text-(--dim) lowercase">{props.title}</span>
            <div className="h-px w-full bg-gradient-border-soft"></div>
            <span className="text-(--dim) ">{props.code}</span>
        </div>
    );
}