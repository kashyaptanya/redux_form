function Loginform  ()  {

    return (
      <>
    <form>
    <div className="form-group m-3">
    <label>Name</label>
    <input type="text" required  className="form-control" placeholder="Enter name"/>
    </div>
    <div className="form-group m-3">
    <label>Email address</label>
    <input type="email" required  className="form-control" placeholder="Enter email"/>
    </div>
    <div className="form-group m-3">
    <label>Contact</label>
    <input type="tel" required   pattern="[0-9]{10}" value={val.phone} onChange={handlevalue} className="form-control" placeholder="Enter phone no."/>
    </div>

    </form>
      </>
    )
  }
  export default Loginform




