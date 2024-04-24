import React ,{useEffect} from 'react';
import './Facilities.css';
// import Student from './Facilities/student.jpg';
// import student1 from './Facilities/student1.jpg';
// import student2 from './Facilities/student3.jpg';
// import student4 from './Facilities/student4.jpg';

import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Footer from '../Footer/Footer';

//importing facilities
// import academics from './Facilities/academics.jpg';
import art from './Facilities/art.jpg';
import busfacility from './Facilities/busfacility.jpg';
import csr from './Facilities/csr.jpg';
import selfdefense from './Facilities/selfdefense.jpg';
import sports1 from './Facilities/sports1.jpg';

function Facilities(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
    return(
        <>
            <div className='facilities-banner'>
                <h1>Facilities</h1>
            </div>
            <h1 className='rooted-head'>Rooted Academics</h1>
            <div className='facilities-intro'>
                <div className='facilities-intro-video'>
                    <iframe  src="https://www.youtube.com/embed/l62SIcbCPwo?si=ZqQApQtQ1EQcRBpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='facilities-intro-content'>
                    <h1>
                        The educational philosophy emphasizes creating an inclusive environment that celebrates 
                        individual learning needs, incorporating modern educational practices tailored for the 21st 
                        century. The curriculum integrates industry best practices, interactive sessions, and cultural 
                        influences, fostering a dynamic and collaborative learning experience with a focus on 
                        individualized educational plans.
                    </h1>
                </div>
            </div>

            <div className='facilities-third-con'>
                {/* container header */}
                <div className='fac-thd-con-hd'>
                    <h1>Our Facilities</h1>
                </div>
                {/* containers will display here */}
                {/* <div className='fac-thd-con-dis'>
                    <div>
                        <img src={Student} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Citadel Impregnable</p>
                            <h5>show more</h5>
                        </div>
                        
                    </div>
                    <div>
                        <img src={student1} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Global Dimensions</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                    <div>
                        <img src={student2} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>A Smart School</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                    <div>
                        <img src={student4} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Cyber Yard</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                    
                    <div>
                        <img src={student2} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Labs Par Excellence</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                    <div>
                        <img src={student4} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Literary Paradise</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                </div> */}

                <div className='facilities-meru-con'>
                    <div className='facilities-meru-con-each'>
                        <div className='facilities-meru-con-each-inner'>
                            <img src={sports1} alt='sports'/>
                        </div>
                        <h1>Sports</h1>
                        <p>Best CBSE schools with courts and grounds for every sport a child wants to engage in.</p>
                    </div>
                    {/* <div className='facilities-meru-con-each'>
                        <div className='facilities-meru-con-each-inner'>
                            <img src={academics} alt='academics'/>
                        </div>
                        <h1>Academics</h1>
                        <p>Vivekananda International School boasts state-of-the-art classrooms and fully-equipped laboratories dedicated to fostering the academic advancement of its students.</p>
                    </div> */}
                    <div className='facilities-meru-con-each'>
                        <div className='facilities-meru-con-each-inner'>
                            <img src={art} alt='art'/>
                        </div>
                        <h1>Arts</h1>
                        <p>From dramatics to instrumental, bring out the artist within you.</p>
                    </div>
                    <div className='facilities-meru-con-each'>
                        <div className='facilities-meru-con-each-inner'>
                            <img src={csr} alt='csr'/>
                        </div>
                        <h1>Corporate Social Responsibility (CSR)</h1>
                        <p>Our students are instilled with the principles of sustainability and the significance of conserving our environment for future generations. Encouraging eco-consciousness, 
                            they actively participate in tree planting initiatives as integral components of our curriculum.</p>
                    </div>
                    <div className='facilities-meru-con-each'>
                        <div className='facilities-meru-con-each-inner'>
                            <img src={selfdefense} alt='selfdefense'/>
                        </div>
                        <h1>Self-defense classes</h1>
                        <p>At Vivekananda International School, we prioritize the safety and well-being of our students by imparting essential self-defense skills, 
                            empowering them to protect themselves effectively.</p>
                    </div>
                    <div className='facilities-meru-con-each'>
                        <div className='facilities-meru-con-each-inner'>
                            <img src={busfacility} alt='busfacility'/>
                        </div>
                        <h1>Transportation</h1>
                        <p>One of the finest in the block, this department has trained staff (including female staff members), a dedicated teacher & GPS.
                             These dedicated buses for gated communities are camera-monitored, 
                             air-conditioned, and have a maximum journey period of an hour.</p>
                    </div>
                </div>

            </div>

            <div className='contact-info'>
                <div>
                    <CallIcon  sx={{ fontSize: 40,color:'#f57a25' }} className='mailoutlineicon'/>
                    <h1>Admissions :</h1>
                    <p>9613138888 / 7569838928</p>
                    <h1>Accounts Department :</h1>
                    <p>9613138888</p>
                    <h1>Admin Office :</h1>
                    <p>7569838928</p>
                </div>
                <div>
                    <MailOutlineIcon  sx={{ fontSize: 40 }} className='mailoutlineicon'/>
                    <h1>General information:</h1>
                    <p>vivekanandainternationalschools.com</p>
                    <h1>Admissions:</h1>
                    <p>viscbsechevella@gmail.com</p>
                    <h1>Careers:</h1>
                    <p>vivekanandainternationalschools.com/careers</p>
                </div>
                <div>
                    <LocationOnIcon  sx={{ fontSize: 40 ,color:'#f57a25'}} className='mailoutlineicon'/>
                    <h1>Beside Siddartha B.Ed college, Urella, road, Chevella, Telangana 501503</h1>
                </div>
                <div>
                    <AccessTimeIcon  sx={{ fontSize: 40,color:'#f57a25' }} className='mailoutlineicon'/>
                    <h1>Office Hours</h1>
                    <h1>Monday - Friday</h1>
                    <p>8.30 AM - 3.00 PM</p>
                    <h1>Saturday</h1>
                    <p>8.30 AM - 1.00 PM</p>
                </div>
            </div>
            
            <Footer/>
            
        </>
    );
}

export default Facilities;