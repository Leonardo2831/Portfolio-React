export default function Img(props) {
    return (
        <img src={props.src} alt={props.alt} className={props.classStyle} />
    );
}