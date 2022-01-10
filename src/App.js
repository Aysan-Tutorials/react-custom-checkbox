import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [check, setCheck] = useState(false);
    return (
        <>
        <div className="form-input">
            <input type="checkbox" id="chk" onChange={()=> setCheck(!check)}/>
            <span className="wrapper">
                <span className={check && "tick"}></span>
            </span>
            <label for="chk">Awesome Checkbox</label>
        </div>
        </>
    )
}

export default App
