
export const TaskInput = ({ inputType='input', options, ...props }) => {
    return (
        inputType === 'input'
        ? <input 
            type="text" 
            className='bg-gray-200 focus:bg-white border outline-none border-transparent focus:border-blue-400 p-3 my-2 resize-none'
            {...props} />
        : inputType === 'textarea'
        ? <textarea
            className='bg-gray-200 focus:bg-white border outline-none border-transparent focus:border-blue-400 p-3 my-2 resize-none'
            {...props}></textarea>
        : inputType === 'select'
        ? <select
            className='w-full appearance-none bg-gray-200 border border-transparent text-gray-700 py-3 px-4 my-2 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 rounded-none'
            style={{boxSizing:'border-box'}}
            {...props}>
                {
                    options.map(({value, label}, idx) => <option key={idx+value} value={value}>{label}</option>)
                }
          </select>
        : null
    )
}