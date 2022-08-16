import styled from "styled-components";
import { RowProps } from "./";
import { defaultGrid } from "../../styles";

const bkp = defaultGrid.breakpoints;

export const Row = styled.div<Partial<RowProps>>`
  display: flex;
  flex-wrap: wrap;
  margin-block: ${({ spacing }) => (!!spacing ? `${spacing * 8}px` : "0")};

  @media (min-width: ${`${bkp.xs}px`}) and (max-width: ${`${bkp.sm}px`}) {
    margin-inline: ${`-${defaultGrid.paddings.xs / 2}px`};
  }

  @media (min-width: ${`${bkp.sm + 1}px`}) and (max-width: ${`${bkp.md}px`}) {
    margin-inline: ${`-${defaultGrid.paddings.sm / 2}px`};
  }

  @media (min-width: ${`${bkp.md + 1}px`}) and (max-width: ${`${bkp.lg}px`}) {
    margin-inline: ${`-${defaultGrid.paddings.md / 2}px`};
  }

  @media (min-width: ${`${bkp.lg}px`}) {
    margin-inline: ${`-${defaultGrid.paddings.lg / 2}px`};
  }
`;
