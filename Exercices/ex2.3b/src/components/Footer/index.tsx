interface FooterProps{
    footer:string;
}

const FooterText =(props:FooterProps) => {
    return <h2>{props.footer}</h2>;  
}
export default FooterText;
