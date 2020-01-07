import React from 'react';

export const TaskIcon: React.FC<any> = ({ children, width, height, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} width={width} height={height} {...props} dangerouslySetInnerHTML={children}></svg>
)