import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./views/partials/Header";
import Footer from "./views/partials/Footer";



// Lazy components

const LazyComponents = {
	Home: lazy(() => import("./views/Home")),
	About: lazy(() => import("./views/About")),
	Events: lazy(() => import("./views/Events")),
	Community: lazy(() => import("./views/Community")),
	Contact: lazy(() => import("./views/Contact")),
	Gaming: lazy(() => import("./views/Gaming")),
	Jackpot: lazy(() => import("./views/Jackpot")),
	ThreeCard: lazy(() => import("./views/ThreeCard")),
	GamingThree:  lazy(() => import("./views/GamingThree")),
	
};

function App() {
	return (
		<>
		
			<div className="app-default " data-bs-theme="light">
				<div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
					<Suspense fallback={"loading"}>
						<Header />
						<Routes>
							<Route path="/" element={<LazyComponents.Home />} />
							<Route path="/about" element={<LazyComponents.About />} />
							<Route path="/events" element={<LazyComponents.Events />} />
							<Route path="/games" element={<LazyComponents.Gaming />} />
							<Route path="/community" element={<LazyComponents.Community />} />
							<Route path="/contact" element={<LazyComponents.Contact />} />
							<Route path="/Jackpots" element={<LazyComponents.Jackpot />} />
							<Route path="/three-card" element={<LazyComponents.ThreeCard />} />
							<Route path="/gaming" element={<LazyComponents.GamingThree />} />
						</Routes>
						<Footer />
					</Suspense>
				</div>
			</div>
		</>
	);
}

export default App;
