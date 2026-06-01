import { useState } from "react";

import {
  useTransactions,
} from "../../context/TransactionContext";

function TransactionForm() {

  const { addTransaction } =
    useTransactions();

  const [formData, setFormData] =
    useState({
      title: "",
      amount: "",
      category: "Food",
      type: "expense",
      status: "Completed",
      date: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.date
    ) {
      return;
    }

    await addTransaction({
      ...formData,
      amount: Number(
        formData.amount
      ),
    });

    // Reset
    setFormData({
      title: "",
      amount: "",
      category: "Food",
      type: "expense",
      status: "Completed",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >

      {/* Title */}
      <div>

        <label className="text-sm text-[#8B9385]">
          Transaction Title
        </label>

        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mt-3 bg-[#181D18] border border-[#222722] rounded-2xl px-5 h-[58px] outline-none focus:border-[#B6FF5C] transition"
        />

      </div>

      {/* Amount */}
      <div>

        <label className="text-sm text-[#8B9385]">
          Amount
        </label>

        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full mt-3 bg-[#181D18] border border-[#222722] rounded-2xl px-5 h-[58px] outline-none focus:border-[#B6FF5C] transition"
        />

      </div>

      {/* Category + Type */}
      <div className="grid grid-cols-2 gap-5">

        {/* Category */}
        <div>

          <label className="text-sm text-[#8B9385]">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-3 bg-[#181D18] border border-[#222722] rounded-2xl px-5 h-[58px] outline-none focus:border-[#B6FF5C] transition"
          >

            <option value="Food">
              Food
            </option>

            <option value="Shopping">
              Shopping
            </option>

            <option value="Transport">
              Transport
            </option>

            <option value="Entertainment">
              Entertainment
            </option>

            <option value="Income">
              Income
            </option>

          </select>

        </div>

        {/* Type */}
        <div>

          <label className="text-sm text-[#8B9385]">
            Type
          </label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full mt-3 bg-[#181D18] border border-[#222722] rounded-2xl px-5 h-[58px] outline-none focus:border-[#B6FF5C] transition"
          >

            <option value="expense">
              Expense
            </option>

            <option value="income">
              Income
            </option>

          </select>

        </div>

      </div>

      {/* Date */}
      <div>

        <label className="text-sm text-[#8B9385]">
          Transaction Date
        </label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full mt-3 bg-[#181D18] border border-[#222722] rounded-2xl px-5 h-[58px] outline-none focus:border-[#B6FF5C] transition text-white"
        />

      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full h-[60px] rounded-2xl bg-[#B6FF5C] text-black font-semibold text-lg hover:opacity-90 transition mt-2"
      >

        Add Transaction

      </button>

    </form>
  );
}

export default TransactionForm;