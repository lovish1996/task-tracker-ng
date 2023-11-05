import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task';
import {faTimes, IconDefinition} from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-task-item', templateUrl: './task-item.component.html', styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
    @Input() task: Task = {text: 'default', day: 'default', reminder: false};
    @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
    @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

    faTimes: IconDefinition = faTimes;

    constructor() {
    }

    ngOnInit(): void {
    }

    onDelete(task: Task): void {
        this.onDeleteTask.emit(task);
    }

    onToggle(task: Task): void {
        this.onToggleReminder.emit(task);
    }

}
