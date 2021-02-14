export const bp = (size, up = false) =>
  up
    ? `@media only screen and (min-width: ${size}px)`
    : `@media only screen and (max-width: ${size}px)`
