import React from "react";
import Link from "@docusaurus/Link";
import styles from './GalleryImpl.module.css';

class GalleryImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      Opened: false,
      currentImageIndex: null,
      previousImageIndex: [],
      nextImageIndex: [],
      index: 0,
      animate: false,
    };
  }

  componentDidMount() {
    fetch("https://res.cloudinary.com/coollab/image/list/gallery.json")
      .then((response) => response.json())
      .then((data) => {
        const images = data.resources.map((info) => {
          const metadata =
            info.context !== undefined ? info.context.custom : {};
          return {
            url: `https://res.cloudinary.com/coollab/image/upload/v${info.version}/${info.public_id}.${info.format}`,
            title: metadata.title || "Untitled",
            description: metadata.description || "",
            author_name: metadata.author_name || "",
            author_link: metadata.author_link || "",
          };
        });
        this.setState({ images });
      });

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  openImg = (index) => {
    this.setSurroundingsFullScreenImages(index);
    this.setState({ Opened: true });
  };

  setSurroundingsFullScreenImages = (index) => {
    this.setState({
      previousImageIndex:
        index - 1 < 0 ? this.state.images.length - 1 : index - 1,
      currentImageIndex: index,
      nextImageIndex: index + 1 > this.state.images.length - 1 ? 0 : index + 1,
    });
  };

  setPrevFullScreenImage = () => {
    this.setSurroundingsFullScreenImages(this.state.previousImageIndex);
  };

  setNextFullScreenImage = () => {
    this.setSurroundingsFullScreenImages(this.state.nextImageIndex);
  };

  getCurrentFullScreenImage = () => {
    return this.state.images[this.state.currentImageIndex].url;
  };

  closeImg = () => {
    this.setState({ animate: true }, () => {
      setTimeout(() => {
        this.setState({ Opened: false, fullImageSrc: null, animate: false });
      }, 400);
    });
  };

  handleKeyDown = (event) => {
    if (this.state.Opened) {
      if (event.key === "Escape") this.closeImg();
      if (event.key === "ArrowLeft") this.setPrevFullScreenImage();
      if (event.key === "ArrowRight") this.setNextFullScreenImage();
    }
  };

  handleClick = (event) => {
    if (this.state.Opened) {
      const openingImg = [...document.querySelectorAll(`.${styles.galleryImg}`)];
      const leftButton = document.querySelector(".prev-button");
      const rightButton = document.querySelector(".next-button");
      const closeButton = document.querySelector(".close-button");

      if (
        openingImg.includes(event.target) ||
        event.target === leftButton ||
        event.target === rightButton ||
        event.target === closeButton
      ) {
        return;
      }
      this.closeImg();
    }
  };

  render() {
    const images = this.state.images.map((image, i) => (
      <div className={styles.galleryFrame} key={i}>
        <img
          src={image.url}
          className={styles.galleryImg}
          alt=""
          onClick={() => this.openImg(i)}
        />

        <div className={styles.galleryInfos}>
          <h2>{image.title}</h2>
          <h3>
            {image.author_name || image.author_link ? (
              <span>
                by{" "}
                {image.author_link ? (
                  <a href={image.author_link} target="_blank" rel="noopener noreferrer">
                    {image.author_name || "Unknown"}
                  </a>
                ) : (
                  image.author_name || "Unknown"
                )}
              </span>
            ) : null}
          </h3>
          {image.description && <>{image.description}</>}
        </div>
      </div>
    ));

    return (
      <div className={styles.gallery}>
        <h2>Discover all of the community's incredible art!</h2>
        <h3>
          <i>
            Submit your own artwork with <Link to="/Download">Coollab️</Link> 🎨
          </i>
        </h3>

        <div
          className={styles.galleryImpl}
          style={{ pointerEvents: this.state.Opened ? "none" : "auto" }}
        >
          {images}
        </div>

        {this.state.Opened && (
          <div className={styles.imgOverlay}>
            <img
              src={this.getCurrentFullScreenImage()}
              className={
                this.state.animate
                  ? styles.animateScaleDown
                  : styles.fullImage
              }
              alt="Fullscreen"
            />
            <i className="close-button fa fa-times" onClick={this.closeImg}></i>
            <i className="prev-button fa fa-arrow-left" onClick={this.setPrevFullScreenImage}></i>
            <i className="next-button fa fa-arrow-right" onClick={this.setNextFullScreenImage}></i>
          </div>
        )}
      </div>
    );
  }
}

export default GalleryImpl;
