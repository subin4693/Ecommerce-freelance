import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast("Please Enter a valid email.");
      return;
    }

    if (password.trim() === "") {
      toast("Please Enter a valid password.");
      return;
    }

    if (password != confirmPassword) {
      toast("Password and confirm password must be same...");
      return;
    }

    // navigate("/");
  };

  return (
    <div className="flex justify-center flex-col  items-center h-full p-1 p-10">
      <h1 className="text-3xl font-bold font-mogra bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Welcome back
      </h1>
      <p>Enter your account details.</p>
      <form
        className="w-full md:w-3/4  gap-5 mt-5 flex flex-col items-center"
        onSubmit={handleSignin}
      >
        <Input
          className="w-full rounded-3xl"
          placeholder="Email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          className="w-full  rounded-3xl"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full text-black duration-50  rounded-3xl">
          Signin
        </Button>
        <p>
          Don't have any account{" "}
          <Link
            to="/auth/signup"
            className="text-blue-500 font-mogra underline"
          >
            Create new.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
