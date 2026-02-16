import { useState,useEffect } from 'react'
import './App.css'
import {api} from './api/api'
import {Frase} from './components/index'
import type {frase} from './types/frase'

const App = ()=> {
 
  return (
    <div className="PaginaPrincipal">
     
      <h1>{<img src={"titulo.png"}></img>}</h1>
      <div className = "cosasEnColumna">
        <div className = "contenidos">
          <div className="cosasCoche">
            <p>{<img src= {"anuncio1.png"}></img>}</p>
            <div className="flecha">
              <p>{<img src= {"flecha.gif"}></img>}</p>
            </div>
            <p>{<img src= {"anuncio2.png"}></img>}</p>           
          </div>
          <div className="elBoton">
             <Frase/>
          </div>
          <div className="FotoFamiliar">
            <p>{<img src={"fotoFamiliar.png"}></img>}</p>
            <p>*THIS SITE IS DESIGNED BY THE SOLAR OPPOSITES</p>
          </div>
        </div>
        <div className="unError">
            <p>{<img src={"alarma.png"} className="alarma"/>}</p>
            <p>{<img src={"error.png"}/>}</p>
            <p>{<img src={"moneda.gif"} className="gifmoneda"/>}</p>
        </div>

      </div>
      <div id="fire-container"></div>
    </div>
  )
}

export default App

