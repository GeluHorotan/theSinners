import React from 'react'
import styled from 'styled-components'
import Button from './Button'



 const SponsorItem = ({setImage, setAlt}) => {
  
  return (
    <MainContainer>
    <ImgStyle src={setImage} alt={setAlt} />
    
    <SecondaryContainer>
    <PStyle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, explicabo atque dolorum soluta itaque est voluptas porro, sapiente corporis iste distinctio vero, nemo id hic eveniet placeat sed officiis officia?0</PStyle>

    <Button setClassName='red'  isLink setLink = "/" >SHOP NOW</Button>

    </SecondaryContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div `
  display: flex;
  flex-direction: row;
    width: 30%;
  align-items: center;
    margin: 10rem auto;



  

`
const PStyle = styled.p `
  color: white;
`

const ImgStyle = styled.img `
  align-items: center;
  justify-content: center;
  width: 15rem;
  
  
`



const SecondaryContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 1rem;

    a {
      font-size: 1.5rem;
    }

      .red {
    color: red;
  }


`

export default SponsorItem
