import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import img from '../../../images/google.png';
import auth from './../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    };

        if (loading) {
        return <p>Loading...</p>;
        };

        if (user) {
            navigate('/home');
        }

    return (
        <div>
            <div>
            <p >or</p>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary'>
                <img src={img} alt="" />
                <span className='px-2'> Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;