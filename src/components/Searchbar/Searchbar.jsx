import { Component } from 'react';
import { ImSearch } from 'react-icons/im'
import css from './Searchbar.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Searchbar extends Component {
    state = {
    query:'',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
      e.preventDefault();
      if (this.state.query.trim() === '') {  //щоб уникнути, що відправляється пошук пустоі строки, порівнюємо state до пустої строки, trim /треба щоб уникнути пропуски до введення і після і видаємо мессендж з помилкою
          return toast.error('🦄 Введи, будь ласка назву');      
     }
    this.props.onSubmit(this.state.query);
    
}
      render() {
          const { value } = this.state;
  
          return (
        
       <form className={css.form} onSubmit={this.handleSubmit}>
        <button type="submit" className={css.button} ><ImSearch></ImSearch></button>
      <input className={css.input} type="text" autoComplete="off"
            autoFocus
            placeholder="Search images and photos" value={value} onChange={this.handleChange}/>
        </form>
    )
  }
    }
   
