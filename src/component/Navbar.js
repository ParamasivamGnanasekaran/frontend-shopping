import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,  faHouseChimney} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../App';

export default function Navbar() {
  const {products} = useContext(CartContext)
  return (
    <>
      <nav className="navbar navbar-expand  fixed-top navbar-dark bg-dark" style={{ maxHeight: '60px' }}>
        <div className="container-fluid">
          <div className="navbar-brand"><h4>SOLITON SHOPPING APP</h4></div>
          <div className="collapse navbar-collapse" style={{ display: 'flex', justifyContent: 'flex-end' }} id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/" style={{ margin: "1rem", textDecoration: 'none', color: 'white' }}>
                <span className="fa-layers fa-2x fa-fw">
                <FontAwesomeIcon icon={ faHouseChimney} />
                </span>
                  </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart" style={{ margin: "1rem", textDecoration: 'none', color: 'white' }}>
                 <span className="fa-layers fa-2x fa-fw">
                    <FontAwesomeIcon icon={faShoppingCart} />
                     <span  className='fa-layers-counter fs-1'>{products ?products.length: 0}</span>
                  </span>
                  </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

