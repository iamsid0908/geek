import './App.css';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Search from './Component/Searchbar/Search';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Search/>}></Route>
      <Route exact path='/product' element={<ProductDetails/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
