import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { UsernameComponent } from './username/username.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    UsernameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
