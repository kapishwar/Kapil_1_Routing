import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

  msg : string
  constructor(private _dialogRef : MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data : string
  ) { 
    this.msg = data
  }

  ngOnInit(): void {
  }

  onclosed(flag:boolean){
    this._dialogRef.close(flag)
  }

}
