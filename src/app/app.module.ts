import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FieldDefinitionComponent } from './form-list/form-definition/field-definition/field-definition.component';
import { FormDefinitionComponent } from './form-list/form-definition/form-definition.component';
import { FormListComponent } from './form-list/form-list.component';

import { FormdefService } from './shared/formdef.service';
import { FieldListComponent } from './form-list/form-definition/field-list/field-list.component';

const appRoutes: Routes =  [
  { path: '', component: FormListComponent},
  { path: 'forms', component: FormListComponent},
  { path: 'forms/newform', component: FormDefinitionComponent},
  { path: 'forms/:id', component: FormDefinitionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FieldDefinitionComponent,
    FormDefinitionComponent,
    FormListComponent,
    FieldListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FormdefService, FormdefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
