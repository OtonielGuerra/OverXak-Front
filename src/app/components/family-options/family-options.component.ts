import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { ListFamiliesComponent } from '../list-families/list-families.component';
import { PersonaService } from 'src/app/services/persona.service';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-family-options',
  templateUrl: './family-options.component.html',
  styleUrls: ['./family-options.component.css']
})
export class FamilyOptionsComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ListFamiliesComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  private rest: PersonaService, private snack: MatSnackBar, private ref: MatDialogRef<NavbarComponent>) {
    console.log(this.data)
   }

  ngOnInit() {
  }

  Delete(){
    this.rest.deleteFamilia(this.data._id).subscribe(res => {
      if(res.deleted){
        this.snack.open('Familia eliminada con éxito', 'Cerrar', {
          duration: 2500
        })
        this._bottomSheetRef.dismiss();
        this._bottomSheetRef.afterDismissed().subscribe(res => {
          this.ref.close()
        })
      }else{
        this.snack.open('Error al eliminar la familia', 'Cerrar', {
          duration: 2500
        })
        this._bottomSheetRef.dismiss();
      }
    })
  }

}
