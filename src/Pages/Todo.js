import { useState } from "react"
import List from "../Components/List"
import { todoList } from "../dataSource"
const Todo=()=>{
    const [text,setText]=useState('')
    const [todo,setTodo]=useState([])
    const [isEdit,setEdit]=useState(false)
    const [editId,setId]=useState(0)
    const[date,setDate]=useState()
    const handleChange=(e)=>{
        if (e.target.type=='text') {
            setText(e.target.value)
        }else{
            setDate(e.target.value)

        }
    }
    const handleAdd=()=>{
if (date && text) {
    setTodo([...todo,{id:Math.random(),title:text,isComplete:false,dueDate:date}])
    setText('') 
    setDate('')
}
    else{
        alert('please fill all the details')
    }    
    }
    const handleDelete=(id)=>{
       const filtr= todo.filter((data)=>data.id!==id)

        setTodo(filtr)
    }
    const handleUpdate=(id)=>{
const updatedData = todo.map(todo => {
    console.log(todo.id,id,"i")
    if (todo.id === id) {
    
      todo.isComplete = true
    }
    if(isEdit && todo.id === editId){
        todo.title=text
        todo.dueDate=date
        setEdit(false)
        setText('')
        setDate('')
    }
    

    return todo
  })
 setTodo(updatedData)

}
    const handleEdit=(id)=>{
        const editData = todo.filter(data=>data.id==id)
        console.log('editData',editData)
        setText(editData[0].title)
        setId(editData[0].id)
        setDate(editData[0].dueDate)
        setEdit(true)
    }
return(
    <>
    <h1>Manage Task With Todo</h1>
    <input type='text' value={text} placeholder='Add Task' onChange={handleChange}></input>
    <input type='date' value={date} onChange={handleChange}></input>

    {isEdit?<button className="btn-main" onClick={handleUpdate}>Update</button>:<button className="btn-main"  onClick={handleAdd}>Add</button>}
    <div className="todoContainer">
        <div className="todoItemList">
    {todo.length && todo ? todo.map(data=><List todoList={data} handleEdit={(id)=>{handleEdit(id)}} handleUpdate={(id)=>handleUpdate(id)} handleDelete={(id)=>handleDelete(id)}/>):null}
    </div>
    </div>
    
    </>
)
}
export default Todo