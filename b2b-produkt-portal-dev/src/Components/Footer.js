import React from 'react'
import './Footer.css'
import {Grid, GridColumn} from 'semantic-ui-react'

class Footer extends React.Component{
  render(){
    return(
      <div className='footer'>
        <Grid columns='equal'>
          <Grid.Row  columns={3}>
           <Grid.Column className='link-section'>
              Link Section
           </Grid.Column>
           <Grid.Column className='abou-section'>
          About Section
           </Grid.Column>
           <Grid.Column className='legal-section'>
            Legal Section
           </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <GridColumn className='second-row'>
            Powered by Wiedergrün   <a >Wiedergrün</a>
            </GridColumn>
          </Grid.Row>
        </Grid>
        </div>
    )
  }
}

export default Footer

// The Footer should have three columns:
// Page Link Section
// About Section
// Legal Section
// Below these columns a second row full width.

// The columns and the other row should have the same width than the main page grid.

// Page Link Section content: Simple list of links
// About Section content: A text field. Can be demo content for now
// Legal Section: A Text field and a list of links below. (Privacy policy, etc)
// Second row content: "Powered by Wiedergrün" with Wiedergrün logo and link to company page.

// For now please create the structure and not the content. No matter if it is 3 or 5 links in the list etc.