import { Song } from './../../../models/song';
import { Component, OnInit, Input } from '@angular/core';
import { Album } from './../../../models/album';
import { ActivatedRoute } from '@angular/router';
import {Albums} from '../../../mocks/albums';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input()
  selectedAlbum: Album;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    Albums.forEach((album) => {
      if(album.id === id){
        this.selectedAlbum = album;
      }
    });
  }

  buySong(selectedSong: Song): void{
      this.selectedAlbum.songList.forEach((song)=>{
        if(selectedSong.id === song.id){
          song.purchased=true;
        }
      });
  }
  buyAlbum(): void{
    this.selectedAlbum.purchased = true;
    this.selectedAlbum.songList.forEach((song) => song.purchased = true);
  }
}
