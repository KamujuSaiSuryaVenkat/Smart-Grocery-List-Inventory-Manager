import { transactions } from "../data/dummyData";

export const totalIncome = transactions
  .filter((item) => item.type === "income")
  .reduce((acc, item) => acc + item.amount, 0);

export const totalExpense = transactions
  .filter((item) => item.type === "expense")
  .reduce((acc, item) => acc + item.amount, 0);

export const totalBalance = totalIncome - totalExpense;

export const expenseCategories = [
  "Food",
  "Shopping",
  "Transport",
  "Entertainment",
];

export const categoryData = expenseCategories.map((category) => {

  const total = transactions
    .filter(
      (item) =>
        item.category === category &&
        item.type === "expense"
    )
    .reduce((acc, item) => acc + item.amount, 0);

  return {
    name: category,
    value: total,
  };
});

export const monthlyData = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
].map((month, index) => {

  const total = transactions
    .filter((item) => {

      const itemMonth = new Date(item.date).getMonth();

      return (
        itemMonth === index &&
        item.type === "expense"
      );
    })
    .reduce((acc, item) => acc + item.amount, 0);

  return {
    month,
    income: total,
  };
});