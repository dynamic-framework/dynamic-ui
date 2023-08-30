import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'd-skeleton',
  templateUrl: './d-skeleton.component.html'
})
export class DSkeleton implements OnInit {
  @Input() viewBox!: string;
  @Input() speed?: number= 2;
  @Input() backgroundColor?: string = "#e1dffe";
  @Input() foregroundColor?: string = "#f7f7ff";

  constructor() { }

  ngOnInit(): void { }

}
