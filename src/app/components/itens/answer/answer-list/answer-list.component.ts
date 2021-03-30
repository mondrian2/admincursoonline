import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer} from '../../../../model/answer';
import {AnswerService} from '../../../../services/answer.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  public item$: Observable<Answer>;
  constructor(
    private srv: AnswerService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  public load(): void {
    this.item$ = this.srv.searchByExercise(Number(this.activeRoute.snapshot.paramMap.get('id')));
  }

  public goAdd(): void{
    this.route.navigate(['answer-create', this.activeRoute.snapshot.paramMap.get('id')]);
  }

  public delete(id): void {
    this.srv.delete(id).subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.load();
    this.item$.subscribe(r => console.log('--->', r));
  }

}

