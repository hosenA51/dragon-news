import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
                <h2 className='font-semibold text-[35px] text-center mb-10'>Login your account</h2>
                <hr />
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Email address</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
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