var block = [];

function Block(x, y, ind, num) {
   this.x = x;
   this.y = y;
   this.index = ind;
   this.val = 0;
   this.status = 0;
   this.no = num;
   this.value = 0;

   this.drawB = function() {
      rect(this.x, this.y, 200, 200);
   }
}