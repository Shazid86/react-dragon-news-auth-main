import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
          <h2 className="mx-auto font-bold p-10 text-2xl">Login To Your Account</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email Address</span>
          </label>
          <input type="email" placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" placeholder="Enter your password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </form>
      <p className="text-center font-semibold ">Dont’ Have An Account ? <Link className="text-orange-500" to="/auth/register">Register</Link></p>
    </div>
    </div>
  );
};

export default Login;