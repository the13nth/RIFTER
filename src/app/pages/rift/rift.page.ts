import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RIFTService } from './../../services/rift.service';
import { RIFT } from './../../services/rift';

@Component({
  selector: 'app-rift',
  templateUrl: 'rift.page.html',
  styleUrls: ['rift.page.scss'],
})
export class RIFTPage implements OnInit {
  items: Observable<RIFT[]>;

  constructor(private rIFTService: RIFTService) {
      
  }
  ngOnInit() {
    this.items = this.rIFTService.getRIFTs();
  }

}