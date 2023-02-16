// var a = 10;
// let b = 20;

// const c = 30 - 20;
// console.log(a);

// var int = 5;
// var float = 5.5;


// var string1 =" Selamat "
// var string2 =" pagi "

// console.log(string1 + string2);


// var a = 100;
// var b = 20;

// var hasil = a + b;

// console.log(hasil)


// // pengurangan //

// var c = 40;
// var pengurangan = hasil - c;
// console.log( pengurangan );

// // perkalian //

// let d = 40;
// var perkalian = pengurangan * 40;
// console.log(perkalian);

// // pembagian//

// var f = 50;
// var pembagian = perkalian / 50;
// console.log(pembagian);


// var modulus1 = 13;
// var modulus2 = 10;
// var mod = modulus1 % modulus2;
// console.log(mod);


// var array = ["Rangga","2015130030"]
// console.log(array);

// var object = {nama: "Rangga", nim:"2015130030", jurusan: "Desain Komunikasi Visual"}
// console.log(object.nama); 

// var angka = prompt('Masukan Angka : ');

// if (angka == "10"|| angka =="20" ) {
//     alert('user memasukan angka'+ angka)   
// } else {
//     alert('user bukan memasukan angka 10 atau 20')
// }




// if (angka == "10" && angka == "30") {
//     alert('user memasukan angka' + angka)
    
// } else {
//     alert{angka yang dimasukan salah'}
// }

// if (angka == 10) {
//    alert('bilangan ' + angka);
// } else if (angka == 20) {
//     alert('bilangan ' + angka)
// } else if (angka == 30) {
//     alert('bilangan ' + angka)
// } else {
//     alert('bilangan tidak ada');
// }


// if (angka >= 10) {
//     if (angka >= 11) {
//         if (angka >= 12) {
//           alert('berhasil sampai tahap 3')  
//         } else {
//             alert('angka lebih kecil dari atau sama dengan 12')
//         }
//     } else {
//         alert('angka lebih kecil dari atau sama dengan 11')
//     }
// } else {
//     alert('angka lebih kecil dari atau sama dengan 10')
// }


// var sistem = 10;
// var sistem_run = 6;
// var no_sistem = 1;


// while (no_sistem <= sistem_run) {
//     console.log('sitem no.' + no_sistem +'running');
    
//     if (no_sistem >= 5) {
//         console.log('sistem no.' + no_sistem + 'Maintance');
//     }  else {
//         console.log('sistem no.' + no_sistem + 'Running');
//     }
//     no_sistem++;
// }


// for (no_sistem = sistem_run + 1; no_sistem <= sistem; no_sistem++) {
//     console.log('sistem no_sistem.'  + no_sistem +'Maintance')
    
// }


// for (no_sistem = 1; no_sistem <= sistem; no_sistem++) {
//     if (no_sistem >= 8) {
//         console.log('sistem no.' + no_sistem +'Maintance');
//     } else {
//         console.log('sistem no.' + 'Running');
//     }
    
// }

// var number = prompt('silahkan masukan angka : ');

// switch (number) {
//     case "1":
//         alert('anda memasukan angka 1');
//         break;
//     case "2":
//         alert('anda memasukan angka 2');
//         break;
//     case "3":
//         alert('anda memasukan angka 3');
//         break;
//     case "4":
//         alert('anda memasukan angka 4');
//         break;
//     default:
//         alert('anda memasukan angka yang tidak tersedia');
//         break;
// }

// funcion adala blok kode terorganisir dan dapat digunakan kembali / digunakan untuk melakukan tindakan atau action//

// function test( a , b  ) {
//     var total;

//     total = a + b;
//     return total;
// }

// console.log(test( 10, 20 ));

// var array = [];
// array[0] = "index1";
// array[1] = "index2";
// array[2] = "index3";
// array[3] = "index4";
// array[4] = "index5";
// console.log('array');


var array = ["Rangga","2015130030","desain komunikasi visual"]
for (let i = 0; i < 3; i++) {
    console.log('index ke -'+(i)+':'+array[i]);
    
}
