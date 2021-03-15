import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ItemComplete} from '../../../model/item-complete';
import {ItemCompleteService} from '../../../services/item-complete.service';

@Component({
  selector: 'app-item-complete-list',
  templateUrl: './item-complete-list.component.html',
  styleUrls: ['./item-complete-list.component.scss']
})
export class ItemCompleteListComponent implements OnInit {

  public item$: Observable<ItemComplete>;
  constructor(private srv: ItemCompleteService) { }

  public load(): void {
    this.item$ = this.srv.get();
  }

  public delete(id): void {
    this.srv.delete(id).subscribe(r => this.ngOnInit());
  }

  ngOnInit(): void {
    this.load();
    this.item$.subscribe(r => console.log(r));
  }

}
