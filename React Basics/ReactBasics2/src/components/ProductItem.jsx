import React from 'react'

function ProductItem(props) {
  return (
    <div>
      <Card >
        <ProductDate date= {props.date} />
        <div>
            <h2>{props.title}</h2>
        </div>
      </Card>
    </div>
  )
}

export default ProductItem
