import React from 'react'
import { graphCmsImageUrl } from '../lib'
import {Card,  Image} from 'semantic-ui-react'
import {Link } from 'react-router-dom'
import './ProductCard.css'
import ProductTag from './ProductTag'
import CompanyLogo from './CompanyLogo';

class ProductCard extends React.Component{
  render(){
    const product = this.props.product;
    let productImage;
    if(product.image.length > 0) productImage = (
      <div className='image-container'>
        <Image alt={product.name}
         src={graphCmsImageUrl(product.image[0].handle, {height:200, width: 215})} />
       </div>
           )
          return (    
            <Card  key={`product-${product.id}`}  className='card '>
                  {productImage}
                  <Card.Content>
                  <Card.Header className='product-name'>
                    <Link to={`/product/${product.id}`}>{product.name} </Link>
                  </Card.Header>
                  <div className='Product-tags' >
                   {product.tags.map(tag => <ProductTag key={tag.slug} {...tag}/>)}
                  </div>
                   <Card.Description className='tagLine-card'style={{margin:'5px'}}>
                       {product.tagLine}  
                   </Card.Description>
                   </Card.Content>
                 <Card.Content className='logo-content'>
                <CompanyLogo {...product.company}/>       
             </Card.Content>
          </Card>
       )
     }
    }

  export default ProductCard

