import React, { Component } from 'react'
import FormNumeros from './components/FormNumeros'
import From from './components/From' 
import './styles.css';
const App = () => {
    return (
      <div className='App'>        
        <h2 className="display-1" style={{textAlign: "center"}}>Aleatorizando ando</h2>
        <div className='container-app'>
          <FormNumeros/>
          <From />
          <div className='container text-center display-6'>
          Dayro Jacob Martinez
          <br/>
          Marlon David Valencia
          </div>
        </div>
      </div>
    )
}

export default App
