import React from 'react'
import styled from 'styled-components';
const InfoContainer=styled.div`
max-width:1400px;
display:flex;

 justify-content:center;
 align-items:center;
 padding-top:20px;
color:white;

 .infocontainer{
   display:none;
 }`;

 const DisplayCards1=styled.div`
 display:flex;
 flex-direction:column;
 
   align-items:center;
   justify-content:center;
 gap:10px;
 width: 1000px;
 height:80vh;
 border: 0.66px solid;
 border-image-source: radial-gradient(
     80.69% 208.78% at 108.28% 112.58%,
     #eabfff 0%,
     rgba(135, 38, 183, 0) 100%
   ),
   radial-gradient(
     80.38% 222.5% at -13.75% -12.36%,
     #98f9ff 0%,
     rgba(255, 255, 255, 0) 100%
   );

 background: url(.png),
   radial-gradient(
     90.16% 143.01% at 15.32% 21.04%,
     rgba(165, 239, 255, 0.2) 0%,
     rgba(110, 191, 244, 0.0447917) 77.08%,
     rgba(70, 144, 213, 0) 100%
   );
 background-blend-mode: overlay, normal;
 backdrop-filter: blur(13.1842px);
 border-radius: 20px;
 display: flex;
 padding: 8px;
 img{
   opacity:1;
   border-radius: 20px;
   width:200px;
   height:200px;
  
 }
 .info{
   display:flex;
   flex-direction:column;
   font-size:24px;
   justify-content:center;
   align-items:center;
 }`;
const Recipe = ({Back,selectedDrink}) => {
  return (
    <div><InfoContainer className="infocontainer">
    {selectedDrink?
    <DisplayCards1 >
      
          <img src={selectedDrink.strDrinkThumb} alt={selectedDrink.strDrink} />
          <div className="info">
              <h1>Name-{selectedDrink.strDrink}</h1>
              <p>Category-{selectedDrink.strCategory}</p>
              <p>Glass-{selectedDrink.strGlass}</p>  
              <p>Ingredients-{selectedDrink.strIngredient1},{selectedDrink.strIngredient2},{selectedDrink.strIngredient3},{selectedDrink.strIngredient4},{selectedDrink.strIngredient5}</p> 
              <p>Instructions-{selectedDrink.strInstructions},{selectedDrink.strInstructionsDE},{selectedDrink.strInstructionsES},{selectedDrink.strInstructionsIT}</p>
              <p>Measures-{selectedDrink.strMeasure1},{selectedDrink.strMeasure2},{selectedDrink.strMeasure3},{selectedDrink.strMeasure4}</p>
              <div className="btn">
          <button onClick={Back}>Back</button>
          </div>
          </div>
    </DisplayCards1>:""
    }
    </InfoContainer></div>
  )
}

export default Recipe