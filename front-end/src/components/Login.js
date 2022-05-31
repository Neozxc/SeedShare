import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import seedshare_video from '../assets/seedshare_video.mp4';
import seedshare_logo from '../assets/seedshare_logo.png';
import { client } from '../client';

// Fix => idpiframe_initialization_failed
import { gapi } from 'gapi-script';

const Login = () => {
    const navigate = useNavigate();
    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));

        const { name, googleId, imageUrl } = response.profileObj;

        // Pass from through sanity
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image: imageUrl
        }

        client.createIfNotExists(doc).then(() => {
            navigate('/', { replace: true });
        });
    }

    // Fix => idpiframe_initialization_failed
    useEffect(() => {
        const start = () => {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
                scope: 'email'
            })
        }

        gapi.load('client:auth2', start)
    }, []);

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
            <video 
            src={seedshare_video}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
            />

            <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                <div className='p-5'>
                    <img src={seedshare_logo} width="140px" alt='logo' />
                </div>

                <div className='shadow-2xl'>
                    <GoogleLogin
                    clientId={"910163680368-p6qo2brttqcq0bv7lan2e9rrvfv5qk67.apps.googleusercontent.com"}
                    render={(renderProps) => (
                        <button
                        type='button'
                        className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        >
                            <FcGoogle className='mr-4' /> Sign in with Google
                        </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login