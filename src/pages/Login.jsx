import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});
        userLogin(email, password)
        .then(result=>{
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/")
        })
        .catch((err)=>{
            setError({...error, login: err.code})
        });
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
                <h2 className='font-semibold text-[35px] text-center mb-10'>Login your account</h2>
                <hr />
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Email address</span>
                        </label>
                        <input
                        name='email' type="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Password</span>
                        </label>
                        <input
                        name='password' type="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                        {
                            error.login && (
                                <label className='label text-sm text-red-600'>{error.login}</label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-green-600">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Dont’t Have An Account ? <Link className='text-red-500' to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;