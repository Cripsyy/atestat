const cars = [
  {
    number:1,
    name:"Honda Civic",
    type:"hatchback",
    condition:"noua",
    price:35000,
    engine:"hibrid",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:184,
    size:1993,
    country:"Japonia",
    picture:"images/cars/honda-civic.jpg",
    points:0
  },
  {
    number:2,
    name:"Dacia Logan",
    type:"sedan",
    condition:"second-hand",
    price:6000,
    engine:"diesel",
    year:2018,
    gearbox:"manuala",
    mileage:240000,
    power:75,
    size:1461,
    country:"Romania",
    picture:"images/cars/dacia-logan.jpg",
    points:0
  },
  {
    number:3,
    name:"Ford Focus",
    type:"hatchback",
    condition:"second-hand",
    price:6000,
    engine:"diesel",
    year:2015,
    gearbox:"manuala",
    mileage:240000,
    power:95,
    size:1498,
    country:"America",
    picture:"images/cars/ford-focus.jpg",
    points:0
  },
  {
    number:4,
    name:"Volkswagen Golf",
    type:"hatchback",
    condition:"second-hand",
    price:10000,
    engine:"diesel",
    year:2014,
    gearbox:"manuala",
    mileage:150000,
    power:90,
    size:1598,
    country:"Germania",
    picture:"images/cars/volkswagen-golf.jpg",
    points:0
  },
  {
    number:5,
    name:"Bmw Seria 3",
    type:"break",
    condition:"second-hand",
    price:10000,
    engine:"diesel",
    year:2013,
    gearbox:"automata",
    mileage:200000,
    power:143,
    size:1995,
    country:"Germania",
    picture:"images/cars/bmw-seria-3.jpg",
    points:0
  },
  {
    number:6,
    name:"Land Rover Range Rover",
    type:"suv",
    condition:"second-hand",
    price:60000,
    engine:"diesel",
    year:2018,
    gearbox:"automata",
    mileage:120000,
    power:275,
    size:2993,
    country:"Anglia",
    picture:"images/cars/range-rover.jpg",
    points:0
  },
  {
    number:7,
    name:"Mazda CX-5",
    type:"suv",
    condition:"second-hand",
    price:25000,
    engine:"diesel",
    year:2019,
    gearbox:"automata",
    mileage:100000,
    power:184,
    size:2191,
    country:"Japonia",
    picture:"images/cars/mazda-cx-5.jpg",
    points:0
  },
  {
    number:8,
    name:"Volkswagen Passat",
    type:"break",
    condition:"noua",
    price:43000,
    engine:"diesel",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:200,
    size:1968,
    country:"Germania",
    picture:"images/cars/volkswagen-passat.jpg",
    points:0
  },
  {
    number:9,
    name:"Fiat Punto",
    type:"hatchback",
    condition:"second-hand",
    price:3500,
    engine:"benzina",
    year:2006,
    gearbox:"manuala",
    mileage:170000,
    power:77,
    size:1368,
    country:"Italia",
    picture:"images/cars/fiat-punto.jpg",
    points:0
  },
  {
    number:10,
    name:"Volkswagen Arteon",
    type:"sedan",
    condition:"second-hand",
    price:22500,
    engine:"benzina",
    year:2018,
    gearbox:"manuala",
    mileage:50000,
    power:190,
    size:1984,
    country:"Germania",
    picture:"images/cars/volkswagen-arteon.jpg",
    points:0
  },
  {
    number:11,
    name:"Mercedes-Benz G-Class",
    type:"suv",
    condition:"second-hand",
    price:125000,
    engine:"benzina",
    year:2019,
    gearbox:"automata",
    mileage:75000,
    power:387,
    size:5461,
    country:"Germania",
    picture:"images/cars/mercedes-g-class.jpg",
    points:0
  },
  {
    number:12,
    name:"Audi TT",
    type:"coupe",
    condition:"second-hand",
    price:7000,
    engine:"benzina",
    year:2007,
    gearbox:"manuala",
    mileage:452000,
    power:200,
    size:1984,
    country:"Germania",
    picture:"images/cars/audi-tt.jpg",
    points:0
  },
  {
    number:13,
    name:"Hyundai i30",
    type:"hatchback",
    condition:"second-hand",
    price:17000,
    engine:"benzina",
    year:2022,
    gearbox:"manuala",
    mileage:32000,
    power:120,
    size:998,
    country:"Korea",
    picture:"images/cars/hyundai-i30.jpg",
    points:0
  },
  {
    number:14,
    name:"Seat Altea",
    type:"break",
    condition:"second-hand",
    price:6000,
    engine:"diesel",
    year:2011,
    gearbox:"automata",
    mileage:200000,
    power:105,
    size:1600,
    country:"Spania",
    picture:"images/cars/seat-altea.jpg",
    points:0
  },
  {
    number:15,
    name:"Skoda Kodiaq",
    type:"suv",
    condition:"second-hand",
    price:26000,
    engine:"benzina",
    year:2017,
    gearbox:"automata",
    mileage:140000,
    power:180,
    size:1984,
    country:"Cehia",
    picture:"images/cars/skoda-kodiaq.jpg",
    points:0
  },
  {
    number:16,
    name:"Volvo XC 60",
    type:"suv",
    condition:"second-hand",
    price:42000,
    engine:"hibrid",
    year:2019,
    gearbox:"automata",
    mileage:75000,
    power:303,
    size:1969,
    country:"Suedia",
    picture:"images/cars/volvo-xc60.jpg",
    points:0
  },
  {
    number:17,
    name:"Toyota Corolla",
    type:"break",
    condition:"second-hand",
    price:19000,
    engine:"hibrid",
    year:2020,
    gearbox:"automata",
    mileage:172000,
    power:98,
    size:1798,
    country:"Japonia",
    picture:"images/cars/toyota-corolla.jpg",
    points:0
  },
  {
    number:18,
    name:"Ford Kuga",
    type:"suv",
    condition:"second-hand",
    price:25000,
    engine:"hibrid",
    year:2020,
    gearbox:"automata",
    mileage:112000,
    power:225,
    size:2498,
    country:"America",
    picture:"images/cars/ford-kuga.jpg",
    points:0
  },
  {
    number:19,
    name:"Audi A4",
    type:"sedan",
    condition:"noua",
    price:31500,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:150,
    size:1984,
    country:"Germania",
    picture:"images/cars/audi-a4.jpg",
    points:0
  },
  {
    number:20,
    name:"Hyundai Bayon",
    type:"suv",
    condition:"noua",
    price:18000,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:100,
    size:998,
    country:"Korea",
    picture:"images/cars/hyundai-bayon.jpg",
    points:0
  },
  {
    number:21,
    name:"Mercedes-Benz CLA",
    type:"coupe",
    condition:"noua",
    price:48000,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:163,
    size:1332,
    country:"Germania",
    picture:"images/cars/mercedes-cla.jpg",
    points:0
  },
  {
    number:22,
    name:"Tesla Model Y",
    type:"suv",
    condition:"noua",
    price:46500,
    engine:"electric",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:514,
    size:0,
    country:"America",
    picture:"images/cars/tesla-model-y.jpg",
    points:0
  },
  {
    number:23,
    name:"Ford Mustang Mach-E",
    type:"suv",
    condition:"noua",
    price:50000,
    engine:"electric",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:266,
    size:0,
    country:"America",
    picture:"images/cars/ford-mustang-mach-e.jpg",
    points:0
  },
  {
    number:24,
    name:"Dacia Spring",
    type:"hatchback",
    condition:"second-hand",
    price:11500,
    engine:"electric",
    year:2022,
    gearbox:"automata",
    mileage:8200,
    power:45,
    size:0,
    country:"Romania",
    picture:"images/cars/dacia-spring.jpg",
    points:0
  },
  {
    number:25,
    name:"Mini Cooper",
    type:"hatchback",
    condition:"second-hand",
    price:24000,
    engine:"electric",
    year:2020,
    gearbox:"automata",
    mileage:28000,
    power:184,
    size:0,
    country:"Anglia",
    picture:"images/cars/mini-copper.jpg",
    points:0
  },
  {
    number:26,
    name:"Subaru BRZ",
    type:"coupe",
    condition:"second-hand",
    price:22500,
    engine:"benzina",
    year:2017,
    gearbox:"manuala",
    mileage:50000,
    power:200,
    size:1998,
    country:"Japonia",
    picture:"images/cars/subaru-brz.jpg",
    points:0
  },
  {
    number:27,
    name:"BMW M2",
    type:"coupe",
    condition:"noua",
    price:63000,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:460,
    size:2993,
    country:"Germania",
    picture:"images/cars/bmw-m2.jpg",
    points:0
  },
  {
    number:28,
    name:"Toyota Supra",
    type:"coupe",
    condition:"second-hand",
    price:50000,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:19000,
    power:340,
    size:2998,
    country:"Japonia",
    picture:"images/cars/toyota-supra.jpg",
    points:0
  },
  {
    number:29,
    name:"Porsche Cayman",
    type:"coupe",
    condition:"second-hand",
    price:30000,
    engine:"benzina",
    year:2014,
    gearbox:"automata",
    mileage:50000,
    power:275,
    size:2706,
    country:"Germania",
    picture:"images/cars/porsche-cayman.jpg",
    points:0
  },
  {
    number:30,
    name:"Peugeot RCZ",
    type:"coupe",
    condition:"second-hand",
    price:10000,
    engine:"benzina",
    year:2011,
    gearbox:"manuala",
    mileage:137000,
    power:200,
    size:1598,
    country:"Franta",
    picture:"images/cars/peugeout-rcz.jpg",
    points:0
  },
  {
    number:31,
    name:"Peugeot 508",
    type:"break",
    condition:"second-hand",
    price:10500,
    engine:"hibrid",
    year:2014,
    gearbox:"automata",
    mileage:195000,
    power:163,
    size:1997,
    country:"Franta",
    picture:"images/cars/peugeout-508.jpg",
    points:0
  },
  {
    number:32,
    name:"Skoda Fabia",
    type:"break",
    condition:"second-hand",
    price:4200,
    engine:"diesel",
    year:2012,
    gearbox:"manuala",
    mileage:227000,
    power:75,
    size:1199,
    country:"Cehia",
    picture:"images/cars/skoda-fabia.jpg",
    points:0
  },
  {
    number:33,
    name:"Ford Focus Break",
    type:"break",
    condition:"noua",
    price:21000,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:125,
    size:999,
    country:"America",
    picture:"images/cars/ford-focus-break.jpg",
    points:0
  },
  {
    number:34,
    name:"Chevrolet Malibu",
    type:"sedan",
    condition:"second-hand",
    price:7500,
    engine:"diesel",
    year:2012,
    gearbox:"automata",
    mileage:180000,
    power:160,
    size:1956,
    country:"America",
    picture:"images/cars/chevrolet-malibu.jpg",
    points:0
  },
  {
    number:35,
    name:"Mercedes-Benz CLK",
    type:"coupe",
    condition:"second-hand",
    price:4500,
    engine:"benzina",
    year:2000,
    gearbox:"automata",
    mileage:175000,
    power:137,
    size:1998,
    country:"Germania",
    picture:"images/cars/mercedes-clk.jpg",
    points:0
  },
  {
    number:36,
    name:"Dacia 1300",
    type:"sedan",
    condition:"second-hand",
    price:3700,
    engine:"benzina",
    year:1977,
    gearbox:"manuala",
    mileage:9200,
    power:54,
    size:1300,
    country:"Romania",
    picture:"images/cars/dacia-1300.jpg",
    points:0
  },
  {
    number:37,
    name:"Mitsubishi 3000",
    type:"coupe",
    condition:"second-hand",
    price:13500,
    engine:"benzina",
    year:1997,
    gearbox:"manuala",
    mileage:110000,
    power:286,
    size:2972,
    country:"Japonia",
    picture:"images/cars/mitsubishi-3000.jpg",
    points:0
  },
  {
    number:38,
    name:"Audi A3",
    type:"sedan",
    condition:"second-hand",
    price:28500,
    engine:"diesel",
    year:2019,
    gearbox:"automata",
    mileage:72000,
    power:184,
    size:1968,
    country:"Germania",
    picture:"images/cars/audi-a3.jpg",
    points:0
  },
  {
    number:39,
    name:"Opel Corsa e",
    type:"hatchback",
    condition:"noua",
    price:23000,
    engine:"electric",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:136,
    size:0,
    country:"Germania",
    picture:"images/cars/opel-corsa-e.jpg",
    points:0
  },
  {
    number:40,
    name:"Kia Sportage",
    type:"suv",
    condition:"second-hand",
    price:10000,
    engine:"benzina",
    year:2014,
    gearbox:"manuala",
    mileage:95000,
    power:135,
    size:1591,
    country:"Korea",
    picture:"images/cars/kia-sportage.jpg",
    points:0
  },
  {
    number:41,
    name:"Bmw X3",
    type:"suv",
    condition:"second-hand",
    price:14500,
    engine:"diesel",
    year:2014,
    gearbox:"manuala",
    mileage:270000,
    power:135,
    size:1995,
    country:"Germania",
    picture:"images/cars/bmw-x3.jpg",
    points:0
  },
  {
    number:42,
    name:"Citroën C3",
    type:"hatchback",
    condition:"second-hand",
    price:7250,
    engine:"diesel",
    year:2016,
    gearbox:"manuala",
    mileage:40000,
    power:75,
    size:1560,
    country:"Franta",
    picture:"images/cars/citroen-c3.jpg",
    points:0
  },
  {
    number:43,
    name:"Citroën C-Elysée",
    type:"sedan",
    condition:"second-hand",
    price:10000,
    engine:"diesel",
    year:2020,
    gearbox:"manuala",
    mileage:36000,
    power:102,
    size:1499,
    country:"Franta",
    picture:"images/cars/citroen-c-elysee.jpg",
    points:0
  },
  {
    number:44,
    name:"Cupra Formentor",
    type:"suv",
    condition:"second-hand",
    price:36500,
    engine:"benzina",
    year:2021,
    gearbox:"automata",
    mileage:27500,
    power:310,
    size:1984,
    country:"Spania",
    picture:"images/cars/cupra-formentor.jpg",
    points:0
  },
  {
    number:45,
    name:"Dacia Duster",
    type:"suv",
    condition:"second-hand",
    price:14000,
    engine:"diesel",
    year:2019,
    gearbox:"manuala",
    mileage:160000,
    power:109,
    size:1461,
    country:"Romania",
    picture:"images/cars/dacia-duster.jpg",
    points:0
  },
  {
    number:46,
    name:"Dacia Sandero",
    type:"hatchback",
    condition:"noua",
    price:17000,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:100,
    size:999,
    country:"Romania",
    picture:"images/cars/dacia-sandero.jpg",
    points:0
  },
  {
    number:47,
    name:"Jaguar XF",
    type:"sedan",
    condition:"second-hand",
    price:8500,
    engine:"diesel",
    year:2010,
    gearbox:"automata",
    mileage:210000,
    power:275,
    size:2993,
    country:"Anglia",
    picture:"images/cars/jaguar-xf.jpg",
    points:0
  },
  {
    number:48,
    name:"Jeep Renegade",
    type:"suv",
    condition:"second-hand",
    price:17500,
    engine:"diesel",
    year:2017,
    gearbox:"automata",
    mileage:137000,
    power:170,
    size:1956,
    country:"America",
    picture:"images/cars/jeep-renegade.jpg",
    points:0
  },
  {
    number:49,
    name:"Lexus Seria NX",
    type:"suv",
    condition:"second-hand",
    price:23000,
    engine:"hibrid",
    year:2015,
    gearbox:"automata",
    mileage:173000,
    power:155,
    size:2494,
    country:"Japonia",
    picture:"images/cars/lexus-nx.jpg",
    points:0
  },
  {
    number:50,
    name:"Maserati Granturismo",
    type:"coupe",
    condition:"second-hand",
    price:37500,
    engine:"benzina",
    year:2008,
    gearbox:"automata",
    mileage:53000,
    power:405,
    size:4244,
    country:"Italia",
    picture:"images/cars/maserati-granturismo.jpg",
    points:0
  },
  {
    number:51,
    name:"Nissan Qashqai",
    type:"suv",
    condition:"second-hand",
    price:29000,
    engine:"benzina",
    year:2021,
    gearbox:"automata",
    mileage:67000,
    power:157,
    size:1332,
    country:"Japonia",
    picture:"images/cars/nissan-qashqai.jpg",
    points:0
  },
  {
    number:52,
    name:"Nissan Micra",
    type:"hatchback",
    condition:"second-hand",
    price:2750,
    engine:"benzina",
    year:2008,
    gearbox:"manuala",
    mileage:200000,
    power:88,
    size:1386,
    country:"Japonia",
    picture:"images/cars/nissan-micra.jpg",
    points:0
  },
  {
    number:53,
    name:"Opel Insignia",
    type:"sedan",
    condition:"second-hand",
    price:18000,
    engine:"diesel",
    year:2019,
    gearbox:"automata",
    mileage:80000,
    power:136,
    size:1598,
    country:"Germania",
    picture:"images/cars/opel-insignia.jpg",
    points:0
  },
  {
    number:54,
    name:"Opel Adam",
    type:"hatchback",
    condition:"second-hand",
    price:6700,
    engine:"benzina",
    year:2015,
    gearbox:"manuala",
    mileage:196000,
    power:85,
    size:1398,
    country:"Germania",
    picture:"images/cars/opel-adam.jpg",
    points:0
  },
  {
    number:55,
    name:"Renault Scenic",
    type:"break",
    condition:"second-hand",
    price:7500,
    engine:"diesel",
    year:2013,
    gearbox:"manuala",
    mileage:206000,
    power:130,
    size:1598,
    country:"Franta",
    picture:"images/cars/renault-scenic.jpg",
    points:0
  },
  {
    number:56,
    name:"Renault Megane",
    type:"break",
    condition:"second-hand",
    price:12000,
    engine:"diesel",
    year:2019,
    gearbox:"automata",
    mileage:165000,
    power:115,
    size:1461,
    country:"Franta",
    picture:"images/cars/renault-megane.jpg",
    points:0
  },
  {
    number:57,
    name:"Renault Clio",
    type:"hatchback",
    condition:"second-hand",
    price:9600,
    engine:"diesel",
    year:2019,
    gearbox:"manuala",
    mileage:36000,
    power:90,
    size:1461,
    country:"Franta",
    picture:"images/cars/renault-clio.jpg",
    points:0
  },
  {
    number:58,
    name:"Bmw Seria 3 E30",
    type:"coupe",
    condition:"second-hand",
    price:13500,
    engine:"benzina",
    year:1984,
    gearbox:"manuala",
    mileage:191000,
    power:125,
    size:1990,
    country:"Germania",
    picture:"images/cars/bmw-seria-3-e30.jpg",
    points:0
  },
  {
    number:59,
    name:"Suzuki Samurai",
    type:"suv",
    condition:"second-hand",
    price:5500,
    engine:"benzina",
    year:1986,
    gearbox:"manuala",
    mileage:7000,
    power:80,
    size:1334,
    country:"Japonia",
    picture:"images/cars/suzuki-samurai.jpg",
    points:0
  },
  {
    number:60,
    name:"Volkswagen Scirocco",
    type:"coupe",
    condition:"second-hand",
    price:10500,
    engine:"benzina",
    year:1985,
    gearbox:"manuala",
    mileage:150000,
    power:90,
    size:1760,
    country:"Germania",
    picture:"images/cars/volkswagen-sciroco.jpg",
    points:0
  },
  {
    number:61,
    name:"Suzuki Swift",
    type:"hatchback",
    condition:"second-hand",
    price:8300,
    engine:"benzina",
    year:2011,
    gearbox:"automata",
    mileage:92500,
    power:94,
    size:1242,
    country:"Japonia",
    picture:"images/cars/suzuki-swift.jpg",
    points:0
  },
  {
    number:62,
    name:"Smart Fortwo",
    type:"hatchback",
    condition:"second-hand",
    price:4500,
    engine:"diesel",
    year:2008,
    gearbox:"automata",
    mileage:142000,
    power:45,
    size:799,
    country:"Anglia",
    picture:"images/cars/smart_fortwo.jpg",
    points:0
  },
  {
    number:63,
    name:"Toyota Prius",
    type:"break",
    condition:"second-hand",
    price:9300,
    engine:"hibrid",
    year:2012,
    gearbox:"automata",
    mileage:331000,
    power:99,
    size:1798,
    country:"Japonia",
    picture:"images/cars/toyota-prius.jpg",
    points:0
  },
  {
    number:64,
    name:"Toyota Auris",
    type:"hatchback",
    condition:"second-hand",
    price:13300,
    engine:"benzina",
    year:2016,
    gearbox:"automata",
    mileage: 193000,
    power:99,
    size:1329,
    country:"Japonia",
    picture:"images/cars/toyota-auris.jpg",
    points:0
  },
  {
    number:65,
    name:"Kia Ceed",
    type:"hatchback",
    condition:"noua",
    price:22000,
    engine:"benzina",
    year:2023,
    gearbox:"automata",
    mileage:0,
    power:160,
    size: 1482,
    country:"Korea",
    picture:"images/cars/kia-ceed.jpg",
    points:0
  },
  {
    number:66,
    name:"Fiat Panda",
    type:"hatchback",
    condition:"noua",
    price:12500,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:70,
    size:999,
    country:"Italia",
    picture:"images/cars/fiat-panda.jpg",
    points:0
  },
  {
    number:67,
    name:"Skoda Octavia",
    type:"sedan",
    condition:"noua",
    price:26000,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:150,
    size:1498,
    country:"Cehia",
    picture:"images/cars/skoda-octavia.jpg",
    points:0
  },
  {
    number:68,
    name:"Seat Leon ST",
    type:"hatchback",
    condition:"second-hand",
    price:16000,
    engine:"benzina",
    year:2015,
    gearbox:"automata",
    mileage:195000,
    power:280,
    size:1984,
    country:"Spania",
    picture:"images/cars/seat-leon.jpg",
    points:0
  },
  {
    number:69,
    name:"Mazda 2",
    type:"hatchback",
    condition:"second-hand",
    price:3500,
    engine:"benzina",
    year:2010,
    gearbox:"manuala",
    mileage:130000,
    power:75,
    size:1349,
    country:"Japonia",
    picture:"images/cars/mazda-2.jpg",
    points:0
  },
  {
    number:70,
    name:"Volkswagen Tiguan",
    type:"suv",
    condition:"second-hand",
    price:13000,
    engine:"diesel",
    year:2013,
    gearbox:"automata",
    mileage:218000,
    power:140,
    size:1968,
    country:"Germania",
    picture:"images/cars/volkswagen-tiguan.jpg",
    points:0
  },
  {
    number:71,
    name:"Mitsubishi ASX",
    type:"suv",
    condition:"second-hand",
    price:9000,
    engine:"diesel",
    year:2014,
    gearbox:"manuala",
    mileage:215000,
    power:150,
    size:1798,
    country:"Japonia",
    picture:"images/cars/mitsubishi-asx.jpg",
    points:0
  },
  {
    number:72,
    name:"Volvo S60",
    type:"sedan",
    condition:"second-hand",
    price:15500,
    engine:"diesel",
    year:2018,
    gearbox:"automata",
    mileage:178000,
    power:150,
    size:1969,
    country:"Suedia",
    picture:"images/cars/volvo-s60.jpg",
    points:0
  },
  {
    number:73,
    name:"Toyota RAV4",
    type:"suv",
    condition:"second-hand",
    price:25000,
    engine:"hibrid",
    year:2019,
    gearbox:"automata",
    mileage:203000,
    power:185,
    size:1487,
    country:"Japonia",
    picture:"images/cars/toyota-rav4.jpg",
    points:0
  },
  {
    number:74,
    name:"Hyundai Tucson",
    type:"suv",
    condition:"second-hand",
    price:18000,
    engine:"diesel",
    year:2018,
    gearbox:"automata",
    mileage:195000,
    power:141,
    size:1685,
    country:"Korea",
    picture:"images/cars/hyundai-tucson.jpg",
    points:0
  },
  {
    number:75,
    name:"Bmw Seria 5",
    type:"sedan",
    condition:"second-hand",
    price:12000,
    engine:"diesel",
    year:2011,
    gearbox:"automata",
    mileage:212000,
    power:184,
    size:1995,
    country:"Germania",
    picture:"images/cars/bmw-seria-5.jpg",
    points:0
  },
  {
    number:76,
    name:"Porsche Macan",
    type:"suv",
    condition:"second-hand",
    price:30000,
    engine:"diesel",
    year:2015,
    gearbox:"automata",
    mileage:225000,
    power:258,
    size:3967,
    country:"Germania",
    picture:"images/cars/porsche-macan.jpg",
    points:0
  },
  {
    number:77,
    name:"Skoda Superb",
    type:"break",
    condition:"second-hand",
    price:15000,
    engine:"diesel",
    year:2019,
    gearbox:"automata",
    mileage:280000,
    power:150,
    size:1968,
    country:"Cehia",
    picture:"images/cars/skoda-superb.jpg",
    points:0
  },
  {
    number:78,
    name:"Chevrolet Spark",
    type:"hatchback",
    condition:"second-hand",
    price:3500,
    engine:"benzina",
    year:2010,
    gearbox:"manuala",
    mileage:135000,
    power:68,
    size:995,
    country:"America",
    picture:"images/cars/chevrolet-spark.jpg",
    points:0
  },
  {
    number:79,
    name:"Alfa Romeo Giulietta",
    type:"hatchback",
    condition:"second-hand",
    price:4500,
    engine:"diesel",
    year:2011,
    gearbox:"manuala",
    mileage:225000,
    power:140,
    size:1956,
    country:"Italia",
    picture:"images/cars/alfa-romeo-giulietta.jpg",
    points:0
  },
  {
    number:80,
    name:"Subaru Forester",
    type:"break",
    condition:"second-hand",
    price:5000,
    engine:"diesel",
    year:2009,
    gearbox:"manuala",
    mileage:223000,
    power:147,
    size:1998,
    country:"Japonia",
    picture:"images/cars/subaru-forester.jpg",
    points:0
  },
  {
    number:81,
    name:"Mini One",
    type:"coupe",
    condition:"second-hand",
    price:2650,
    engine:"benzina",
    year:2002,
    gearbox:"manuala",
    mileage:230000,
    power:88,
    size:1600,
    country:"Anglia",
    picture:"images/cars/mini-one.jpg",
    points:0
  },
  {
    number:82,
    name:"Kia Cerato",
    type:"sedan",
    condition:"second-hand",
    price:3000,
    engine:"diesel",
    year:2008,
    gearbox:"manuala",
    mileage:175000,
    power:115,
    size:1582,
    country:"Korea",
    picture:"images/cars/kia-cerato.jpg",
    points:0
  },
  {
    number:83,
    name:"Mercedes-Benz A",
    type:"hatchback",
    condition:"second-hand",
    price:12000,
    engine:"diesel",
    year:2018,
    gearbox:"automata",
    mileage:30000,
    power:109,
    size:1461,
    country:"Germania",
    picture:"images/cars/mercedes-a.jpg",
    points:0
  },
  {
    number:84,
    name:"Audia 100",
    type:"break",
    condition:"second-hand",
    price:2300,
    engine:"benzina",
    year:1992,
    gearbox:"manuala",
    mileage:109000,
    power:133,
    size:2309,
    country:"Germania",
    picture:"images/cars/audi-100.jpg",
    points:0
  },
  {
    number:85,
    name:"Hyundai Coupe",
    type:"coupe",
    condition:"second-hand",
    price:5000,
    engine:"benzina",
    year:2002,
    gearbox:"manuala",
    mileage:112000,
    power:136,
    size:1997,
    country:"Korea",
    picture:"images/cars/hyundai-coupe.jpg",
    points:0
  },
  {
    number:86,
    name:"Chevrolet Camaro",
    type:"coupe",
    condition:"second-hand",
    price:31000,
    engine:"benzina",
    year:2019,
    gearbox:"automata",
    mileage:55000,
    power:340,
    size:3600,
    country:"America",
    picture:"images/cars/chevrolet-camaro.jpg",
    points:0
  },
  {
    number:87,
    name:"Nissan 370Z",
    type:"coupe",
    condition:"second-hand",
    price:20000,
    engine:"benzina",
    year:2016,
    gearbox:"automata",
    mileage:50000,
    power:337,
    size:3696,
    country:"Japonia",
    picture:"images/cars/nissan-370z.jpg",
    points:0
  },
  {
    number:88,
    name:"Mazda 6",
    type:"break",
    condition:"second-hand",
    price:3900,
    engine:"benzina",
    year:2004,
    gearbox:"manuala",
    mileage:200000,
    power:120,
    size:1998,
    country:"Japonia",
    picture:"images/cars/mazda-6.jpg",
    points:0
  },
  {
    number:89,
    name:"Honda Accord",
    type:"sedan",
    condition:"second-hand",
    price:8500,
    engine:"benzina",
    year:2010,
    gearbox:"automata",
    mileage:218000,
    power:201,
    size:1354,
    country:"Japonia",
    picture:"images/cars/honda-accord.jpg",
    points:0
  },
  {
    number:90,
    name:"Lexus IS 300",
    type:"sedan",
    condition:"second-hand",
    price:18000,
    engine:"hibrid",
    year:2015,
    gearbox:"automata",
    mileage:114000,
    power:223,
    size:2494,
    country:"Japonia",
    picture:"images/cars/lexus-is300.jpg",
    points:0
  },
  {
    number:91,
    name:"Peugeot 208",
    type:"hatchback",
    condition:"noua",
    price:23000,
    engine:"benzina",
    year:2023,
    gearbox:"manuala",
    mileage:0,
    power:101,
    size:1199,
    country:"Franta",
    picture:"images/cars/peugeout-208.jpg",
    points:0
  },
  {
    number:92,
    name:"Renault Captur",
    type:"suv",
    condition:"second-hand",
    price:24000,
    engine:"hibrid",
    year:2020,
    gearbox:"automata",
    mileage:45000,
    power:91,
    size:1598,
    country:"Franta",
    picture:"images/cars/renault-captur.jpg",
    points:0
  },
  {
    number:93,
    name:"Volkswagen Touran",
    type:"break",
    condition:"second-hand",
    price:17000,
    engine:"benzina",
    year:2016,
    gearbox:"manuala",
    mileage:103000,
    power:150,
    size:1395,
    country:"Germania",
    picture:"images/cars/volkswagen-touran.jpg",
    points:0
  },
  {
    number:94,
    name:"Opel Zafira",
    type:"break",
    condition:"second-hand",
    price:7500,
    engine:"diesel",
    year:2013,
    gearbox:"manuala",
    mileage:235000,
    power:131,
    size:1956,
    country:"Germania",
    picture:"images/cars/opel-zafira.jpg",
    points:0
  },
  {
    number:95,
    name:"Jeep Grand Cherokee",
    type:"suv",
    condition:"second-hand",
    price:18000,
    engine:"diesel",
    year:2015,
    gearbox:"automata",
    mileage:225000,
    power:243,
    size:2987,
    country:"America",
    picture:"images/cars/jeep-grand-cherokee.jpg",
    points:0
  },
  {
    number:96,
    name:"Tesla Model 3",
    type:"sedan",
    condition:"second-hand",
    price:34000,
    engine:"electric",
    year:2021,
    gearbox:"automata",
    mileage:15000,
    power:306,
    size:null,
    country:"America",
    picture:"images/cars/tesla-model-3.jpg",
    points:0
  },
  {
    number:97,
    name:"Fiat 500 e",
    type:"hatchback",
    condition:"second-hand",
    price:26000,
    engine:"electric",
    year:2022,
    gearbox:"automata",
    mileage:32000,
    power:118,
    size:null,
    country:"Italia",
    picture:"images/cars/fiat-500-e.jpg",
    points:0
  },
  {
    number:98,
    name:"Porsche Taycan",
    type:"coupe",
    condition:"second-hand",
    price:78000,
    engine:"electric",
    year:2020,
    gearbox:"automata",
    mileage:27000,
    power:571,
    size:null,
    country:"Germania",
    picture:"images/cars/porsche-taycan.jpg",
    points:0
  },
  {
    number:99,
    name:"Jaguar I-Pace",
    type:"suv",
    condition:"second-hand",
    price:36000,
    engine:"electric",
    year:2019,
    gearbox:"automata",
    mileage:65000,
    power:400,
    size:null,
    country:"Anglia",
    picture:"images/cars/jaguar-i-pace.jpg",
    points:0
  },
  {
    number:100,
    name:"Audi Q5",
    type:"suv",
    condition:"second-hand",
    price:26000,
    engine:"diesel",
    year:2018,
    gearbox:"automata",
    mileage:210000,
    power:190,
    size:1968,
    country:"Germania",
    picture:"images/cars/audi-q5.jpg",
    points:0
  },
]