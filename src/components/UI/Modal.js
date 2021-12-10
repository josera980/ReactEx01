import { Fragment } from "react";

import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onClick}>Okay</button>
        </footer>
      </Card>
    </Fragment>
  );
};

export default Modal;
