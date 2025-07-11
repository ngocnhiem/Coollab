import React from 'react';
import styles from './GalleryPreview.module.css';

const images = [
  '/img/gallery/img1.jpg',
  '/img/gallery/img2.jpg',
  '/img/gallery/img3.jpg',
  '/img/gallery/img4.jpg',
  '/img/gallery/img5.jpg',
  '/img/gallery/img6.jpg',
];

export default function GalleryPreview() {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Artwork ${index + 1}`} className={styles.image} />
        ))}
      </div>
    </section>
  );
}
