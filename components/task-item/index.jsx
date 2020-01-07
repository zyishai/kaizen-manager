import { useState, useEffect } from 'react';
import { TaskBadge } from './badge';
import rightArrowIcon from '../../public/icons/right-arrow.svg';
import editIcon from '../../public/icons/edit.svg';
import trashIcon from '../../public/icons/trash.svg';

export const TaskItem = ({ task, changeStatus, deleteTask, updateTask }) => {
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
                        <img src={rightArrowIcon} alt="arrow icon"/>
                    </div>
                </div>
                <div className={classes.innerContent}>
                    <div className="flex flex-row justify-between items-start">
                        <p className="text-gray-700 text-base mb-2">{task.description || 'למטלה זו אין תיאור.'}</p>
                        <aside className="flex mr-2 mt-1">
                            <img src={editIcon} className="max-w-xs cursor-pointer hover:bg-gray-200 rounded-full p-1" onClick={updateTask} alt="edit icon" />
                            <img src={trashIcon} className="max-w-xs cursor-pointer hover:bg-gray-200 rounded-full p-1" onClick={deleteTask} alt="trash icon"/>
                        </aside>
                    </div>
                    <TaskBadge status={task.status} changeStatus={changeStatus} />
                </div>
            </section>
        </article>
    )
}