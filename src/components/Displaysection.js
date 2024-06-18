import React,{useState} from 'react'
import styled from 'styled-components';
import Recipe from './Recipe';

const Container =styled.div`
width:100%;
min-height: calc(100vh - 150px);
background:url("./images/wp1835925.webp");
background-size:100% 100%;
opacity:0.5;
.btn{
    display:flex;
     justify-content:flex-end;
     position:absolute;
     bottom:0;
     right:0;
  }

button {
   padding:10px;
    max-height:50px;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: darkred;
    }
  }`;
const CockContainer =styled.div`
.cockcontainer{
    display:flex;
}
max-width:1400px;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
gap:20px;
padding-top:20px;
color:white;
`;
const DisplayCards=styled.section`
width: 340px;
  height: 167px;
  border: 0.66px solid;
  gap:20px;

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
  }
  
 
  `;

const Displaysection = ({data,loading,err}) => {
    const[selectedDrink,setSelectedDrink]=useState(null)
function Info(drink){
  const contentdisplay=document.querySelector(".infocontainer")
  const x=document.querySelector(".cockcontainer");
  if(contentdisplay.style.display==="none"){
    contentdisplay.style.display="none";
    x.style.display="flex";
    setSelectedDrink(null);
  }
  else{
    contentdisplay.style.display="flex";
    x.style.display="none";
    setSelectedDrink(drink);
  
  }
}
function Back(){
    const x=document.querySelector(".cockcontainer");
    x.style.display="flex";
    setSelectedDrink(null);
    

  }
  return (
    <div><Container>
        <CockContainer className="cockcontainer">
        {err?err:" "}
        {loading?<p>loading...</p>:(
        data.map((drink) => (
          <DisplayCards key={drink.idDrink}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <div className="info">
                <h1>{drink.strDrink}</h1>
                <p>Category-{drink.strCategory}</p>   
            </div>
            <div className="btn">
            <button onClick={()=>Info(drink)}>More Info</button>
            </div>
            
          </DisplayCards>
         
        )))}
        
      </CockContainer>
      
      <Recipe Back={Back} selectedDrink={selectedDrink}/>
       
    </Container></div>
  )
}

export default Displaysection