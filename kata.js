function jenny(nom) {
  if (nom == Johnny) {
    return "Hello, my love!";
  } else {
    return "Hello"+" "+nom;
  };
};


function coucou() {
  formation = ["SIMPLONMARS", "LOL"];
  return formation[0];
};

grid = ["top left","top middle", "top right"
                    "middle left","center","middle right"
                   "bottom left","bottom midle", "bottom right" ]

function navalbattle(x ,y) {
  if (x==0 && y==0) {return grid [0];};
  if (x==1 && y==0) {return grid [1];};
  if (x==2 && y==0) {return grid [2];};
  if (x==0 && y==1) {return grid [3];};
  if (x==1 && y==1) {return grid [4];};
  if (x==2 && y==1) {return grid [5];};
  if (x==0 && y==2) {return grid [6];};
  if (x==1 && y==2) {return grid [7];};
  if (x==2 && y==2) {return grid [8];};
};
