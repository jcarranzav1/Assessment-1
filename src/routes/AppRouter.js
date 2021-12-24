import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AboutScreen } from '../components/AboutScreen';
import { DetailScreen } from '../components/Products/DetailScreen';
import { Home } from '../components/Products/Home';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<div>
					<Routes>
						<Route path="home" element={<Home />} />
						<Route path="about" element={<AboutScreen />} />
						<Route path="detail">
							<Route path=":id" element={<DetailScreen />} />
						</Route>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
