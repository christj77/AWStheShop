import React, { useState } from 'react';
import Link from 'next/link';

function Nav() {
  const [cartItemCount, setCartItemCount] = useState(7); // Example initial count

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='logo'><h1>TheShop</h1></div>
        <div className="flex justify-between">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign-Up</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services Offered</Link>
          <Link href="/cart">
            <div style={{ position: 'relative' }}>
              <img src="/products/icon.png" alt="Fast Delivery" />
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: 'red',
                    borderRadius: '50%',
                    padding: '4px',
                    fontSize: '12px',
                    color: 'white',
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

