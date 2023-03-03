import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App h-screen grid grid-rows-6">
      <div className="h-full w-full row-span-1"><Menu /></div>
      <div className="h-full w-full row-span-5"><Outlet /></div>
    </div>
  );
}

export default App;
