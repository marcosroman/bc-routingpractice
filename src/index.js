import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import './index.css';

import Root from "./routes/root";
import Home from "./routes/home";
import ShowMsg from "./routes/showmsg";
import ShowMsgWithColors from "./routes/showmsgwithcolors";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{ 
		path: "/home",
		element: <Home />,
	},
	{
		path: "/:msg",
		element: <ShowMsg />
	},
	{
		path: "/:msg/:fgcolor/:bgcolor",
		element: <ShowMsgWithColors />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);

