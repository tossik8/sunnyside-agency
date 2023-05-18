import "../css/Gallery.css"
const Gallery = () => {
  return (
    <section id="projects" className="container-fluid px-0 mx-0 row row-cols-md-4 row-cols-2">
      <picture className="col-md-3 px-0">
        <source srcSet="/mobile/image-gallery-milkbottles.jpg" media="(max-width: 375px)"/>
        <img className="gallery-image" src="/desktop/image-gallery-milkbottles.jpg" alt="Milk bottles." />
      </picture>
      <picture className="col-md-3 px-0">
        <source srcSet="/mobile/image-gallery-orange.jpg" media="(max-width: 375px)"/>
        <img className="gallery-image" src="/desktop/image-gallery-orange.jpg" alt="An orange." />
      </picture>
      <picture className="col-md-3 px-0">
        <source srcSet="/mobile/image-gallery-cone.jpg" media="(max-width: 375px)"/>
        <img className="gallery-image" src="/desktop/image-gallery-cone.jpg" alt="An ice cream cone." />
      </picture>
      <picture className="col-md-3 px-0">
        <source srcSet="/mobile/image-gallery-sugar-cubes.jpg" media="(max-width: 375px)"/>
        <img className="gallery-image" src="/desktop/image-gallery-sugarcubes.jpg" alt="Sugar cubes." />
      </picture>
    </section>
  )
}

export default Gallery
