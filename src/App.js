import React from 'react';
import Navbar from './Components/Navbar';

import { Provider } from 'react-redux';
import Home from './Components/Home';
import store from './Redux/store'
import { Route,Routes,Navigate  } from 'react-router-dom';
import './App.css'
import DetailView from './Components/DetailView';
import NotFound from './Components/NotFound';





function App() {
  return (
    <Provider store={store}>
    
        <div className="App">
          
          <Navbar />
          <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path="/habit/:id" element={<DetailView />} />  
          {/* <Route path="*" element={<NotFound />} />   */}
          <Route path="/404" element={<NotFound />} />  {/* Route for Not Found page */}
          <Route path="*" element={<Navigate to="/404" />} />  {/* Redirect all other paths to /404 */}
          </Routes>
        
       
        </div>
  
    </Provider>
  );
 
}

export default App;
