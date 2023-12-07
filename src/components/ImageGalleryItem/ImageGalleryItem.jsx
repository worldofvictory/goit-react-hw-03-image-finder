import css from './ImageGallery.module.css'
export const ImageGalleryItem = ({ image, onClick }) => {
  return (
   
    <li className={css.li}>
      
         <img className= {css.img} src={image.webformatURL}
        alt={image.tags}
          id={image.id}
              onClick={() => onClick(image.webformatURL)}
        />
              
</li>
  );
};

 