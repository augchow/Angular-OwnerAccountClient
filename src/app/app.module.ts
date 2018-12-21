import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryService } from './shared/services/repository.service';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { ErrorHandlerService } from './shared/services/error-handler.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // MenuComponent,
    NotFoundComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    InternalServerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'owner', loadChildren: "./owner/owner.module#OwnerModule" },
      { path: '404', component: NotFoundComponent},
      { path: '**', redirectTo: '/404', pathMatch: 'full'},
      { path: '500', component: InternalServerComponent}
    ]),
    RoutingModule,
    HttpClientModule
     
  ],
  providers: [
    EnvironmentUrlService,
    RepositoryService,
    ErrorHandlerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
