
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "../reducer/slices";

function Loginform() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [val, setValue] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const handlevalue = (e, key) => {
    setValue(prev => ({ ...prev, [key]: e.target.value }))
    console.log(val, setValue)

  }
  // const handle_button=(event)=>{
  //   event.preventDefault();
  //   }

  return (
    <>
      <h1 className="text-center p-3">LOGIN</h1>
      <form className="style"
        onSubmit={() => {
          dispatch(setUser(val))
          navigate('/Home');
        }}>
        <div className="form-group m-3">
          <label>Name</label>
          <input type="text" required value={val.name} onChange={(e) => handlevalue(e, 'name')} className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group m-3">
          <label>Email address</label>
          <input type="email" required value={val.email} onChange={(e) => handlevalue(e, 'email')} className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group m-3">
          <label>Contact</label>
          <input type="tel" required pattern="[0-9]{10}" value={val.phone} onChange={(e) => handlevalue(e, 'phone')} className="form-control" placeholder="Enter phone no." />
        </div>

        <button type="submit" className="btn btn-primary m-3">Submit</button>
      </form>
    </>
  )
}
export default Loginform



