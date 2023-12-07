import { Component } from "react";
import { ImageGallery } from "./ImageGalleryList/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer, toast} from 'react-toastify';
import { getImages } from './Api/Api'
import { Loader } from './Loader/Loader'
import { Button } from "./Button/Button";
import { Modal } from './Modal/Modal'



export default class App extends Component {
    state = {
        isLoadMore: false,
        isLoading: false,
        url: '',
        page: 1,
        query: '',
        images: [],
 }


 componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true, isLoadMore: false });
      getImages(this.state)
        .then(({ hits: photos, totalHits, hits }) => {
          if (!photos.length) {
            return toast.error(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],

            isLoadMore: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          toast.error(
            'Oops! Something went wrong! Try reloading the page or make another choice');
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
   handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSubmit = query => {
    if (this.state.query === query) {
      return;
    }
    this.setState({ query, page: 1, images: [] });
    };
    
  openModal = url => {
    this.setState({ url });
  };


    render() {
       const { images, isLoadMore, isLoading, url } = this.state;
      return (
        <div>
        
              <Searchbar onSubmit={this.handleSubmit} />
              {isLoading && <Loader />}  
              <ImageGallery images={this.state.images} />
              <ToastContainer autoClose={1000} />  
        {url && <Modal closeModal={this.openModal} url={url} />}
        {isLoadMore && <Button onClick={() => this.handleLoadMore()} />}      
       </div> 
    )
  }
}


