import { Player } from './shared/player.model';
//import { player } from './type-hero';
export const players: Player[] = [
    new Player(
    1, 
    "../assets/images/images-card/zarya-wallpaper.png",
    "Leonardo Rezio",
    "LEOREZIO",
    ["cardtank", "../assets/images/Icons/tnk-azul-semborda.png"],
    "https://www.instagram.com/leorezio/",
    "29/12/2019",
    'Brasília/DF'),
    new Player(
     2,
    "../assets/images/images-card/mercy-wallpaper.png",
    "Leandro Ferreira",
    "lehboss",
    ["cardsup", "../assets/images/Icons/sup-rosa-semborda.png"],
    "https://www.instagram.com/xo_lehboss/",
    "Fundador",
    'São Paulo/SP'
        ),
    new Player(
    3,
    "../assets/images/images-card/mccree-wallpaper.jpg",
    "Daniel Sette",
    "settedan",
    ["carddps","../assets/images/Icons/dps-amarelo-semborda.png"],
    "https://www.instagram.com/danielsette/",
    "Co-Fundador",
    'São Paulo/SP'
    )
] 