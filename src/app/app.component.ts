import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  taskName={

  }
  status:string;


  data = [
	  {
	  	title:"ToDO",
	  	data:[]
	  },
	  {
	  	title:"QA",
	  	data:[]
	  },
	  {
	  	title:"DONE",
	  	data:[]
	  }
  ]
  connectedTo = [];

  constructor(){
  	for(let i in this.data){
  		this.connectedTo.push(this.data[i].title);
  	}
  }

  dropTask(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
    	transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    console.log(this.data);
  }

  dropStatus(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
    	console.log(event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
    	transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  save(index,e){
    e.preventDefault();
    this.data[index].data.push(this.taskName[index]);
    this.taskName[index] = '';
  }
  saveStatus(e){
    e.preventDefault();
    this.data.push({
      title:this.status,
      data:[]
    });
    this.status = '';
  }
}
