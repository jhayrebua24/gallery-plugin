import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Modal({ children, show, handleClose }) {
  const modal = useRef();
  useEffect(() => {
    if (show) document.body.classList.add("open-modal");
    else document.body.classList.remove("open-modal");
  }, [show]);
  return (
    <div
      className="modal"
      style={{
        display: show ? "block" : "none",
      }}
      // onClick={(e) => {
      //   console.log(e.currentTarget);
      //   if (e.target !== e.currentTarget) return;
      //   handleClose();
      // }}
      ref={modal}
    >
      <div
        className="overlay"
        onClick={(e) => {
          console.log(e.currentTarget);
          if (e.target !== e.currentTarget) return;
          handleClose();
        }}
      >
        <div className="modal-content">
          <div className="modal-body">{children}</div>
          <span type="button" className="close" onClick={handleClose}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}
Modal.defaultProps = {
  show: false,
  handleClose: () => {},
};
Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.objectOf(PropTypes.any),
    PropTypes.node,
  ]),
};
export default Modal;
