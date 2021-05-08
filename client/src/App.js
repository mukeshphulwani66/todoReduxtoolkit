import {useEffect} from 'react';
import './App.css';
import Auth from './components/Auth'
import Todo from './components/Todo';
import {addToken} from './reducers/authReducer'
import {useSelector,useDispatch} from 'react-redux'
function App() {
  const token = useSelector((state)=>state.user.token)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addToken())
  },[])
  
  return (
    <div className="App">
    {
      token ? <Todo /> :<Auth />

    }  
      
    </div>
  );
}

export default App;
