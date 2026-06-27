import { Component, inject, Injector, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Ipro } from '../../model/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  ProductArr!: Ipro[];

  constructor(private _router: Router) {}

  private proserv = inject(ProductService);

  ngOnInit(): void {
    this.Fetchdata();
  }

  Fetchdata() {
    this.proserv.fetchapicall().subscribe({
      next: (res) => {
        this.ProductArr = res;

        this._router.navigate(['Product/', this.ProductArr[0].id]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
