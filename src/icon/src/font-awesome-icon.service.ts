import { Injectable } from '@angular/core';
/**
 *
 */
@Injectable({
  providedIn: 'root',
})
export class FontAwesomeIconService {
  /**
   *
   */
  public prefix = `fa-`;

  /**
   *
   */
  public border = `${this.prefix}border`;

  /**
   *
   */
  public fixedWidth = `${this.prefix}fw`;

  /**
   *
   */
  public flipPrefix = `${this.prefix}flip-`;

  /**
   *
   */
  public pullPrefix = `${this.prefix}pull-`;

  /**
   *
   */
  public rotatePrefix = `${this.prefix}rotate-`;

  /**
   *
   */
  public stack = `${this.prefix}stack`;

  /**
   *
   */
  public versionStyles = {
    6: {
      brands: `${this.prefix}solid`,
      duotone: `${this.prefix}duotone`,
      light: `${this.prefix}light`,
      regular: `${this.prefix}regular`,
      solid: `${this.prefix}solid`,
      thin: `${this.prefix}thin`,
    },
    5: {
      brands: 'fab',
      duotone: 'fad',
      light: 'fal',
      regular: 'far',
      solid: 'fas',
      thin: 'fal',
    },
  };
}
