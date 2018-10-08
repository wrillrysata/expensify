import React, { Component } from "react";
import Modal from 'react-modal';
import "../App.css";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const OptionModal = (props) => (
    
        <Modal
        isOpen ={!!props.selectedOption}
        contentLabel = "Selected option"
        style = {customStyles}
        onRequestClose = {props.handleCloseModal}
        >
       <p> {props.selectedOption} </p>
       <button onClick ={props.handleCloseModal}>Okay</button>
        </Modal>
    );
export default OptionModal;