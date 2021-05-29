import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { PedidosComponent } from '../../pages/pedidos/pedidos.component';
import { MensajesComponent } from '../../pages/mensajes/mensajes.component';
import { FavoritosComponent } from '../../pages/favoritos/favoritos.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'pedidos',           component: PedidosComponent },
    { path: 'mensajes',           component: MensajesComponent },
    { path: 'favoritos',           component: FavoritosComponent },
];
