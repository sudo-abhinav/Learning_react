import  { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    const data = useLoaderData();
        //   const [data, setData] = useState([]);

    //   useEffect(() => {
    //     fetch("https://api.github.com/users/sudo-abhinav")
    //       .then((res) => res.json())
    //       .then((rawData) => {
    //         console.log(rawData);
    //         setData(rawData);
    //       });
    //   }, []);
  return (
    <>
    {/* <div className="text-center  bg-gray-600 text-white p-4 text-2xl">
        Link:  <p>https://api.github.com/users/<input className="rounded-xl px-3 mb-6 font-medium text-stone-800" type="text"/></p>
      </div> */}
      <div className="text-center  bg-gray-600 text-white p-4 text-3xl">
        Github Followers : {data.followers} 
      </div>
      <div className="text-center bg-gray-600 text-white p-4 text-3xl">
        Github Repo : {data.repos_url}
      </div>
    </>
  );
}

export default Github;

export const GithubUserInfo = async () => { 
    const response = fetch(`https://api.github.com/users/sudo-abhinav`);
    return (await response).json();
}