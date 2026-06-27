import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from 'src/app/shared/model/fairs';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {

  @Input() FairesObje !: Ifair
  constructor() { }

  ngOnInit(): void {
  }

}
