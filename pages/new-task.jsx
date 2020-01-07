import React, { useReducer } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { addTask } from '../store/tasks/facade';
import { TaskForm } from '../components/task-form';
import { TaskInput } from '../components/task-form/task-input';
import { TaskButton } from '../components/task-form/task-button';

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
const newTaskStatusOptions = [{
    value: 'new',
    label: 'חדש'
}, {
    value: 'progress',
    label: 'בתהליך'
}, {
    value: 'done',
    label: 'בוצע'
}]

const NewTask = () => {
    const [taskState, dispatch] = useReducer(reducer, {
        name: '',
        description: '',
        status: 'new'
    });
    const update = (actionType) => (e) => dispatch({type: actionType, payload: e.target.value})
    return (
        <div className="container">
            <Head>
                <title>מטלה חדשה</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="flex items-center justify-between flex-wrap bg-teal-500 px-6 py-4 mb-6 text-white">
                <h1 className="text-2xl">
                    יצירת מטלה חדשה
                </h1>
                <div>
                    <Link href='/'>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            חזרה לעמוד הראשי
                        </a>
                    </Link>
                </div>
            </nav>
            <div className="container md:w-2/3 mx-auto">
                <TaskForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch({type:'CLEAR_FORM'});
            
                        // create new task
                        addTask(taskState);
            
                        // return to home page
                        Router.push('/');
                    }}>
                    <TaskInput
                        placeholder='כותרת המטלה'
                        required={true}
                        value={taskState.name}
                        onInput={update('UPDATE_NAME')} 
                        onChange={update('UPDATE_NAME')} />
                    <TaskInput
                        inputType='textarea'
                        rows={10}
                        cols={30}
                        placeholder='פירוט על תוכן המטלה'
                        value={taskState.description}
                        onInput={update('UPDATE_DESCRIPTION')}
                        onChange={update('UPDATE_DESCRIPTION')} />
                    <div className="relative">
                        <TaskInput
                            inputType='select'
                            value={taskState.status}
                            onChange={update('UPDATE_STATUS')}
                            options={newTaskStatusOptions} />
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700'>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                    <TaskButton
                        type="submit"
                        label="צור מטלה"
                        classes='text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline py-3 my-2' />
                    <TaskButton
                        type="reset"
                        label="נקה"
                        onClick={() => dispatch({type:'CLEAR_FORM'})} />
                </TaskForm>
            </div>
        </div>
    );
}

export default NewTask;