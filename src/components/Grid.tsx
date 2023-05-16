import "../css/Grid.css"

const Grid = () => {
  return (
    <section className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col-6 d-flex flex-column justify-content-center seo-div">
          <h3 className="seo-title">Transform your brand</h3>
          <p className="seo-text mt-3 mb-4">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <a className="learn-more ms-1" href="#">LEARN MORE</a>
          <div className="underline yellow"/>
        </div>
        <picture className="col-6 px-0">
          <source srcSet="../../images/mobile/image-transform.jpg" media="(max-width: 375px)"/>
          <img className="grid-image" src="../../images/desktop/image-transform.jpg" alt="An egg on a yellow background." />
        </picture>
      </div>
      <div className="row grid-row m-0">
        <picture className="col-6 px-0">
          <source srcSet="../../images/mobile/image-stand-out.jpg" media="(max-width: 375px)"/>
          <img className="grid-image" src="../../images/desktop/image-stand-out.jpg" alt="A pink cup on a pink background." />
        </picture>
        <div className="col-6 d-flex flex-column justify-content-center seo-div">
          <h3 className="seo-title">Stand out to the right audience</h3>
          <p className="seo-text mt-3 mb-4">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <a className="learn-more ms-1" href="#">LEARN MORE</a>
          <div className="underline pink"/>
        </div>
      </div>
      <div className="row grid-row m-0">
        <div className="col-6 cherry-background d-flex flex-column align-items-center justify-content-end">
          <h3 className="skill-title graphic-design-text">Graphic Design</h3>
          <p className="skill-text graphic-design-text mt-3 pb-5">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className="col-6 orange-background d-flex flex-column align-items-center justify-content-end">
          <h3 className="skill-title photography-text">Photography</h3>
          <p className="skill-text photography-text mt-3 pb-5">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </section>
  )
}

export default Grid
