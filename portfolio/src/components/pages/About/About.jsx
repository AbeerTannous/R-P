import './about.css';
import mypc from '../../../../src/images/mypc.jpg';

const About = () => {
  return (
  <section className='main'>
    <div class="container text-center">
      <div class="row">
        <div class="col-9">
          <h2 className='title'>About Me</h2>
          <p>
            Full Stack Web Developer with passionate to organize and manage time and resources ,
            leveraging my high standards in providing excellent customer experience backround integrated
            with strong knowledge of software production life cycle due to earned software engineering
            bachelor's degree and hands on latest web development technologies like JavaScript, GraphQl,
            React.js, as I recently earned a certificate in Full Stack Web Development ,with each project I
            worked on with a team I played an active role and aimed to develop an easy usable and simple
            user interface with fully functional application , I am excited to leverage my skills and learn more
            in the future job sight.
          </p>
        </div>
      <div class="col">
        <img src={mypc} class="img-fluid float-start" alt="my picture" />
      </div>
      </div>
    </div>


  </section>
  )
}






export default About