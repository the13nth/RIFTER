import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DriversService } from './../../services/drivers.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drivers-details',
  templateUrl: 'drivers-details.page.html',
  styleUrls: ['drivers-details.page.scss'],
})
export class DriversDetailsPage implements OnInit {
  driversForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private driversService: DriversService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.driversForm = this.fb.group({ 
      first_name: '', 
      last_name: '', 
      available_seats: '', 
      Rifter_req: '', 
      co_pay: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.driversService.getDriversById(this.id).subscribe(res => {
        this.driversForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.driversService.updateDriversById(this.id, this.driversForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.driversService.addDrivers(this.driversForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.driversService.deleteDriversById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
