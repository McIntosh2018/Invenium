import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-media',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  // aidianPhotos: string[] = ['assets/Images/Aidian_1.jpg'];
  // alexisPhotos: string[] = ['assets/Images/Alexis_1.jpg'];
  // colinPhotos: string[] = ['assets/Images/Colin_1.jpg'];
  // groupPhotos: string[] = ['assets/Images/Group_1.jpg', 'assets/Images/Group_2.jpg'];
  // mattPhotos: string[] = ['assets/Images/Matt_1.jpg'];

  allPhotos: string [] = [
    'assets/Images/Aidan_1.jpg',
    'assets/Images/Alexis_1.jpg',
    'assets/Images/Colin_1.jpg',
    'assets/Images/Group_1.jpg', 
    'assets/Images/Group_2.jpg',
    'assets/Images/Group_3.jpg',
    'assets/Images/Matt_1.jpg'
  ];
  videos: string[] =['assets/Videos/Token_Lounge_1.mp4'];

}

