export interface GridProps {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const paddingsSimulator = {
  xs: 16,
  sm: 20,
  md: 20,
  lg: 20,
};

export const paddingsGeneral = {
  ...paddingsSimulator,
  lg: 40,
};

export const defaultGrid = {
  breakpoints: breakpoints,
  paddings: paddingsGeneral,
};

const theme = {
  ...defaultGrid,
  breakpoints,
  paddingsGeneral,
  paddingsSimulator,
};

export default theme;
