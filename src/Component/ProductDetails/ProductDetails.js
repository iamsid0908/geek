import React from 'react'
import "./ProductDetails.css"
function ProductDetails() {

    const product =[
        {
            id:1,
            image:"https://images.ctfassets.net/5de70he6op10/4jUSQWAeVqsFzyWxWuvVBc/847a7c253cfe3b5b94400798663e8a5d/527950255-backyardwedding_topper2.jpg?w=600&q=80&fm=jpg&fl=progressive",
            name:"Guest Dress"
        },
        {
            id:2,
            image:"https://www.marklevinson.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw46f4de85/ML_5909_ProductImage_Front_Black.png",
            name:"Head Phones"
        },
        {
            id:3,
            image:"https://m.media-amazon.com/images/I/71rp6-AaiYL._AC_UY1100_.jpg",
            name:"Specs glass"
        },
    ]
    

  return (
    <div>
        <div className='header'>
            <div className='left'>logo</div>
            <div className="right">
                <a>About</a>
                <a>Service</a>
                <a>Shop</a>
                <a>Cart</a>
            </div>
        </div>
        <div className='container'>
            <div className='box'>
                <div className='product-img'></div>
                <div>
                    <h1>The Best Watch</h1>
                    <p className='desc'>Good and best seller</p>
                    <p className='desc1'>4.6</p>
                    <p>Sizes</p>
                    <table >
                        <tr className='table'>
                            <td className='table'>S</td>
                            <td className='table'>M</td>
                            <td className='table'>L</td>
                            <td className='table'>XL</td>
                        </tr>
                     </table>

                     <button className='buy-btn'>Buy Now</button>
                     <button className='buy-btn'>Add to cart</button>
                </div>

            </div>

        </div>

        <div>
            <h3>Similar Products</h3>
            <div className='recommend'>
                {
                    product.map((item)=>(
                        <div className='box2'>
                            <p  style={{ backgroundImage: `url(${item.image})` }} className='img'></p>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ProductDetails