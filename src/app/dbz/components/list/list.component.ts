
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class DbzListComponent {

  // @Output()
  // onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Output()
  onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // emitCharacterIndex(index:number):void{
  //   // console.log(index)
  //   this.onDeleteCharacter.emit(index);
  // }

  emitCharacterId(id?: string):void{
    // console.log(id)
    if(!id) return
    this.onDeleteCharacterById.emit(id);
  }
 }
