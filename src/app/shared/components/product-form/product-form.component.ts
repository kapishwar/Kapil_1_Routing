import { ControlValidators } from './../../validatorsfolder/controlsvalidations';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Ipro } from '../../model/products';
import { SnackBarService } from '../../services/snack-bar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  ProductForm!:FormGroup

  constructor(private proserv : ProductService,
    private snackbar : SnackBarService,
    private _route : Router,
    private _routes : ActivatedRoute
  ) { }

  isInEditMode : boolean = false
  ProEditId !: string

  ngOnInit(): void {
    this.CreateFormControlOfProduct()
    this.GetEditForm()
  }

  CreateFormControlOfProduct(){
     this.ProductForm = new FormGroup ({
      name : new FormControl (null , [Validators.required]),
      category : new FormControl( null , [Validators.required]),
      price : new FormControl(null, [Validators.required]),
      stock : new FormControl ( null, [Validators.required]),
      rating : new FormControl( null , [Validators.required]),
      image : new FormControl(null , [Validators.required , Validators.pattern(ControlValidators.imgurl)])
    })
  }

  OnSubmitProduct(){
   if(this.ProductForm.invalid){
    this.ProductForm.markAllAsTouched()
   }else{

    let Newpro : Ipro = {
      ...this.ProductForm.value,
      id:this.proserv.NewId()
    }
    this.proserv.Postapicall(Newpro).subscribe({
      next:res=>{
        this.snackbar.OpensnackBar(res.msg)
        this._route.navigate(['/Product', Newpro.id])
      },
      error:errr=>{
        this.snackbar.OpensnackBar(errr)
      }
    })
   }
  }

  get control(){
    return this.ProductForm.controls
  }


  GetEditForm(){
    if(this._routes.snapshot.params['id']){
      this.ProEditId = this._routes.snapshot.params['id']
      this.isInEditMode = true
      this.proserv.FindEditObj(this.ProEditId).subscribe({
        next:res=>{
          this.ProductForm.patchValue(res)
        },
        error:err=>{
          console.log(err);
          
        }
      })
    }
  }


  OnUpdateProduct(){
    if(this.ProductForm.valid){
      let UpdateProObj : Ipro  ={
        ...this.ProductForm.value,
        id:this.ProEditId
      }
      this.proserv.UpdateProductapicall(UpdateProObj).subscribe({
        next:res=>{
          this.snackbar.OpensnackBar(res.msg)
          this.ProductForm.reset()
          this.isInEditMode = false
          this._route.navigate(['/Product', UpdateProObj.id])
        },
        error:err=>{
          this.snackbar.OpensnackBar(err)
        }
      })


    }
  }

}
