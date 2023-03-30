import React, { useRef , useState , useEffect} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { serverMethod } from '../../../hooks/serverFetchMethods';
import {dataBaseUrl} from '../../../application.json'

export default function Login() {
  const [adminCredentils, setCredentails] = useState({email:'', password : ''})
  const [userCredentils, setUserDetails] = useState([])
  const [view, setView] = useState('none')
  const userNameRef = useRef<HTMLInputElement>(null)
  let passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const adminUrl = dataBaseUrl.admin;
  const usersUrl = dataBaseUrl.users;

  async function adminData(url :string) {
    setCredentails(await serverMethod.getAllItems(url))
  }
  async function userDetails(url) {
    setUserDetails(await serverMethod.getAllItems(url))
  }
  useEffect(()=>{
    adminData(adminUrl);
    userDetails(usersUrl);
  },[])
  function adminLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (userNameRef.current?.value === adminCredentils.email 
        && passwordRef.current?.value === adminCredentils.password) {
      console.log(userNameRef?.current.value, passwordRef?.current.value)
      console.log('hlo yash');
      navigate('/admin')
    }else{
      alert('you are not a admin , try to login as user or enter correct email and password')
    }
  }
  function userLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log('this is user login');
     userCredentils.filter((details)=>{
      if(details.email=== userNameRef.current?.value){
          if(details.password === passwordRef.current?.value){
            navigate('/product');
          }else{
            alert('plz signup before login')
            setView('');
            navigate('/signUp');
          }
      }
    }) 

  }
  return (
    <>
      <div className='admin-page'>
        <h2>LOGIN PAGE</h2>
        <form className='login-form' action='submit'>
          <div>
            <label htmlFor="">User Name</label>
            <input type="text"
              placeholder='example@gmail.com'
              ref={userNameRef} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password"
              placeholder='Enter password'
              ref={passwordRef} />
          </div>
          <div style={{display : view}}>
            <span style={{color : 'red'}}>Plz try signup page</span>
          </div>
          <div className='login-buttons '>
            <button type='submit' onClick={userLogin}>USER LOGIN</button>
            <button type='submit' onClick={adminLogin}>ADMIN LOGIN</button>
          </div>
        </form>
      </div>

    </>
  )
}
