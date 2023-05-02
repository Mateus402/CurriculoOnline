(function() {
    let contador = localStorage.getItem("contador") || 0; 
    contador = parseInt(contador) + 1;
    localStorage.setItem("contador", contador); 
  })();
  