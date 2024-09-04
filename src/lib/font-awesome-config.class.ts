// @angular.
import { Injectable } from '@angular/core';
// Type.
import { FontAwesomeStyle } from '../type/font-awesome-style.type';
import { FontAwesomeVersion } from '../type/font-awesome-version.type';
/**
 *
 */
@Injectable({ providedIn: 'root' })
export class FontAwesomeConfig {
  public defaultStyle?: FontAwesomeStyle;
  public version?: FontAwesomeVersion;
}
