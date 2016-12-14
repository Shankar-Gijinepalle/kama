function setup() {
   createCanvas(800, 800);
   background(20);
   drawGrid();
   assignScore();
   playerS = 1;
   player[0] = new Player(1);
   player[1] = new Player(2);
}

function draw() {

}

var playerS;

function mousePressed() {
   var B = getBlock();
   var x, y;
   var inde = 0;
   var tra = 10;
   for (var i = 0; i < 9; i++) {
      if (block[i].index == B) {
         inde = B;
         tra = i;
      }
   }
   print(block[tra]);
   if (block[tra].status != 1) {
      x = (((floor(inde / 10) - 1) * 200) + (floor(inde / 10) * 50));
      y = (((inde % 10) - 1) * 200) + ((inde % 10) * 50);
      if (playerS == 1) {
         drawBlock1(tra, x, y);
         playerS = 2;
      }
      else {
         drawBlock2(tra, x, y);
         playerS = 1;
      }
      tra = 0;
   }

}