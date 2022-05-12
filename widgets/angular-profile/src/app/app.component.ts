import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'title prop text';

  actions = [
    { id: 'action 1', text: 'Action 1' },
    { id: 'action 2', text: 'Action 2' }
  ];

  value = 'initial';

  onButtonClick() {
    console.log('button-clicked')
  }

  onActionClick(event: Event) {
    console.log('action-clicked', event)
  }

  onInputChange(event: Event) {
    this.value = (event as CustomEvent<string>).detail;
  }
}
