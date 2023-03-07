import { ButtonStyle } from './Button.styled';
export const Button = ({ onClick }) => {
  return (
    <ButtonStyle type="button" onClick={onClick}>
      Load More
    </ButtonStyle>
  );
};
