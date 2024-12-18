import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate()
    const [error, setError] = useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length < 5){
            setError({...error, name: "must be more then 5 character long."});
            return;
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        // console.log({name, photo, email, password});

        createNewUser(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate("/");
            }).catch(err=>{
                // console.log(err);
            })
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage)
        })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
                <h2 className='font-semibold text-[35px] text-center mb-10'>Register your account</h2>
                <hr />
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Your Name</span>
                        </label>
                        <input
                        name='name' type="text" placeholder="Enter Your Name" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    {
                        error.name && (
                            <label className='label text-xs text-rose-500'>{error.name}</label>
                        )
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Photo URL</span>
                        </label>
                        <input
                        name='photo' type="text" placeholder="Photo URL" className="input input-bordered bg-[#F3F3F3]" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl">Email</span>
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