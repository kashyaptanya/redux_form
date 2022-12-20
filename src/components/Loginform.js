
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "../reducer/slices";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore"; //9version


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
    // console.log(val, setValue)
  }
  const addDocs = async (e) => {
    e.preventDefault()

    // v8
    //    const docRef = await db.collection("userData").add({
    //     name: val.name,
    //      email: val.email,
    //      phone: val.phone
    // })

    //version9
    const docRef = await addDoc(collection(db, "userData"), {
      name: val.name,
      email: val.email,
      phone: val.phone
    });
    console.log("Document written with ID: ", docRef.id);
    dispatch(setUser(val))
    navigate('/Home');
  }

  return (
    <>
      <h1 className="text-center p-3">LOGIN</h1>
      <form className="style"
        onSubmit={addDocs}>
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



