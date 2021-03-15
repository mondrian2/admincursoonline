
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import {ItemComplete} from '../../../model/item-complete';
import {ItemCompleteService} from '../../../services/item-complete.service';
import {Exercise} from '../../../model/exercise';
import {ExerciseService} from '../../../services/exercise.service';

@Component({
  selector: 'app-item-complete-create',
  templateUrl: './item-complete-create.component.html',
  styleUrls: ['./item-complete-create.component.scss']
})
export class ItemCompleteCreateComponent implements OnInit {
  completeItem: ItemComplete;
  public exercise$: Observable<Exercise>;
  form: FormGroup;
  options: [];
  preview: string[] = [];
  expression: string;
  name: string;

  constructor(private formBuilder: FormBuilder, private srvEx: ExerciseService, protected srv: ItemCompleteService, private activeRoute: ActivatedRoute, private route: Router) {

  }

  private createForm(itemComplete: ItemComplete): void{
    console.log(itemComplete);
    this.form = this.formBuilder.group({
      label: '',
      exerciseId: '',
      options: this.formBuilder.array([], [Validators.required])
    });
  }

  public loadExercise(): void {
    this.exercise$ = this.srvEx.get();
  }

  add(): void {
    console.log(this.form.value);
    this.srv.post(this.form.value)
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
    console.log(this.options)
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
    this.createForm(new ItemComplete());
    this.loadExercise();
  }
}
