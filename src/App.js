import React,{useState} from 'react'
import TodoList from './TodoList';
const App=()=>{
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([])
  
  const changeHandler=e=>{
    setTask(e.target.value)
  }

  const submitHandler=e=>{
    setTask('')
    e.preventDefault();
    if(task.length){
      console.log("newTodos.length",task)
      todos.push(task)
      setTodos(todos);
    }
  }

    const deleteHandler=(indexvalue)=>{
      const newTodos=todos.filter((todo,index)=>index !==indexvalue)
      setTodos(newTodos);
    }

    
  
  return(
    <div>
      <center>
        <div className="card">
          <div className="card-body">
  <h3 className="card-title">Todo management Application</h3>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler}/> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>

            </form>
            <TodoList todoList={todos} deleteHandler={deleteHandler}/>
            </div>
        </div>
      </center>
    </div>
  )
  }
export default App;