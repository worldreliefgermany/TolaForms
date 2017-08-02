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
import { FormlistResolve } from './app.resolve';
import { FormResolve } from './form-list/form-definition/form-definition-resolve';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =  [
    { path: '', redirectTo: '/forms', pathMatch: 'full'},
    { path: '', component: HomeComponent, resolve: { forms: FormlistResolve},
    children: [
        { path: 'forms', component: FormListComponent },
        { path: 'forms/newform', component: FormDefinitionComponent},
        { path: 'forms/:id', component: FormDefinitionComponent }
    ],
}];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FieldDefinitionComponent,
        FormDefinitionComponent,
        FormListComponent,
        FieldListComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DndModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [FormdefService, FormdefService, FormlistResolve, FormResolve],
    bootstrap: [AppComponent]
})
export class AppModule { }
