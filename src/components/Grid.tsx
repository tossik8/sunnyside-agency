import React from "react"
import "../css/Grid.css"

const Grid = () => {

  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    const sibling = target.nextSibling as HTMLElement;
    sibling.classList.add("hovered");
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    const sibling = target.nextSibling as HTMLElement;
    sibling.classList.remove("hovered");
  }

  return (
    <section id="about" className="container-fluid px-0">
      <div className="row flex-column-reverse flex-md-row row-cols-md-2 row-cols-1 mx-0">
        <div className="col-md-6 d-flex justify-content-center seo-div align-items-center">
          <div className="content-wrapper d-flex flex-column py-5 p-md-0 align-items-center text-center text-md-start align-items-md-start">
            <h3 className="seo-title">Transform your brand</h3>
            <p className="seo-text mt-3 mb-4">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a onMouseOver={e => handleMouseOver(e)} onMouseLeave={e => handleMouseLeave(e)} className="learn-more ms-1" href="#">LEARN MORE</a>
            <div className="underline yellow"/>
          </div>
        </div>
        <picture className="col-md-6 px-0">
          <source srcSet="../../images/mobile/image-transform.jpg" media="(max-width: 375px)"/>
          <img className="grid-image" src="../../images/desktop/image-transform.jpg" alt="An egg on a yellow background." />
        </picture>
      </div>
      <div className="row row-cols-md-2 row-cols-sm-1 grid-row m-0">
        <picture className="col-md-6 px-0">
          <source srcSet="../../images/mobile/image-stand-out.jpg" media="(max-width: 375px)"/>
          <img className="grid-image" src="../../images/desktop/image-stand-out.jpg" alt="A pink cup on a pink background." />
        </picture>
        <div className="col-md-6 d-flex justify-content-center seo-div align-items-center">
          <div className="content-wrapper d-flex flex-column py-5 p-md-0 align-items-center text-center text-md-start align-items-md-start">
            <h3 className="seo-title">Stand out to the right audience</h3>
            <p className="seo-text mt-3 mb-4">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <a onMouseOver={e => handleMouseOver(e)} onMouseLeave={e => handleMouseLeave(e)} className="learn-more ms-1" href="#">LEARN MORE</a>
            <div className="underline pink"/>
          </div>
        </div>
      </div>
      <section id="services" className="row row-cols-1 grid-row m-0">
        <div className="col-md-6 px-0 cherry-background d-flex flex-column align-items-center justify-content-end">
          <h3 className="skill-title graphic-design-text">Graphic Design</h3>
          <p className="skill-text graphic-design-text mt-3 pb-5">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className="col-md-6 px-0 orange-background d-flex flex-column align-items-center justify-content-end">
          <h3 className="skill-title photography-text">Photography</h3>
          <p className="skill-text photography-text mt-3 pb-5">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </section>
    </section>
  )
}

export default Grid
