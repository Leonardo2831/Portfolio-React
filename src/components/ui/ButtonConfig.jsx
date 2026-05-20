export default function ButtonConfig(props) {
    const classButtonChecked = props.type === "radio"
        ? "has-checked:text-accent-crimson has-checked:border-accent-crimson"
        : "";

    return (
        <label htmlFor={props.id} className={`w-9 h-9 flex items-center justify-center group cursor-pointer hover:text-(--foreground) hover:border-(--foreground) text-xs uppercase text-(--dim) p-1.5 rounded-md bg-(--background-faint) border border-(--border-gray) ${classButtonChecked} ${props.visible || ""} transition-all`}>
            {props.children}
            <input 
                type={props.type} 
                name={props.name} 
                id={props.id} 
                defaultChecked={props.defaultChecked} 
                checked={props.checked}
                onChange={props.onChange}
                onClick={props.onClick}
                className="hidden" 
                hidden 
            />
        </label>
    );
}