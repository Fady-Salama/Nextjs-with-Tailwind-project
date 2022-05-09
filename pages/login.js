import Link from "next/link";
import {useRouter} from 'next/router'
import styles from '../styles/Login.module.css'
function Login(){
    const router = useRouter()
    const progRouting = () =>{
        router.push('/login')
    }
    return(
        <div className={styles.mid}>
        <h1>Enter your info </h1>
          <h1>Login</h1>
        <form >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary" className={styles.but}>
            Submit
          </button>
        </form>
  </div>
        
        
    )
}
export default Login