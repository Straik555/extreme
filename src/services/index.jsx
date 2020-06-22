export default class ProductstoreService {
    data = [
        {
            id: 1,
            title: '4G180',
            details: 'Tenda 4G LTE 150Mbps Mobile WiFi Router | 4G180',
            category: 'Роутер',
            price: 952.17,
            coverImage: 'https://scoop.co.za/download/marketing/images/4G180.jpg',
            quantity: 20,
        },
        {
            id: 2,
            title: '4G680',
            details: 'Tenda 4G LTE 300Mbps WiFi Router | 4G680',
            category: 'Роутер',
            price: 1252.17,
            coverImage: 'https://scoop.co.za/download/marketing/images/4G680.jpg',
            quantity: 11,
        },
        {
            id: 3,
            title: 'ACB-AC',
            details: 'Ubiquiti AirCube AC WiFi Router | ACB-AC',
            category: 'Роутер',
            price: 1282.61,
            coverImage: 'https://scoop.co.za/download/marketing/images/ACB-AC.jpg',
            quantity: 19,
        },
        {
            id: 4,
            title: 'ACB-ISP',
            details: 'Ubiquiti AirCube WiFi PoE Access Point with UNMS | ACB-ISP0',
            category: 'Роутер',
            price: 478.26,
            coverImage: 'https://scoop.co.za/download/marketing/images/ACB-ISP.jpg',
            quantity: 3
        },
        {
            id: 5,
            title: 'AF-11FX',
            details: 'Ubiquiti AirFiberX 11GHz PtP Radio | AF-11FX',
            category: 'Роутер',
            price: 10691.3,
            coverImage: 'https://scoop.co.za/download/marketing/images/AF-11FX.jpg',
            quantity: 2,
        },
        {
            id: 6,
            title: 'AF-11FX-DUP-L',
            details: 'Ubiquiti AirFiberX 11Ghz Low Band Duplexer | AF-11FX-DUP-L',
            category: 'Роутер',
            price: 3300,
            coverImage: 'https://scoop.co.za/download/marketing/images/AF-11FXDUPL.jpg',
            quantity: 6,
        },
        {
            id:  7,
            title: 'AF-11G35',
            details: 'Ubiquiti AirFiber Dish 11Ghz 35dBi 81cm | AF-11G35',
            category: 'Спутниковая тарелка',
            price: 6652.17,
            coverImage: 'https://scoop.co.za/download/marketing/images/AF-11G35.jpg',
            quantity: 92,
        },
        {
            id:  8,
            title: 'AF-5XHD',
            details: 'Ubiquiti AirFiber5X HD PtP Radio Gigabit WiFi | AF-5XHD',
            category: 'Роутер',
            price: 6865.22,
            coverImage: 'https://scoop.co.za/download/marketing/images/AF-5XHD.jpg',
            quantity: 121,
        },
        {
            id:  9,
            title: 'AFI-INS',
            details: 'Ubiquiti AmpliFi Instant Router +1 MeshPoint Kit | AFI-INS',
            category: 'Роутер',
            price: 3126.09,
            coverImage: 'https://scoop.co.za/download/marketing/images/AFI-INSK.jpg',
            quantity: 61,
        },
        {
            id:  10,
            title: 'AFI-INS-R',
            details: 'Ubiquiti AmpliFi Instant Router | AFI-INS-R',
            category: 'Роутер',
            price: 1717.39,
            coverImage: 'https://scoop.co.za/download/marketing/images/AFI-INSR.jpg',
            quantity: 23,
        },
        {
            id: 11,
            title: 'AF-5G23-S45',
            details: 'Ubiquiti 5GHz AirFiber Dish 23dBi Slant 45 PtP | AF-5G23-S45',
            category: 'Спутниковая тарелка',
            price: 1450,
            coverImage: 'https://scoop.co.za/download/marketing/images/AIR-D523X.jpg',
            quantity: 85,
        },
        {
            id: 12,
            title: 'RD-5G30',
            details: 'Ubiquiti 5GHz AirMax Dish 30dBi Backhaul PtP | RD-5G30',
            category: 'Спутниковая тарелка',
            price: 2304.35,
            coverImage: 'https://scoop.co.za/download/marketing/images/AIR-D530.jpg',
            quantity: 81,
        },
        {
            id: 13,
            title: 'RD-5G30-LW',
            details: 'Ubiquiti 5GHz AirMax Dish 30dBi Light Weight PtP | RD-5G30-LW',
            category: 'Спутниковая тарелка',
            price: 1734.78,
            coverImage: 'https://scoop.co.za/download/marketing/images/AIR-D530LW.jpg',
            quantity: 231,
        },

    ]
    getProduct(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)

            }, 700);
        });
    }
}