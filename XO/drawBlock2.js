function drawBlock2(tra, x1, y1) {
   line(x1, y1, x1 + 200, y1 + 200);
   line(x1 + 200, y1, x1, y1 + 200);
   block[tra].status = 1;
   print(block[tra].value);
   player[1].score = player[1].score + block[tra].value;
   player[1].index = player[1].index + 1;
   if (player[1].index === 3) {
      checkScore(player[1].score);
   }
   if (player[1].index === 4) {
      modiCheck(player[1].score);
   }
}