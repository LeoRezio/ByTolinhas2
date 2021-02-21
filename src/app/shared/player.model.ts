export class Player {
    constructor(
        public id: number,
        public imgHero: string,
        public name: string,
        public nick: string,
        public role: [ string, string ], 
        public instagram: string,
        public date: [ number, number, number],
        public city: string) {
    }
}