import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../../../../model/exercise';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExerciseService } from '../../../../services/exercise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlternativeService } from 'src/app/services/alternative.service';

@Component({
  selector: 'app-alternative-create',
  templateUrl: './alternative-create.component.html',
  styleUrls: ['./alternative-create.component.scss'],
})
export class AlternativeCreateComponent implements OnInit {
  public exercise$: Observable<Exercise>;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private srvEx: ExerciseService,
    protected srv: AlternativeService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  private createForm(): void {
    this.form = this.formBuilder.group({
      exerciseId: '',
      description: '',
      alternativeType: '',
    });
  }

  add(): void {
    this.form.value.exerciseId = parseInt(
      this.activeRoute.snapshot.paramMap.get('id')
    );
    console.log(this.form.value);
    this.srv.post(this.form.value).subscribe(
      () =>
        this.route.navigate(['/alternative-list', this.form.value.exerciseId]),
      (e) => console.log(e),
      () => console.log('complete')
    );
  }

  ngOnInit(): void {
    this.createForm();
  }
}
