// Write your Character component here
import React from 'react';
import styled from 'styled-components';



const Character = props =>{

    return(
    <CardsStyle>
    <div>     
        <img top width="100%" src={props.image} alt= "image" />
            <div>
                <h2>NAME: {props.name}</h2>
                    <h3>STATUS:  {props.status}</h3>
                    <h3>SPECIES {props.species}</h3>
                
        </div>
      </div>
    </CardsStyle>
    )
}

export default Character

const CardsStyle = styled.div`
background: black;
color: #6cac6c;
`