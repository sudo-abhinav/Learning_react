import "./App.css";
import Card from "./components/card";
import userData from "./data/randomData.json";
function App() {
  //  function ALlData(userData) {
  //  for (let key in userData) {
  //      return (userData[key]);
  //  }
  //  }
  console.log(userData[0].position);
  // https://www.devui.io/components/navbars
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4">Hello Abhinav</h1>
      <Card
        name={userData[0].name}
        position={userData[0].position}
        description={userData[0].description}
      />
      <Card
        name={userData[1].name}
        position={userData[1].position}
        description={userData[1].description}
      />
      <Card
        name={userData[2].name}
        position={userData[2].position}
        description={userData[2].description}
      />
      {/* <Card /> */}
    </>
  );
}

export default App;
