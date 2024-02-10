import React, { useEffect, useState } from 'react'
import { Cartstate } from '../context/Context'
import './cartpage.css'
function Cartpage() {
    const { state: { cart }, dispatch } = Cartstate()
    const [total, settotal] = useState()
    useEffect(() => {
        settotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        )
    }, [cart])
    return (
        <div>
            {cart.length > 0 &&
                (

                    <div>
                   {
                    cart.map((c)=>(
                        <div className='cartpage'>
                        <p>{c.prod_name}</p>
                        <p>{c.price}</p>
                        <button onClick={()=>{
                            dispatch({
                                type:"REMOVE",
                                payload:c
                            })
                        }} className='button'>Remove</button>
                      </div>
                    ))
                   }
                    <div>
                        <div>
                            <p>Number of Products : {cart.length} </p>
                        </div>
                        <div>
                            <p> TOTAL :  {total}</p>
                        </div>
                    </div> 

                    </div>
                )}
        </div>
    )
}

export default Cartpage
