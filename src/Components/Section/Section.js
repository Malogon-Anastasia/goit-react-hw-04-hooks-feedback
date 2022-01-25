import PropTypes from "prop-types";
import { TitleStyles, SectionStyles } from "./Section.styled";

const Section = ({ title, children }) => (
  <SectionStyles>
    <TitleStyles>{title}</TitleStyles>
    {children}
  </SectionStyles>
);

Section.defaultProps = {
  title: "",
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
