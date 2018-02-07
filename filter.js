a = [2010, 2013];

const filter = (a) => {
  const h1 = n => (pow(n,2)+pow(n,3))%32
  const h2 = n => (pow(n,2)+pow(n,3)*2)%32
  const h3 = n => (pow(n,2)+pow(n,3)*3)%32
  for(let i=0; i<a.length; i++){
    bits.push(h1(a[i]));
    bits.push(h2(a[i]));
    bits.push(h2(a[i]));
  }
  return bits;
}

console.log(filter(a));
