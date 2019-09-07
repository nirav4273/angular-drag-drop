import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-drag-drop';

  data = [
	  {
	  	title:"ToDO",
	  	data:[
	  		'One',
	  		'two',
	  		'three',
	  		'four'
	  	]
	  },
	  {
	  	title:"QA",
	  	data:[
	  		'One 1',
	  		'two 1',
	  		'three 1',
	  		'four 1',
	  		'One 1',
	  		'two 1',
	  		'three 1',
	  		'four 1',
	  		'One 1',
	  		'two 1',
	  		'three 1',
	  		'four 1'
	  	]
	  },
	  {
	  	title:"DONE",
	  	data:[
	  		'One 2',
	  		'two 2',
	  		'three 2',
	  		'four 2'
	  	]
	  }
  ]
  connectedTo = [];

  constructor(){
  	for(let i in this.data){
  		this.connectedTo.push(this.data[i].title);
  	}
  }

  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    console.log(arr);
    return arr; // for testing
};


  drop(event: CdkDragDrop<string[]>) {
  	console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
    	console.log("DIF")
    	transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    console.log(this.data);
  }

  dropOne(event: CdkDragDrop<string[]>){
  	// console.log(event);
    if (event.previousContainer === event.container) {
    	console.log(event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
    	console.log("DIF")
    	transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    console.log(this.data);
  }
}
