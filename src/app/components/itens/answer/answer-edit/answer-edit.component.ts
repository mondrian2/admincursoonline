import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Exercise} from '../../../../model/exercise';
import {FormBuilder, FormGroup } from '@angular/forms';
import {ExerciseService} from '../../../../services/exercise.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Answer} from '../../../../model/answer';
import {AnswerService} from '../../../../services/answer.service';

@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.scss']
})
export class AnswerEditComponent implements OnInit {
  public exercise$: Observable<Exercise>;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private srvEx: ExerciseService,
    protected srv: AnswerService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {

  }

  private createForm(answer: Answer): void{
    console.log(answer);
    this.form = this.formBuilder.group({
      id: answer.id,
      exerciseId: answer.exerciseId,
      description: answer.description,
      answer: answer.answer
    });
  }

  public loadExercise(): void {
    this.exercise$ = this.srvEx.get();
  }

  update(): void {
    console.log(this.form.value);
    this.srv.put(this.form.value.id, this.form.value)
      .subscribe(
        () => this.route.navigate(['answer-list', this.form.value.exerciseId]),
        e => console.log(e),
        () => console.log('complete')
      );
  }

  ngOnInit(): void {
    this.loadExercise();
    this.srv.search(this.activeRoute.snapshot.paramMap.get('id'))
      .subscribe(answer => this.createForm(answer));
  }
}


