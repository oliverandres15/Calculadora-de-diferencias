const obj = {
    pro: 1, 
    pro2: 2, 
    pro3: {
        res: 
            { gom: 1, pr:2 }, 
        res2: 2
        }, 
    pro4: 4
}
//console.log(typeof obj.pro3.res )

function prof(ob, cont = 0) {
    const res = [];
    cont = cont + 1;
    //res.push(cont)
    //function posicion(ob){
    
       // console.log(typeof ob.pro)
       // console.log(typeof ob.pro3)
        for (let i in ob) {
            
           // console.log(ob[i])
           // console.log(typeof i)
            if (typeof ob[i] === 'object') {
                res.push(cont)
                console.log(i)
                                //res.push(cont+1)
                //console.log(prof(ob[i],cont).flat())
                res.push(prof(ob[i],cont))

                //cont=cont+1
                console.log(cont)
                console.log(res)
            }else{
                res.push(cont)
            }
        }
    
//}
    return res.flat()
}
console.log(prof(obj))

// const objeto = {
//     common: {
//       follow: false,
//         setting1: Value 1
//         setting2: 200
//       - setting3: true
//       + setting3: null
//       + setting4: blah blah
//       + setting5: {
//             key5: value5
//         }
//         setting6: {
//             doge: {
//               - wow:
//               + wow: so much
//             }
//             key: value
//           + ops: vops
//         }
//     }
//     group1: {
//       - baz: bas
//       + baz: bars
//         foo: bar
//       - nest: {
//             key: value
//         }
//       + nest: str
//     }
//   - group2: {
//         abc: 12345
//         deep: {
//             id: 45
//         }
//     }
//   + group3: {
//         deep: {
//             id: {
//                 number: 45
//             }
//         }
//         fee: 100500
//     }
// };