export default function TagMark({ text }) {
    return (
        <span className="px-2 py-0.75 bg-(--background-elevated) border border-(--border-gray) text-lg font-mono font-normal rounded-sm whitespace-nowrap">{text.toString().trim()}</span>
    );
}