import { Component } from 'react';
import css from "./Modal.module.css"

export class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className ={css.modal} onClick={this.handleClick}>
        <img src={this.props.url} alt="modal_img" />
      </div>
    );
  }
}