import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlternativeService } from '../../../../services/alternative.service';
import { Alternative } from 'src/app/model/alternative';

@Component({
  selector: 'app-alternative-list',
  templateUrl: './alternative-list.component.html',
  styleUrls: ['./alternative-list.component.scss'],
})
export class AlternativeListComponent implements OnInit {
  public item$: Observable<Alternative>;
  constructor(
    private srv: AlternativeService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  public load(): void {
    this.item$ = this.srv.searchByExercise(
      Number(this.activeRoute.snapshot.paramMap.get('id'))
    );
  }

  public goAdd(): void {
    this.route.navigate([
      'alternative-create',
      this.activeRoute.snapshot.paramMap.get('id'),
    ]);
  }

  public delete(id: number): void {
    this.srv.delete(id).subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.load();
    this.item$.subscribe((r) => console.log('--->', r));
  }
}
