import { useSelector } from "react-redux"


function Loginform() {
  let { users } = useSelector((state) => state.users)
  return (
    <>
      <h1 className="text-center p-3">DASHBOARD</h1>
      <form className="style">
        <div className="form-group m-3">
          <label>Name</label>
          <input className="form-control text-primary" value={users.name} />
        </div>
        <div className="form-group m-3">
          <label>Email address</label>
          <input className="form-control text-primary" value={users.email} />
        </div>
        <div className="form-group m-3">
          <label>Contact</label>
          <input className="form-control text-primary" value={users.phone} />
        </div>

      </form>
    </>
  )
}
export default Loginform




