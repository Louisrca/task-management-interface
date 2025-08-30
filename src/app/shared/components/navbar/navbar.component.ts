import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLink } from '../../../models/nav-link.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() routes: NavLink[] = [];
}
