import { Component, OnInit } from '@angular/core';
import { Point } from '../../models/point.model';
import { async } from '@angular/core/testing';
declare const google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public marketSelected = true;
  public myPosition : Point;

  constructor() {
  }
  ngOnInit() {

  this.getMyPosition();
  this.showMap();


  }

  getMyPosition() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
         this.myPosition = new Point(position.coords.latitude, position.coords.longitude);
         localStorage.setItem('myPosition', JSON.stringify( this.myPosition));
       });
     } else {
       console.log('No soportado');
     }


  }

  showMap = async() => {

    const mp: Point = JSON.parse(localStorage.getItem('myPosition'));

    let map = document.getElementById('map-canvas');

    var myLatlng = new google.maps.LatLng(mp.latitude, mp.longitude);
    var mapOptions = {
        zoom: 9,
        scrollwheel: true,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        }

    map = new google.maps.Map(map, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });

    var contentString = '<div class="info-window-content"><h2>Mi ubicación</h2>' +
        '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p>'+
        '<button class="btn btn-primary" (click)="selectMarket()">Ver productos</button></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map, marker);
          this.marketSelected = true;
    });


  }

  selectMarket() {
    if (this.marketSelected) {
      this.marketSelected = false;
    } else {
      this.marketSelected = true;
    }
  }

}
