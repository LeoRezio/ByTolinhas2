import { Component, OnInit } from '@angular/core';
import { players } from '../heros';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  title = 'Nossos Jogadores';
  constructor() { }

  ngOnInit(): void {
  }

}
