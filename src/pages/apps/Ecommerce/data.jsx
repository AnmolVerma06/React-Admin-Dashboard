import product1 from "@/assets/images/products/product-1.png";
import product2 from "@/assets/images/products/product-2.png";
import product3 from "@/assets/images/products/product-3.png";
import product4 from "@/assets/images/products/product-4.png";
import product5 from "@/assets/images/products/product-5.png";
import product6 from "@/assets/images/products/product-6.png";
import product7 from "@/assets/images/products/product-7.png";
import product8 from "@/assets/images/products/product-8.png";
const products = [{
  id: 1,
  name: "Men's sport T-shirt",
  image: product1,
  rating: 3,
  price: 39,
  quantity: 98,
  status: true
}, {
  id: 2,
  name: "Jack & Jones Men's T-shirt (Red)",
  image: product2,
  rating: 2,
  price: 98,
  quantity: 23,
  status: true
}, {
  id: 3,
  name: "Women's Marron Tshirt",
  image: product3,
  rating: 5,
  price: 49,
  quantity: 235,
  status: true
}, {
  id: 4,
  name: "Jack & Jones Men's T-shirt (Sky Blue)",
  image: product4,
  rating: 3,
  price: 29,
  quantity: 385,
  status: false
}, {
  id: 5,
  name: "Soft Green Tshirt",
  image: product5,
  rating: 4,
  price: 49,
  quantity: 25,
  status: false
}, {
  id: 6,
  name: "Jack & Jones Men's Jacket",
  image: product6,
  rating: 5,
  price: 19,
  quantity: 19,
  status: true
}, {
  id: 7,
  name: "Women's Soft Green Tshirt",
  image: product7,
  rating: 5,
  price: 99,
  quantity: 36,
  status: false
}, {
  id: 8,
  name: "Roadster Long Sleeves T-shirt",
  image: product8,
  rating: 1,
  price: 29,
  quantity: 128,
  status: true
}];
const orders = [{
  id: 1,
  product_img: [product1, product2],
  order_id: "31",
  order_date: "23-May-2025",
  order_time: "1:45 PM",
  payment_status: "Payment Failed",
  total: "₹8361.93",
  payment_method: "Visa",
  order_status: "Processing"
}, {
  id: 2,
  product_img: [product3, product4, product5],
  order_id: "060",
  order_date: "01-Feb-2025",
  order_time: "12:10 PM",
  payment_status: "Unpaid",
  total: "₹6219.67",
  payment_method: "Credit Card",
  order_status: "Shipped"
}, {
  id: 3,
  product_img: [product5],
  order_id: "76961",
  order_date: "13-Mar-2025",
  order_time: "2:53 AM",
  payment_status: "Payment Failed",
  total: "₹6695.83",
  payment_method: "Paypal",
  order_status: "Shipped"
}, {
  id: 4,
  product_img: [product3, product8],
  order_id: "59",
  order_date: "02-Feb-2025",
  order_time: "2:53 AM",
  payment_status: "Paid",
  total: "₹8616.73",
  payment_method: "Visa",
  order_status: "Delivered"
}, {
  id: 5,
  product_img: [product5, product7],
  order_id: "93",
  order_date: "15-May-2025",
  order_time: "1:52 PM",
  payment_status: "Awaiting Authorization",
  total: "₹1808.61",
  payment_method: "Paypal",
  order_status: "Shipped"
}, {
  id: 6,
  product_img: [product2],
  order_id: "2164",
  order_date: "22-Feb-2025",
  order_time: "3:59 AM",
  payment_status: "Paid",
  total: "₹9813.57",
  payment_method: "Paypal",
  order_status: "Delivered"
}, {
  id: 7,
  product_img: [product4, product6],
  order_id: "22410",
  order_date: "16-Jan-2025",
  order_time: "7:29 AM",
  payment_status: "Awaiting Authorization",
  total: "₹9457.23",
  payment_method: "Mastercard",
  order_status: "Delivered"
}, {
  id: 8,
  product_img: [product6, product8, product3],
  order_id: "04260",
  order_date: "06-Feb-2025",
  order_time: "5:14 AM",
  payment_status: "Unpaid",
  total: "₹1054.76",
  payment_method: "Payoneer",
  order_status: "Processing"
}, {
  id: 9,
  product_img: [product2, product5],
  order_id: "77",
  order_date: "18-Jan-2025",
  order_time: "9:34 AM",
  payment_status: "Payment Failed",
  total: "₹3526.87",
  payment_method: "Payoneer",
  order_status: "Shipped"
}, {
  id: 10,
  product_img: [product5, product8],
  order_id: "938",
  order_date: "27-Apr-2025",
  order_time: "6:16 PM",
  payment_status: "Paid",
  total: "₹8201.67",
  payment_method: "Paypal",
  order_status: "Delivered"
}, {
  id: 11,
  product_img: [product1],
  order_id: "99",
  order_date: "03-Mar-2025",
  order_time: "11:23 PM",
  payment_status: "Payment Failed",
  total: "₹9557.76",
  payment_method: "Paypal",
  order_status: "Processing"
}, {
  id: 12,
  product_img: [product3, product4, product5],
  order_id: "397",
  order_date: "12-May-2025",
  order_time: "11:18 PM",
  payment_status: "Unpaid",
  total: "₹8391.95",
  payment_method: "Visa",
  order_status: "Processing"
}, {
  id: 13,
  product_img: [product5],
  order_id: "4874",
  order_date: "01-Jan-2025",
  order_time: "2:15 PM",
  payment_status: "Unpaid",
  total: "₹3558.36",
  payment_method: "Paypal",
  order_status: "Cancelled"
}, {
  id: 14,
  product_img: [product3, product8],
  order_id: "496",
  order_date: "17-Apr-2025",
  order_time: "7:56 PM",
  payment_status: "Payment Failed",
  total: "₹2871.99",
  payment_method: "Credit Card",
  order_status: "Delivered"
}, {
  id: 15,
  product_img: [product5, product7],
  order_id: "982",
  order_date: "07-May-2025",
  order_time: "7:54 PM",
  payment_status: "Awaiting Authorization",
  total: "₹415.59",
  payment_method: "Mastercard",
  order_status: "Processing"
}, {
  id: 16,
  product_img: [product2],
  order_id: "66303",
  order_date: "14-Mar-2025",
  order_time: "10:47 AM",
  payment_status: "Paid",
  total: "₹9554.21",
  payment_method: "Credit Card",
  order_status: "Shipped"
}, {
  id: 17,
  product_img: [product4, product6],
  order_id: "73",
  order_date: "20-Feb-2025",
  order_time: "4:24 PM",
  payment_status: "Payment Failed",
  total: "₹9766.71",
  payment_method: "Mastercard",
  order_status: "Delivered"
}, {
  id: 18,
  product_img: [product6, product8, product3],
  order_id: "90804",
  order_date: "03-Jun-2025",
  order_time: "5:42 PM",
  payment_status: "Payment Failed",
  total: "₹1194.25",
  payment_method: "Mastercard",
  order_status: "Cancelled"
}, {
  id: 19,
  product_img: [product3, product8],
  order_id: "97489",
  order_date: "09-May-2025",
  order_time: "11:47 PM",
  payment_status: "Paid",
  total: "₹8715.09",
  payment_method: "Visa",
  order_status: "Processing"
}, {
  id: 20,
  product_img: [product5, product7],
  order_id: "53577",
  order_date: "10-Jun-2025",
  order_time: "8:47 PM",
  payment_status: "Unpaid",
  total: "₹2836.42",
  payment_method: "Mastercard",
  order_status: "Delivered"
}];
const customers = [{
  id: 1,
  name: "Paul J. Friend",
  phone: "050 414 8778",
  balance: "₹12,874.82",
  orders: 43,
  last_order: {
    date: "August 05 2024",
    time: "10:29 PM"
  },
  avatar: "https://robohash.org/laborevoluptateeaque.png?size=60x60&set=set1",
  status: "Active"
}, {
  id: 2,
  name: "Bryan J. Luellen",
  phone: "215-302-3376",
  balance: "₹874.25",
  orders: 220,
  last_order: {
    date: "August 04 2024",
    time: "08:18 AM"
  },
  avatar: "https://robohash.org/voluptatemeligendisint.png?size=60x60&set=set1",
  status: "Active"
}, {
  id: 3,
  name: "Kathryn S. Collier",
  phone: "828-216-2190",
  balance: "₹125.78",
  orders: 841,
  last_order: {
    date: "November 04 2024",
    time: "10:29 PM"
  },
  avatar: "https://robohash.org/etidsapiente.png?size=60x60&set=set1",
  status: "Blocked"
}, {
  id: 4,
  name: "Timothy Kauper",
  phone: "(216) 75 612 706",
  balance: "₹561.25",
  orders: 62,
  last_order: {
    date: "February 01 2024",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/pariaturharumquas.png?size=60x60&set=set1",
  status: "Blocked"
}, {
  id: 5,
  name: "Zara Raws",
  phone: "(02) 75 150 655",
  balance: "₹2147.84",
  orders: 9,
  last_order: {
    date: "February 01 2024",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/quodfugiatquae.png?size=60x60&set=set1",
  status: "Active"
}, {
  id: 6,
  name: "Annette P. Kelsch",
  phone: "(+15) 73 483 758",
  balance: "₹451.28",
  orders: 25,
  last_order: {
    date: "September 07 2024",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/sapientenonomnis.png?size=60x60&set=set1",
  status: "Active"
}, {
  id: 7,
  name: "Jenny C. Gero",
  phone: "078 7173 9261",
  balance: "₹965.20",
  orders: 214,
  last_order: {
    date: "November 14 2024",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/autvelitest.png?size=60x60&set=set1",
  status: "Blocked"
}, {
  id: 8,
  name: "Edward Roseby",
  phone: "078 6013 3854",
  balance: "₹71584.2",
  orders: 365,
  last_order: {
    date: "February 09 2024",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/exsuscipitcorporis.png?size=60x60&set=set1",
  status: "Active"
}, {
  id: 9,
  name: "Anna Ciantar",
  phone: "(216) 76 298 896",
  balance: "₹5482.00",
  orders: 921,
  last_order: {
    date: "September 12 2024",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/consectetureiuset.png?size=60x60&set=set1",
  status: "Active"
}, {
  id: 10,
  name: "Dean Smithies",
  phone: "077 6157 4248",
  balance: "₹482.15",
  orders: 68,
  last_order: {
    date: "October 09 2024",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/aspernaturlaborumab.png?size=60x60&set=set1",
  status: "Active"
}, {
  id: 11,
  name: "Labeeb Ghali",
  phone: "050 414 8778",
  balance: "₹7852.3",
  orders: 475,
  last_order: {
    date: "October 27 2024",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/veroinciduntfacere.png?size=60x60&set=set1",
  status: "Active"
}, {
  id: 12,
  name: "Rory Seekamp",
  phone: "078 5054 8877",
  balance: "₹3365.12",
  orders: 25,
  last_order: {
    date: "April 21 2025",
    time: "07:22 AM"
  },
  avatar: "https://robohash.org/cumvoluptatibusreprehenderit.png?size=60x60&set=set1",
  status: "Blocked"
}];
const sellers = [{
  id: 1,
  name: "Hayward Billo",
  store: "Boehm-Cremin",
  ratings: 4.9,
  products: 747,
  balance: "₹1621.73",
  created_on: "07/11/2024",
  revenue: "₹25.26k",
  image: "https://robohash.org/voluptateesseaut.png?size=100x100&set=set1"
}, {
  id: 2,
  name: "Adler Villa",
  store: "Hettinger, Shields and Pollich",
  ratings: 3.5,
  products: 883,
  balance: "₹20343.72",
  created_on: "17/03/2024",
  revenue: "₹15.3k",
  image: "https://robohash.org/pariaturfacilisrem.png?size=100x100&set=set1"
}, {
  id: 3,
  name: "Janna MacFayden",
  store: "Fay, Batz and O'Conner",
  ratings: 4.1,
  products: 579,
  balance: "₹2912.64",
  created_on: "07/11/2024",
  revenue: "₹13.6k",
  image: "https://robohash.org/laborehicvitae.png?size=100x100&set=set1"
}, {
  id: 4,
  name: "Ludovika Ryle",
  store: "Adams, Schuppe and Daugherty",
  ratings: 4.9,
  products: 353,
  balance: "₹4995.04",
  created_on: "15/12/2024",
  revenue: "₹6.2k",
  image: "https://robohash.org/laboriosamvoluptatemet.png?size=100x100&set=set1"
}, {
  id: 5,
  name: "Jamal Stopper",
  store: "Dooley-Koss",
  ratings: 5.0,
  products: 662,
  balance: "₹2698.10",
  created_on: "09/02/2024",
  revenue: "₹8.5k",
  image: "https://robohash.org/repellatdelenitinon.png?size=100x100&set=set1"
}, {
  id: 6,
  name: "Ralf Orcott",
  store: "Renner Group",
  ratings: 4.0,
  products: 453,
  balance: "₹943.45",
  created_on: "07/10/2024",
  revenue: "₹5.8k",
  image: "https://robohash.org/delectusquodquo.png?size=100x100&set=set1"
}, {
  id: 7,
  name: "Bevin Weatherhogg",
  store: "Feil-McDermott",
  ratings: 2.6,
  products: 801,
  balance: "₹1806.89",
  created_on: "06/09/2024",
  revenue: "₹9.3k",
  image: "https://robohash.org/ipsaestad.png?size=100x100&set=set1"
}, {
  id: 8,
  name: "Emalia Oglevie",
  store: "Schaefer and Sons",
  ratings: 4.0,
  products: 280,
  balance: "₹2724.29",
  created_on: "13/09/2024",
  revenue: "₹8.6k",
  image: "https://robohash.org/reprehenderitofficiisqui.png?size=100x100&set=set1"
}, {
  id: 9,
  name: "Shelley Tyrer",
  store: "Dooley-Lind",
  ratings: 4.3,
  products: 619,
  balance: "₹3242.86",
  created_on: "09/11/2024",
  revenue: "₹12.1k",
  image: "https://robohash.org/expeditadictaitaque.png?size=100x100&set=set1"
}, {
  id: 10,
  name: "Faustine Swine",
  store: "Ledner Inc",
  ratings: 5.0,
  products: 829,
  balance: "₹2115.41",
  created_on: "07/10/2024",
  revenue: "₹8.2k",
  image: "https://robohash.org/laboreetnisi.png?size=100x100&set=set1"
}, {
  id: 11,
  name: "Jilly Gladstone",
  store: "Kuphal, Bartell and Marquardt",
  ratings: 2.7,
  products: 546,
  balance: "₹625.78",
  created_on: "07/05/2024",
  revenue: "₹6k",
  image: "https://robohash.org/velnecessitatibusofficiis.png?size=100x100&set=set1"
}, {
  id: 12,
  name: "Erwin Malin",
  store: "Marquardt, Littel and Kuhn",
  ratings: 4.9,
  products: 668,
  balance: "₹499.65",
  created_on: "08/11/2024",
  revenue: "₹7.2k",
  image: "https://robohash.org/quiperspiciatismollitia.png?size=100x100&set=set1"
}, {
  id: 13,
  name: "Nancey Whelan",
  store: "Shields, Wunsch and Becker",
  ratings: 4.8,
  products: 579,
  balance: "₹498.86",
  created_on: "15/09/2024",
  revenue: "₹8.26k",
  image: "https://robohash.org/sequicumqueeos.png?size=100x100&set=set1"
}, {
  id: 14,
  name: "Riva Henighan",
  store: "Hayes-Nicolas",
  ratings: 3.7,
  products: 719,
  balance: "₹551.96",
  created_on: "23/08/2024",
  revenue: "₹5.3k",
  image: "https://robohash.org/etadfuga.png?size=100x100&set=set1"
}, {
  id: 15,
  name: "Patience Topling",
  store: "Gerlach, Mayert and Hirthe",
  ratings: 4.6,
  products: 501,
  balance: "₹1146.93",
  created_on: "27/02/2024",
  revenue: "₹17.6k",
  image: "https://robohash.org/fugiataperferendis.png?size=100x100&set=set1"
}, {
  id: 16,
  name: "Rahal Syseland",
  store: "Zieme, Boehm and Kshlerin",
  ratings: 4.9,
  products: 693,
  balance: "₹211.03",
  created_on: "17/06/2024",
  revenue: "₹5.2k",
  image: "https://robohash.org/minusquoeos.png?size=100x100&set=set1"
}, {
  id: 17,
  name: "Isabel Seamen",
  store: "Dickens-Orn",
  ratings: 3.5,
  products: 153,
  balance: "₹4067.95",
  created_on: "04/07/2024",
  revenue: "₹9.5k",
  image: "https://robohash.org/enimnequeexplicabo.png?size=100x100&set=set1"
}, {
  id: 18,
  name: "Shermy Meas",
  store: "Roob, Jerde and Lynch",
  ratings: 4.1,
  products: 805,
  balance: "₹601.07",
  created_on: "07/04/2024",
  revenue: "₹7.8k",
  image: "https://robohash.org/corporisetrecusandae.png?size=100x100&set=set1"
}, {
  id: 19,
  name: "Eartha Giotto",
  store: "Rodriguez, Hyatt and Sanford",
  ratings: 2.8,
  products: 426,
  balance: "₹690.56",
  created_on: "10/01/2024",
  revenue: "₹9.3k",
  image: "https://robohash.org/omnisessenon.png?size=100x100&set=set1"
}];
const cartItems = [{
  id: 1,
  image: product1,
  name: "Polo Navy blue T-shirt",
  size: "Large",
  color: "Light Green",
  price: 148.66,
  qty: 5,
  total: 743.3
}, {
  id: 2,
  image: product2,
  name: "Brown Hoodie for men",
  size: "Small",
  color: "Brown",
  price: 99,
  qty: 2,
  total: 198.0
}, {
  id: 3,
  image: product3,
  name: "Designer Awesome T-Shirt",
  size: "Medium",
  color: "Light pink",
  price: 49.99,
  qty: 3,
  total: 499.9
}, {
  id: 4,
  image: product5,
  name: "Half Sleeves Tshirt",
  size: "Large",
  color: "Green",
  price: 129.99,
  qty: 1,
  total: 129.99
}];
export { products, orders, customers, sellers, cartItems };