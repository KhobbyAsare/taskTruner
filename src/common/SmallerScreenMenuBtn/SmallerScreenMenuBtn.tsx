import useBrand from "../../context-api/Brandname-context/brandname";


import "./SmallerScreenMenuBtn.scss";

interface SmallerScreenMenuBtnProps {
  menuState: boolean;
  handleAddTodo: (e: React.MouseEvent<SVGSVGElement>) => void;

}

const SmallerScreenMenuBtn = ({
  handleAddTodo,
  menuState,
}: SmallerScreenMenuBtnProps) => {
  const { brandname } = useBrand();
  return (
    <div className="brand-menu-btn">
      <div className="brand">
        <h2>{brandname}</h2>
      </div>

      <div className="btn">
        {!menuState ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            onClick={(e: React.MouseEvent<SVGSVGElement>) => handleAddTodo(e)}
          >
            <path
              fill="none"
              stroke="#666666"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            onClick={(e: React.MouseEvent<SVGSVGElement>) => handleAddTodo(e)}
          >
            <path
              fill="#666666"
              d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default SmallerScreenMenuBtn;
