function addMeMaybe(number,func){
    number+=1
    func(number)
}
// var x  =4
// addMeMaybe(x,  (x)=> {
//     console.log('New value: ' + x);
//   }
//   );

module.exports.addMeMaybe= addMeMaybe;