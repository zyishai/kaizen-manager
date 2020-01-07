export const TaskForm = ({ children, onSubmit }) => (
    <form role="create new task" className="flex flex-col m-2" onSubmit={onSubmit}>
        {children}
    </form>
);