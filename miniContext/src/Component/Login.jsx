import  { useContext , useState } from "react";

import UserContext from "../Context/UserContext";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const {setUser}  =useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventdefault;
    setUser({Username})
  };
  return (
    <div>
      <h1>Login form </h1>
      <input 
      type="text"
       value={Username} 
      onChange={(e)=> setUsername(e.target.value)}
      placeholder="username" />
      <input 
      type="text"
       value={Password}  
        onChange={(e)=>setPassword(e.target.value)}
      placeholder="password" />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
