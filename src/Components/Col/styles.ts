import styled from "styled-components";
import { GridProps, defaultGrid } from "../../styles";

const bkp = defaultGrid.breakpoints;
export const getFlexBasis = (size?: number) => {
  if (!size) {
    return "auto";
  }
  return `${100 * (size / 12)}%`;
};

export const Grid = styled.div<GridProps>`
  display: flex;

  @media (min-width: ${`${bkp.xs}px`}) and (max-width: ${`${bkp.sm - 1}px`}) {
    flex: ${({ xs }) => `0 0 ${getFlexBasis(xs)}`};
    max-width: ${({ xs }) => getFlexBasis(xs)};
    padding: ${`${defaultGrid.paddings["xs"] / 2}px`};
    & > div {
      background: red;
    }
  }

  @media (min-width: ${`${bkp.sm}px`}) and (max-width: ${`${bkp.md - 1}px`}) {
    flex: ${({ sm }) => `0 0 ${getFlexBasis(sm)}`};
    max-width: ${({ sm }) => getFlexBasis(sm)};
    padding: ${`${defaultGrid.paddings["sm"] / 2}px`};
    & > div {
      background: purple;
    }
  }

  @media (min-width: ${`${bkp.md}px`}) and (max-width: ${`${bkp.lg - 1}px`}) {
    flex: ${({ md }) => `0 0 ${getFlexBasis(md)}`};
    max-width: ${({ md }) => getFlexBasis(md)};
    padding: ${`${defaultGrid.paddings["md"] / 2}px`};
    & > div {
      background: brown;
    }
  }

  @media (min-width: ${`${bkp.lg}px`}) {
    flex: ${({ lg }) => `0 0 ${getFlexBasis(lg)}`};
    max-width: ${({ lg }) => getFlexBasis(lg)};
    padding: ${`${defaultGrid.paddings["lg"] / 2}px`};
    & > div {
      background: black;
    }
  }
`;
