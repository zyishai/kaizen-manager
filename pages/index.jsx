import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';
import { useObservable } from 'rxjs-hooks';

import '../public/css/style.css';
import { tasksStore$, updateTask, removeTask } from '../store/tasks/facade';
import { TaskItem } from '../components/task-item';

const Home = () => {
  const tasksStore = useObservable(() => tasksStore$, {tasks: []});

  return (
    <div className="container bg-gray-100 h-screen">
      <Head>
        <title>מטלות</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex items-center justify-between flex-wrap bg-teal-500 px-6 py-4 mb-6 text-white">
        <h1 className="text-2xl">
          רשימת המטלות
        </h1>
        <div>
          <Link href='/new-task'>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">מטלה חדשה</a>
          </Link>
        </div>
      </nav>

      <main>
        {
          tasksStore.tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              changeStatus={updateTask.bind(null, task.id, 'status')} 
              deleteTask={removeTask.bind(null, task.id)}
              updateTask={() => {
                Router.push(`/update-task?task=${JSON.stringify(task)}`, '/update-task');
              }} />
          ))
        }
      </main>
    </div>
  )
}

export default Home;