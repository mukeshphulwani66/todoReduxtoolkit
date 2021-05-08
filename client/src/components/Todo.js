import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {createTodo,fetchTodo,deleteTodo} from '../reducers/todoReducer'
import {logout} from '../reducers/authReducer'
export default function Todo() {
    const [mytodo,setTodo] = useState("")
    const dispatch = useDispatch()
    const todos =  useSelector(state=> state.todos)
    const addTodo = ()=>{
     dispatch(createTodo({todo:mytodo}))
    }
    useEffect(()=>{
     dispatch(fetchTodo())
    },[])
    return (
        <div>
            <input
             placeholder="write todo here"
             value={mytodo}
             onChange={(e)=>setTodo(e.target.value)}
            />
            <button className="btn #ff4081 pink accent-2" onClick={()=>addTodo() }>Add todo</button>
            <ul className="collection">
                {
                    todos.map(item=>{
                        return  <li className="collection-item" key={item._id}
                        onClick={()=>dispatch(deleteTodo(item._id))}
                        >{item.todo}</li>
                    })
                }
               
               
             </ul>
             <button className="btn #ff4081 pink accent-2" onClick={()=>dispatch(logout()) }>Logout</button>
                        
        </div>
    )
}
