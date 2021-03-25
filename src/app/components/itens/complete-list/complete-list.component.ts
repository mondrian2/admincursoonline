import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TypeComplete} from '../../../model/type-complete';
import {CompleteService} from '../../../services/complete.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-complete-list',
  templateUrl: './complete-list.component.html',
  styleUrls: ['./complete-list.component.scss']
})
export class CompleteListComponent implements OnInit {

  public item$: Observable<TypeComplete>;
  constructor(private srv: CompleteService, private activeRoute: ActivatedRoute) { }

  public load(): void {
    this.item$ = this.srv.searchByExercise(Number(this.activeRoute.snapshot.paramMap.get('id')));
  }

  public delete(id): void {
    this.srv.delete(id).subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.load();
    this.item$.subscribe(r => console.log('--->', r));
  }

}
