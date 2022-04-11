import React, {useState} from 'react'

export const Inventory = () => {
    // const x = Math.floor((Math.random() * 10) + 1)
    // const y = Math.floor((Math.random() * 10) + 1)
    // const z = Math.floor((Math.random() * 10) + 1)
   const x=76;
   const y=2;
   const z= Math.floor(Math.round(50/6))

    const [total, setTotal] = useState(x)
    const [wickets, setWickets] = useState(y)
    const [overs, setOvers] = useState(z)
    
    
    const totalIncrement = () => {
        setTotal(total+1)
    }
    const totalIncrement4 = () => {
        setTotal(total+4)
    }
    const totalIncrement6 = () => {
        setTotal(total+6)
    }
    if({total}>100){
        return(
            <div>
                <h1>India Won</h1>
            </div>
        )
    }
    const wicketIncrement = () => {
        setWickets(wickets+1)
    }
    
    const ballsIncrement = () => {
        setOvers(overs+1/6)
    }
    
  return (
    <div>
        <div className="a">
        <div className="sc">
        <h1>score</h1>
        <h1>{total}</h1>
        </div>
        <div className="wk">
        <h1>Wickets</h1>
        <h1>{wickets}</h1>
        </div>
        <div className="ov">
        <h1>Overs</h1>
        <h1>{overs}</h1>
        </div>
        </div>

        <div className='s'>
        <h1>Add score :</h1>
        <button onClick={totalIncrement}>Add 1</button>
        <button onClick={totalIncrement4}>Add 4</button>
        <button onClick={totalIncrement6}>Add 6</button>
        </div>
       <div className="w">
       <h1>Add Wickets :</h1>
        <button onClick={wicketIncrement}>Add wickets</button>
        </div>
       <div className="o">
       <h1>Add Ball :</h1>
        <button onClick={ballsIncrement}>Add Ball</button> 
        </div>
    </div>
  )
}
