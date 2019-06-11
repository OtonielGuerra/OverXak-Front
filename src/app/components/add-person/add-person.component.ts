import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  person: Persona = new Persona('', '', '', '', '', '', null, '', [], '','','','', null, '', '', '','','', '','', '' ,'', '', []);
  religions: any[] = [
    {value: 'Católico', viewValue: 'Católico'},
    {value: 'Evangélico', viewValue: 'Evangélico'},
    {value: 'Ateo', viewValue: 'Ateo'}
  ];
  generos: any[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'}
  ];
  roles: any[] = [
    'padre',
    'madre',
    'hijo',
    'encargado'
  ];
  removable = true;
  public emailInput: string=""; 
  public phoneInput: string = "";
  public directionSelect: string = ""
  public directionInput: string = "";
  hidden: boolean = true;
  emails = [];
  results: Array<any>;
  public emailArray: Array<any> = [];
  public phoneArray: Array<any> = [];
  public directionArray : Array<any> = [];
  sector: string = "";
  cuadra: string = "";
  edificio: string = "";
  piso: string = "";
  apartamento: string = "";
  estados: any[] = [
    {value: 'Solter@', viewValue: 'Solter@'},
    {value: 'Unión de hecho', viewValue: 'Unión de hecho'},
    {value: 'Casad@', viewValue: 'Casad@'}
  ];
  departments = [
    'Alta Verapaz',
    'Baja Verapaz,',
    'Chimaltenango',
    'Chiquimula',
    'El Progreso',
    'Escuintla',
    'Guatemala',
    'Huehuetenango',
    'Izabal',
    'Jalapa',
    'Jutiapa',
    'Petén',
    'Quetzaltenango',
    'Quiché',
    'Retalhuleu',
    'Sacatepéquez',
    'San Marcos',
    'Santa Rosa',
    'Sololá',
    'Suchitepéquez',
    'Totonicapán',
    'Zacapa'   
  ]
  len = this.emailArray.length;
  constructor(public rest: PersonaService, private snack: MatSnackBar, private dialogRef: MatDialogRef<HomeComponent>) { 
    console.log(this.person.role);
  }

  ngOnInit() {
  }

  mostrarCampos(){
    this.hidden = !this.hidden;
  }

  removeE(emailArray){
    let unique = {};
    emailArray.forEach(function(i) {
      if(!unique[i]){
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }


  addPhone() : void{
    if(this.phoneInput !== ""){
      let lent = this.phoneArray.length;
      if(lent < 5){
        if(this.phoneArray.indexOf(this.phoneInput) > -1){
          this.snack.open('Número telefónico duplicado', 'Cerrar', {
            duration: 2500
          })
        }else{
          this.phoneArray.push(this.phoneInput)
          this.phoneInput = "";
          this.snack.open('Teléfono agregado', 'Cerrar', {
            duration: 2500
          })
        }
      }else{
        this.snack.open('Solo puedes ingresar 5 teléfonos', 'Cerrar', {
          duration: 2500
        })
      }
    }else{
      this.snack.open('Debe ingresar un teléfono', 'Cerrar', {
        duration: 2500
      })
    }
  }


  addToDirection(){
    if(this.directionSelect === 'sector'){
      this.directionArray.push({sector: this.directionInput})
      console.log(this.directionArray)
      this.snack.open('Sector agregado con éxito', 'Cerrar', {
        duration: 2500
      })
      this.sector = this.directionInput;
      this.directionSelect = ""
      this.directionInput = "";
    }else if(this.directionSelect === 'cuadra'){
      this.directionArray.push({cuadra: this.directionInput})
      console.log(this.directionArray)
      this.snack.open('Cuadra agregada con éxito', 'Cerrar', {
        duration: 2500
      })
      this.cuadra = this.directionInput;
      this.directionSelect = ""
      this.directionInput = "";
    }else if(this.directionSelect === 'edificio'){
      this.directionArray.push({edificio: this.directionInput})
      console.log(this.directionArray)
      this.snack.open('Edificio agregado con éxito', 'Cerrar', {
        duration: 2500
      })
      this.edificio = this.directionInput;
      this.directionSelect = ""
      this.directionInput = "";
    }else if(this.directionSelect === 'piso'){
      this.directionArray.push({piso: this.directionInput})
      console.log(this.directionArray)
      this.snack.open('Piso agregado con éxito', 'Cerrar', {
        duration: 2500
      })
      this.piso = this.directionInput;
      this.directionSelect = ""
      this.directionInput = "";
    }else if(this.directionSelect === 'apartamento'){
      this.directionArray.push({apartamento: this.directionInput})
      console.log(this.directionArray)
      this.snack.open('Apartamento agregado con éxito', 'Cerrar', {
        duration: 2500
      })
      this.apartamento = this.directionInput;
      this.directionSelect = ""
      this.directionInput = "";
    }
  }


  addEmail(){
    let l = this.emailArray.length;
    if(this.emailInput !== ''){
      if(this.emailArray.length <5 ){
        if(this.emailInput.indexOf("@") > -1 && this.emailInput.indexOf(".com") > -1 || this.emailInput.indexOf('.edu') > -1 || this.emailInput.indexOf('.gt') > -1){
          if(this.emailArray.indexOf(this.emailInput) > -1){
            this.snack.open('Correo electrónico duplicado', 'Cerrar', {
              duration: 2500
            })
          }else{
            this.emailArray.push(this.emailInput);
            this.emailInput = "";
            this.snack.open('Correo electrónico agregado', 'Cerrar', {
              duration: 2500
            })
          }

        }else{
          this.snack.open('Ingrese un email válido', 'Cerrar', {
            duration: 2500
          })
        }
      }else{
        this.snack.open('No puede ingresar más de 5 correos electrónicos', 'Cerrar', {
          duration: 2500
        })
      }
    }else{
      this.snack.open('Debe ingresar un correo electrónico', 'Cerrar', {
        duration: 2500
      })
    }
  }
  




  onSubmit(){
    this.person.correos = this.emailArray;
    this.person.numeros = this.phoneArray;
    this.person.apto = this.apartamento;
    this.person.cuadra = this.cuadra;
    this.person.sector = this.sector;
    this.person.edificio = this.edificio;
    this.person.piso = this.piso;
    this.rest.setPersona(this.person).subscribe(res => {
      if(res.personaSave && res.personaSave._id){
        this.snack.open('Persona guardada con éxito', 'Cerrar', {
          duration: 2500
        })
        this.dialogRef.close()
        console.log(res.personaSave._id)
      }else{
        this.snack.open('No se pudo guardar la persona', 'Cerrar', {
          duration: 2500
        })
      }
    }, (err) => {
      console.log(<any>err)
    })
    console.log(this.person);
  }

  remove(phone): void {
    const index = this.phoneArray.indexOf(phone);

    if (index >= 0) {
      this.phoneArray.splice(index, 1);
    }
  }



  eliminar(email:any) : void{
    const index = this.emailArray.indexOf(email);

    if(index >= 0){
      this.emailArray.splice(index, 1)
    }
  }

}
