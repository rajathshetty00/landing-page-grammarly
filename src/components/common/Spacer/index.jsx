import React from 'react';

function Spacer({
  size, axis, children,
}) {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <div
      style={{
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    >
      {children}
    </div>
  );
}

Spacer.defaultProps = {
  axis: '',
  classes: '',
  children: '',
};

export default Spacer;
