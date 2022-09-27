const mediaQuery: Array<number> = [540, 720, 960, 1140, 1320];
const responsive: Array<{ [key: number]: string } | string> = mediaQuery.map(
  (item) => `@media screen and (max-width: ${item}px)`,
);
export default responsive;
