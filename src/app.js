export default class Team {
    constructor() {

        console.log('new TEAM created');
        this.teamMembers = [{
            name: 'Лучник1',
            type: 'Bowman',
            health: 50,
            level: 1,
            attack: 40,
            defence: 10
          },
          {
            name: 'Лучник2',
            type: 'Bowman',
            health: 50,
            level: 1,
            attack: 40,
            defence: 10
          },
          {
            name: 'Лучник3',
            type: 'Bowman',
            health: 50,
            level: 1,
            attack: 40,
            defence: 10
          }];
          console.log('LENGHT: '+this.teamMembers.length);
    }

    [Symbol.iterator] () {
        let current = 0;
        let iterTeam = this.teamMembers;
        return {
            next() {
                if (current < iterTeam.length) {
                    current++;
                    return {
                        value: iterTeam[current - 1],
                        done: false
                    };
                }
                else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
        
    }
    
}