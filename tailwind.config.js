/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}",
  "!./src/app/navbar/**/*",
  "!./src/app/adopt/**/*",
  "!./src/app/components/**/*",
  "!./src/app/components/card/**/*",
];
export const theme = {
  extend: {},
};
export const plugins = [];

