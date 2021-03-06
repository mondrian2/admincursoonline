import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../../../model/exercise';
import { ExerciseService } from '../../../services/exercise.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
})
export class ExerciseListComponent implements OnInit {
  public exercise$: Observable<Exercise>;
  constructor(private srv: ExerciseService, private router: Router) {}

  public load(): void {
    this.exercise$ = this.srv.get();
  }

  public delete(id): void {
    this.srv.delete(id).subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.load();
    this.exercise$.subscribe((r) => console.log(r));
  }

  public goItem(exerciseId, type): void {
    console.log(type);
    if (type === '1') {
      this.router.navigate(['complete-list', exerciseId]);
    }
    if (type === '2') {
      this.router.navigate(['answer-list', exerciseId]);
    }
    if (type === '3') {
      this.router.navigate(['alternative-list', exerciseId]);
    }
  }
}
