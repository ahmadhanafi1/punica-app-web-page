import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Layout from '../components/Layout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Features from '../pages/Features';
import Pricing from '../pages/Pricing';
  
const Router = createBrowserRouter([
	{
	  element: <Layout />,
	  errorElement: <Error />,
	  children: [
		{
		  path: "/",
		  element: <Home />,
		},
		{
		  path: "/features",
		  element: <Features />,
		},
		{
		  path: "/pricing",
		  element: <Pricing />,
		},
	  ],
	},
	
  ]);


export default Router