import React, { useEffect } from 'react';
import './About.css';
import Aboutbanner from './aboutassets/aboutbanner.png';
import mission from './aboutassets/mission.jpg';
import vission from './aboutassets/vision.jpg';

// three pillars importing
import tpillar1 from './aboutassets/tpillar1.png';
import tpillar2 from './aboutassets/tpillar2.png';
import tpillar3 from './aboutassets/tpillar3.png';

// import Principle from './aboutassets/principal.jpg';

import Footer from '../Footer/Footer';

 //chairman message
 import cm1 from '../../Assets/cm1.jpeg';
 import cm2 from '../../Assets/cm2.jpeg';

function About(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
    return(
        <>
            {/* about-banner */}
            <div className='about-banner'>
                <img src={Aboutbanner} alt='about-banner'/>
            </div>
            {/* about - us - head*/}
            <div className='About-us-head'>
                <h1>About Us</h1>
                <p className='about-us-head-content'>"At Vivekananda International School, we prioritize the holistic development of our students, 
                    nurturing not only their minds but also their hearts and souls. Our mission is to provide a 
                    comprehensive education that fosters intellectual, emotional, and social growth. Guided by 
                    unwavering commitment to academic integrity, we cultivate an environment where curiosity, 
                    critical thinking, and creativity thrive, empowering students to become responsible citizens 
                    and lifelong learners."</p>
                <div className='about-us-head-v-m'>
                    <p>“Your Vision of the future, is our Mission today.”</p>
                </div>
            </div>

            {/* about-v-m */}
            <div className='about-v-m'>
                <div className='about-v-m-each'>
                    <div className='about-v-m-each-img'>
                        <img src={mission} alt='mission'/>
                    </div>
                    <div className='about-v-m-each-para'>
                        <h1>Our Mission</h1>
                        <p>The VIS mission is to create a better future for all children. We believe in maximising 
                            opportunities for children through holistic, values-based education of the highest 
                            quality and imparting the moral values of honesty, integrity, compassion and 
                            discipline as an integral part of the student’s personality.</p>
                    </div>
                </div>
                <div className='about-v-m-each'>
                    <div className='about-v-m-each-img'>
                        <img src={vission} alt='vission'/>
                    </div>
                    <div className='about-v-m-each-para'>
                        <h1>Our Vision</h1>
                        <p>VIS vision is to create an environment where learning is not just restricted to instructions 
                            but a passion, which goes beyond books, beyond instructions, beyond learning horizons. We believe 
                            in building character, enriching minds and providing enriching experiences that last a lifetime so 
                            that our children become socially motivated and conscious citizens of India and the world.</p>
                    </div>
                </div>
            </div>
            {/* about three pillars */}
            <div className='about-three-pillars'>
                <div className='about-three-pillars-head'>
                    <h1>Our philosophy revolves around three core pillars...</h1>
                    <div className='about-three-p-l'></div>
                    <p>Embodying a commitment to holistic education, our philosophy rests on three foundational pillars.
                        Together, they form the guiding principles that shape our educational approach, ensuring a 
                        comprehensive and impactful learning experience for our students.</p>
                </div>
                <div className='about-tp-con'>
                    <div className='about-tp-con-each'>
                        <div className='about-tp-con-each-img'>
                            <img src={tpillar1} alt='pillar-one'/>
                        </div>
                        <div className='about-tp-con-each-line'></div>
                        <h1>Inspiring Innovation</h1>
                        <p>We ignite a spark of curiosity in our students, encouraging them to think outside the box and explore new 
                            perspectives. Through critical thinking and creative problem solving, they learn to develop innovative 
                            solutions to real-world challenges.</p>
                    </div>
                    <div className='about-tp-con-each'>
                        <div className='about-tp-con-each-img'>
                            <img src={tpillar2} alt='pillar-two'/>
                        </div>
                        <div className='about-tp-con-each-line'></div>
                        <h1>Empowering Problem-Solvers</h1>
                        <p>We equip our students with the necessary skills to tackle complex challenges effectively. Collaboration, communication, 
                            and analytical thinking are honed through hands-on activities and project-based learning, preparing them to become confident 
                            and responsible problem-solvers.</p>
                    </div>
                    <div className='about-tp-con-each'>
                        <div className='about-tp-con-each-img'>
                            <img src={tpillar3} alt='pillar-three'/>
                        </div>
                        <div className='about-tp-con-each-line'></div>
                        <h1>Cultivating Responsible Citizens</h1>
                        <p>We instil a strong sense of social responsibility and encourage our students to become active agents of positive change. 
                            Through community service initiatives and leadership development programs, they learn to contribute meaningfully to their local and global communities.</p>
                    </div>
                </div>
            </div>
            <div className='homepage-msgch'>
                <div>
                    <h1>Message From Chairman</h1>
                    <img src={cm1} alt='cm1'/>
                    <h3>Dr. Koradala Naresh</h3>
                    <p>Dr. Koradala Naresh, a distinguished academician and visionary leader, serves as the Director of Vivekananda Degree& P.G College, Sanghamitra Degree & P.G College and
                        vanita  Women's  College. With a  profound commitment to education and a wealth 
                        of experience, Dr. Naresh has been instrumental in shaping the college’s ethos 
                        and fostering an environment of academic excellence. Guided by a vision of 
                        empowering students with knowledge and skills that transcend conventional 
                        boundaries, Dr. Naresh leads Vanitha  Degree College with passion and dedication. His leadership 
                        philosophy is rooted in the belief that education is not just about acquiring 
                        information but also about instilling values, critical thinking, and a passion 
                        for lifelong learning.</p>
                </div>
                <div>
                    <h1>Message From correspondent</h1>
                    <img src={cm2} alt='cm2'/>
                    <h3>Smt. Lavanya Naresh</h3>
                    <p>Smt. Lavanya Naresh,  always articulate that our present Education System isn’t 
                        worth a great deal if it teaches Young People how to make a Living but doesn’s 
                        teach them how to make a Life… System is increasingly embracing a 
                        Black-and-White way of thinking, in which Learning and Play are DIAMETRICALLY 
                        OPPOSED. So, the true purpose of Education is to make Minds, not Careers… President vanitha 
                        degree college threw in the Powerful Weapons which are used to change the world.</p>
                </div>
            </div>
            {/* principle Name */}
            {/* <div className='principal-name'>
                <h1>Principal's Message</h1>
                <div className='principal-para'>
                    <p>We endeavour to promote a classroom of thinkers who would have the courage and conviction to lead the world with their astute insight, 
                        competency, calibre and impeccable values. The School’s commitment to broaden the students’ horizons and enable them to carve an integrated 
                        and an enlightened world- a world that fosters unity yet celebrates the uniqueness of each individual. May this sapling grow into a sturdy 
                        tree and spread its branche</p>
                    {<div className='principal-para-img'>
                         <img src={Principle} alt='principle'/>
                    </div> }
                </div>
            </div> */}

            <Footer/>
        </>
    );
}

export default About;