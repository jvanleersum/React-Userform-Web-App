import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onDismiss}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="button" onClick={props.onDismiss}>
            Okay
          </Button>
        </footer>
      </Card>
  );
} 

const Modal = (props) => {
  return (
    <React.Fragment>
      { ReactDOM.createPortal(<Backdrop onDismiss={props.onDismiss} />, document.getElementById('backdrop-root')) }
      { ReactDOM.createPortal(<ModalOverlay title={props.title} content={props.content} onDismiss={props.onDismiss}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default Modal;
