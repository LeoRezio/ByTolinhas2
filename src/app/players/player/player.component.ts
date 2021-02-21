import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player.model';
import { players } from '../../heros'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player = players;
  constructor() { }

  ngOnInit(): void {
  }

}
