import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AboutScreen } from '../components/AboutScreen';
import { HomeScreen } from '../components/HomeScreen';
import { DetailScreen } from '../components/Products/DetailScreen';
import { ProductsScreen } from '../components/Products/ProductsScreen';
import { NavBar } from '../components/ui/NavBar';

export const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<div>
					<Routes>
						<Route path="product" element={<ProductsScreen />} />
						<Route path="home" element={<HomeScreen />} />
						<Route path="about" element={<AboutScreen />} />
						<Route path="detalle">
							<Route path=":id" element={<DetailScreen />} />
						</Route>
						<Route path="/" element={<ProductsScreen />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};
