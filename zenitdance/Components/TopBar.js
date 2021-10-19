import styles from '../styles/TopBar.module.css'

export default function TopBar() {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <div>Tomáš, Čikvoský, Tomášikova 2</div>
                <div>ZENIT Dance Studio, Copyright © 2020</div>
            </div>
        </div> 
    )
}