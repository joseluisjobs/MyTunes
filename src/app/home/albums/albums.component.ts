import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from './../../models/album';
import { Albums } from './../../mocks/albums';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Array<Album>;
  selectedAlbum: Album;
  alreadyBought: Array<Album>;
  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.albums = Albums;
  }
  onClick(album: Album): void {
      const navigationDetails: string[] = ['/album'];
      navigationDetails.push(album.id.toString());
      this.router.navigate(navigationDetails);
  }
  buyAlbum(selected: Album): void{
    this.albums.forEach((album) => {
      if(selected.id === album.id){
          selected.purchased = true;
          selected.songList.forEach((song) => song.purchased = true);
          this.alreadyBought.push(selected);
      }
    });
  }
}
