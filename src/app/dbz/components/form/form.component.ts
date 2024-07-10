import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class DbzFormComponent {
  @Output()
  onNewCharacter: EventEmitter<Character>= new EventEmitter()

  public character: Character={
    name:'',
    power: 0,
  }

  
  emitCharacter(): void{

    // debugger;
    if(this.character.name.length===0) return;
    console.log(this.character)
    this.onNewCharacter.emit({...this.character});
    this.character= { name: '', power: 0}
  }
}
