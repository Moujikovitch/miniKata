
def carre(n)
  return n*n
end


class Simplon
    def self.tableau()
      formation = ["SIMPLONMARS", "lol"]
      return formation[0]
    end
    def self.convertisseur(char)
      return char.to_i
    end
end


def navalbattle(x, y)
  grid = ["top left","top middle","top right","middle left","center","middle right","bottom left","bottom midle","bottom right"]
  return grid[0] if x==0 && y==0
  return grid[1] if x==1 && y==0
  return grid[2] if x==2 && y==0
  return grid[3] if x==0 && y==1
  return grid[4] if x==1 && y==1
  return grid[5] if x==2 && y==1
  return grid[6] if x==0 && y==2
  return grid[7] if x==1 && y==2
  return grid[8] if x==2 && y==2
end
