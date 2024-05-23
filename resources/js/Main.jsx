import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
    return (
        <div className="bg-gray-50">
            <Header />
            <NavBar />
            <Dashboard />
        </div>
    );
}

export default App;
