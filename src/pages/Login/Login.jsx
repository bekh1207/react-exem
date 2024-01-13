import React from 'react'
import { RiLoginCircleLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
    const navigate = useNavigate()
    const loginHandler = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const { tel, password } = Object.fromEntries(form.entries())
        if (tel == '+9' && password == '1') {
            navigate('/')
        }
        else {
            alert('parol yoki tel xato')
        }
    }
    return (
        <div className="form">
            <form onSubmit={loginHandler} action="">
                <div>
                    <label>Phone number</label>
                    <input required type="tel" placeholder='Phone number' name='tel' />
                </div>
                <div>
                    <label>Password</label>
                    <input required type="password" placeholder='password number' name='password' />
                </div>
                <button>Login <RiLoginCircleLine /></button>
            </form>
        </div>
    )
}

export default Login