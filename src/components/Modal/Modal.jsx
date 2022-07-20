import "../../styles/modal.css";
const Modal = ({ isHidden, setIsHidden, children }) => {
  return (
    <div
      className='modal'
      style={isHidden ? { display: "none" } : { display: "flex" }}>
      <div className='modal-form'>{children}</div>
      <button
        className='btn modal-close-btn'
        onClick={() => {
          setIsHidden(true);
        }}>
        X
      </button>
    </div>
  );
};

export default Modal;
