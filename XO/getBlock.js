function getBlock() {
   var x = mouseX;
   var y = mouseY;
   var B = 0;
   var x1 = 50;
   var y1 = 50;
   tr = 0;
   for (var i = 1; i < 4; i++) {
      y1 = 50;
      for (var j = 1; j < 4; j++) {
         if (x > x1 && x < x1 + 250) {
            if (y > y1 && y < y1 + 250) {
               B = ((i * 10) + j);
            }
            y1 = y1 + 250;
         }
      }
      x1 = x1 + 250;
   }
   return B;
}