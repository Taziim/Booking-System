import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const RegisterPage = () => {

 const {register,handleSubmit, formState:{errors}} = useForm();

    const onSubmit = handleSubmit((data) => {
      console.log(data)
    })


  return (
    <div className="bg-white flex justify-center items-center p-5">
      {/* form */}
      <div className="p-4 bg-blue-950  rounded w-[50%]">
        <form action="" onSubmit={onSubmit}>
          {/* title */}
          <div className="text-2xl text-center text-white font-bold tracking-tight">
            <h2>Create An Account</h2>
          </div>
          {/* username */}
          <div className="bg-white flex flex-col p-1">
            <label htmlFor="username" className="font-bold">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="border-none outline-none"
              {...register("username", {
                required: "This username is required",
              })}
            />
            {errors.username && (
              <span>{errors.username.message}</span>
            )}
          </div>
          {/* email */}
          <div className="bg-white flex flex-col gap-1 p-1">
            <label htmlFor="username" className="font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border-none outline-none"
              {...register("email", { required: "This email is required" })}
            />
            {errors.email && (
              <span>{errors.email.message}</span>
            )}
          </div>
          {/* password */}
          <div className="bg-white flex flex-col gap-1 p-1">
            <label htmlFor="username" className="font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "This password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            {errors.password && (
              <span>{errors.password.message}</span>
            )}
          </div>
          {/* button */}
          <div className="bg-white flex justify-between items-center p-1">
            <span>Already have account? <Link className="font-bold">Sing in</Link> </span>
            <button type="submit" className="bg-blue-500 rounded-2xl hover:bg-blue-600 cursor-pointer px-2 py-1">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
