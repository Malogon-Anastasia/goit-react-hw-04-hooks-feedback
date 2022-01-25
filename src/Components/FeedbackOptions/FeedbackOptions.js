import PropTypes from "prop-types";
import { OptionsButton } from "./FeedbackOptions.styled";

function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

export default function FeedbackOptions({ options, clickFn }) {
  return (
    <div>
      {options.map((option) => (
        <OptionsButton
          type="button"
          key={option}
          id={option}
          onClick={clickFn}
          style={{ backgroundColor: getRandomColor() }}
        >
          {option}
        </OptionsButton>
      ))}
    </div>
  );
}
FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  clickFn: PropTypes.func,
};
