export default function Sobre(){
    const getAge = () => {
        const today = new Date();
        const birthDate = new Date(2006, 7, 31);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const age = getAge();

    return (
        <div>
            <ul>
                <li>
                    <span>nome</span>
                    <span>Leonardo R. Ferraz</span>
                </li>
                <li>
                    <span>idade</span>
                    <span>{age} anos</span>
                </li>
                <li>
                    <span>local</span>
                    <span>Andradas, MG</span>
                </li>
                <li>
                    <span>curso</span>
                    <span>Eng. de Software</span>
                </li>
                <li>
                    <span>período</span>
                    <span>3º semestre</span>
                </li>
                <li>
                    <span>foco</span>
                    <span>Front-end · UI/UX</span>
                </li>
            </ul>
        </div>
    );
}