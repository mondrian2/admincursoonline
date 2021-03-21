import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TypeComplete} from '../../../model/type-complete';
import {CompleteService} from '../../../services/complete.service';

@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.scss']
})
export class CompleteListComponent implements OnInit {

  public item$: Observable<TypeComplete>;
  constructor(private srv: CompleteService) { }

  public load(): void {
    this.item$ = this.srv.get();
  }

  public delete(id): void {
    this.srv.delete(id).subscribe(r => this.ngOnInit());
  }

  ngOnInit(): void {
    this.load();
    this.item$.subscribe(r => console.log(r));
  }

}
