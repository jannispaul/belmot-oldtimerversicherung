import React from 'react'
import styled from 'styled-components'

import '../theme/font-face.css'
import '../theme/variables.css'
import '../theme/styles.css'

import NavBar from '../components/Navigation/NavBar'
import MobileMenu from '../components/Navigation/MobileMenu'
import Footer from  '../components/Footer'




const StyledApp = styled.div`
  height:100%;
  background: linear-gradient(180deg, var(--color-primary) 50%, var(--color-darker) 50%);
` 
const Main = styled.div`
  margin-top: 50px;
  @media (min-width:769px){
    margin-top: 100px;
  }
`


class StandardLayout extends React.Component {
  state = {
    mobileMenuOpen: false
  }
  burgerButtonToggleClickHandler = () => {
    this.setState((prevState) => {
      // console.log('toggle')
      return {mobileMenuOpen: !prevState.mobileMenuOpen}
    } );
  }

  render(){
    return(
      <>
        <StyledApp>
          <NavBar 
              burgerButtonClickHandler={this.burgerButtonToggleClickHandler} 
              showMobileMenu={this.state.mobileMenuOpen}  
              />
          {/* The following line causes an error */}
          <MobileMenu showMobileMenu={this.state.mobileMenuOpen} /> 
          <Main>{this.props.children}</Main>
          <Footer />
        </StyledApp>
      </>
    )
  }
}

export default StandardLayout