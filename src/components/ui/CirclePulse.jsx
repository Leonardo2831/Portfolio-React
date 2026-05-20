export default function CirclePulse({ color }) {
    const shadows = {
        'crimson': 'shadow-crimson',
        'green': 'shadow-green',
    };

    const colorItem = {
        'crimson': 'bg-accent-crimson',
        'green': 'bg-accent-green',
    };

    const classCircle = `min-w-2 min-h-2 ${colorItem[color]} rounded-full ${shadows[color]} animate-pulseCircle`;

    return (
        <span className={classCircle}></span>
    );
}