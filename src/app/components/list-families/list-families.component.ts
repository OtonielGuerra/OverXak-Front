import { Component, OnInit } from '@angular/core';
import { FamiliesService } from 'src/app/services/families.service';
import { MatBottomSheet } from '@angular/material';
import { FamilyOptionsComponent } from '../family-options/family-options.component';

@Component({
  selector: 'app-list-families',
  templateUrl: './list-families.component.html',
  styleUrls: ['./list-families.component.css']
})
export class ListFamiliesComponent implements OnInit {
  familias = [];
  constructor(private rest: FamiliesService, private _bottomSheet: MatBottomSheet) {
      this.rest.getFamilies().subscribe(res => {
        this.familias = res.familias;
      })


   }

  ngOnInit() {
  }

  Options(family){
    this._bottomSheet.open(FamilyOptionsComponent, {
      data: family,
    });
  }

}
