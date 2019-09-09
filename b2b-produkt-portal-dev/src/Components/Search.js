import React  from 'react'
import gql from 'graphql-tag'
import {graphql}  from 'react-apollo'

class Search extends React.Component{
  state={
    load: false
  }

  handleChange = e => {
    e.preventDefault()
    
  }

  handleSearch = e =>{
    e.preventDefault()

  }

  function 
  render(){
    return(
      <div className='search'>
        <input  type='text' className='search'/>
      </div>
    )
  }
}


export const products = gql`
query products($first: Int!, $skip: Int!){
  products(first: $first, skip: $skip, orderBy: premium_DESC) {
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
        }     
      image{
      id
      handle
       }
  },
  productsConnection {
    aggregate {
      count
    }
  }
}
`

export default graphql(products)(Search)