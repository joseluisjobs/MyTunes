import { Album } from './../models/album';
import { Albums } from './../mocks/albums';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  albums: Array<Album>;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.albums = Albums;
  }
  onClick(album: Album): void {
    const navigationDetails: string[] = ['/album'];
    navigationDetails.push(album.id.toString());
    this.router.navigate(navigationDetails);
}
}
