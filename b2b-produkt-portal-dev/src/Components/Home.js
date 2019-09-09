import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import ProductGrid from './ProductGrid'

const Home = ({data:{loading,error,products}}) =>{
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  return <ProductGrid products={products} />
}

const productList = gql`
query products{
    products {
        name
        id
        premium
        slug
        tags {
            name
            slug
          }
          company {
            name
            id
            logo{
              handle
            }
          }
        image{
          id
          handle
        }
        tagLine
    },
    productsConnection {
      aggregate {
        count
      }
    }
}
`

export default graphql(productList)(Home)
