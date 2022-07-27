import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-skeleton',
  templateUrl: './m-skeleton.component.html'
})
export class MSkeleton implements OnInit {
  @Input() viewBox!: string;
  @Input() speed?: number= 2;
  @Input() backgroundColor?: string = "#f3f3f3"
  @Input() foregroundColor?: string = "#ecebeb"

  constructor() { }

  ngOnInit(): void {
  }

}