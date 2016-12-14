function drawGrid() {
   var x, y;
   x = 50;
   tr = 0;
   fill(150);
   noStroke();
   for (var i = 0; i < 3; i++) {
      y = 50;
      for (var j = 0; j < 3; j++) {
         block[tr] = new Block(x, y, (((i + 1) * 10) + j + 1), tr);
         block[tr].drawB();
         tr = tr + 1;
         y = y + 250;
      }
      x = x + 250;
   }
}

var tr;