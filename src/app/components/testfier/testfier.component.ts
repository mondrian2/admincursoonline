import { Component, OnInit } from '@angular/core';
import {Testifier} from '../../services/testifier.service';
import {ExerciseComplete} from '../../model/exercise-complete';
import {ExerciseCompleteService} from '../../services/exercise-complete.service';

@Component({
  selector: 'app-testfier',
  templateUrl: './testfier.component.html',
  styleUrls: ['./testfier.component.scss']
})
export class TestfierComponent implements OnInit {

  exerciseComplete: ExerciseComplete;
  exerciseComplete1: ExerciseComplete;

  constructor(private srv: Testifier, private srv1: ExerciseCompleteService) {
    this.exerciseComplete = new ExerciseComplete();
    this.exerciseComplete1 = new ExerciseComplete();
  }

  ngOnInit(): void {
    this.exerciseComplete.book = 'Basico 1';
    this.exerciseComplete.command = 'Comando do exercicio do basico 1';
    this.exerciseComplete.package = '1 pachetto';
    this.exerciseComplete.book = 'Basico 1';
    this.exerciseComplete.command = 'Segundo Comando do exercicio do basico 1';
    this.exerciseComplete.package = '1 pachetto';
    this.srv.get().subscribe(r => console.log(r));
    this.srv1.post(this.exerciseComplete);
    this.srv1.post(this.exerciseComplete1);
  }

}
