function changeBg(color) {
    
    document.getElementById('shape').style.backgroundColor = color;
}

function changeShape(borderRadius, width ="100px") {
    const shape = document.getElementById('shape');
    shape.style.width = width;
    shape.style.borderRadius = borderRadius;
  }
  

  
