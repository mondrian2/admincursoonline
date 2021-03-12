import { Component, OnInit } from '@angular/core';
import {Testifier} from '../../services/testifier.service';

@Component({
  selector: 'app-testfier',
  templateUrl: './testfier.component.html',
  styleUrls: ['./testfier.component.scss']
})
export class TestfierComponent implements OnInit {

  constructor(private srv: Testifier) { }

  ngOnInit(): void {
    this.srv.get().subscribe(r => console.log(r));
  }

}
