import React from 'react'
import './Addbutton.css'
import { Stack } from 'react-bootstrap'
import { Cartstate } from '../context/Context'
function Addbutton({ sub_categories: { products } }) {
    const { state: { cart }, dispatch } = Cartstate()
    return (
        <Stack>

            {
                products.map((p) => (


                    <div className="singlep">

                        <div>{p.prod_name}</div>
                        <div className="addcart">
                            <div> {p.price}</div>
                            <button onClick={() => dispatch({
                                type: "ADD",
                                payload: p
                            })}>Add</button>
                        </div>

                    </div>



                ))
            }

        </Stack>
    )
}

export default Addbutton
