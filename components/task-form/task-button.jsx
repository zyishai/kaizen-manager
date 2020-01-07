
export const TaskButton = ({ label, classes, ...props }) => {
    return (
        <button 
            className={`bg-white border border-blue-400 py-3 ${classes}`}
            {...props}>
                {label}
        </button>
    )
}