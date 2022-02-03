import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RIFTService } from './../../services/rift.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rift-details',
  templateUrl: 'rift-details.page.html',
  styleUrls: ['rift-details.page.scss'],
})
export class RIFTDetailsPage implements OnInit {
  riftForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rIFTService: RIFTService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.riftForm = this.fb.group({ 
      RIFT_ID: '', 
      RIFTER: '', 
      Prov: '', 
      Dest: '', 
      CO_PAY: '', 
      RIFT_STATUS: '', 
      Comments: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.rIFTService.getRIFTById(this.id).subscribe(res => {
        this.riftForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.rIFTService.updateRIFTById(this.id, this.riftForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.rIFTService.addRIFT(this.riftForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.rIFTService.deleteRIFTById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
