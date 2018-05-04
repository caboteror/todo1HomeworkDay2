import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-list-component',
	templateUrl: './list-component.component.html',
	styleUrls: [ './list-component.component.scss' ]
})
export class ListComponentComponent implements OnInit {
	@Input() userId;
	@Input() id;
	@Input() title;
	@Input() body;

	@Output() changeTitle = new EventEmitter<string>();
	@Output() changeNum = new EventEmitter<number>();
	constructor() {}

	onChangeTitle(title: string) {
		this.changeTitle.emit(title);
	}

	onChangeNum(number: number) {
		this.changeNum.emit(number);
	}

	ngOnInit() {}
}
