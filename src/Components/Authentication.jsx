import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { MobileOutlined, 
    FacebookOutlined, 
    GoogleOutlined, 
    CloseOutlined, 
    ArrowLeftOutlined } from '@ant-design/icons';

import styles from "./Authentication.module.css";
import { auth } from "../Utils/Firebase/index";
import first from "../Assets/first.jpg";
import { getUserData, userLoggedIn } from '../Redux/UserAuthentication/action';

function Authentication() {
    const [emailFlag, setEmailFlag] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupErr, setSignupErr] = useState(false);
    const dispatch = useDispatch()
    async function handleNext() {
        console.log(auth.signInWithEmailAndPassword(email, password));
        let emailElements = email.split('@');
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // alert("login successful");
            dispatch(userLoggedIn());
            dispatch(getUserData(emailElements[0]));
            setSignupErr(false);
        } catch {
            setSignupErr(true);
            // alert("failed to log in");
        }
    }

    return (
        <div className={styles.loginContainer}>

            <div className={styles.icon}>
                <div onClick={() => setEmailFlag(false)} className={emailFlag ? `${styles.visible}` : `${styles.hidden}`}><ArrowLeftOutlined /></div>
                <div><CloseOutlined /></div>
            </div>

            {
                !emailFlag && <><div style={{ border: "2px solid white", width: "90%", margin: "auto" }}>
                <div>
                    <img style = {{height: "100px"}} className="d-block w-100" src={first} alt="First slide"/>
                    <p>Help make OLX safer place to buy and <br /> sell</p>
                </div>
                
                </div>

                    <div className={styles.flexButton}>
                        <MobileOutlined />
                        <div>Continue with phone</div>
                    </div>

                    <div className={styles.flexButton}>
                        <FacebookOutlined />
                        <div>Continue with facebook</div>
                    </div>

                    <div className={styles.flexButton}>
                        <GoogleOutlined />
                        <div>Continue with google</div>
                    </div>

                    <div className={styles.bottomTicker}>
                        <div>OR</div>
                        <div onClick={() => setEmailFlag(true)}>Login with Email</div>
                        <div>We won't share your personal details with anyone</div>
                        <div className={styles.silver}>If you continue, you are accepting <span>OLX Terms and Conditions and Privacy Policy</span></div>
                    </div></>
            }

            {
                emailFlag && <>
                    <div>
                        <svg width="60px" height="60px" viewBox="0 0 1024 1024" data-aut-id="icon" class fill-rule="evenodd">
                            <path class="rui-367TP" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                        </svg>
                    </div>
                    <div className={`${styles.box} ${styles.bold}`}>Enter your email to login</div>
                    <input autoComplete={true} className={styles.input} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email} />
                    <input className={styles.input} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
                    { signupErr && <div style={{ color: "red", fontWeight: "bold", fontSize: "10px", textAlign: "left", width: "90%", margin: "auto" }}>*Failed to login</div>}
                    <div className={`${styles.box} ${styles.yellow}`}>If you are a new user please select any other login option from previous page</div>
                    <button disabled={email === "" || password === ""} className={styles.nextButton} onClick={handleNext}>Next</button>
                    <div className={`${styles.box} ${styles.font} ${styles.silver}`}>We won't reveal your email to anyone else nor use it to send you spam</div>
                </>
            }
        </div>
    )
}

export default Authentication;