
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api-client.js";
import {useAppContext} from "../contexts/AppContext.jsx"

const RegisterPage = () => {
  const {
    showToast
  } = useAppContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Create a mutation for registration
  const mutation = useMutation({
    mutationFn: apiClient.register,

    onSuccess: () => {
      showToast({message:"Registration Successfull", type:"Success"})
    },

    onError: (error) => {
      showToast({message:error.message, type:"Error"})
    },
  });

  // Runs when the form is submitted
  const onSubmit = handleSubmit((data) => {
    console.log(data);

    // Send form data to the backend
    mutation.mutate(data);
  });

  return (
    <div className="bg-white flex justify-center items-center p-5">
      {/* form */}
      <div className="p-4 bg-blue-950 rounded w-[50%]">
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
              id="username"
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
            <label htmlFor="email" className="font-bold">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="border-none outline-none"
              {...register("email", {
                required: "This email is required",
              })}
            />

            {errors.email && (
              <span>{errors.email.message}</span>
            )}
          </div>

          {/* password */}
          <div className="bg-white flex flex-col gap-1 p-1">
            <label htmlFor="password" className="font-bold">
              Password
            </label>

            <input
              id="password"
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
            <span>
              Already have account?{" "}
              <Link to="/login" className="font-bold">
                Sign in
              </Link>
            </span>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="bg-blue-500 rounded-2xl hover:bg-blue-600 cursor-pointer px-2 py-1"
            >
              {mutation.isPending
                ? "Creating..."
                : "Create Account"}
            </button>
          </div>

          {/* mutation error */}
          {mutation.isError && (
            <p className="text-red-500 bg-white p-1">
              {mutation.error.message}
            </p>
          )}

          {/* mutation success */}
          {mutation.isSuccess && (
            <p className="text-green-500 bg-white p-1">
              Registration successful!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

