import React, { useState } from 'react'

export const AddUser = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitTheForm = event => {
        event.preventDefault()

    }


  return <>
        <form action='/auth/register' method="POST" class='form' onSubmit={submitTheForm}>
            <div>
                <label htmlFor={'firstname'}>firstname: </label>
                <input type='text' name='firstname' id='firstname' value={firstname} onChange={(event) => setFirstname(event.value)}/>
            </div>
            <div>
                <label htmlFor={'lastname'}>lastname: </label>
                <input type='text' name='lastname' id='lastname' value={lastname} onChange={(event) => setLastname(event.value)}/>
            </div>
            <div>
                <label htmlFor={'email'}>email: </label>
                <input type='email' name='email' id='email' value={email} onChange={(event) => setEmail(event.value)}/>
            </div>
            <div>
                <label htmlFor={'password'}>password: </label>
                <input type='password' name='password' id='password' value={password} onChange={(event) => setPassword(event.value)}/>
            </div>
            <div>
                <label htmlFor={'confirmPassword'}>Confirm password: </label>
                <input type='password' name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={(event) => setConfirmPassword(event.value)}/>
            </div>
            <button type='submit' class='btn'>Add User</button>
        </form>
  </>
}
