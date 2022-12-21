import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Coffe } from './componentes/Coffe';
import { Usuarios } from './componentes/Usuarios';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div>

    <table style="background-color:powderblue;width:100%">
    <tr>
        <th style="width:70%">
          <table style="background-color:blue;width:100%">
            <tr>
              <th style="width:10%">Logo</th>
              <th style="width:30%">Busqueda</th>
              <th style="width:30%">Perfil</th>
              <th style="width:20%">Perfil</th>
              <th style="width:10%">Opciones</th>
            </tr>
          </table>   
        </th>

    </tr>
    <tr>
      <td>
       <table style="background-color:MediumSeaGreen;width:100%">
          <tr>
            <td style="width:20%" >
              <table style="background-color:tomato;width:100%" >
                 <tr><td>1</td></tr>
                 <tr><td>2</td></tr>
                 <tr><td>3</td></tr>
                 <tr><td>4</td></tr>
             </table>
            </td>
            <td style="width:60%">
            	<table style="background-color:red;width:100%">
                   <tr>
                   	<td style="height:400px">1</td>
                   </tr>                
                </table>
            </td>
            <td style="background-color:Orange;width:20%">derecho</td>
          </tr>
        </table>
      </td>
    </tr>

  </table>
    </div>

    <Usuarios nombre="juan" direccion="calle:20"
    />

    <Usuarios  />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
