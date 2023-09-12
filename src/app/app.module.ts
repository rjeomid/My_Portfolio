import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shayred/Navbar/navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { UIComponent } from './u-i/u-i.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    ServicesComponent,
    UIComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    NzAvatarModule,
    AppRoutingModule,
    NzTypographyModule,
    NzNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
