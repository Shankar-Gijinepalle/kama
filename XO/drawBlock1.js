function drawBlock1(tra, x, y) {

   fill(150, 0);
   strokeWeight(4);
   stroke(0);
   ellipse(x + 100, y + 100, 200, 200);
   block[tra].status = 1;
   print(block[tra].value);
   player[0].score = player[0].score + block[tra].value;
   player[0].index = player[0].index + 1;
   if (player[0].index === 3) {
      checkScore(player[0].score);
   }
   if (player[0].index === 4) {
      modiCheck(player[0].score);
   }
}