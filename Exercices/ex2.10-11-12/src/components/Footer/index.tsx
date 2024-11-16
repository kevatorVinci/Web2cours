import styles from './Footer.module.css';

interface footerProps {
    lien: string;
    message: string;
}

const Footer = (props: footerProps) => {
    return (
        <footer className={styles.footer}>
            <a href={props.lien} className={styles.a}>{props.lien}</a>
            <p className={styles.p}>{props.message}</p>
        </footer>
    );
}

export default Footer;

