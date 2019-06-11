import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-list-study-networks',
  templateUrl: './list-study-networks.component.html',
  styleUrls: ['./list-study-networks.component.css']
})
export class ListStudyNetworksComponent implements OnInit {
  redes = [];
  constructor(private netService: NetworkService) { 
    this.netService.getNetworks().subscribe(res => {
    
      this.redes = res.networks;
    })
  }

  ngOnInit() {
  }

}
