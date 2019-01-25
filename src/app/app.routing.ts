import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { EffectPageComponent } from './effect-page/effect-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { ListPageComponent } from './list-page/list-page.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
	{ path: 'main', component: MainComponent, pathMatch: 'prefix', data: {animation: 'main'}  },
  { path: 'nav', component: NavPageComponent, data: {animation: 'nav'}  },
  { path: 'button', component: ButtonPageComponent, data: {animation: 'button'} },
	{ path: 'effect', component: EffectPageComponent, data: {animation: 'effect'} },
	{ path: 'layout', component: LayoutPageComponent, data: {animation: 'layout'} },
	{ path: 'list', component: ListPageComponent, data: {animation: 'list'} },
	{ path: '**', component: MainComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
