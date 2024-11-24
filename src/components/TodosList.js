import React from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";

export const TodosList = ({todos,setTodos,setEditTodo}) => {

    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return {...item,completed:!item.completed}
                }
                return item;
            })
        )
    }
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    };
    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo)
    }
  return (
    <div>
       {todos.map((todo)=>(
    
        <li className='list-item' key={todo.id}>
            <input type="text" value={todo.title} className="list" onChange={(event)=>event.preventDefault()}/>
            <div>
                <button className='button-complete task-button' onClick={()=>handleComplete(todo)} >
                <FaRegCheckCircle />
                </button>
                <button className='button-edit task-button'  onClick={()=>handleEdit(todo)}>
                <FiEdit />
                </button>
                <button className='button-delete task-button' onClick={()=>handleDelete(todo)} >
                <MdDelete />
                </button>
            </div>
        </li>
        
        ))}
    </div>
  )
};
