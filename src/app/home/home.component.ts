import { Component } from '@angular/core';
import { HeaderComponent } from '@components/components/header/header.component';
import { SidebarComponent } from '@components/components/sidebar/sidebar.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
