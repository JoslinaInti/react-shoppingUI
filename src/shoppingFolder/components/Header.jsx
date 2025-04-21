import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className="tittle">
                <h1 className='ggg'>Online Shopping</h1>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Men</li>
                <li>
                    women
                </li>
                <li>
                    children
                </li>
                <li>
                    Beauty
                </li>
            </ul>
        </div>
        <div className="search">
            <input type='text' placeholder='search..'/>
        </div>
        <div className="right">
            <div className="signin">Signin/signnup</div>
            <div className="cart">Cart</div>
        </div>
      
    </div>
  )
}

export default Header
