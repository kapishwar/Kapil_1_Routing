import { Component, OnInit } from '@angular/core';
import { FairsService } from '../../services/fairs.service';
import { Ifair } from '../../model/fairs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faire-dashbaord',
  templateUrl: './faire-dashbaord.component.html',
  styleUrls: ['./faire-dashbaord.component.scss']
})
export class FaireDashbaordComponent implements OnInit {

  constructor(private faireserv : FairsService,
    private _route : Router
  ) { }

  FairesArr !: Ifair[]

  ngOnInit(): void {
    this.Getdata()
  }

  Getdata(){
    this.faireserv.FetchDataApicall().subscribe({
      next:data=>{
        this.FairesArr = data
        this._route.navigate(['/Faire', this.FairesArr[0].fairId])
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }

}
