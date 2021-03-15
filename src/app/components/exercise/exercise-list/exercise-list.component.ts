import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Exercise} from '../../../model/exercise';
import {ExerciseService} from '../../../services/exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  public exercise$: Observable<Exercise>;
  constructor(private srv: ExerciseService) { }

  public load(): void {
    this.exercise$ = this.srv.get();
  }

  public delete(id): void {
    this.srv.delete(id).subscribe(r => this.ngOnInit());
  }


  ngOnInit(): void {
    this.load();
  }

}
