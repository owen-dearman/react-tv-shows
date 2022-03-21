import { episodeDataPreparation } from "./episodeDataPreparation";

test("Episode summaries should not start and end in <p> tags", () => {
  expect(
    episodeDataPreparation([
      {
        id: 4952,
        url: "https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
        name: "Winter is Coming",
        season: 1,
        number: 1,
        type: "regular",
        airdate: "2011-04-17",
        airtime: "21:00",
        airstamp: "2011-04-18T01:00:00+00:00",
        runtime: 60,
        rating: { average: 8.7 },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg",
        },
        summary:
          "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
        _links: { self: { href: "https://api.tvmaze.com/episodes/4952" } },
      },
    ])
  ).toStrictEqual([
    {
      id: 4952,
      url: "https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
      name: "Winter is Coming",
      season: 1,
      number: 1,
      type: "regular",
      airdate: "2011-04-17",
      airtime: "21:00",
      airstamp: "2011-04-18T01:00:00+00:00",
      runtime: 60,
      rating: { average: 8.7 },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg",
      },
      summary:
        "Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.",
      _links: { self: { href: "https://api.tvmaze.com/episodes/4952" } },
    },
  ]);
  expect(
    episodeDataPreparation([
      {
        id: 4954,
        url: "https://www.tvmaze.com/episodes/4954/game-of-thrones-1x03-lord-snow",
        name: "Lord Snow",
        season: 1,
        number: 3,
        type: "regular",
        airdate: "2011-05-01",
        airtime: "21:00",
        airstamp: "2011-05-02T01:00:00+00:00",
        runtime: 60,
        rating: { average: 8.3 },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_landscape/1/2671.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/1/2671.jpg",
        },
        summary:
          "<p>Jon Snow attempts to find his place amongst the Night's Watch. Eddard and his daughters arrive at King's Landing.</p>",
        _links: { self: { href: "https://api.tvmaze.com/episodes/4954" } },
      },
    ])
  ).toStrictEqual([
    {
      id: 4954,
      url: "https://www.tvmaze.com/episodes/4954/game-of-thrones-1x03-lord-snow",
      name: "Lord Snow",
      season: 1,
      number: 3,
      type: "regular",
      airdate: "2011-05-01",
      airtime: "21:00",
      airstamp: "2011-05-02T01:00:00+00:00",
      runtime: 60,
      rating: { average: 8.3 },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/1/2671.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/2671.jpg",
      },
      summary:
        "Jon Snow attempts to find his place amongst the Night's Watch. Eddard and his daughters arrive at King's Landing.",
      _links: { self: { href: "https://api.tvmaze.com/episodes/4954" } },
    },
  ]);
});
