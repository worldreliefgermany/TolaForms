import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FieldDefinitionComponent } from './field-definition/field-definition.component';
import { FormDefinitionComponent } from './form-definition/form-definition.component';
import { FormListComponent } from './form-list/form-list.component';

const appRoutes: Routes =  [
  { path: '', component: FormListComponent},
  { path: 'forms', component: FormDefinitionComponent},
  { path: 'forms/:id', component: FormDefinitionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FieldDefinitionComponent,
    FormDefinitionComponent,
    FormListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
