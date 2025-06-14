import avatar1 from "@/assets/images/users/user-12.jpg";
import avatar2 from "@/assets/images/users/user-3.jpg";
import avatar3 from "@/assets/images/users/user-4.jpg";
import avatar4 from "@/assets/images/users/user-5.jpg";
import avatar5 from "@/assets/images/users/user-6.jpg";

const balances = [{
  id: 1,
  avatar: avatar1,
  name: "Anmol Verma",
  currency: "BTC",
  balance: 0.00816117,
  orders: 0.00097036
}, {
  id: 2,
  avatar: avatar2,
  name: "Erwin E. Brown",
  currency: "ETH",
  balance: 3.16117008,
  orders: 1.70360009
}, {
  id: 3,
  avatar: avatar3,
  name: "Margeret V. Ligon",
  currency: "EUR",
  balance: 25.08,
  orders: 12.58
}, {
  id: 4,
  avatar: avatar4,
  name: "Jose D. Delacruz",
  currency: "CNY",
  balance: 82.0,
  orders: 30.83
}, {
  id: 5,
  avatar: avatar5,
  name: "Luke J. Sain",
  currency: "BTC",
  balance: 2.00816117,
  orders: 1.00097036
}];

const revenueHistory = [{
  id: 1,
  marketplaces: "Amazon",
  date: "April 2025",
  payouts: "₹3848.68",
  status: "Upcoming"
}, {
  id: 2,
  marketplaces: "Flipkart",
  date: "April 2025", 
  payouts: "₹1247.25",
  status: "Received"
}, {
  id: 3,
  marketplaces: "Meesho",
  date: "May 2025",
  payouts: "₹815.89",
  status: "Received"
}, {
  id: 4,
  marketplaces: "Myntra",
  date: "April 2025",
  payouts: "₹1248.75",
  status: "Not Received"
}, {
  id: 5,
  marketplaces: "Amazon",
  date: "May 2025",
  payouts: "₹2978.21",
  status: "Upcoming"
}, {
  id: 6,
  marketplaces: "Flipkart",
  date: "May 2025",
  payouts: "₹1358.10",
  status: "Received"
}];

export { balances, revenueHistory };