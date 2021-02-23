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

//export const players: player[] = [ 
//{
//    id: 1, 
//    imgHero: "../assets/images/images-card/zarya-wallpaper.png",
//    name: "Leonardo Rezio",
//    nick: "LEOREZIO",
//    tank: ["cardtank", "../assets/images/Icons/tnk-azul-semborda.png"],
//    dps: ['',''],
//    sup: ['',''],
//    instagram: "https://www.instagram.com/leorezio/",
//    date: [29,12,2019],
//    city: 'Brasília/DF'
//},
//{
//    id: 2,
//    imgHero: "../assets/images/images-card/mercy-wallpaper.png",
//    name: "Leandro Ferreira",
//    nick: "lehboss",
//    tank: ['',''],
//    dps: ['',''],
//    sup: ["cardsup", "../assets/images/Icons/sup-rosa-semborda.png"],
//    instagram: "https://www.instagram.com/xo_lehboss/",
//    date: [12,12,12],
//    city: 'São Paulo/SP'
//
//},
//{   id: 3,
//    imgHero: "../assets/images/images-card/mccree-wallpaper.jpg",
//    name: "Daniel Sette",
//    nick: "settedan",
//    tank: ['',''],
//    dps: ["carddps","../assets/images/Icons/dps-amarelo-semborda.png"],
//    sup: ['', ''],
//    instagram: "https://www.instagram.com/danielsette/",
//    date: [12,12,12],
//    city: 'São Paulo/SP'
//}
//]