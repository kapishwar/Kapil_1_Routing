import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { Ifair } from 'src/app/shared/model/fairs';
import { FairsService } from 'src/app/shared/services/fairs.service';

@Component({
  selector: 'app-faires-details',
  templateUrl: './faires-details.component.html',
  styleUrls: ['./faires-details.component.scss']
})
export class FairesDetailsComponent implements OnInit {

  fairid !: string 
  FairObj !: Ifair
  FaireArr !: Ifair[]

  constructor(private fairserv : FairsService,
    private _route : Router,
    private _routes : ActivatedRoute,
   
  ) { }

  ngOnInit(): void {
    this.GetFairObject()
    this.GetFairArr()
    
    
  }


  GetFairObject(){
    this._routes.paramMap.subscribe(id=>{
      this.fairid = id.get('fairId')!
      if(this.fairid){
        this.fairserv.FindIdObj(this.fairid).subscribe({
        next:res=>{
          this.FairObj = res

        },
         error:err=>{
          console.log(err);
          
         }
      })
      }
      
    })
  }


  GetFairArr(){
    this.fairserv.FetchDataApicall().subscribe({
      next:res=>{
        this.FaireArr = res
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

}
