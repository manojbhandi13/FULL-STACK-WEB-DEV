// Print "Red" → wait 3s → print "Green" → wait 2s
//  → print "Yellow" using nested setTimeout callbacks.

const printColors = () => {
  console.log("Red");
  setTimeout(() => {
    console.log("Green");
    setTimeout(() => {
      console.log("Yellow");
    }, 2000);
  }, 3000);
};

printColors();
