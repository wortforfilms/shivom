import { Origin, Horoscope } from "circular-natal-horoscope-js";


const customOrbs = {
  conjunction: 8,
  opposition: 8,
  trine: 8,
  square: 7,
  sextile: 6,
  quincunx: 5,
  quintile: 1,
  septile: 1,
  "semi-square": 1,
  "semi-sextile": 1,
};


export const horoscope = new Horoscope({
  origin: new Origin({}),
  houseSystem: "whole-sign",
  zodiac: "tropical",
  aspectPoints: ['bodies', 'points', 'angles'],
  aspectWithPoints: ['bodies', 'points', 'angles'],
  aspectTypes: ["major", "minor"],
  customOrbs: customOrbs,
  language: 'en'
});

