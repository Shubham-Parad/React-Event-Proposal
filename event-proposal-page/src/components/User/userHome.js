import React, {useState} from 'react';
import Home from '../Home/Home';
import './UserHome.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function UserHome() {
  const navigate = useNavigate();

    const [formData,setFormData]=useState({
        email:"",
        password:""
      });

      const {email,password} = formData
      function updateData(e,propName){
        let temp=e.target.value
        setFormData(data =>({
         ...data,[propName]:temp
        }))
        
         }

   async  function submitted(e){
        e.preventDefault()
        // const data=new FormData(e.target)
        console.log(formData)

        fetch("/user/login",{
          method:"POST",
          headers:{"content-type":"application/json","accept":"application/json"},
          body:JSON.stringify(formData)          
      })
      .then((res)=>res.json())
  .then((data)=>{
     localStorage.setItem('userToken', data.data);
     localStorage.setItem('userloggedIn',true);
     if (data.status == "ok")
     {
      alert("login Successful")
      navigate('/Userproposals')
     }if (data.status == "error"){
      alert(`${data.error}`)
    }
     
    console.log(data)})
  .catch((err)=>{
    console.log(err)})
   }       


    return <div>
        <Home />
        <div className="Logo">LOGO</div>
        <div className="Text">TEXT WILL<br /> BE DISPLAYED<br /> HERE</div>

        <div className="form-box">
            < div className="top">
                <Link style={{ textDecoration: 'none', marginTop: '15px' }}>Vendor</Link>
                <p style={{}}>User</p>
        </div>
            

        <div className="heading">
            <h2>Sign in your Account</h2>
        </div>
        
        <div className="form">
            <form method="post" onSubmit={submitted} >
              <div className="input">
                {" "}
                <input type="name" placeholder="Phone/Email" style={{width:'300px'}} name="email" onChange={e=>updateData(e,"email")} required/>{" "}
              </div>
              <div className="input">
                {" "}
                <input type="password" placeholder="Password" style={{width:'300px'}} name="password" onChange={e=>updateData(e,"password")}   required/>{" "}
              </div>
              <div className="forget">
                {" "}
                <p to="/forgetPassword" style={{textDecoration:'none'}}>Forget Password</p>
              </div>

                <div className="footer">
                    <div className="create">
                        {" "}
                        <Link to="/createuseraccount" style={{ textDecoration: 'none' }}>Create Account</Link>
                    </div>

                    <button className="button" type="submit">SIGN IN
                    </button>
                </div>
            </form>
        </div>
    </div>
        
</div >

}


export default UserHome;