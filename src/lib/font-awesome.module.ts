import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
// Component.
import { FontAwesome } from './font-awesome';
import { FontAwesomeIcon } from '../icon/src/font-awesome-icon';
// Config class.
import { FontAwesomeConfig } from './font-awesome-config.class';
// Service.
import { FontAwesomeService } from './font-awesome.service';
import { FontAwesomeIconService } from '../icon/src/font-awesome-icon.service';

@NgModule({
  declarations: [FontAwesome, FontAwesomeIcon],
  imports: [CommonModule],
  exports: [FontAwesome, FontAwesomeIcon],
})
export class FontAwesomeModule {
  /**
   *
   * @param config
   * @returns
   */
  static forRoot(
    @Inject(FontAwesomeConfig) config: FontAwesomeConfig
  ): ModuleWithProviders<FontAwesomeModule> {
    return {
      ngModule: FontAwesomeModule,
      providers: [
        FontAwesomeService,
        FontAwesomeIconService,
        { provide: FontAwesomeConfig, useValue: config }
      ],
    };
  }

  /**
   *
   * @param config
   * @returns
   */
  static forChild(
    @Inject(FontAwesomeConfig) config: FontAwesomeConfig
  ): ModuleWithProviders<FontAwesomeModule> {
    return {
      ngModule: FontAwesomeModule,
      providers: [
        FontAwesomeService,
        FontAwesomeIconService,
        { provide: FontAwesomeConfig, useValue: config }
      ],
    };
  }

  /**
   *
   * @param parentModule
   */
  constructor(@Optional() @SkipSelf() parentModule?: FontAwesomeModule) {
    if (parentModule) {
      throw new Error(
        `${FontAwesomeModule.name} is already loaded. Import it in the AppModule only`
      );
    }
  }
}
