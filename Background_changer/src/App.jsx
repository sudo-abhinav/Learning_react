import { useState } from "react";
import { LampDemo } from "./components/LampDemo";

function App() {
  const [color, setColor] = useState("#00ff87");

  return (

    // <LampDemo/>
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      {/* <div className="fixed flex flex-wrap justify-center top-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-gray-100 px-3 py-4 rounded-xl ">
          <h1 className="text-2xl font-bold justify-center flex  ">Color name is {color} </h1>
          <input
            className="outline-double px-2 w-30"
            placeholder="enter color name"
          />
          <button
            className="bg-orange-500 rounded-xl px-2"
            onClick={() => setColor(color)}
          >
            Submit
          </button>
        </div>
      </div> */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-white px-3 py-4 rounded-xl ">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:animate-bounce animate-thrices"
            style={{
              backgroundColor: "red",
            }}
            onClick={() => setColor("red")}
          >
            Red{" "}
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:animate-bounce animate-thrices"
            style={{
              backgroundColor: "green",
            }}
            onClick={() => setColor("green")}
          >
            Green{" "}
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  text-white shadow-lg hover:animate-bounce animate-thrices"
            style={{
              backgroundColor: "gray",
            }}
            onClick={() => setColor("gray")}
          >
            Gray{" "}
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:animate-bounce animate-thrices"
            style={{
              backgroundColor: "pink",
            }}
            onClick={() => setColor("pink")}
          >
            Pink{" "}
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:animate-bounce animate-thrices"
            style={{
              backgroundColor: "Black",
            }}
            onClick={() => setColor("black")}
          >
            Black{" "}
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:animate-bounce animate-thrices"
            style={{
              backgroundColor: "Blue",
            }}
            onClick={() => setColor("blue")}
          >
            Blue{" "}
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:animate-bounce animate-thrices"
            style={{
              backgroundColor: "Orange",
            }}
            onClick={() => setColor("Orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
