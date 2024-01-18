import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Layout from '../components/Layout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Features from '../pages/Features';
  
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
	  ],
	},
	
  ]);


export default Router