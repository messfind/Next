import React from 'react'
import classes from "./login.module.css"
import Link from "next/link"
const Login = () => {
    return (
        <section className={classes.login}>
        <div className={classes.login_container}>
            <form>
                <h1>Sign In</h1>
            <div>
                <span>email</span>
                <input type="email" placeholder="email" />
            </div>
            
            <div>
                <span>password</span>
                <input type="password" placeholder="password" />
            </div>
        
            <button type="submit" className={classes.btn_dark} id="newFormBtn">Login</button>
            </form>
            <p>Well come! our pages.If you have not an account please create your account</p>
            <button className={classes.register}> <Link href="/register" >register </Link></button>
        </div>
    </section>
  )
}

export default Login
