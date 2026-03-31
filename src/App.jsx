import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectProduct, setSelectProduct] = useState("product");
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen">
      <Navbar cartItems={cartItems} setSelectProduct={setSelectProduct} />

      <main className="pt-20">
        <HomePage 
          cartItems={cartItems} 
          setCartItems={setCartItems} 
          selectProduct={selectProduct} 
          setSelectProduct={setSelectProduct} 
        />
      </main>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;




// echo "# DigiTools_Platfrom" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Rafiul-goni-rayhan/DigiTools_Platfrom.git
// git push -u origin main
//git config --global alias.up '!git add . && git commit -m "update" && git push'
//git up