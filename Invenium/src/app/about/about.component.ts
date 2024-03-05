import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aidianPhotos: string[] = ['assets/Images/Aidian_1.jpg'];
  alexisPhotos: string[] = ['assets/Images/Alexis_1.jpg'];
  colinPhotos: string[] = ['assets/Images/Colin_1.jpg'];
  groupPhotos: string[] = ['assets/Images/Group_1.jpg', 'assets/Images/Group_2.jpg'];
  mattPhotos: string[] = ['assets/Images/Matt_1.jpg'];

}
