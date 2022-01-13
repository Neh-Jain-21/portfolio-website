// COMPONENTS
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
// CSS
import "./App.css";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <button
                className="btn btn-primary btn-lg rounded-circle fab"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                ^
            </button>
        </>
    );
};

export default App;
