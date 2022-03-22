import { searchFilteredData } from "./searchFilteredData";

test("Search value should return array of objects with SV in name or summary", () => {
  expect(
    searchFilteredData(
      [
        {
          id: 4998,
          url: "https://www.tvmaze.com/episodes/4998/the-simpsons-1x01-simpsons-roasting-on-an-open-fire",
          name: "Simpsons Roasting on an Open Fire",
          season: 1,
          number: 1,
          type: "regular",
          airdate: "1989-12-17",
          airtime: "20:00",
          airstamp: "1989-12-18T01:00:00+00:00",
          runtime: 30,
          rating: { average: 8 },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/69/173342.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/69/173342.jpg",
          },
          summary:
            "<p>Homer's Christmas bonus is canceled and the rainy-day funds are needed to pay for Bart's tattoo removal in the first full-length episode of the subversive animated satire about Springfield's hapless first family.</p>",
          _links: { self: { href: "https://api.tvmaze.com/episodes/4998" } },
        },
        {
          id: 4999,
          url: "https://www.tvmaze.com/episodes/4999/the-simpsons-1x02-bart-the-genius",
          name: "Bart the Genius",
          season: 1,
          number: 2,
          type: "regular",
          airdate: "1990-01-14",
          airtime: "20:00",
          airstamp: "1990-01-15T01:00:00+00:00",
          runtime: 30,
          rating: { average: 7.8 },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/69/173343.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/69/173343.jpg",
          },
          summary:
            "<p>Bart is moved to a school for the gifted after he switches aptitude tests with another boy. <b>Blackboard:</b> 'I will not waste chalk'.</p>",
          _links: { self: { href: "https://api.tvmaze.com/episodes/4999" } },
        },
      ],
      "genius"
    )
  ).toStrictEqual([
    {
      id: 4999,
      url: "https://www.tvmaze.com/episodes/4999/the-simpsons-1x02-bart-the-genius",
      name: "Bart the Genius",
      season: 1,
      number: 2,
      type: "regular",
      airdate: "1990-01-14",
      airtime: "20:00",
      airstamp: "1990-01-15T01:00:00+00:00",
      runtime: 30,
      rating: { average: 7.8 },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/69/173343.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/69/173343.jpg",
      },
      summary:
        "<p>Bart is moved to a school for the gifted after he switches aptitude tests with another boy. <b>Blackboard:</b> 'I will not waste chalk'.</p>",
      _links: { self: { href: "https://api.tvmaze.com/episodes/4999" } },
    },
  ]);
  expect(
    searchFilteredData(
      [
        {
          id: 5002,
          url: "https://www.tvmaze.com/episodes/5002/the-simpsons-1x05-bart-the-general",
          name: "Bart the General",
          season: 1,
          number: 5,
          type: "regular",
          airdate: "1990-02-04",
          airtime: "20:00",
          airstamp: "1990-02-05T01:00:00+00:00",
          runtime: 30,
          rating: { average: 8.5 },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/69/173346.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/69/173346.jpg",
          },
          summary:
            "<p>Terrorized by the school bully, Bart seeks counsel from Grandpa Simpson, who takes him to a warfare expert for basic training.</p>",
          _links: { self: { href: "https://api.tvmaze.com/episodes/5002" } },
        },
        {
          id: 5003,
          url: "https://www.tvmaze.com/episodes/5003/the-simpsons-1x06-moaning-lisa",
          name: "Moaning Lisa",
          season: 1,
          number: 6,
          type: "regular",
          airdate: "1990-02-11",
          airtime: "20:00",
          airstamp: "1990-02-12T01:00:00+00:00",
          runtime: 30,
          rating: { average: 8.3 },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/69/173347.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/69/173347.jpg",
          },
          summary:
            "<p>The meaning of life and second grade have Lisa playing the blues solo---until she jams with a kindred spirit; Homer seeks tutelage to beat Bart at video boxing. <b>Blackboard:</b> 'I will not instigate revolution'.</p>",
          _links: { self: { href: "https://api.tvmaze.com/episodes/5003" } },
        },
        {
          id: 5004,
          url: "https://www.tvmaze.com/episodes/5004/the-simpsons-1x07-the-call-of-the-simpsons",
          name: "The Call of the Simpsons",
          season: 1,
          number: 7,
          type: "regular",
          airdate: "1990-02-18",
          airtime: "20:00",
          airstamp: "1990-02-19T01:00:00+00:00",
          runtime: 30,
          rating: { average: 7.7 },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/40/101196.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/40/101196.jpg",
          },
          summary:
            "<p>The Simpsons put the wild back in the wilderness when their RV goes over a cliff and Homer and Bart go for help, get lost and lose their clothes. <b>Blackboard:</b> 'I will not draw naked ladies in class'.</p>",
          _links: { self: { href: "https://api.tvmaze.com/episodes/5004" } },
        },
        {
          id: 5005,
          url: "https://www.tvmaze.com/episodes/5005/the-simpsons-1x08-the-telltale-head",
          name: "The Telltale Head",
          season: 1,
          number: 8,
          type: "regular",
          airdate: "1990-02-25",
          airtime: "20:00",
          airstamp: "1990-02-26T01:00:00+00:00",
          runtime: 30,
          rating: { average: 7.8 },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/69/173348.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/69/173348.jpg",
          },
          summary:
            "<p>Bart pulls a stunt that shocks the entire town, including the new friends he was trying to impress. <b>Blackboard:</b> 'I did not see Elvis'.</p>",
          _links: { self: { href: "https://api.tvmaze.com/episodes/5005" } },
        },
        {
          id: 5006,
          url: "https://www.tvmaze.com/episodes/5006/the-simpsons-1x09-life-on-the-fast-lane",
          name: "Life on the Fast Lane",
          season: 1,
          number: 9,
          type: "regular",
          airdate: "1990-03-18",
          airtime: "20:00",
          airstamp: "1990-03-19T01:00:00+00:00",
          runtime: 30,
          rating: { average: 8.1 },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/69/173349.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/69/173349.jpg",
          },
          summary:
            '<p>Homer\'s bowling-ball gift "for Marge" prompts her to take up the sport---and maybe also a handsome instructor who offers to teach her "many things."</p>',
          _links: { self: { href: "https://api.tvmaze.com/episodes/5006" } },
        },
      ],
      "general"
    )
  ).toStrictEqual([
    {
      id: 5002,
      url: "https://www.tvmaze.com/episodes/5002/the-simpsons-1x05-bart-the-general",
      name: "Bart the General",
      season: 1,
      number: 5,
      type: "regular",
      airdate: "1990-02-04",
      airtime: "20:00",
      airstamp: "1990-02-05T01:00:00+00:00",
      runtime: 30,
      rating: { average: 8.5 },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/69/173346.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/69/173346.jpg",
      },
      summary:
        "<p>Terrorized by the school bully, Bart seeks counsel from Grandpa Simpson, who takes him to a warfare expert for basic training.</p>",
      _links: { self: { href: "https://api.tvmaze.com/episodes/5002" } },
    },
  ]);
});
