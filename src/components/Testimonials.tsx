import "../css/Testimonials.css"
const Testimonials = () => {
  return (
    <section className="testimonials-section d-flex flex-column align-items-center">
      <h3 className="testimonials-title">CLIENT TESTIMONIALS</h3>
      <div className="articles d-flex gap-4 justify-content-center flex-wrap">
        <article className="d-flex flex-column align-items-center article">
          <img className="profile-picture" src="../../images/image-emily.jpg" alt="A profile picture of Emily R." />
          <p className="testimonial my-5">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <p className="author">Emily R.</p>
          <p className="job">Marketing Director</p>
        </article>
        <article className="d-flex flex-column align-items-center article">
          <img className="profile-picture" src="../../images/image-thomas.jpg" alt="A profile picture of Thomas S." />
          <p className="testimonial my-5">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <p className="author">Thomas S.</p>
          <p className="job">Chief Operating Officer</p>
        </article>
        <article className="d-flex flex-column align-items-center article ">
          <img className="profile-picture" src="../../images/image-jennie.jpg" alt="A profile picture of Jennie F." />
          <p className="testimonial my-5">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <p className="author">Jennie F.</p>
          <p className="job">Business Owner</p>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
