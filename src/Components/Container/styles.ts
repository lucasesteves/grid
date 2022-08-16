import styled, { css } from "styled-components";
import { ContainerProps } from "./";
import { defaultGrid } from "../../styles";

const bkp = defaultGrid.breakpoints;

export const Container = styled.div<Partial<ContainerProps>>`
  ${({ spacing, fluid }) => {
    const p = defaultGrid.paddings;
    const d = defaultGrid.breakpoints;
    const defaultWidth = (size?: keyof typeof p) => {
      const width = size ? p[size] : p.lg;
      return `calc(100vw - ${width}px)`;
    };

    const defaultPadding = (size?: keyof typeof p) => {
      if (spacing) {
        return `${spacing * 8}px`;
      }
      return `${size ? p[size] / 2 : p.lg / 2}px`;
    };
    return css`
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      @media (min-width: ${`${bkp.xs}px`}) and (max-width: ${`${bkp.sm}px`}) {
        padding: ${defaultPadding("xs")};
        width: ${`calc(100vw - ${p.xs}px)`};
        max-width: ${fluid ? defaultWidth() : `${d.sm}px`};
      }

      @media (min-width: ${`${
          bkp.sm + 1
        }px`}) and (max-width: ${`${bkp.md}px`}) {
        padding: ${defaultPadding("sm")};
        width: ${`calc(100vw - ${p.sm}px)`};
        max-width: ${fluid ? defaultWidth() : `${d.md}px`};
      }

      @media (min-width: ${`${
          bkp.md + 1
        }px`}) and (max-width: ${`${bkp.lg}px`}) {
        padding: ${defaultPadding("md")};
        width: ${`calc(100vw - ${p.md}px)`};
        max-width: ${fluid ? defaultWidth() : `${d.lg}px`};
      }

      @media (min-width: ${`${bkp.lg}px`}) {
        padding: ${defaultPadding("lg")};
        width: ${`calc(100vw - ${p.lg}px)`};
        max-width: ${fluid ? defaultWidth() : `${d.xl - 1}px`};
      }
    `;
  }}
`;
