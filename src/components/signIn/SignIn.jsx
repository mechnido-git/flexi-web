import './signin.css'
const SignIn = () => {
    return (
        <div className="signin-div">
            <h1>Log In</h1>
            <div className="fields">
                <div className="input-div">
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input-div">
                    <input type="password" placeholder='Password' />

                </div>
            </div>
        </div>
    )
}

export default SignIn