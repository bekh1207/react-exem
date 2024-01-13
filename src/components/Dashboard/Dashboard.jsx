import React, { useContext, useRef } from 'react'
import './Dashboard.css'
import { Context } from '../../App'
import Table from '../Table/Table'

function Dashboard() {
  const { setHistory, history, setCost, cost } = useContext(Context)
  const sendHandler = e => {
    e.preventDefault()
    const forma = new FormData(e.target)
    const { kimdan, kimga, card } = Object.fromEntries(forma.entries())
    const newProd = {
      kimdan,
      kimga,
      card
    }
    if(cost >= card){
      setCost(cost-card)
      setHistory([...history, newProd])
    }
    else{
      alert('mavlog yetarli emas')
      return
    }
    
  }

  console.log(history)
  return (
    <div className="dashboard">
      <div className="parent">
        <form onSubmit={sendHandler} action="">
          <input required type="number" name='kimdan' placeholder='kimdan' />
          <input required type="number" name='kimga' placeholder='kimga' />
          <input required type="number" name='card' placeholder='summa' />
          <button>send</button>
        </form>
      </div>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default Dashboard