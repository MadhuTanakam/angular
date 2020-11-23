import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  public customers=[
    {"cutomerNo":1,"customerName":"optum1","customerAddress":"Hyderabad1"},
    {"cutomerNo":2,"customerName":"optum2","customerAddress":"Hyderabad2"},
    {"cutomerNo":3,"customerName":"optum3","customerAddress":"Hyderabad3"},
    {"cutomerNo":4,"customerName":"optum4","customerAddress":"Hyderabad4"},
    {"cutomerNo":5,"customerName":"optum5","customerAddress":"Hyderabad5"},
    {"cutomerNo":6,"customerName":"optum6","customerAddress":"Hyderabad6"},
    {"cutomerNo":7,"customerName":"optum7","customerAddress":"Hyderabad7"},
    {"cutomerNo":8,"customerName":"optum8","customerAddress":"Hyderabad8"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
