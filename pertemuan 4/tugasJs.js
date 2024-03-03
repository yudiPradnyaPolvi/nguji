countries = ['indonesia','malaysia']
const cariCountries= countries.find(function (d) {
    return d === 'indonesia'
  })
if(cariCountries=='indonesia'){
    console.log("ada");
}else{
    console.log('tidak ada')
}