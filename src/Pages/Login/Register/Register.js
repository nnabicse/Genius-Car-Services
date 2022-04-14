import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const emailRef = useRef("");
    const nameRef = useRef("");
    const passwordRef = useRef("");
    const checkRef = useRef("");
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loadingCreate,
        errorCreate,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const agree = checkRef.current.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home');
    }

    const navigateLogin = event => {
        navigate('/login')
    }

    if (user) {
        console.log(user);
    }
    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h2 className='text-primary text-center'>Please Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={nameRef} required type="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} ref={checkRef} type="checkbox" label="Accept Genius Car Services Terms and Conditions" />
                    </Form.Group>
                    <button disabled={!agree} className='btn btn-primary' type='submit'>Submit</button>
                </Form>
                <p>Already Have a Account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;