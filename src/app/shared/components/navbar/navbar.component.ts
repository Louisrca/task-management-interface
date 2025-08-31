import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NavLink } from '../../../models/navbar.model';
import { akarCalendar, akarGrid, akarInbox } from '@ng-icons/akar-icons';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgIconComponent],
  providers: [provideIcons({ akarGrid, akarCalendar, akarInbox })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() routes: NavLink[] = [];
}
