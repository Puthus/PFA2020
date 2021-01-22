import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
// import "style-loader!leaflet/dist/leaflet.css";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import { MonumentService } from '../../../service/monument.service';
import { Monument } from '../../../modules/monument';
@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Map des Monuments</nb-card-header>
      <nb-card-body>
        <div leaflet [leafletOptions]="options" [leafletLayers]="pos"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class LeafletComponent implements OnInit {
  options = {
    layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })],
    zoom: 5,
    center: L.latLng({ lat: 31.792305849269, lng: -7.080168000000015 }),
  };
  source: Monument[];
  pos: L.Marker[] = [];
  constructor(private monumentService: MonumentService) {}
  ngOnInit(): void {
    this.monumentService.getAll().subscribe((data) => {
      this.source = data['list'];
      console.log(this.source);
      this.source.forEach((m) => {
        if (m.adminRegional !== null && m.adminRegional !== undefined) {
this.pos.push(
            L.marker([m.latitude, m.longitude])
              .bindTooltip(m.nom)
              .bindPopup('<div>' + m.id + '</div><div>' + m.nom + '</div><div>' + m.dateCreation + '</div><div>')
              .openPopup(),
          );
}
      });
    });
  }
}
