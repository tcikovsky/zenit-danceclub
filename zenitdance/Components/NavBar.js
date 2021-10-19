import styles from '../styles/NavBar.module.css'
import Image from 'next/dist/client/image'
import $ from 'jquery'

export default function NavBar() {
    const handleCreateAccountClick = () => {
        $("#rollout").slideDown()
    }
    
    const handleRegisterHide = () => {
        $("#rollout").slideUp()
    }

    return (
        <div className={styles.all}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <Image height={100} width={169} className={styles.logo} src={require("../../obrazky/zenit_dance_logo.png")}></Image>
                </div>
                <div className={styles.nav}>
                    <p>HOME</p>
                    <p>CLASSES</p>
                    <p>CONTACT</p>
                </div>
                <div className={styles.account}>
                    <div className={styles.buttons}>
                        <span className={styles.login}>LOGIN</span> 
                        <span id="createAccount" onClick={handleCreateAccountClick} className={styles.createAccount}>Create an account</span>
                    </div>
                    <div className={styles.form}>
                        <div>
                            <label htmlFor="#userName">User Name</label>
                            <input id='userName' type="text" />
                        </div>
                        <div>
                            <label htmlFor="#password">Password</label>
                            <input id='password' type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="rollout" className={styles.rollout}>
                <h2>Registration Form</h2>
                <div className={styles.registerForm}>
                    <div>
                        <label htmlFor="#userName">Name: </label>
                        <input id='userName' type="text" />
                    </div>
                    <div>
                        <label htmlFor="#password">Login: </label>
                        <input id='password' type="text" />
                    </div>
                    <div>
                        <label htmlFor="#password">Password: </label>
                        <input id='password' type="text" />
                    </div>
                    <div>
                        <label htmlFor="#password">Re Password: </label>
                        <input id='password' type="text" />
                    </div>
                    <div className={styles.registerMeDiv}>
                        <button onClick={handleRegisterHide} className={styles.registerMe} type="submit">Register Me</button>
                    </div>
                    <div>
                        <span onClick={handleRegisterHide} className={styles.registerFormHide}>Hide Registration Form</span>
                    </div>
                </div>
            </div>
        </div>
    )
}