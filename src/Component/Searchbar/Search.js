import React from 'react'
import { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css"
import Star from '../Star/Star';
import Filter from "../Filter/Filter"
import { useNavigate } from "react-router-dom";

let allData=[];

function Search() {
  const navigate = useNavigate();
  const [val,setVal]=useState(false);
  const [data,setData]=useState([]);

  const[search,setSearch]=useState("");
  const [price , setPrice]=useState(400);
  const [stars , setStars]=useState(5);
 


  useEffect(() => {
    fetch("https://zevi-server-iamsid0908.onrender.com/api/product")
    .then(res=>res.json())
    .then((data1)=>{
      allData=data1;
      console.log(allData)
      setData(data1);
      
      
    })
  }, [])

  // #### Search bar filter
const searchFunction=(e)=>{
  const fieldvalues=e.target.value;
  console.log(fieldvalues);
  const newData=allData.filter((DressNames)=>{
    return DressNames.name.toLowerCase().startsWith(fieldvalues.toLowerCase());
  })
  setData(newData);
  setSearch(fieldvalues);
}
  const handle=(e)=>{
    setVal(val=> !val);
  }
 
  

  const handleKeypress=(e)=>{
    if (e.keyCode === 13) {
      handle();
    }
  }


  // price range filter
  const handleInput = (e) => {
    setPrice(e.target.value);
    const findPrice=e.target.value;
    console.log(findPrice);

    const pricedata=allData.filter((Dress)=>{
       return Dress.price<=findPrice;
    })
    setData(pricedata);
    setPrice(findPrice)
  };

  const handleInput1 = (e) => {
    setStars(e.target.value);
    const findStars=e.target.value;
    console.log(findStars);

    const stardata=allData.filter((star)=>{
       return star.rating<=findStars;
    })
    setData(stardata);
    setStars(findStars)
  };


  const handleProduct = ()=>{
    navigate("/product")
  }



  return (
    
    <div className='home'>
      <div className='logo'>
        <div className='logo1'></div>
      </div>

      <div className='all-input-container'>
      <div className='input'>
      <input type="text" placeholder='Search' value={search}  onClick={handle} onKeyPress={handleKeypress} onChange={searchFunction}></input>
        <SearchIcon  sx={{ fontSize: 30 }} className="search-icon" />
      </div>
      </div>
   
        {
          (val)?
          
        <div className='suggetion'>
          
          <h3>Latest Trends</h3>
          
          <div className='latest-trends'>
          {
            data.map(product=>{
              return <>
               <h6>
                <div className='card'>
                <img src={product.image} alt="" width="150" height="200"></img>
                <p>{product.name}</p>
                </div>
              </h6>
              </>
               })
               }
         
          </div>

          
          </div>
        

        
        :(
          <div></div>
        )
        }
        
        <div className='all-product'>
        <div className='filters'>  
        <h1>Search Results</h1>

          <div className='filter-brands'>
         <Filter/>
          </div>

          <div className='price-filter'>
            <h3>Price Range</h3>
          <input type="range" onInput={handleInput} min="100" max="1000" value={price} />
          <p>Price Rs.{price}</p>
          </div>

          <div className='rating-filter'>
          <h3>Rating Range</h3>
          <input type="range" onInput={handleInput1} min="1" max="5" value={stars} />
          <p>Stars:{stars}</p>
          </div>
          </div>
          <div className='list'>

          {
            data.map(product=>{
              return <>
                <div className='card-list'onClick={handleProduct}>
                <div className='header'>
                <img src={product.image} alt="" width="200" height="270" className='header-img'></img>
                <p className='text' >View Product</p>
                {/*  */}
                </div>
                <p>{product.name}</p>
                <p className='price'>Rs.{product.price}</p>
                <Star rating={product.rating}/>
                </div>
              </>
               })
               }
          </div>
        </div>

    </div>
  )
}

export default Search