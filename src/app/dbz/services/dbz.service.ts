import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [{
        id:  uuid(),
        name: 'krillin',
        power: 1000
    },{
        id:  uuid(),
       name: 'Goku',
       power: 9000 
    },{
        id:  uuid(),
        name: 'Vegueta',
        power: 8500
    }];

    addCharacter(character:Character): void{

        const newCharacter: Character={ id:uuid(),...character}

        this.characters.push(newCharacter)
    }
    
    // onDeleteCharacter(index:number):void{
    //     console.log(index)
    //     this.characters.splice(index,1)
    // }
    
    deleteCharacterById(id: string){
        this.characters = this.characters.filter(character => character.id !==id )
    }
    
}