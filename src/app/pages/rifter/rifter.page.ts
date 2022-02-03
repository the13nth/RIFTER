import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RifterService } from './../../services/rifter.service';
import { Rifter } from './../../services/rifter';

@Component({
  selector: 'app-rifter',
  templateUrl: 'rifter.page.html',
  styleUrls: ['rifter.page.scss'],
})
export class RifterPage implements OnInit {
  items: Observable<Rifter[]>;

  constructor(private rifterService: RifterService) {
      
  }
  ngOnInit() {
    this.items = this.rifterService.getRifters();
  }

}