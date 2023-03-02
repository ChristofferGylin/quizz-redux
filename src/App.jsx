import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
