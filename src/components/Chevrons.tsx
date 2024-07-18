import Chevron from "./Chevron";
import styled from "styled-components";

type Props = {
  chevronsVisible: boolean[];
};

const StyledChevrons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  @media screen and (max-width: 599px) {
    flex-direction: column-reverse;
    width: 50px;
    height: 100%;
  }
`;

const getChevronColor = (index: number): string => {
  const colorTint = ((index % 12) * 25 + index) % 256;
  return `rgb(${colorTint},${colorTint},${colorTint})`;
};

const Chevrons = ({ chevronsVisible }: Props) => {
  return (
    <StyledChevrons>
      {chevronsVisible.map((isVisible, index) => {
        const color = getChevronColor(index);
        if (!isVisible || index === chevronsVisible.length - 1) {
          return null;
        }

        return (
          <Chevron
            key={index}
            color={color}
            count={chevronsVisible.length - 1}
          />
        );
      })}
    </StyledChevrons>
  );
};

export default Chevrons;
