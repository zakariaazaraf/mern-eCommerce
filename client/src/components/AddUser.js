import React, { useState } from 'react'

export const AddUser = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitTheForm = event => {
        event.preventDefault()
        /** Validate the emial, password and the confirmed password */
        if (password !== confirmPassword) {
            console.log('The password is not identical')
            return
        }

        createNewUser()
    }

    const createNewUser = async () => {
       
        let user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        console.log(user)

        try {
            const response = await fetch(`http://localhost:5000/users`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }

            })

            if (response.ok && response.status === 200) {
                const data = await response.json()
                console.log(data)
                /** 
                 * redirect the user to the manage users page, I presume the curent user is an admin.
                 * Ops, That is only if we successed to create a user, other way, redirect him to the apropriate page (error, index page)  
                 */
            }
        } catch (error) {
            console.log(error)
        }
    }

  return <>
  {/* // TODO: Get back to the styling, It does not make sense to set the same styling for all the pages, make it dynamic */}
        <form method="POST" className='form' onSubmit={submitTheForm} style={{paddingTop: 145}}>
            <div>
                <label htmlFor={'firstname'}>firstname: </label>
                <input type='text' name='firstname' id='firstname' value={firstname} onChange={(event) => setFirstname(event.target.value)}/>
            </div>
            <div>
                <label htmlFor={'lastname'}>lastname: </label>
                <input type='text' name='lastname' id='lastname' value={lastname} onChange={(event) => setLastname(event.target.value)}/>
            </div>
            <div>
                <label htmlFor={'email'}>email: </label>
                <input type='email' name='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div>
                <label htmlFor={'password'}>password: </label>
                <input type='password' name='password' id='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div>
                <label htmlFor={'confirmPassword'}>Confirm password: </label>
                <input type='password' name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
            </div>
            <button type='submit' className='btn'>Add User</button>
        </form>
  </>
}
