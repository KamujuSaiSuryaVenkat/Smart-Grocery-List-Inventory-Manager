export function calculateSummary(transactions) {

  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const totalExpense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const totalBalance =
    totalIncome - totalExpense;

  return {
    totalIncome,
    totalExpense,
    totalBalance,
  };
}

export function getCategoryData(transactions) {

  const categories = [
    "Food",
    "Shopping",
    "Transport",
    "Entertainment",
  ];

  return categories.map((category) => {

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
}

export function getMonthlyData(transactions) {

  return [
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

        const itemMonth =
          new Date(item.date).getMonth();

        return (
          itemMonth === index &&
          item.type === "expense"
        );
      })
      .reduce((acc, item) => acc + item.amount, 0);

    return {
      month,
      amount: total,
    };
  });
}