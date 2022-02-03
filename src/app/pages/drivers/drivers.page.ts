import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DriversService } from './../../services/drivers.service';
import { Drivers } from './../../services/drivers';

@Component({
  selector: 'app-drivers',
  templateUrl: 'drivers.page.html',
  styleUrls: ['drivers.page.scss'],
})
export class DriversPage implements OnInit {
  items: Observable<Drivers[]>;

  constructor(private driversService: DriversService) {
      
  }
  ngOnInit() {
    this.items = this.driversService.getDriverss();
  }

}