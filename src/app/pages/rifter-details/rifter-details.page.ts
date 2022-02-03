import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RifterService } from './../../services/rifter.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rifter-details',
  templateUrl: 'rifter-details.page.html',
  styleUrls: ['rifter-details.page.scss'],
})
export class RifterDetailsPage implements OnInit {
  rifterForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rifterService: RifterService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.rifterForm = this.fb.group({ 
      first_name: '', 
      second_name: '', 
      morning_prov: '', 
      evening_prov: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.rifterService.getRifterById(this.id).subscribe(res => {
        this.rifterForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.rifterService.updateRifterById(this.id, this.rifterForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.rifterService.addRifter(this.rifterForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.rifterService.deleteRifterById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
