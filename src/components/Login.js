import { useState } from "react";

const Login = () => {
    // const [formData,setformData] = useState("");
    const [email,setemail] = useState("");
    const [Password,setPassword] = useState("");

    const emailChangeHandle = (e) => {
        setemail(e.target.value);
    }
     const PasswordChangeHandle = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Email = ",email);
        console.log("Email = ",Password);
    }
  return (
    <div>
      <form
      onSubmit={submitHandler}
        style={{
          width: "300px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
        <input
          
          onChange={emailChangeHandle }
          value ={email}
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
        <input
          onSubmit={submitHandler}
          onChange={PasswordChangeHandle }
          value ={Password}
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
    
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
