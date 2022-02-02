import PropTypes from "prop-types";
import { OptionsButton } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options,  onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <OptionsButton
          type="button"
          key={option}
          id={option}
          onClick={onLeaveFeedback}
           >
          {option}
        </OptionsButton>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
