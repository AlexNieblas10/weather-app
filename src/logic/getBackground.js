import { imagesAutumn } from "../logic/images_autumn";
import { imagesCold } from "../logic/images_cold";
import { imagesSummer } from "../logic/images_summer";
import { imagesSpring } from "../logic/images_spring";

export function getBackground(temperature) {
  let number = Math.floor(Math.random() * 3) + 1;
  if (temperature <= 14) {
    return imagesCold[number];
  } else if (temperature <= 22 && temperature > 14) {
    return imagesSpring[number];
  } else if (temperature <= 26 && temperature > 22) {
    return imagesAutumn[number];
  } else if (temperature > 26) {
    return imagesSummer[number];
  }
}
