import {useState} from 'react'
import classes from './Form.module.css'

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isInvalidEmail, setIsInvalidEmail] = useState(true);
    const [isInvalidPassword, setIsInvalidPassword] = useState(true);

    function handleOnSubmit(event) {
        event.preventDefault();

        setIsInvalidEmail(!email.includes('@'));
        setIsInvalidPassword(password.length < 8);
    }

    function handleOnEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleOnPasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor='email' className={!!isInvalidEmail && classes.invalid}>Your email</label>
                <input id='email' className={!!isInvalidEmail && classes.invalid} onChange={handleOnEmailChange} />

                <label htmlFor='password' className={!!isInvalidPassword && classes.invalid}>Your password</label>
                <input id='password' className={!!isInvalidPassword && classes.invalid} onChange={handleOnPasswordChange} />

                <button>Submit</button>
            </form>
        </>
    )
}

export default Form
