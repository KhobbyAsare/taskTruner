import "./modal.scss";

interface ModalProps {
  modalText: string;
  modelDescription: string;
  butttontext: string;
  closeModal: () => void;
}
const Modal = ({
  modalText,
  modelDescription,
  butttontext,
  closeModal,
}: ModalProps) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <header>
          <h2 className="modal-text">{modalText}</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="close-btn"
            onClick={closeModal}
          >
            <path
              fill="none"
              stroke="#808080"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m16 16l-4-4m0 0L8 8m4 4l4-4m-4 4l-4 4"
            />
          </svg>
        </header>
        <p>{modelDescription}</p>
        <input
          className="email-input"
          type="email"
          name=""
          id=""
          placeholder="Enter email address"
        />
        <button className="send-btn">{butttontext}</button>
      </div>
    </div>
  );
};

export default Modal;
