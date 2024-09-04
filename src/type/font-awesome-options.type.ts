// Type.
import { FontAwesomeAnimate } from './font-awesome.animate.type';
import { FontAwesomeFlip } from './font-awesome.flip.type';
import { FontAwesomePull } from './font-awesome-pull.type';
import { FontAwesomeRotate } from './font-awesome-rotate.type';
import { FontAwesomeSize } from './font-awesome-size.type';
import { FontAwesomeStack } from './font-awesome-stack.type';
import { FontAwesomeStyle } from './font-awesome-style.type';
/**
 *
 */
export type FontAwesomeOptions = {
  animate?: FontAwesomeAnimate;
  border?: boolean;
  fixedWidth?: boolean;
  flip?: FontAwesomeFlip;
  icon: string;
  pull?: FontAwesomePull;
  rotate?: FontAwesomeRotate;
  size?: FontAwesomeSize;
  stack?: FontAwesomeStack;
  style: FontAwesomeStyle;
}
