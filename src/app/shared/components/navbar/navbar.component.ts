import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NavLink } from '../../../models/navbar.model';
import {
  akarCalendar,
  akarDoor,
  akarGrid,
  akarInbox,
  akarQuestion,
} from '@ng-icons/akar-icons';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgIconComponent],
  providers: [
    provideIcons({ akarGrid, akarCalendar, akarInbox, akarDoor, akarQuestion }),
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() routes: NavLink[] = [];
  doorIcon = 'akarDoor';
  questionIcon = 'akarQuestion';
}
