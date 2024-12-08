import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./views/partials/Header";
import Footer from "./views/partials/Footer";

// Lazy components

const LazyComponents = {
	Home: lazy(() => import("./views/Home")),
	About: lazy(() => import("./views/About")),
	Contact: lazy(() => import("./views/Contact")),
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
							<Route path="/contact" element={<LazyComponents.Contact />} />
						</Routes>
						<Footer />
					</Suspense>
				</div>
			</div>
		</>
	);
}

export default App;
