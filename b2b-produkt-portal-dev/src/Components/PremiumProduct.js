import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import './PremiumProduct.css'
import { graphCmsImageUrl } from '../lib'
import {Link} from 'react-router-dom'
import {Label,Card,Grid,Icon} from 'semantic-ui-react'

const PremiumView =({data:{loading,error,product}}) =>{
    if(error) return <div>Error</div>
    if(loading) return <div>Loading</div>
    return(
        <article style={{backgroundColor:'#faf9f7'}}>
        <Grid.Row>
        <Grid.Column>
        <Link className="close-search" to="/">Go Back</Link>
          <Icon name='share alternate' size='big' style={{float:'right'}}/>
        </Grid.Column>
        </Grid.Row>
      <main>
      { product ?
        ( <div className='Product-placeholder'>
        { product.image.length > 0 ? (
        <img
          className="center"
          alt={product.name}
          src={graphCmsImageUrl(product.image[0].handle, {height:650, width: 366, fit: 'crop'})}
      /> ) : ( <img  tag='alternative image' className="center" src='https://media.springernature.com/lw410/springer-cms/rest/v1/img/10046734/v2/4by3?as=jpg'/> ) }
           <h3>{product.name}</h3>
           <div className='description-product container'>{product.description}</div>
           <div className='Product-tags-view'>
                {product.tags.map(tag => {
                  return <Link className='tag' key={tag.slug} to={`/tag/${tag.slug}`} >
                 <Label style={{margin:'5px'}}> {tag.name} </Label>
                </Link> 
                })}
              </div>
              <div className='row'>
            <h4 className='company-name'>{product.company.name}</h4>
            </div>    
      </div>)
      : <div>{console.log(error)}</div>
    }
    </main>
      <Card style={{margin:'15px',justifyContent:'center'}}>
      <Card.Content>
        <Grid.Column>
        <Card.Meta>Name</Card.Meta>
        </Grid.Column>
        <ul>
          <li>Title</li>
          <li>phone: 000 000  000</li>
          <li>email</li>
        </ul>
      </Card.Content>
      </Card>
    </article>
    )
}

export const premiumSingleProduct = gql `
query premiumSingleProduct($id: ID!)  {
    product(where: {id: $id})  {
      id
      slug
      name
      image {
        handle
      }
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
      contact{
        name
        title
        phoneNumber
        emailAddress
        photo{
          handle
        }
      }
      description
    }
  }
`


export default  graphql(premiumSingleProduct, {
    options: ({ match }) => ({
      variables: {
        id: match.params.slug
      }
    })
  })(PremiumView)