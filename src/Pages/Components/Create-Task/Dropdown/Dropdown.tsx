import { useState } from "react";
import "./Dropdown.scss";
import bug from "../../../../assets/taskType/bug.png";
import ideas from "../../../../assets/taskType/ideas.png";
import gear from "../../../../assets/taskType/gear.png";

const Dropdown = ({
  type = "Select",
  data,
  onTypeSelect, // Add this line
}: {
  type: string;
  data: string[];
  onTypeSelect: (selectedType: string) => void; // Add this line
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(type);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
    onTypeSelect(type); // Add this line
  };

  return (
    <div className="type">
      <div
        className="type-select"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedType ? selectedType : type}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#666666"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m7 10l5 5l5-5"
          />
        </svg>
      </div>
      <div
        className="type-options"
        style={{ display: isDropdownOpen ? "block" : "none" }}
      >
        {data.map((item, index) => (
          <div
            className="type-option"
            key={index}
            onClick={() => handleTypeSelect(item)}
          >
            {item === "bug" ? (
              <img src={bug} alt="bug" />
            ) : item === "feature" ? (
              <img src={ideas} alt="feature" />
            ) : item === "maintenance" ? (
              <img src={gear} alt="maintenance" />
            ) : null}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
