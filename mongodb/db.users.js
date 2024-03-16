db.users.insert([
    {
        "nombres":"vladimir",
        "apellidos":"garcia",
        "correo":"vladimiryx2@hotmail",
        "genero":"masculino",
        "edad":39,
        "ciudad":"medellin",
        "pais":"colombia",
        "salario":3.500,
        "altura":1.68,
        "peso":69
    },
    {
        "nombres":"andres",
        "apellidos":"zapata",
        "correo":"andres@hotmail",
        "genero":"masculino",
        "edad":18,
        "ciudad":"cali",
        "pais":"colombia",
        "salario":1.500,
        "altura":1.58,
        "peso":59
    },
    {
        "nombres":"camila",
        "apellidos":"gonzales",
        "correo":"camila@hotmail",
        "genero":"femenino",
        "edad":22,
        "ciudad":"valledupar",
        "pais":"colombia",
        "salario":2.300,
        "altura":1.65,
        "peso":55
    },
    {
        "nombres":"felipe",
        "apellidos":"garcia",
        "correo":"felipe@gmail",
        "genero":"masculino",
        "edad":19,
        "ciudad":"london",
        "pais":"inglaterra",
        "salario":7.500,
        "altura":1.70,
        "peso":80
    },
    {
        "nombres":"david",
        "apellidos":"restrepo",
        "correo":"david@hotmail",
        "genero":"masculino",
        "edad":26,
        "ciudad":"paris",
        "pais":"francia",
        "salario":3.800,
        "altura":1.60,
        "peso":73
    },
    {
        "nombres":"manuela",
        "apellidos":"casas",
        "correo":"manuela@hotmail",
        "genero":"femenino",
        "edad":40,
        "ciudad":"sidney",
        "pais":"australia",
        "salario":3.800,
        "altura":1.60,
        "peso":140
    },
    {
        "nombres":"mariana",
        "apellidos":"hurtado",
        "correo":"mariana@hotmail",
        "genero":"femenino",
        "edad":37,
        "ciudad":"ottawa",
        "pais":"canada",
        "salario":5.800,
        "altura":1.80,
        "peso":140
    },
    {
        "nombres":"mateo",
        "apellidos":"ortiz",
        "correo":"mateo@hotmail",
        "genero":"masculino",
        "edad":31,
        "ciudad":"roma",
        "pais":"italia",
        "salario":1.80,
        "altura":1.80,
        "peso":140
    },
    {
        "nombres":"camilo",
        "apellidos":"casas",
        "correo":"camilo@hotmail",
        "genero":"masculino",
        "edad":24,
        "ciudad":"roma",
        "pais":"italia",
        "salario":4.800,
        "altura":1.80,
        "peso":110
    },
    {
        "nombres":"marcela",
        "apellidos":"tellez",
        "correo":"marcela@hotmail",
        "genero":"femenino",
        "edad":35,
        "ciudad":"sao pablo",
        "pais":"brazil",
        "salario":3.300,
        "altura":1.80,
        "peso":110
    },
    {
        "nombres":"santiago",
        "apellidos":"mesa",
        "correo":"santiago@hotmail",
        "genero":"masculino",
        "edad":38,
        "ciudad":"barcelona",
        "pais":"españa",
        "salario":3.900,
        "altura":1.54,
        "peso":90
    },
    {
        "nombres":"ortencia",
        "apellidos":"casas",
        "correo":"ortencia@hotmail",
        "genero":"femenino",
        "edad":29,
        "ciudad":"berlin",
        "pais":"alemania",
        "salario":3.900,
        "altura":1.54,
        "peso":90
    },
    {
        "nombres":"ramona",
        "apellidos":"dark",
        "correo":"ramona@hotmail",
        "genero":"femenino",
        "edad":35,
        "ciudad":"bombai",
        "pais":"india",
        "altura":1.65,
        "peso":67
    },
    {
        "nombres":"simon",
        "apellidos":"crespo",
        "correo":"",
        "genero":"masculino",
        "edad":50,
        "ciudad":"quito",
        "pais":"ecuador",
        "salario":7.900,
        "altura":1.65,
        "peso":98
    }

]);




//1. Obtener todos los usuarios que sean mayores de 18 años
db.users.find({ edad: { $gt: 18}});

//2.Obtener todos los usuarios que sean de Londres o de París.
db.users.find({
    $or:[
        { pais:  "Londres"},
        { pais:  "Paris"}
    ]
});

//3.Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users.find({
    $and: [
        {salario: { $gt: 2000 }   },
        {edad: { $lt: 30 }   }
    ]
});

//4.Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.users.find({
    $and: [
        {pais:  "España"  },
        {salario: { $gt: 3000 }   }
    ]
});

//5.Obtener todos los usuarios que tengan entre 25 y 35 años.

db.users.find({ edad: { $in: [ 25, 30] } });

//6.Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({ pais: { $ne: "USA" } });

//7.Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({
    $and: [
        {pais: "Londres"},
        {salario: { $gt: 2500 }  }
    ],
    or:[
        {edad: {$gt: 30}}
    ]
});

//8.Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.users.find({
    $and: [
        {pais:  "Australia"  },
        {peso: { $gt: 140 }   }
    ]
});

//9.Obtener a todos los usuarios que no sean de Londres ni de París.

db.users.find({
    $and: [
        {pais: { $ne: "Londres" }   },
        {pais: { $ne: "Paris" }   }
    ]
});

//10. Obtener a todos los usuarios que ganen
// menos de $2000 al mes o que tengan más de 40 años.
db.users.find({
    $and: [
        {salario: { $lt: 2000 }},
        {edad: { $gt: 40 }   }
    ]
});



//11. Obtener a todos los usuarios que 
//sean de Canadá y ganen más de $4000 al
// mes o que tengan una altura mayor a 180 cm.
//pendiente

db.users.insert([{
    nombres:"ddddd",
    apellidos:"dddddd",
    correo:"",
    genero:"masculino",
    edad:50,
    ciudad:"quito",
    pais:"Canada",
    salario:7.900,
    altura:1.90,
    peso:98
}])


db.users.find({
    pais: "Canada",
    salario: {$gt :  4.000},
$or:[
   {altura: {$gt: 1.80} }
]});

//12. Obtener todos los usuarios que sean de Italia
// y tengan entre 20 y 30 años.
//pendiente


db.users.find({
    $and: [
        {pais:  "Italia"},
        {edad: { $in: [ 20, 30] }  }
    ]
});

//13.Obtener todos los usuarios que no tengan un correo electrónico registrado.

db.users.find({correo: { $eq: "" }});

//14.Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.


db.users.find({
    $and:[
   
        {pais:  "francia"},
        {salario:{ $gt: 3.000}},
        {salario:{ $lt: 5.000}}
    ]
    });

//15.Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

db.users.find({
    
        pais:{$eq:"brazil"}
       
    ,
    $or:[
        {peso:{$lt:120}},
        {peso:{$gt:140}}
        
    ]
});


//16.Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

db.users.find({
    edad:{$lt:25},
    $or:[
        {pais:{$eq:"argentina"}},
        {pais:{$eq:"chile"}}
    ]

});



//17.Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.users.find({
    $nor:[{pais:["españa", "mexico"]}],
    salario:{$lt: 3.000}

});

db.users.find({salario:{$gt: 3.000}});


//18.Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

db.users.find({
    pais:{$eq: "alemania"},
    $and:[
        {salario:{$lt: 4.000}},
        
    ]
});

//19.Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.users.find({
    pais:{$nin:["colombia"]},
    $and:[
        {altura:{$lt: 1.70}}
    ]
});

//20.Obtener todos los usuarios que sean de India y que no tengan un salario registrado.



db.users.find({
    pais:{$eq:"india"},
    $and:[
        {salario:{$exists: [false]}}
    ]
});






db.users.updateOne(
    {"_id": ObjectId ( "65f3717ff9620790d5de059a")},
  {$set:{
    "nombres":"ramona",
    "apellidos":"dark",
    "correo":"ramona@hotmail",
    "genero":"femenino",
    "edad":"35"
}}
);












db.users.updateOne(
    {"_id": ObjectId ( "65f3717ff9620790d5de059a")},
  {$set:{
    "nombres":"ramona",
    "apellidos":"dark",
    "correo":"ramona@hotmail",
    "genero":"femenino",
    "edad":"35"
}}
);
