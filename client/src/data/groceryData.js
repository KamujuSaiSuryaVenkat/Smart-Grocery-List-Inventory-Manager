export const navLinks = [
  { label: "Home", path: "/home", icon: "Home" },
  { label: "Grocery List", path: "/grocery-list", icon: "ShoppingCart" },
  { label: "Pantry", path: "/pantry", icon: "Package" },
  { label: "Alerts", path: "/alerts", icon: "Bell" },
  { label: "Insights", path: "/insights", icon: "BarChart3" },
  { label: "Recipes", path: "/recipes", icon: "ChefHat" },
  { label: "Household", path: "/household", icon: "Users" },
  { label: "Settings", path: "/settings", icon: "Settings2" },
];

export const heroMetrics = [
  { label: "Inventory health", value: "92%", note: "+4% from last week" },
  { label: "Low stock items", value: "7", note: "3 require today" },
  { label: "This week saved", value: "$48", note: "From smart substitutions" },
];

export const quickActions = [
  { label: "Add groceries", hint: "Fast list builder" },
  { label: "Scan pantry", hint: "Auto-detect items" },
  { label: "Plan recipes", hint: "Matches inventory" },
  { label: "Share household", hint: "Sync with family" },
];

export const shoppingRecommendations = [
  {
    title: "Greek yogurt",
    reason: "Pairs with berries already in pantry",
    urgency: "Need soon",
  },
  {
    title: "Baby spinach",
    reason: "Boosts two planned recipes this week",
    urgency: "Top match",
  },
  {
    title: "Almond milk",
    reason: "Running low before Friday breakfast plan",
    urgency: "Reorder",
  },
];

export const consumptionTrend = [
  { name: "Mon", pantry: 42, shopping: 18 },
  { name: "Tue", pantry: 36, shopping: 24 },
  { name: "Wed", pantry: 52, shopping: 31 },
  { name: "Thu", pantry: 48, shopping: 29 },
  { name: "Fri", pantry: 58, shopping: 34 },
  { name: "Sat", pantry: 67, shopping: 41 },
  { name: "Sun", pantry: 61, shopping: 28 },
];

export const inventoryMix = [
  { name: "Fresh", value: 42, color: "#8be88d" },
  { name: "Dry goods", value: 26, color: "#6ca8ff" },
  { name: "Frozen", value: 18, color: "#7dd3fc" },
  { name: "Household", value: 14, color: "#f59e0b" },
];

export const spendingTrend = [
  { name: "Week 1", essentials: 86, treats: 32 },
  { name: "Week 2", essentials: 74, treats: 39 },
  { name: "Week 3", essentials: 91, treats: 28 },
  { name: "Week 4", essentials: 83, treats: 34 },
];

export const groceryGroups = [
  {
    category: "Produce",
    progress: 68,
    items: [
      { name: "Bananas", count: "6", status: "Need today" },
      { name: "Blueberries", count: "1 box", status: "Healthy" },
      { name: "Spinach", count: "2 bags", status: "Use soon" },
    ],
  },
  {
    category: "Fridge",
    progress: 82,
    items: [
      { name: "Greek yogurt", count: "3 cups", status: "Low stock" },
      { name: "Eggs", count: "10", status: "Healthy" },
      { name: "Milk", count: "1 bottle", status: "Expiring soon" },
    ],
  },
  {
    category: "Dry pantry",
    progress: 91,
    items: [
      { name: "Rice", count: "4 kg", status: "Healthy" },
      { name: "Olive oil", count: "1 bottle", status: "Healthy" },
      { name: "Pasta", count: "2 packs", status: "Good" },
    ],
  },
];

export const pantryBoards = [
  {
    label: "Fresh & chilled",
    items: ["Berries", "Yogurt", "Milk", "Tofu"],
    tone: "emerald",
  },
  {
    label: "Staples",
    items: ["Rice", "Beans", "Oats", "Pasta"],
    tone: "blue",
  },
  {
    label: "Frozen",
    items: ["Peas", "Dumplings", "Fish", "Bread"],
    tone: "amber",
  },
];

export const alertTimeline = [
  {
    title: "Milk expires tonight",
    detail: "Move to breakfast plan or mark as used.",
  },
  {
    title: "Spinach low stock",
    detail: "Add one bundle to tomorrow's shopping list.",
  },
  {
    title: "Freezer organized",
    detail: "No urgent action required. Inventory is stable.",
  },
];

export const recipeCards = [
  {
    title: "Harissa chickpea bowls",
    match: "94% pantry match",
    ingredients: ["Chickpeas", "Spinach", "Yogurt", "Rice"],
  },
  {
    title: "Berry breakfast parfait",
    match: "88% pantry match",
    ingredients: ["Yogurt", "Berries", "Oats", "Honey"],
  },
  {
    title: "Sheet-pan lemon salmon",
    match: "81% pantry match",
    ingredients: ["Salmon", "Potatoes", "Herbs", "Oil"],
  },
];

export const householdMembers = [
  { name: "Aanya", role: "Meal planner", color: "#8be88d" },
  { name: "Rohit", role: "Weekly shopper", color: "#6ca8ff" },
  { name: "Maya", role: "Snack curator", color: "#f59e0b" },
  { name: "Dev", role: "Budget watcher", color: "#fb7185" },
];

export const settingsPanels = [
  {
    title: "Notifications",
    detail: "Expiry alerts, restock prompts, and shared list updates.",
  },
  {
    title: "Household sync",
    detail: "Keep lists aligned across every device in the home.",
  },
  {
    title: "Smart suggestions",
    detail: "Tune recipe matching, buying cadence, and health scoring.",
  },
];
