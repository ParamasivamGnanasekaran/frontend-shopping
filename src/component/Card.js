import React from 'react';
import { NEGATIVE, POSITIVE } from '../constData/SortData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {
  const { product } = props


  return (
    <div className="card" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', borderRadius: '5px', marginBottom: '40px', padding: '20px' }}>
      <img src={product.image} alt="Avatar" style={{ width: "100%", height: '300px' }} />
      <div style={{ textAlign: 'center' }}>
        <div>
          <div style={{ backgroundColor: 'grey' }}>{product.title} </div>
          <p style={{ height: '100px', width: '100%', overflow: 'auto', border: '8px solid none', padding: '2%' }}>{product.description}</p>
        </div>
        <div>
          <div style={{ backgroundColor: 'grey' }}>RS.{product.price}</div>
          <p>left:{product.productCount}</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'inline', }} >selected : {product.quantity ? product.quantity : 0}</div>
        <div style={{ display: 'inline' }} >Total price: {product.quantity ? product.quantity * product.price : 0}</div>
      </div>    
      {!product.quantity ?
      <button style={{ backgroundColor: '#1E90FF', border: 'none', display: 'inline', margin: "1rem", textDecoration: 'none', color: 'white', height: '40px' }} onClick={() => props.addToCart(product,POSITIVE)} disabled={!product.productCount} >
        Add To Card
      </button>
      :  <div  className="d-flex justify-content-end" style={{ margin: "1rem", height: '40px' }} >
        { product.quantity > 0 &&
       // <button  >
                 <FontAwesomeIcon icon={faCircleMinus}  style={{ color: '#1E90FF', border: 'none', marginTop:'10px',height: '30px', cursor:'pointer' }}  className="d-inline" onClick={() => props.addToCart(product,NEGATIVE)} />
             //  </button> 
            }
               <p  className="d-inline p-2" style={{ marginRight: '10px', marginTop:'5px'}}>{product.quantity}</p>
               {(POSITIVE + product.quantity) <= product.productCount &&
              //  <button>
               <FontAwesomeIcon icon={faCirclePlus} style={{ color: '#1E90FF', border: 'none', marginTop:'10px',height: '30px', cursor:'pointer' }}  className="d-inline" onClick={() => props.addToCart(product,POSITIVE)} />
              //  {/* </button> */}
               }
               </div>
               }
    </div>
  );
};