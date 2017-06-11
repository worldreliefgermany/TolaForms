import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FieldDefinitionComponent } from './field-definition/field-definition.component';
import { FormDefinitionComponent } from './form-definition/form-definition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FieldDefinitionComponent,
    FormDefinitionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
