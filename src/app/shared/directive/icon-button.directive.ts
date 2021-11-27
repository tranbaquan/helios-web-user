import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appIconButton]'
})
export class IconButtonDirective implements OnInit {
  @Input() size: number;
  @Input() background: BackgroundType;

  constructor(private el: ElementRef) {
    this.background = 'bg-default';
    this.size = 32;
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('core-icon-button');
    this.el.nativeElement.classList.add(this.background);

    if (this.size) {
      this.el.nativeElement.style.width = this.size + 'px';
      this.el.nativeElement.style.height = this.size + 'px';
    }
  }
}

export type BackgroundType = 'bg-dark' | 'bg-default' | 'bg-transparent' | 'bg-orange' | 'bg-gray' | 'bg-red';
