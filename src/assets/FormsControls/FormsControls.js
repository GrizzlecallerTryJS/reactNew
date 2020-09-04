import React from 'react';

export const Textarea = ({ input, ...props }) => {
  debugger;
  return (
    <div>
      <textarea {...props.input} {...props} />
    </div>
  );
};
