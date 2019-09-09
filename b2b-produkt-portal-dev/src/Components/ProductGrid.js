import React from 'react'
import './ProductGrid.css'
import ProductCard from './ProductCard'

class ProductGrid extends React.Component{
    render(){
      return (
        <section className='masonry container'>
          {
            this.props.products.map(product => <ProductCard  product={product} key={product.name} />)
          }
        </section>
      )
    }
  }
  
  export default ProductGrid
  