import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CounterComponent]
})
export class HomeComponent {
  title = 'Hello Home Component';
}
