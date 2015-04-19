describe("Jenny la coquine", function() {
  it("message spécial pour johnny", function() {
    expect(jenny("Johnny")).toEqual("Hello, my love!");
  });
  it("retourner simplonmars", function() {
    expect(coucou()).toEqual("SIMPLONMARS");
  });
  it("grille retourne position", function() {
    expect(navalbattle(0,0)).toEqual("top left");
  });
  it("grille retourne position", function() {
    expect(nombre("123")).toEqual(123);
  });
});
