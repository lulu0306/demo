import React from 'react'
import { graphCmsImageUrl } from '../lib'
import './ProductCard.css'

class CompanyLogo extends React.Component{
  render() {
    if(this.props.logo) return <img className='company-logo'
      alt={this.props.name}
      src={graphCmsImageUrl(this.props.logo.handle, {height:60})} />
    if(this.props.name) return <div className='company-name'>{this.props.name}</div>
    return <div />
  }
}

export default CompanyLogo
