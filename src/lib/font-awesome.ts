import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
// @angular-package/change-detection.
import { ChangeDetector } from 'dist/change-detection';
// @angular-package/component-loader.
import { ComponentLoaderService } from 'dist/component-loader';
// Component.
import { FontAwesomeIcon } from '../icon/src/font-awesome-icon';
// Type.
import { FontAwesomeAnimate } from '../type/font-awesome.animate.type';
import { FontAwesomeFlip } from '../type/font-awesome.flip.type';
import { FontAwesomePull } from '../type/font-awesome-pull.type';
import { FontAwesomeRotate } from '../type/font-awesome-rotate.type';
import { FontAwesomeSize } from '../type/font-awesome-size.type';
import { FontAwesomeStack } from '../type/font-awesome-stack.type';
import { FontAwesomeStyle } from '../type/font-awesome-style.type';
/**
 *
 */
@Component({
  selector: 'fa',
  templateUrl: './font-awesome.html',
  styleUrls: ['./font-awesome.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentLoaderService],
})
export class FontAwesome implements AfterViewInit {
  /**
   *
   */
  @HostBinding(`class.fa-stack`) get setStack(): boolean {
    return (
      (typeof this.stack === 'boolean' && this.stack === true) ||
      typeof this.stack === 'string'
    );
  }

  /**
   *
   */
  public properties = [
    'animate',
    'border',
    'fixedWidth',
    'flip',
    'icon',
    'pull',
    'rotate',
    'size',
    'stack',
    'style',
  ];

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
   */
  @ViewChild('container', { read: ViewContainerRef }) container: any;

  /**
   *
   */
  #changeDetector!: ChangeDetector<this>;

  /**
   *
   * @param changeDetector
   * @param componentLoader
   * @angularpackage
   */
  constructor(
    public changeDetector: ChangeDetectorRef,
    public componentLoader: ComponentLoaderService<any>
  ) {}

  /**
   *
   */
  ngAfterViewInit(): void {
    /*
      Load component.
    */
    this.loadComponent(FontAwesomeIcon, ...this.properties);

    /*
      Detect changes after.
    */
    this.changeDetector.detectChanges();

    /*
      Enable change detector to detach component from change detector tree and detect changes
      on specified properties.
    */
    this.#changeDetector = new ChangeDetector(
      this,
      this.properties as any,
      (value, oldValue, key) => {
        if (this.#changeDetector.isDeactivated(key) === false) {
          this.componentLoader.destroyComponent();
          this.loadComponent(FontAwesomeIcon, ...this.properties);
        }
      }
    );

    // Enable detect changes in the detectable properties.
    this.#changeDetector.enable();
  }

  /**
   *
   * @param component
   * @angularpackage
   */
  private loadComponent(component?: Type<any>, ...properties: string[]): void {
    component &&
      this.componentLoader
        .pickViewContainer(this)
        .createComponent(component)
        .assignProperties(this, ...properties)
        .linkProperties(properties, this);
  }
}
