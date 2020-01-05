import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TaskForm } from '../components/task-form';

const NewTask = () => (
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
            <TaskForm />
        </div>
    </div>
);

export default NewTask;