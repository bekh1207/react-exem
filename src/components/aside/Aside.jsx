import React, { useContext, useRef, useState } from 'react'
import { Context } from '../../App'
import "./Aside.css"

function Aside() {
  const { cost, setCost } = useContext(Context)
  const priceRef = useRef()
  const [wallet, setWallet] = useState()
  return (
    <aside>
      <div className="all-cost">
        <div className='cost-sum'>
          {cost > 0 ? `${cost} sum` : 'sum mavjud emas'}
        </div>
        <div className="add-price">
          <input type="number" ref={priceRef} placeholder='add wallet' />
          <button onClick={() => setCost(priceRef.current.value)}>add price</button>
        </div>
      </div>
    </aside>
  )
}

export default Aside