import { useEffect } from "react";
import Aos from "aos";
// CONTAINERS
import MainPage from "src/containers/MainPage";
// CSS
import "src/App.css";
import "aos/dist/aos.css";

const App = () => {
	useEffect(() => {
		// INITIALIZE ANIMATE ON SCROLL
		Aos.init({ duration: 1000, once: true });
	}, []);

	return (
		<>
			<MainPage />
		</>
	);
};

export default App;
