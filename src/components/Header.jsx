import TitleName from "../home/TitleName";

export default function Header() {
    return (
        <div className="bg-(--background) text-(--foreground)">
            <header className="max-w-7xl mx-auto flex justify-between p-4">
                <TitleName />
            </header>
        </div>
    );
}
