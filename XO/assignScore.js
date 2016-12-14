function assignScore() {
   var tra = 0;
   var v = 0.001;
   for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
         block[tra].value = v;
         tra = tra + 1;
      }
      v = v * 10;
   }
}