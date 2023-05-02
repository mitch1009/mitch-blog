import React from 'react'
import ReactDOM from 'react-dom/client'
import {MitchComponent} from "./App"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MitchComponent title={"Giberish"} description={"My Best Description"} />
  </React.StrictMode>,
)
