import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @Input() type: number;

  constructor(private location: Location) { }

  public backClicked(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
