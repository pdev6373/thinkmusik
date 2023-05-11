import { NavTypes } from "./types";

export const navs: NavTypes[] = [
  {
    name: "Explore",
    route: "/explore",
    subNav: [
      {
        title: "INSTRUMENTS",
        content: [
          {
            name: "Piano",
            route: "/explore",
          },
          {
            name: "Guitar",
            route: "/explore",
          },
          {
            name: "Bass",
            route: "/explore",
          },
          {
            name: "Violin",
            route: "/explore",
          },
          {
            name: "Saxophone",
            route: "/explore",
          },
          {
            name: "Music Theory",
            route: "/explore",
          },
        ],
      },
      {
        title: "STYLES",
        content: [
          {
            name: "Jazz",
            route: "/explore",
          },
          {
            name: "R&B",
            route: "/explore",
          },
          {
            name: "Funk",
            route: "/explore",
          },
          {
            name: "Blues",
            route: "/explore",
          },
          {
            name: "Afro Beat",
            route: "/explore",
          },
        ],
      },
      {
        title: "LEVEL",
        content: [
          {
            name: "Beginner",
            route: "/explore",
          },
          {
            name: "Intermediate",
            route: "/explore",
          },
          {
            name: "Advanced",
            route: "/explore",
          },
        ],
      },
      {
        title: "INSTRUCTORS",
        content: [
          {
            name: "Json Mark",
            route: "/explore",
          },
          {
            name: "Bala Blue",
            route: "/explore",
          },
          {
            name: "Sophia Alakija",
            route: "/explore",
          },
          {
            name: "View All",
            route: "/explore",
          },
        ],
      },
    ],
  },
  {
    name: "Find a Musician",
    route: "/find-a-musician",
    subRoutes: [
      {
        name: "Post a Gig",
        route: "/explore",
      },
      {
        name: "Find a Talent",
        route: "/explore",
      },
    ],
  },
  {
    name: "Find a Gig",
    route: "/find-a-gig",
    subRoutes: [
      {
        name: "Gigs",
        route: "/explore",
      },
      {
        name: "Ways to Earn",
        route: "/explore",
      },
    ],
  },
  {
    name: "Musical Tools",
    route: "/musical-tools",
    subRoutes: [
      {
        name: "Sustain Pedal",
        route: "/explore",
      },
      {
        name: "Keyboard Stand",
        route: "/explore",
      },
    ],
  },
  {
    name: "Resources",
    route: "/resources",
    subRoutes: [
      {
        name: "About Us",
        route: "/explore",
      },
      {
        name: "FAQs",
        route: "/explore",
      },
      {
        name: "Blogs",
        route: "/explore",
      },
      {
        name: "Contact Us",
        route: "/explore",
      },
    ],
  },
];
