import avatar1 from "@/assets/images/users/user-1.jpg";
import avatar2 from "@/assets/images/users/user-2.jpg";
import avatar3 from "@/assets/images/users/user-3.jpg";
import avatar5 from "@/assets/images/users/user-5.jpg";
import avatar6 from "@/assets/images/users/user-6.jpg";
import avatar7 from "@/assets/images/users/user-7.jpg";
import avatar8 from "@/assets/images/users/user-8.jpg";
import avatar9 from "@/assets/images/users/user-9.jpg";
import avatar10 from "@/assets/images/users/user-10.jpg";
const tasks = [{
  id: 1,
  title: "Check Daily Orders API",
  description: "Ensure the orders API is returning correct totals.",
  status: "Upcoming",
  priority: "High",
  userAvatar: [avatar1, avatar3],
  dueDate: "Jun 8, 2025"
}, {
  id: 2,
  title: "Update Out-of-Stock Products",
  description: "Manually verify and disable out-of-stock items from dashboard catalog.",
  status: "Inprogress",
  priority: "Low",
  userAvatar: [avatar2],
  dueDate: "Jun 7, 2025"
}, {
  id: 3,
  title: "Fix Sales Chart Tooltip Bug",
  description: "Resolve the issue where tooltips on sales bar chart show wrong data points.",
  status: "Completed",
  priority: "Low",
  userAvatar: [avatar5],
  dueDate: "Jun 7, 2025"
}, {
  id: 4,
  title: "Daily Product Sync with Backend",
  description: "Sync newly added or updated products from inventory DB to dashboard view.",
  status: "Completed",
  priority: "High",
  userAvatar: [avatar6, avatar7],
  dueDate: "Jun 8, 2025"
}, {
  id: 5,
  title: "Verify Discount Logic",
  description: "Check if scheduled promotional discounts apply properly on all products.",
  status: "Upcoming",
  priority: "Low",
  userAvatar: [avatar8],
  dueDate: "Jun 6, 2025"
}, {
  id: 6,
  title: "Check Abandoned Cart Analytics",
  description: "Review abandoned cart metrics and export data for marketing follow-up.",
  status: "Upcoming",
  priority: "Medium",
  userAvatar: [avatar9, avatar10],
  dueDate: "Jun 8, 2025"
}, {
  id: 7,
  title: "Refactor Customer Support Tab",
  description: "Improve UI layout of the support tickets tab for better prioritization.",
  status: "Completed",
  priority: "Medium",
  userAvatar: [avatar1, avatar3],
  dueDate: "Jun 6, 2025"
}, {
  id: 8,
  title: "Push Daily Sales Report to Admin",
  description: "Automatically generate and email daily sales report at 8 PM.",
  status: "Inprogress",
  priority: "High",
  userAvatar: [avatar2],
  dueDate: "Jun 7, 2025"
}, {
  id: 9,
  title: "Test Checkout Flow",
  description: "Perform a dry run of the checkout process with dummy payment data.",
  status: "Upcoming",
  priority: "Low",
  userAvatar: [avatar2],
  dueDate: "Jun 8, 2025"
}, {
  id: 10,
  title: "Review Pending Vendor Requests",
  description: "Approve or reject new vendor applications from the backend panel.",
  status: "Inprogress",
  priority: "High",
  userAvatar: [avatar8],
  dueDate: "Jun 9, 2025"
}, {
  id: 11,
  title: "Optimize Product Images",
  description: "Convert and compress product images for faster dashboard loading.",
  status: "Completed",
  priority: "Low",
  userAvatar: [avatar2],
  dueDate: "Jun 6, 2025"
}];
export { tasks };