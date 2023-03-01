import React from "react";
import {
  Title,
  InputDiv,
  DivMain,
  Input,
  ButtonAdd,
  DivButton,
  Spacer,
  Item,
  Flex,
  DivTasks
} from "./styled";
import { GrAdd} from "react-icons/gr";
import { useState } from "react";
import {BiTrash} from "react-icons/bi"
import {BiCheck} from "react-icons/bi"
const Index = () => {
  // FUNCINALIDADE DA ADIÇÃO DE TASKS

  const [task, setTask] = useState("");
const [listTask, setListTask] = useState([
  

]);

const addTask = () =>{
  if (!task) return alert ("complete a task in that field!");
  const newTask = {
    id: Math.random(),
    task: task,
    checked:false,
  }

  setListTask([...listTask, newTask]);
  setTask("");
};

const removeTask = (id) => {
  const newList = listTask.filter(task => task.id  !== 	id);
  setListTask(newList);
  
};

const toggleChecked = (id, checked) => {
const index = listTask.findIndex(task => task.id === id)
const newList = listTask
newList[index].checked = !checked;
setListTask([...newList]);
};
 


  return (
    <DivMain>
      <Title>TODO APP</Title>
      <InputDiv>
        <Input
        value={task}

          type="text"
          placeholder="what is today's task
?"
     
       onChange={(e) => setTask(e.target.value)}/>
        <DivButton>
          <ButtonAdd onClick={addTask}>
            <GrAdd />
          </ButtonAdd>
        </DivButton>
      </InputDiv>
      <DivTasks className="tasks">
        <ul>
        {listTask.map((task) => (
          <>
         
           <Item  Item checked={task.checked} key={task.id} >
           <p> {task.task} </p>
            <Flex direction ="row">
              <button onClick={() => removeTask(task.id)}>
                <i> <BiTrash /></i>
                </button>
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                <i><BiCheck /></i>
                </button>
                </Flex>
              </Item>
            <Spacer margin="13px" /> 
          </>
          ))}
          </ul>
      </DivTasks>
    </DivMain>
  );
};

export default Index;
