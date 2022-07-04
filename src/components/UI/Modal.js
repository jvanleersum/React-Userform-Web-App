import Button from "./Button";
import Card from "./Card";
import classes from './Modal.module.css';

const Modal = (props) => {

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onDismiss}></div>
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="button" onClick={props.onDismiss}>Okay</Button>
      </footer>
    </Card>
    </div>
  );
};

export default Modal;
