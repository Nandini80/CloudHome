import './userdash.css';
import { useNavigate } from 'react-router-dom';
import userDashImg from '../../../assets/userDash.jpeg';
import UserNavbar from '../UserNav/userNavbar';

const UserDashboard = () => {

  const navigate = useNavigate();
  const doLogout = ()=>{
    localStorage.removeItem("user_email");
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className='container'>

      <UserNavbar/>
        {/*Hero section */}
        <div className='hero-section'>

            <img src={userDashImg} className='owner-dash-img'/>

            <div className='hero'>
                <h1 className='hero-head'>Hello Your Name <br/> Welcome To CloudHome</h1>
                <p className='hero-subHead'>Find storages easily!</p>
                <div className='hero-btn-container'>
                    <button className='list-btn'>Find Nearby Land</button>
                </div>

            </div>
        </div>

        {/*hero section 2  , add icons in cards*/}
          {/* <div className='hero-section-2'>
              <h2 className='hero-head-2'>We've thought of everything</h2>

              <div className='grid'>

                  <div className='card'>
                      <h3 className='card-head'>You're in control</h3>
                      <p className='card-para'>You choose when and how renters use your space. No need to give them a key or code (unless you want to).</p>
                  </div>

                  <div className='card'>
                      <h3 className='card-head'>We've got your back</h3>
                      <p className='card-para'>We have $1,000,000 in free coverage for you and property protection plans available for your renters. Our responsive support team can help if you need it.</p>
                  </div>

                  <div className='card'>
                      <h3 className='card-head'>No paperwork, no hassle</h3>
                      <p className='card-para'>Our terms of service have you covered. No additional contracts required.</p>
                  </div>

                  <div className='card'>
                      <h3 className='card-head'>Guaranteed money in your pocket</h3>
                      <p className='card-para'>Well handle the payments and automatically deposit into your account each month. Well even cover the cost if your renter doesnt pay.</p>
                  </div>
                  
                  <div className='card'>
                      <h3 className='card-head'>As simple as sweeping</h3>
                      <p className='card-para'>All you need to do is clear a space. No need to run a bed and breakfast out of your house.</p>
                  </div>
                  
                  <div className='card'>
                      <h3 className='card-head'>Helping neighbors in need</h3>
                      <p className='card-para'>Our renters need storage for everything from building a new home to escaping natural disasters. You can help too.</p>
                  </div>

              </div>
          </div> */}

        {/*hero head 3 */}
        <div className='hero-3'>
            <h2 className='hero-head-3'>Check Your Lands</h2>
            {/*send request get to backend add map function to show your lands as caraousel or no lands if no lands fetched */}

            <h2 className='hero-head-3'>Check Your Rented Users</h2>
            {/*send request get to backend add map function to show your rented users as caraousel or no lands if no lands fetched */}
        </div>
        
    </div>
  );
};

export default UserDashboard;