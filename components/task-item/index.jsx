import { useState, useEffect } from 'react';
import { TaskBadge } from './badge';

export const TaskItem = ({ task, changeStatus }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [classes, setClasses] = useState({
        innerContent: 'px-6 pb-0  h-0 overflow-hidden',
        caretRotation: 'rotate(-90deg)'
    });

    useEffect(() => {
        if (isOpen) {
            setClasses(c => ({
                ...c,
                innerContent: 'px-6 pb-4  h-auto overflow-hidden',
                caretRotation: 'rotate(0deg)'
            }));
        } else {
            setClasses(c => ({
                ...c,
                innerContent: 'px-6 pb-0  h-0 overflow-hidden',
                caretRotation: 'rotate(-90deg)'
            }));
        }
    }, [isOpen]);

    return (
        <article className="max-w-sm shadow-md mx-auto mb-3 bg-white">
            <section className="p-0 m-0">
                <div className="relative">
                    <h1 className="px-6 py-2 text-bold text-xl bg-blue-200 select-none" onClick={() => setIsOpen(open => !open)}>{task.name}</h1>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700' style={{
                        transform: classes.caretRotation
                    }}>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
                <div className={classes.innerContent}>
                    <p className="text-gray-700 text-base mb-2">{task.description || 'למטלה זו אין תיאור.'}</p>
                    <TaskBadge status={task.status} changeStatus={changeStatus} />
                </div>
            </section>
        </article>
    )
}