import "./ModalBackdrop.scss";

interface ModalBackdropProps {
    children: React.ReactNode;
}

const ModalBackdrop = ({children}:ModalBackdropProps) => {
  return <section className="modal-backdrop">{children}</section>;
};

export default ModalBackdrop;
