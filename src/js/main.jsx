
import ReactDOM from 'react-dom/client'
import React from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Lighted from './components/Lighted';


const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<Lighted/>);



 