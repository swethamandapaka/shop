import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {
  const [product, setProduct] = useState([
    {
      url:'https://assets-prd.ignimgs.com/2023/04/02/templerun-1680461588903.jpg',
      name :"Temple run",
      category : "games",
      seller : "SM sellers",
      price : 599
    },
    {
      url:'https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg',
      name :"Battle-grounds",
      category : "games",
      seller : "SM sellers",
      price : 2699
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcn2v8wJa1NLicoXU2HKT5qtWrmPsMEr25bzsYGeq&s',
      name :"Candy-crush",
      category : "games",
      seller : "SM sellers",
      price : 699
    },
    {
      url:'https://gamedva.com/wp-content/uploads/2022/06/Subway-Surfers-Match.jpg',
      name :"Subway-surfers",
      category : "games",
      seller : "SM sellers",
      price : 799
    },
    {
      url:'https://yt3.googleusercontent.com/447XAt80-ow7poHghoEV2f_0xf-QypVPzTqEFlwVsvijrS56-dpTU3ICge4OP48V8nfk6x5j',
      name :"Free-fire",
      category : "games",
      seller : "SM sellers",
      price : 2099 
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReu9Uat4gV0lVWjwc-NzBt4vznehGpDsL_Ug&usqp=CAU',
      name :"Stumble-guys",
      category : "games",
      seller : "SM sellers",
      price : 499 
      
    },
    {
      url:'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10idH?ver=489b',
      name :"Fortnite",
      category : "games",
      seller : "SM sellers",
      price : 2099 
    },
    {
      url:'https://www.lifewire.com/thmb/vjMFGVMCiuNWuvxqlqarbBmOFkk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/offlinecars-asphalt8-5bf393bb46e0fb002650eb20.jpg',
      name :"Car-race",
      category : "games",
      seller : "SM sellers",
      price : 1999 
    },
    {
      url:'https://ludoking.com/images/left.png',
      name :"Ludo",
      category : "games",
      seller : "SM sellers",
      price : 399 
    },
    {
      url:'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name :"Chess",
      category : "games",
      seller : "SM sellers",
      price : 799 
    }
  ])
  const [cart ,setCart] = useState([])
 const [showCart,setShowCart] = useState(false)
  const addToCart =(data) =>{
console.log(data)
setCart([...cart,{...data,quantity:1}])
  }
  const handleShow = (value) =>{
   setShowCart(value)
  }
  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>
      {
        showCart ?
        <CartList cart={cart}></CartList>:
        <ProductList product={product} addToCart={addToCart}></ProductList>
      }
      
      
    </div>
      
  );
}

export default App;
