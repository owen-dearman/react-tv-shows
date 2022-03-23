import showData from "./shows.json";
import sort from "./AlphabeticalSort";

const sortedData = showData.sort((a, b) => sort(a.name, b.name));

export const showsList = (): JSX.Element[] => {
  return sortedData.map((series) => (
    <option key={series.id} value={series.id}>
      {series.name}
    </option>
  ));
};
