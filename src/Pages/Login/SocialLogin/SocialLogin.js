import React from 'react';
import googleLogo from '../../../images/social/googleLogo.png'
import facebookLogo from '../../../images/social/facebookLogo.png'
import githubLogo from '../../../images/social/githubLogo.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    if (errorGoogle || errorGithub) {
        errorElement = <div>
            <p className='text-danger'>Error: {errorGoogle?.message} {errorGithub?.message}</p>
        </div>
    }


    if (userGoogle || userGithub) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{ width: "30px" }} src={googleLogo} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
            <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{ width: "30px" }} src={facebookLogo} alt="" />
                <span className='px-2'>Facebook Sign In</span>
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{ width: "30px" }} src={githubLogo} alt="" />
                <span className='px-2'>Github Sign In</span>
            </button>

        </div>
    );
};

export default SocialLogin;