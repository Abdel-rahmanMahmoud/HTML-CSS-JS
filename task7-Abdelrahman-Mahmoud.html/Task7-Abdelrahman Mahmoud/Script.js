const shape = document.getElementById('shape');

const changeStyle = ({ type, value, width = '100px' }) => 
  type === 'bg' ? shape.style.backgroundColor = value 
  : (shape.style.borderRadius = value, shape.style.width = width);

// const changeStyle = ({ type, value, width = '100px' }) => 
//   type === 'bg' 
//     ? shape.style.backgroundColor = value 
//     : shape.style.cssText = `border-radius: ${value}; width: ${width}; height: 100px; background-color: ${shape.style.backgroundColor };`;
    // اذا بدك تستعمل السي اس تكست لازم تعمل اوفررايت للستايل كامل لانها بتغير الستايل كامل

