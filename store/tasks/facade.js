import Chance from 'chance';
import { BehaviorSubject } from 'rxjs';
import {} from 'rxjs/operators';

const chance = new Chance();

let _state = {
    tasks: (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('__tasks'))) || []
}

const state = new BehaviorSubject(_state);

export const tasksStore$ = state.asObservable();
export const addTask = (taskData) => {
    taskData.id = chance.guid();
    state.next(_state = {
        tasks: [..._state.tasks, taskData]
    });
    localStorage.setItem('__tasks', JSON.stringify(_state.tasks));
}
export const removeTask = (taskId) => {
    state.next(_state = {
        tasks: _state.tasks.filter(t => t.id !== taskId)
    });
    localStorage.setItem('__tasks', JSON.stringify(_state.tasks));
}
export const updateTask = (taskId, field, value) => {
    state.next(_state = {
        tasks: _state.tasks.map(t => {
            if (t.id === taskId) {
                t[field] = value;
            }

            return t;
        })
    });
    localStorage.setItem('__tasks', JSON.stringify(_state.tasks));
}