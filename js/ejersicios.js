class ejersicios{

  static validTest(){
    let a = [121, 144, 19, 161, 19, 144, 19, 11];
    let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
    return ejersicios.comp(a, b);
  }

  static invalidTest(){
    let a = [21, 144, 19, 161, 19, 144, 19, 11];
    let b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
    return ejersicios.comp(a,b);
  }

  static tests(){
    console.log(ejersicios.restaLista([1, 2, 2, 1, 2, 2], [1]));
    console.log(ejersicios.restaLista([2], ejersicios.restaLista([1, 2], [1])));
    console.log(ejersicios.restaLista([2, 2], ejersicios.restaLista([1, 2, 2], [1])));
    console.log(ejersicios.restaLista([1], ejersicios.restaLista([1, 2, 2], [2])));
    console.log(ejersicios.restaLista([1, 2, 2],ejersicios.restaLista([1,2,2], [])));
    console.log(ejersicios.restaLista([],ejersicios.restaLista([], [1,2])));
    console.log(ejersicios.restaLista([5, 2],ejersicios.restaLista([5,2], [])));
    }

  static limpiarRepetidos(a){
    let res = a.filter((item, index) => {
      return a.indexOf(item) === index;
    });
    return res;
  }

  static restaLista(a,b){
    let res = [];
    if (a.length > 0 || b.length > 0) {
      for (let elemen = 0; elemen < b.length; elemen++) {
       res = a.filter((item, index) => {
          if (item != b[elemen])
            return item;
        });
      }
      return res;
  }else{
      if (a.length === 0 && b.length === 0 || a.length === 0) return [];
      else if (b.length == 0) return a;
    }
  }

  static comp(aa,bb){
    let flag2 = 0;
    let a = ejersicios.limpiarRepetidos(aa);
    let b = ejersicios.limpiarRepetidos(bb);

    a.forEach(ae => {
      for (const i in b) {
        if (ae*ae == b[i])
          flag2 ++;
      }
    });
    flag2 == a.length ? document.body.innerHTML += "<h4>Lista:  SI es igual</h4>" : document.body.innerHTML += "<h4>Lista; NO es igual</h4>";

  }

  static main(){
    ejersicios.invalidTest();
    ejersicios.validTest();
    ejersicios.tests();
  }

}
ejersicios.main();