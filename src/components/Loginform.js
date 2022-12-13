
import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Loginform() {
  let navigate = useNavigate();
  const [val,setValue] = useState({
    name:"",
    email:"TF@GMAIL.COM",
    phone:"9298993333"
  })

  const handlevalue=(e)=>{
    setValue(e.target.value)
    console.log(val,setValue)
    
  }
  // const handle_button=(event)=>{
  //   event.preventDefault();
  //   }

  return (
    <>
    <h1 className="text-center p-3">LOGIN</h1>
    <form 
    onSubmit={() => {
    navigate('/Home');
    }}>
    <div className="form-group m-3">
    <label>Name</label>
    <input type="text" required value={val.name} onChange={handlevalue} className="form-control" placeholder="Enter name"/>
    </div>
  <div className="form-group m-3">
    <label>Email address</label>
    <input type="email" required  value={val.email} onChange={handlevalue} className="form-control" placeholder="Enter email"/>
    </div>
    <div className="form-group m-3">
    <label>Contact</label>
    <input type="tel" required   pattern="[0-9]{10}" value={val.phone} onChange={handlevalue} className="form-control" placeholder="Enter phone no."/>
    </div>

  <button type="submit" className="btn btn-primary m-3">Submit</button>
</form>
    </>
  )
}
export default Loginform



