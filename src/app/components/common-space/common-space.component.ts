import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-common-space',
  templateUrl: './common-space.component.html',
  styleUrls: ['./common-space.component.scss']
})
export class CommonSpaceComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
