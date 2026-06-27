import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';
import { UserDashboardComponent } from './shared/components/user-dashboard/user-dashboard.component';
import { HomeDashboardComponent } from './shared/components/home-dashboard/home-dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { SingleUserComponent } from './shared/components/single-user/single-user.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FaireDashbaordComponent } from './shared/components/faire-dashbaord/faire-dashbaord.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { FairsCardComponent } from './shared/components/faire-dashbaord/faires-details/fairs-card/fairs-card.component';
import { FairesDetailsComponent } from './shared/components/faire-dashbaord/faires-details/faires-details.component';
import { FairsFormComponent } from './shared/components/faire-dashbaord/fairs-form/fairs-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    UserDashboardComponent,
    HomeDashboardComponent,
    SingleUserComponent,
    NavbarComponent,
    FaireDashbaordComponent,
    GetConfirmComponent,
    UserFormComponent,
    SingleProductComponent,
    ProductFormComponent,
    FairsCardComponent,
    FairesDetailsComponent,
    FairsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
