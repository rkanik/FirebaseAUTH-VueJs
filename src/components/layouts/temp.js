// let word = 'Captain Marvel'
//         word = word.toLowerCase()
//         db.collection('Keywords').where('_id', '==', 'KEYID')
//           .get().then((result) => {
//             result.forEach( doc =>{
//               let words = doc.data().words

//               if(words.includes(word)){
//                 console.log('already have this word');
//               }else{
//                 words.push(word)
//                 words.sort();
//                 doc.ref.update({
//                   words:words
//                 })
//                 console.log('new keyword inserted');
//               }
//             })
//           }).catch((err) => {
//             console.log(err);
//         });



// let word = 'DEadPOoL'
//     word = word.toLowerCase()
//     db.collection('Keywords').where('_id', '==', 'KEYID')
//       .get().then((result) => {
//         result.forEach( doc =>{
//           let words = doc.data().words
//           words = words.filter( w => w !== word );
//           words.push(word)
//           words.sort();
//           doc.ref.update({
//             words:words
//           })
//         })
//       }).catch((err) => {
//         console.log(err);
//     });



// let words = [
        //   'action','fantasy','mystery','thriller','horror',
        //   'crime','adventure','war','drama','romance',
        //   'sci-fi','comedy','musical','animation','biography',
        //   'history','family'
        // ]
        // let wordsArray;
        // db.collection('Keywords').where('_id', '==', 'KEYID')
        //   .get().then((result) => {
        //     result.forEach( doc =>{
        //       doc.ref.update({
        //         words:words
        //       })
        //     })
        //   }).catch((err) => {
        //     console.log(err);
        // });




        
              
                
// var n = this.keywords.length;  
// let l = word.length; 
// for (var i = 0; i<n; i++) {
//         if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1){ 
//                 var node = document.createElement("option"); 
//                 var val = document.createTextNode(tags[i]); 
//                 node.appendChild(val); 
//                 document.getElementById("datalist").appendChild(node);  
//         } 
// }