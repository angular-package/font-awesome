// @angular.
import { Component, Input } from '@angular/core';
// Service.
import { FontAwesomeService } from '../../lib/font-awesome.service';
import { FontAwesomeIconService } from './font-awesome-icon.service';
// Type.
import { FontAwesomeAnimate } from '../../type/font-awesome.animate.type';
import { FontAwesomeFlip } from '../../type/font-awesome.flip.type';
import { FontAwesomeRotate } from '../../type/font-awesome-rotate.type';
import { FontAwesomeSize } from '../../type/font-awesome-size.type';
import { FontAwesomeStack } from '../../type/font-awesome-stack.type';
import { FontAwesomeStyle } from '../../type/font-awesome-style.type';
import { FontAwesomePull } from '../../type/font-awesome-pull.type';

@Component({
  selector: 'icon',
  template: `<i [ngClass]="setClass()"></i>`,
})
export class FontAwesomeIcon {
  /**
   *
   */
  @Input() animate?: FontAwesomeAnimate;

  /**
   *
   */
  @Input() border = false;

  /**
   *
   */
  @Input() fixedWidth = false;

  /**
   *
   */
  @Input() flip?: FontAwesomeFlip;

  /**
   *
   */
  @Input() icon!: string;

  /**
   *
   */
  @Input() pull?: FontAwesomePull;

  /**
   *
   */
  @Input() rotate?: FontAwesomeRotate;

  /**
   *
   */
  @Input() size?: FontAwesomeSize;

  /**
   *
   */
  @Input() stack: FontAwesomeStack = false;

  /**
   *
   */
  @Input() style!: FontAwesomeStyle;

  /**
   *
   * @param fas
   * @angularpackage
   */
  constructor(
    public faIcon: FontAwesomeIconService,
    public fas: FontAwesomeService
  ) {}

  /**
   *
   * @returns
   * @angularpackage
   */
  public setClass(): object {
    return {
      // Animate.
      [`${this.faIcon.prefix}${this.animate}`]: this.animate ? true : false,
      // Border.
      [this.faIcon.border]: this.border,
      // Fixed width.
      [this.faIcon.fixedWidth]: this.fixedWidth,
      // Flip.
      [`${this.faIcon.flipPrefix}${this.flip}`]: this.flip ? true : false,
      // Icon.
      [`${this.faIcon.prefix}${this.icon}`]: true,
      // Pull left/right.
      [`${this.faIcon.pullPrefix}${this.pull}`]: this.pull ? true : false,
      // Rotate.
      [`${this.faIcon.rotatePrefix}${this.rotate}`]: this.rotate ? true : false,
      // Size.
      [`${this.faIcon.prefix}${this.size}`]: this.size ? true : false,
      // TODO: Stack.
      // [`${this.fas.prefix}${this.stack}`]: this.size ? true : false,
      // Style.
      [this.faIcon.versionStyles[this.fas.version][this.style]]: this.style
        ? true
        : false,
      // Default style if the style is not given.
      [this.faIcon.versionStyles[this.fas.version][this.fas.defaultStyle]]: this
        .style
        ? false
        : true,
    };
  }
}
