import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

function App() {

  return (
    <div className="App h-screen flex flex-col">
      <div className="w-full">
        <Menu />
      </div>
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
