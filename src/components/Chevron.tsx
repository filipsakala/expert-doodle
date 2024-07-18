import styled from "styled-components";

type Props = {
  color: string;
  count: number;
};

const StyledChevron = styled.div<{ count: number }>`
  flex: 1;
  clip-path: polygon(100% 0%, 95% 50%, 100% 100%, 5% 100%, 0% 50%, 5% 0%);

  @media screen and (max-width: 599px) {
    clip-path: polygon(0% 0%, 50% 5%, 100% 0%, 100% 95%, 50% 100%, 0% 95%);
  }

  &:not(:first-child) {
    margin-left: calc(100% / -${({ count }) => count} * 0.05 - 1px);

    @media screen and (max-width: 599px) {
      margin-left: initial;
      margin-bottom: calc(100% / -${({ count }) => count} * 0.75 - 1px);
    }
  }
`;

const Chevron = ({ color, count }: Props) => {
  return <StyledChevron style={{ backgroundColor: color }} count={count} />;
};

export default Chevron;
