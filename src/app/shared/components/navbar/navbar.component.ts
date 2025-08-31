import { Component, inject, Input } from '@angular/core';
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
import { AppNavigationService } from '../../../services/AppNavigation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgIconComponent, CommonModule],
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
  private nav = inject(AppNavigationService);

  isActive(path: string) {
    return this.nav.isActive(path);
  }
}
