export default function Button(props){
    const styleButton = {
        'red': 'bg-accent-crimson text-(--background) hover:bg-accent-salmon transition-colors',
        'black': 'bg-(--background-elevated) border border-(--border-gray) text-(--foreground) hover:border-(--foreground) transition-colors'
    };

    const classButton = `${styleButton[props.color]} text-xs font-medium flex items-center gap-2.5 rounded-lg py-4 px-6 cursor-pointer`;

    return (
        <button className={classButton}>
            {props.text}
            {props.children}
        </button>
    );
}