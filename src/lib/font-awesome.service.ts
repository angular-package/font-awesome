import { Injectable } from '@angular/core';
// Class.
import { FontAwesomeConfig } from './font-awesome-config.class';
// Type.
import { FontAwesomeStyle } from '../type/font-awesome-style.type';
import { FontAwesomeVersion } from '../type/font-awesome-version.type';
/**
 *
 */
@Injectable({
  providedIn: 'root',
})
export class FontAwesomeService {
  /**
   *
   */
  public defaultStyle: FontAwesomeStyle = 'solid';

  /**
   *
   */
  public version: FontAwesomeVersion = '5';

  /**
   *
   * @param config
   * @angularpackage
   */
  constructor(private config: FontAwesomeConfig) {
    typeof config === 'object' &&
      // Set font-awesome version to use.
      (typeof config.version === 'string' && (this.version = config.version),
      // Set default style.
      typeof config.defaultStyle === 'string' &&
        (this.defaultStyle = config.defaultStyle));
  }
}
