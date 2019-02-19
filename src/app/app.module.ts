import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ButtonPageComponent } from './button-page/button-page.component';

import { AppService } from './app.service';

import { MatButtonModule } from '@angular/material/button';
import { NavPageComponent } from './nav-page/nav-page.component';
import { NavItemStandardComponent } from './nav-item-standard/nav-item-standard.component';
import { NavItemGradientComponent } from './nav-item-gradient/nav-item-gradient.component';

import { routing } from './app.routing';
import { MainComponent } from './main/main.component';
import { NavVerticalItemComponent } from './nav-vertical-item/nav-vertical-item.component';
import { NavVerticalSubitemComponent } from './nav-vertical-subitem/nav-vertical-subitem.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { NavItemButtonComponent } from './nav-item-button/nav-item-button.component';
import { NavSubitemComponent } from './nav-subitem/nav-subitem.component';
import { EffectPageComponent } from './effect-page/effect-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { LoadingDotsComponent } from './loading-dots/loading-dots.component';
import { LoadingCircleComponent } from './loading-circle/loading-circle.component';
import { LoadingStripesComponent } from './loading-stripes/loading-stripes.component';
import { LoadingStripesSmoothComponent } from './loading-stripes-smooth/loading-stripes-smooth.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { LoadingSquaresComponent } from './loading-squares/loading-squares.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ButtonPageComponent,
    NavPageComponent,
    NavItemStandardComponent,
    NavItemGradientComponent,
    MainComponent,
    NavVerticalItemComponent,
    NavVerticalSubitemComponent,
    LayoutPageComponent,
    NavItemButtonComponent,
    NavSubitemComponent,
    EffectPageComponent,
    ListPageComponent,
    LoadingDotsComponent,
    LoadingCircleComponent,
    LoadingStripesComponent,
    LoadingStripesSmoothComponent,
    LoadingBarComponent,
    LoadingSquaresComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    routing
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
