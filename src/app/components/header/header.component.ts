import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public authService: AuthService) { }

  openDialog(type: String) {

    const dialogRef = this.dialog.open(RegisterComponent,{
      panelClass: 'w-1/4'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
