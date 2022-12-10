
import React, { useEffect, useRef, useState } from 'react';
import Card from '../../component/Card';
import { CustomLoading } from '../../component/CustomLoading';
import { Section } from '../../component/section';
import { addProductsToCart } from '../../services/cart';
import { getProducts } from '../../services/products';


export default function Home() {
  const [products, setProducts] = useState([])
  const effectRan = useRef(false)
  const childRef = useRef();
  const [search, setSearch] = useState([])

  useEffect(() => {
    if (effectRan.current === true) {
      const fetchUsers = async () => {
        await getProducts().then((products) => setProducts(products));
      }
      fetchUsers()
    }
    return () => {
      effectRan.current = true
    }
  }, [])

  const callSortBy = (products) => {
    setProducts(products)
  }

  const addToCart = async (product, amount) => {
    if (product.quantity <= product.productCount || product.quantity===undefined) {
      await addProductsToCart(product,amount).then((products) =>  {
        childRef.current.activateFocus(products)
      } );
    }
  }

  return (
    <div className=''>
      <Section products={products} ref={childRef}  callSortBy={(products) => callSortBy(products)} callSearch={(query) => setSearch(query)} />
      {products.length > 0 ?
       <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center', backgroundColor: '#D3D3D3' }}>
        <div style={{ display: 'grid', gridTemplateRows: 'auto auto auto', gridTemplateColumns: '400px 400px 400px', gap: '0px 30px' }}>
          
         {  products.filter(product => {
            if (search === '') {
              return product;
            } else if (product.title.toString().toLowerCase().includes(search.toString().toLowerCase())) {
              return product;
            }
          }).map((product) =>
            <div key={product.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Card key={product.id} product={product} addToCart={(product, amount) => addToCart(product, amount)} />
            </div>
          )}
        </div>
      </div>
      : 
      <div  style={{marginTop:'20%'}}>
         <CustomLoading />
        </div>
      }
    </div>
  );
};