import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Layout from '../components/Layout';
import Error from '../pages/Error';
import Home from '../pages/Home';
  
const Router = createBrowserRouter([
	{
	  element: <Layout />,
	  errorElement: <Error />,
	  children: [
		{
		  path: "/",
		  element: <Home />,
		},
	  ],
	},
	
  ]);


export default Router