import React from 'react';
import './UserProfile.css';  // Import your CSS file if needed

const UserProfile = () => {
  return (
    <div className="master-container">
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom:"2rem",marginLeft:"1.2rem"}}>
  <img src="/logo.png" alt="" style={{width:"80px"}}/>
  <a class="navbar-brand" href="#">CloudHome</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Land</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Owner</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
     
    </ul>
  </div>
</nav>

        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="form" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <form>
              <div className="form-group" style={{ display: "flex", marginBottom: "1.5rem",width:"1250%" }}>
                <label htmlFor="exampleInputEmail1">Id</label>
                <input
                  style={{ marginLeft: "1.2rem" }}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Id"
                />
              </div>
              
              <div className="form-group" style={{ display: "flex", marginBottom: "1.5rem", alignItems: "center",width:"1250%" }}>
                <label htmlFor="exampleInputPassword1">Pincode</label>
                <input style={{ marginLeft: "1.2rem" }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter pincode" />
              </div>
              <div className="form-group" style={{ display: "flex", marginBottom: "1.5rem" ,width:"1250%"}}>
                <label htmlFor="exampleInputEmail1"> Address</label>
                <input style={{ marginLeft: "1.2rem" }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" />
              </div>

              <div className="form-group" style={{ display: "flex", marginBottom: "1.5rem" ,width:"1250%"}}>
                <label htmlFor="exampleInputEmail1">City</label>
                <input style={{ marginLeft: "1.2rem" }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" />
              </div>
              <div className="form-group" style={{ display: "flex", marginBottom: "1.5rem" ,width:"1250%"}}>
                <label htmlFor="exampleInputEmail1">State</label>
                <input style={{ marginLeft: "1.2rem" }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" />
              </div>              

              <div className="text-center" style={{ marginTop: "1.2rem" }}>
                <button type="submit" className="btn btn-primary">Save Info</button>
              </div>

              <div className="text-center" style={{ marginTop: "1.2rem" }}>
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default UserProfile;
