import './index.css'
import {useState} from "react";

function App() {
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [email, setEmail] = useState();

    function handleOnChange(event) {
        setEmail(event.target.value);
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        email.includes('@') ? setIsValidEmail(true) : setIsValidEmail(false);
    }

  return (
      <section>
        <form onSubmit={handleOnSubmit}>
            <label htmlFor='email'>Your email</label>
            <input id='email' onChange={handleOnChange} />
            <button>Submit</button>
        </form>
          { !isValidEmail ? <p>Invalid email address entered!</p> :null }
      </section>
  )
}

export default App
