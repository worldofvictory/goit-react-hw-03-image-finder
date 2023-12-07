import css from './ImageGallery.module.css'
export const ImageGalleryItem = ({ images, onClick }) => {
  return (
   
    <li className={css.li}>
      {images.map(image => (
         <img className= {css.img} src={image.webformatURL}
        alt={image.tags}
          id={image.id}
              onClick={() => onClick(image.webformatURL)}
        />
              ))}
</li>
  );
};

 