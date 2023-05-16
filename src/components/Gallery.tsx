import "../css/Gallery.css"
const Gallery = () => {
  return (
    <section id="projects">
      <picture>
        <source srcSet="../../images/mobile/image-gallery-milkbottles.jpg" media="(max-width: 375px)"/>
        <img className="gallery-image" src="../../images/desktop/image-gallery-milkbottles.jpg" alt="Milk bottles." />
      </picture>
      <picture>
        <source srcSet="../../images/mobile/image-gallery-orange.jpg" media="(max-width: 375px)"/>
        <img className="gallery-image" src="../../images/desktop/image-gallery-orange.jpg" alt="An orange." />
      </picture>
      <picture>
        <source srcSet="../../images/mobile/image-gallery-cone.jpg" media="(max-width: 375px)"/>
        <img className="gallery-image" src="../../images/desktop/image-gallery-cone.jpg" alt="An ice cream cone." />
      </picture>
      <picture>
        <source srcSet="../../images/mobile/image-gallery-sugar-cubes.jpg" media="(max-width: 375px)"/>
        <img className="gallery-image" src="../../images/desktop/image-gallery-sugarcubes.jpg" alt="Sugar cubes." />
      </picture>
    </section>
  )
}

export default Gallery
