function ggeneradorNombreDominios() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
  
    let domains = [];
  
    for (let pronom of pronoun) {
      for (let adjeti of adj) {
        for (let nombre of noun) {
          domains.push(pronom + adjeti + nombre + ".com");
        }
      }
    }
  
  
    domains.forEach(domain => console.log(domain));
  }
  
  
  ggeneradorNombreDominios();
  