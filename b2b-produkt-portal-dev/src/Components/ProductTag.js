import React from 'react'
import {Link} from 'react-router-dom'
import {Label} from 'semantic-ui-react'
import './ProductTag.css'

class ProductTag extends React.Component{
    render(){
      return (
        <Link className='tag' key={this.props.slug} to={`/tag/${this.props.slug}`} >
          <Label className='ui-small-label'>{ this.props.name }</Label>
        </Link>
      )
    }
  }
  
  export default ProductTag
  