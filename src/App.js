import MainLayout from "./layout/index";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="" element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
