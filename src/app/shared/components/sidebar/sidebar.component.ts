import { Component } from '@angular/core';
import { sidebarOptions } from './sidebar-options';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  protected isClosed: boolean = false;
  protected isRotated: boolean = false

  protected menuItems: sidebarOptions[] 

  constructor(){
    this.menuItems =  [ 
      { id: 1, path: "dashboard", name: 'Dashboard', icon: 'fas fa-tachometer-alt' },
      { id: 2, path: "users", name: 'Usuários', icon: 'fas fa-users' },
      { id: 3, path: "settings", name: 'Configurações', icon: 'fas fa-cog' },      
      { id: 5, path: "schedule", name: 'Agenda', icon: 'fas fa-users' },
      { id: 4, path: "about", name: 'Sobre', icon: 'fas fa-tachometer-alt' },
    ];
  }

  protected menuSelected(itemSelected:sidebarOptions ):void{
    console.log("menuSelected", itemSelected)
  }

  protected toggleSidebar():void {
    this.isClosed = !this.isClosed;
    this.isRotated = !this.isRotated;
  }
}
