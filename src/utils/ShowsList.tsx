import showData from "./shows.json";

export const showsList = (): JSX.Element[] => {
  return showData.map((series) => (
    <option key={series.id} value={series.id}>
      {series.name}
    </option>
  ));
};
