 const List =(props)=>{
return(
    <>
    <div className={props.todoList.isComplete?"list-complete":"list"}>
        <h2 className="title">{props.todoList.title}</h2>
        <h6 className="status">{props.todoList.isComplete?'completed':'pending'}</h6>
        
        {props.todoList.isComplete?null:<><button onClick={()=>props.handleEdit(props.todoList.id)}>edit</button>

        <button onClick={()=>props.handleDelete(props.todoList.id)}>delete</button>
        <button onClick={()=>props.handleUpdate(props.todoList.id)}>Done</button></>}
        <br></br>
        <p className="due-date"><span>Due Date:</span> {props.todoList.dueDate}</p>
    </div>
    
    </>
)
}
export default List