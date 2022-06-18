import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
  <label className="form-check-label" for="exampleCheck1">Branch</label>
    <input type="text" className="form-check-input" id="exampleCheck1"/>
   
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Contact