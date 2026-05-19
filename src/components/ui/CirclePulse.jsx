export default function CirclePulse({ color = 'crimson' }) {
    const shadows = {
        'crimson': 'shadow-[0_0_10px_var(--color-accent-crimson)]',
        'green': 'shadow-[0_0_10px_var(--color-accent-green)]',
    };

    const classCircle = `w-2 h-2 bg-accent-${color} rounded-full ${shadows[color]} animate-pulseCircle`;

    return (
        <span className={classCircle}></span>
    );
}