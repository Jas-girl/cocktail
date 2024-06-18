import React from 'react';
import styled from 'styled-components';
import Displaysection from './Displaysection';

const TopSection = styled.div`
  width: 100%;
`;

const NavBar = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;

  .title {
    display: flex;
    gap: 10px;

    h1 {
      font-size: 32px;
      color: white;
      font-weight: bold;
    }

    span {
      color: red;
    }
  }

  .searchbox {
    display: flex;
    gap: 10px;
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      min-width: 245px;
      border-radius: 5px;
      padding: 10px 10px;
      outline:none;
      &:hover{
        background-color:white;
        border:1px solid white;
        color:black;
      }
    }
  }
  
    button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      align-items: center;
      width: 100%;
    }
  }
`;



const Topsection = ({searchInput,handleSearchChange,SearchBtn,AllBtn,data}) => {
  
  return (
    <TopSection>
      <NavBar>
        <div className="title">
          <h1>
            C<span>O</span>CKTAIL
          </h1>
          <h1>
            Z<span>O</span>NE
          </h1>
        </div>
        <div className="searchbox">
          <input type="text" placeholder="Search Cocktail..." value={searchInput} onChange={handleSearchChange} />
          <button onClick={SearchBtn}>Search</button>
        </div>
      </NavBar>
      
    </TopSection>
   
  );
};
<Displaysection data SearchBtn loading AllBtn/>
export default Topsection;
