import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

  const {createNewUser, user, setUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log({name, photo, email, password});

    createNewUser(email, password)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })

  };

  return (
    <div className="min-h-screen flex justify-center items-center">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
          <h2 className="mx-auto font-bold p-10 text-2xl">Register To Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold ">Already Have An Account ? <Link className="text-orange-500" to="/auth/login">Login</Link></p>
    </div>    
    </div>
  );
};

export default Register;