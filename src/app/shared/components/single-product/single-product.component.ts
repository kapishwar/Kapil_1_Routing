import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Ipro } from '../../model/products';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  constructor(
    private _activedroute: ActivatedRoute,
    private proserv: ProductService,
    private _dialogbox: MatDialog,
    private _router: Router,
  ) {}

  proid!: string;
  ProObj!: Ipro;
  ProArr !: Ipro[]

  ngOnInit(): void {
    this.GetidObj();
    this.Getdata()
  }


  Getdata(){
    this.proserv.fetchapicall().subscribe({
      next:res=>{
        this.ProArr = res
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

  GetidObj() {
    // this.proid = this._activedroute.snapshot.params['id'];

    this._activedroute.paramMap.subscribe({
      next: (res) => {
        this.proid = res.get('id')!;

        if (this.proid) {
         
          
          this.proserv.findobj(this.proid).subscribe({
            next: (res) => {
              this.ProObj = res;
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
      },
    });
  }

  OnRemovepro(proid: string) {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    config.data = ` Are You sure to Remove this Product`;

    let mat = this._dialogbox.open(GetConfirmComponent, config);

    mat.afterClosed().subscribe((isconf) => {
      if (isconf === true) {
        this.proserv.Removeproduct(proid);
        this._router.navigate(['Product/' , this.ProArr[0].id ] );
      }
    });
  }
}
