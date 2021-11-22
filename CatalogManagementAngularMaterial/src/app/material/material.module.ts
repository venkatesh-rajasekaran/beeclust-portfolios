import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
 
const MaterialComponents=[
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule ,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatCheckboxModule,
  MatSelectModule,
  MatProgressBarModule,
  MatMenuModule,
  MatToolbarModule,
  MatRadioModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatGridListModule,
  MatSortModule
];
@NgModule({
  
  imports: [MaterialComponents],
  exports : [MaterialComponents ]
})
export class MaterialModule { }
