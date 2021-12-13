import React from 'react'

function Form() {
    const [state, setState] = React.useState(false);
    const toggle = (elm, check) => {
        [...document.querySelectorAll(".but")].map(e => {
            e.classList.remove("transparent")
        })
        document.querySelector(`.${elm}`).classList.add("transparent");
        (check == 0) ?
            setState(false) :
            setState(true);
    }
    return (
        <div className="sign-up-in">
            <span><i className="close-form fas fa-times"></i></span>
            <div className="form">
                <div className="select">
                    <button className=" transparent but sign-up-select" onClick={() => toggle("sign-up-select", 0)}>Signup</button>
                    <button className="but sign-in-select" onClick={() => toggle("sign-in-select", 1)}>Signin</button>
                </div>
                {(state == false) ? <form className="sign-up-form">
                    <table>
                        <tr className="tr">
                            <td>
                                <label htmlFor="name">Name:</label>
                            </td>
                            <td>
                                <input id="name" type="text" placeholder="Enter name"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email:</label>
                            </td>
                            <td>
                                <input id="email" type="email" placeholder="Enter email"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pass1">password:</label>
                            </td>
                            <td>
                                <input id="pass1" type="password" placeholder="Enter password"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pass2">Confirm password:</label>
                            </td>
                            <td>
                                <input id="pass2" type="password" placeholder="Enter password"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Sign up</button>
                            </td>
                        </tr>
                    </table>
                </form> : <form className="sign-in-form">
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="email">Email:</label>
                            </td>
                            <td>
                                <input id="email" type="email" placeholder="Enter email"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pass">password:</label>
                            </td>
                            <td>
                                <input id="pass" type="password" placeholder="Enter password"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Sign in</button>
                            </td>
                        </tr>
                    </table>
                </form>}


            </div>

        </div>
    )
}

export default Form
