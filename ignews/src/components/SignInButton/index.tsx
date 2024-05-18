import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi";

import styles from './styles.module.scss'

export function SignInButton() {
    const is_user_logged_in = true;


    return is_user_logged_in ? (
        <button type = "button" className = {styles.signInButton}>
            <FaGithub color = '#04D361'/>
            João Lucas
            <FiX color = '#737380' className = {styles.closeIcon}/>
        </button>
    ) : (
        <button type = "button" className = {styles.signInButton}>
            <FaGithub color = '#EBA417'/>
            Sign in with Github
        </button>
    )
}