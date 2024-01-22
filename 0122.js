let trainStationRoutesVilnius = [
    {
        marsrutas: 'Vilnius - Kaunas',
        isvykimoDataIrLaikas: '2024-01-25, 18:25',
        trukme: "1:06",
        atvykimoDataIrLaikas: '2024-01-25, 19:31'
    },
    {
        marsrutas: 'Vilnius - Varsuva',
        isvykimoDataIrLaikas: '2024-02-02, 05:14',
        trukme: "10:14",
        atvykimoDataIrLaikas: '2024-02-02, 15:28'
    },
    {
        marsrutas: 'Vilnius - Roma',
        isvykimoDataIrLaikas: '2024-02-15, 19:00',
        trukme: "30:15",
        atvykimoDataIrLaikas: '2024-02-17, 01:15'
    },
    {
        marsrutas: 'Vilnius - Klaipeda',
        isvykimoDataIrLaikas: '2024-01-31, 06:25',
        trukme: "4:25",
        atvykimoDataIrLaikas: '2024-01-31, 10:45'
    },
    {
        marsrutas: 'Vilnius - Talinas',
        isvykimoDataIrLaikas: '2024-01-31, 07:00',
        trukme: "6:30",
        atvykimoDataIrLaikas: '2024-01-31, 13:30'
    }
]

//  Informacija apie viena marsruta.

function getInformationAboutRoute(route) {
    console.log("Marsrutas: " + route.marsrutas + ", Isvykimo data ir laikas: " + route.isvykimoDataIrLaikas + ", Keliones trukme: " + route.trukme + ", Atvykimo data ir laikas: " + route.atvykimoDataIrLaikas);
}

getInformationAboutRoute(trainStationRoutesVilnius[0]);

// Atspausdina visus marsrutus:

trainStationRoutesVilnius.forEach((route) => getInformationAboutRoute(route));

// Atspausdina marsrutu kieki.

let count = 0;
for (let i = 0; i < trainStationRoutesVilnius.length; i++) {
    count++;
}
console.log(count);

// Rasti trumpiausios kelionės duomenis(f)ir juos atspausdinti(visą informaciją apie maršrutą)(f);

function getShortestRoute(route) {
    let shortestRoute = route[0];

    for (let i = 1; i < route.length; i++) {
        if (route[i].trukme < shortestRoute.trukme) {
            shortestRoute = route[i];
        }
        return shortestRoute;
    }
}
console.log(getShortestRoute(trainStationRoutesVilnius));

// Rasti ilgiausios kelionės duomenis(f)ir juos atspausdinti(visą informaciją apie maršrutą)(f);

function getLongestRoute(route) {
    let longestRoute = route[0];

    for (let i = 1; i < route.length; i++) {
        if (route[i].trukme > longestRoute.trukme) {
            longestRoute = route[i];
        }
        return longestRoute;
    }
}
console.log(getLongestRoute(trainStationRoutesVilnius));

// Rasti(f)ir atspausdinti(visą informaciją apie maršrutus)(f)tik tas keliones, kurios truko ilgiau nei para;

function getMoreThan24HourRoute(route) {
    let longerThanDay = route[0];

    for (let i = 1; i < route.length; i++) {
        if (route[i].trukme > "24:00") {
            longerThanDay = route[i];
        }
        return longerThanDay;
    }
}
console.log(getMoreThan24HourRoute(trainStationRoutesVilnius));
