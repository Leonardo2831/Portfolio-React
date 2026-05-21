export default function ItemPulse({ color, type = "circle" }) {
    const classItem = `inline-block min-w-2 min-h-2 ${type === "circle" ? "rounded-full" : "rounded-[1px]"} animate-pulseCircle`;

    return (
        <span
            className={classItem}
            style={{
                backgroundColor: `var(--color-accent-${color})`,
                boxShadow: `0 0 10px var(--color-accent-${color})`
            }}
        ></span>
    );
}