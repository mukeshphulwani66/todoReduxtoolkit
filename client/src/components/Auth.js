import {useState} from 'react'
import {signupUser,signinUser} from '../reducers/authReducer'
import {useDispatch,useSelector} from 'react-redux'
function Auth() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const [auth,setAuth] = useState('signin')
    const {loading,error} = useSelector(state=>state.user)
    const authenticate = ()=>{
        if(auth=='signin'){
           dispatch(signinUser({email,password}))
        }else{
            dispatch(signupUser({email,password}))
        }
    }

    return (
        <div>
            {loading &&
             <div className="progress">
                <div className="indeterminate"></div>
            </div>
               
            }
            <h1>please {auth}!</h1>
            {error && 
            <h5>{error}</h5>
            }
            <input 
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            {
                auth == "signin" ?
                <h6 onClick={()=>setAuth('signup')}>Dont have an account ?</h6>:
                <h6 onClick={()=>setAuth('signin')}>Already have an account?</h6>
            }
            <button className="btn #ff4081 pink accent-2" onClick={()=>authenticate()}>{auth}</button>
        </div>
    )
}

export default Auth
