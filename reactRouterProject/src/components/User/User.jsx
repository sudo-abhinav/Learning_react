
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
if(id === String){
   console.log("dfg");
  }
  return <div className="text-3xl bg-gray-500 p-4 text-white text-center">User : {id} </div>;
}

export default User;
