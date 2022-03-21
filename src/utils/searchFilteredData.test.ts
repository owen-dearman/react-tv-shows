import { searchFilteredData } from "./searchFilteredData";

test("Search value should return array of objects with SV in name or summary", () => {
  expect(searchFilteredData("a daredevil")).toStrictEqual([
    {
      id: 5018,
      url: "https://www.tvmaze.com/episodes/5018/the-simpsons-2x08-bart-the-daredevil",
      name: "Bart the Daredevil",
      season: 2,
      number: 8,
      type: "regular",
      airdate: "1990-12-06",
      airtime: "20:00",
      airstamp: "1990-12-07T01:00:00+00:00",
      runtime: 30,
      rating: { average: 7.9 },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/54/135529.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/54/135529.jpg",
      },
      summary:
        "<p>After seeing a daredevil at a truck rally, Bart discovers his reason for living---a career in death defiance.</p>",
      _links: { self: { href: "https://api.tvmaze.com/episodes/5018" } },
    },
  ]);
  expect(searchFilteredData("spud")).toStrictEqual([
    {
      id: 5071,
      url: "https://www.tvmaze.com/episodes/5071/the-simpsons-4x15-i-love-lisa",
      name: "I Love Lisa",
      season: 4,
      number: 15,
      type: "regular",
      airdate: "1993-02-11",
      airtime: "20:00",
      airstamp: "1993-02-12T01:00:00+00:00",
      runtime: 30,
      rating: { average: 8.5 },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/43/108575.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/43/108575.jpg",
      },
      summary:
        "<p>Chief Wiggum's son has a crush on Lisa after she gives him a Valentine out of pity. <b>Blackboard: </b>'I will not call the principal \"spud head\".'</p>",
      _links: { self: { href: "https://api.tvmaze.com/episodes/5071" } },
    },
  ]);
});
