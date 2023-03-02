import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
