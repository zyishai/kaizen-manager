import { useEffect, useState } from 'react';

export const TaskBadge = ({ status, changeStatus }) => {
    const [classes, setClasses] = useState({
        badgeColors: 'bg-gray-300 text-black'
    });
    const canChangeStatus = changeStatus && typeof changeStatus === 'function';

    useEffect(() => {
        switch (status) {
            case 'new': {
                setClasses(c => ({
                    ...c,
                    badgeColors: 'bg-teal-300 text-black'
                }));
                break;
            }
            case 'progress': {
                setClasses(c => ({
                    ...c,
                    badgeColors: 'bg-green-400 text-black'
                }));
                break;
            }
            case 'done': {
                setClasses(c => ({
                    ...c,
                    badgeColors: 'bg-orange-300 text-black'
                }));
                break;
            }
            default: {
                break;
            }
        }
    }, [status]);

    return (
        <>
            <span 
                className={`relative rounded-full ${status === 'new' ? classes.badgeColors : `bg-white text-gray-500 ${canChangeStatus ? 'hover:bg-gray-200' : ''}`} uppercase px-4 py-1 text-xs font-bold w-auto cursor-pointer`}
                onClick={() => canChangeStatus && changeStatus('new')}>חדש</span>
            <span 
                className={`relative rounded-full ${status === 'progress' ? classes.badgeColors : `bg-white text-gray-500 ${canChangeStatus ? 'hover:bg-gray-200' : ''}`} uppercase px-4 py-1 text-xs font-bold w-auto cursor-pointer`}
                onClick={() => canChangeStatus && changeStatus('progress')}>בתהליך</span>
            <span 
                className={`relative rounded-full ${status === 'done' ? classes.badgeColors: `bg-white text-gray-500 ${canChangeStatus ? 'hover:bg-gray-200' : ''}`} uppercase px-4 py-1 text-xs font-bold w-auto cursor-pointer`}
                onClick={() => canChangeStatus && changeStatus('done')}>בוצע</span>
        </>
    );
}