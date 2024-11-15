import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
                <h2 className='font-semibold text-[35px] text-center mb-10'>Register your account</h2>
                <hr />
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Photo URL</span>
                        </label>
                        <input type="file" placeholder="Photo URL" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Already Have An Account ? <Link className='text-red-500' to="/auth/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;