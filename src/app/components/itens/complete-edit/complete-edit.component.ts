import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Exercise} from '../../../model/exercise';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ExerciseService} from '../../../services/exercise.service';
import {CompleteService} from '../../../services/complete.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TypeComplete} from '../../../model/type-complete';

@Component({
  selector: 'app-complete-edit',
  templateUrl: './complete-edit.component.html',
  styleUrls: ['./complete-edit.component.scss']
})
export class CompleteEditComponent implements OnInit {
  public exercise$: Observable<Exercise>;
  form: FormGroup;
  options: [];
  preview: string[] = [];
  expression: string;
  name: string;

  constructor(
    private formBuilder: FormBuilder, private srvEx: ExerciseService,
    protected srv: CompleteService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {

  }

  private createForm(itemComplete: TypeComplete): void{
    console.log(itemComplete);
    this.form = this.formBuilder.group({
      id: itemComplete.id,
      label: itemComplete.label,
      exerciseId: itemComplete.exerciseId,
      options: this.formBuilder.array([], [Validators.required])
    });
  }

  public loadExercise(): void {
    this.exercise$ = this.srvEx.get();
  }

  update(): void {
    console.log(this.form.value);
    this.srv.put(this.form.value.id, this.form.value)
      .subscribe(
        () => this.route.navigate(['item-complete-list']),
        e => console.log(e),
        () => console.log('complete')
      );
  }

  onCheckboxChange(e: any): void {
    const options: FormArray = this.form.get('options') as FormArray;
    if (e.target.checked) {
      options.push(new FormControl(e.target.value));
    } else {
      const index = options.controls.findIndex(x => x.value === e.target.value);
      options.removeAt(index);
    }
  }

  optionsChanged($event: any): void {
    console.log($event.target.value.split(' '));
    this.options = $event.target.value.split(' ');
  }

  setPreview(): void {
    this.preview = [];
    console.log(this.options);
    this.options.forEach(op => {
      if (this.form.value.options.indexOf(op) >= 0) {
        this.preview.push(`[${op}]`);
      } else {
        this.preview.push(op);
      }
    });
    this.expression = this.preview.join(' ');
  }

  ngOnInit(): void {
    this.loadExercise();
    this.srv.search(this.activeRoute.snapshot.paramMap.get('id'))
      .subscribe(itemComplete => this.createForm(itemComplete));
  }
}
