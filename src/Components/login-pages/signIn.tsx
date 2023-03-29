import React, { useState } from 'react'
import './signIn.css'
import { dataBaseUrl } from '../../../application.json';
import { serverMethod } from '../../../hooks/serverFetchMethods';
import { Navigate, useNavigate } from 'react-router-dom';
export default function SignIn() {
    let userUrl = dataBaseUrl.users;
    const nevigate = useNavigate()
    const [userCredentials, setCredentails] = useState({ email: '', password: '', conformPassword: '' })
    const newUser = {
        email: userCredentials.email,
        password: userCredentials.password
    }
    function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (userCredentials.email !== undefined &&
            userCredentials.password !== undefined &&
            userCredentials.conformPassword !== undefined) {
            if (userCredentials.password === userCredentials.conformPassword) {
                serverMethod.postSingleItem(userUrl, newUser)
                nevigate('/product')
            } else {
                alert('enter same password')
            }
        }
    }
    return (<>
        <div>
            <form action="" className='signIn-form' onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <div>
                            <label htmlFor="">Name :</label>
                            <input type="text" placeholder='Enter name' />
                        </div>
                    </tr>
                    <tr>
                        <div><label htmlFor="">Email :</label>
                            <input type="text"
                                placeholder='Enter Email'
                                onChange={(e) => setCredentails({ ...userCredentials, email: e.target.value })}
                            /></div>
                    </tr>
                    <tr>
                        <div><label htmlFor="">Password :</label>
                            <input type="password"
                                placeholder='Enter password'
                                onChange={(e) => setCredentails({ ...userCredentials, password: e.target.value })} /></div>
                    </tr>
                    <tr>
                        <div><label htmlFor="">confrom password :</label>
                            <input type="password"
                                placeholder='Re enter password'
                                onChange={(e) => setCredentails({ ...userCredentials, conformPassword: e.target.value })} /></div>
                    </tr>
                    <tr><button type='submit'>Submit</button></tr>
                </table>
                

            </form>
        </div>
    </>
    )
}
