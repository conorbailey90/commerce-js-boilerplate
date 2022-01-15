import React from "react"

export default function Product({name, price}){
    return (

        <React.Fragment>
            {name}: {price.formatted_with_symbol}

        </React.Fragment>

    )
}