import { useReducer } from 'react';
import Router from 'next/router';
import { addTask } from '../store/tasks/facade';

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_NAME': {
            return {
                ...state,
                name: action.payload
            }
        }
        case 'UPDATE_DESCRIPTION': {
            return {
                ...state,
                description: action.payload
            }
        }
        case 'UPDATE_STATUS': {
            return {
                ...state,
                status: action.payload
            }
        }
        case 'CLEAR_FORM': {
            return {
                name: '',
                description: '',
                status: 'new'
            }
        }
        default:
            return state;
    }
}

const classes = {
    taskInput: 'bg-gray-200 focus:bg-white border outline-none border-transparent focus:border-blue-400 p-3 my-2 resize-none',
    taskStatusSelect: 'w-full appearance-none bg-gray-200 border border-transparent text-gray-700 py-3 px-4 my-2 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 rounded-none',
    taskStatusCaret: 'pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700',
    submitButton: 'text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline py-3 my-2',
    button: 'bg-white border border-blue-400 py-3'
}

export const TaskForm = () => {
    const [taskState, dispatch] = useReducer(reducer, {
        name: '',
        description: '',
        status: 'new'
    });
    return (
        <form role="create new task" className="flex flex-col m-2" onSubmit={(e) => {
            e.preventDefault();
            dispatch({type:'CLEAR_FORM'});

            // create new task
            addTask(taskState);

            // return to home page
            Router.push('/');
        }}>
            <input type="text" className={classes.taskInput} placeholder="כותרת המטלה" required={true} value={taskState.name} onInput={(e) => dispatch({type:'UPDATE_NAME', payload:e.target.value})} onChange={(e) => dispatch({type:'UPDATE_NAME', payload:e.target.value})} />
            <textarea cols="30" rows="10" className={classes.taskInput} placeholder="פירוט על תוכן המטלה" value={taskState.description} onInput={e => dispatch({type:'UPDATE_DESCRIPTION', payload:e.target.value})} onChange={e => dispatch({type:'UPDATE_DESCRIPTION', payload:e.target.value})}></textarea>
            <div className="relative">
                <select className={classes.taskStatusSelect} style={{boxSizing:'border-box'}} value={taskState.status} onChange={e => dispatch({type:'UPDATE_STATUS', payload: e.target.value})}>
                    <option className={classes.taskStatusOption} value="new">חדש</option>
                    <option className={classes.taskStatusOption} value="progress">בתהליך</option>
                    <option className={classes.taskStatusOption} value="done">בוצע</option>
                </select>
                <div className={classes.taskStatusCaret}>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
            <button type="submit" className={classes.submitButton}>צור מטלה</button>
            <button type="reset" className={classes.button} onClick={() => dispatch({type:'CLEAR_FORM'})}>נקה</button>
        </form>
    )
}