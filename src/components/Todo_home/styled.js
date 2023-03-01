import styled from "styled-components";

export const DivMain = styled.section `

border: none;
border-radius: 6px;
height: 50%;
max-width: 60%;
min-width: 50%;
display: flex;
flex-direction: column;
align-items: center;
margin: 5% 7% ;
box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
background-color: 	#f1f1f1;
margin-left: 20%;







`

export const Title = styled.h1 `
display: flex;
justify-content: center;
font-family: 'Roboto', sans-serif;
font-family: 'Raleway', sans-serif;
`;

export const InputDiv = styled.div `

font-family: 'Roboto', sans-serif;
font-family: 'Raleway', sans-serif;
justify-content:center ;
display: flex;
align-items: center;
justify-content: center;
margin-left:0;
`;

export const Input = styled.input ` 
font-size: 23px;
border-radius: 10px;
padding: 7px;
box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
border: none;
width: 100%;



`;

export const DivButton = styled.div `
display: flex;
justify-content: space-around;
margin: 10px;
`;

export const ButtonAdd = styled.button `
font-size: 25px;
border-radius: 10px ;
background-color: #08ff00;
border: 2px solid gray;
cursor: pointer;
&:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }


`;

export const Spacer = styled.div `
width: 100%;
margin: ${(props) => props.margin || "20px"};


`
export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  max-width: 100%;
  min-width:270px ;
  min-height: 50px;
  background: ${(props) => (props.checked ? "#08ff00" : "#FFFFFF")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
}

  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
  }

;
  
p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
    color: ${(props) => (props.checked ? "#ffffff" : "#000000")};
    width: 50%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    font-family: 'Roboto', sans-serif;
font-family: 'Raleway', sans-serif;

   
  }
  `

  export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const DivTasks = styled.div `
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 12%;
  
  
  
  `

  