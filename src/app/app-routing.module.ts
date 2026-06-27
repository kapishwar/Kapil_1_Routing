import { FairesDetailsComponent } from './shared/components/faire-dashbaord/faires-details/faires-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './shared/components/user-dashboard/user-dashboard.component';
import { SingleUserComponent } from './shared/components/single-user/single-user.component';
import { HomeDashboardComponent } from './shared/components/home-dashboard/home-dashboard.component';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';
import { FaireDashbaordComponent } from './shared/components/faire-dashbaord/faire-dashbaord.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { FairsFormComponent } from './shared/components/faire-dashbaord/fairs-form/fairs-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent,
  },
  {
    path: 'Home',
    component: HomeDashboardComponent,
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    children:[
      
  {
    path: 'userform',
    component: UserFormComponent,
  },
  {
    path: ':id',
    component: SingleUserComponent,
  },
  {
    path: ':id/edit',
    component: UserFormComponent,
  }
    ]
  },
  {
    path: 'Product',
    component: ProductDashboardComponent,
    children: [
      {
        path: 'proform',
        component: ProductFormComponent,
      },
      {
        path: ':id',
        component: SingleProductComponent,
      },
      {
        path: ':id/edit',
        component: ProductFormComponent,
      },
    ],
  },
  
  {
    path: 'Faire',
    component: FaireDashbaordComponent,
    children:[
      {
        path:'addfaire',
        component:FairsFormComponent
      },
      {
        path:':fairId',
        component:FairesDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
