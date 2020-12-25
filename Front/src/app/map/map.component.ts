import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map | L.LayerGroup<any>;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    L.marker([50.5, 30.5]).addTo(this.map);
  }
  // ngOnInit(): void {
  // }31°58′1″N 6°34′10″W

  private initMap(): void {
    this.map = L.map('map', {
      center: [31.629473, -7.981084],
      zoom: 11
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
