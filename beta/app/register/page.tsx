import React from 'react'
import Link from "next/link"
import classes from "./register.module.css"

const Register=()=>{
    return (
        <section className={classes.register}>
        <div className={classes.register_container}>
        <h1>Register</h1>
            <form>
                <div>
                    <span>userid</span>
                    <input type="number" placeholder="userid" />
                </div>
                <div>
                    <span>username</span>
                    <input type="text" placeholder="username" />
                </div>
                <div>
                    <span>firstName</span>
                    <input type="text" placeholder="firstName" />
                </div>
                <div>
                    <span> lastName</span>
                    <input type="text" placeholder=" lastName" />
                </div>
                <div>
                    <span>email</span>
                    <input type="email" placeholder="email" />
                </div>
                <div>
                    <span>password</span>
                    <input type="password" placeholder="password" />
                </div>
                <button type="submit" className={classes.btn_dark} id="newFormBtn">Register</button>
            </form>
            <p>please create your account here!</p>
            <button className={classes.login}><Link href="/login" >Sign In </Link></button>
            </div>
           
        </section>
  )
}

export default Register
