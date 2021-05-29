import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Mapa',  icon: 'fas fa-globe-americas text-orange', class: '' },
    { path: '/pedidos', title: 'Pedidos',  icon: 'fas fa-clipboard-list text-orange', class: '' },
    { path: '/mensajes', title: 'Mensajes',  icon: 'fas fa-inbox text-orange', class: '' },
    { path: '/favoritos', title: 'Favoritos',  icon: 'fas fa-star text-orange', class: '' },
    { path: '/user-profile', title: 'Perfil',  icon:'ni ni-single-02 text-orange', class: 'text-white' },
    { path: '/tables', title: 'Tables',  icon:'ni ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
