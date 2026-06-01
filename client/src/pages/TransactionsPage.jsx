import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import TransactionTable from "../components/tables/TransactionTable";
import TransactionForm from "../components/forms/TransactionForm";

import { useTransactions } from "../context/TransactionContext";

import {
  Search,
  Plus,
  X,
} from "lucide-react";

function TransactionsPage() {

  const { transactions } =
    useTransactions();

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  const [showModal, setShowModal] =
    useState(false);

  // Filter Logic
  const filteredTransactions =
    transactions.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : item.type === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (
    <div className="min-h-screen bg-[#0B0F0C] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 ml-[110px]">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6">

          <div className="max-w-[1600px] mx-auto">

            {/* Header */}
            <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">

              {/* Left */}
              <div>

                <div className="inline-flex items-center gap-2 bg-[#111411] border border-[#222722] rounded-full px-4 py-2 text-sm text-[#B6FF5C]">

                  <span className="w-2 h-2 rounded-full bg-[#B6FF5C]" />

                  Transaction Management Center

                </div>

                <h1 className="text-[56px] leading-[60px] font-bold mt-6">

                  Financial
                  <br />

                  Transactions

                </h1>

                <p className="text-[#8B9385] text-lg mt-6 leading-8 max-w-[760px]">

                  Search, manage and monitor all financial
                  transactions with centralized expense tracking.

                </p>

              </div>

              {/* Button */}
              <button
                onClick={() =>
                  setShowModal(true)
                }
                className="bg-[#B6FF5C] text-black px-7 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:opacity-90 transition h-fit"
              >

                <Plus size={20} />

                Add Transaction

              </button>

            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-10">

              {/* Search */}
              <div className="bg-[#111411] border border-[#222722] rounded-2xl px-5 h-[60px] flex items-center gap-3 w-full lg:w-[420px]">

                <Search
                  size={18}
                  className="text-[#8B9385]"
                />

                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  className="bg-transparent outline-none w-full text-sm"
                />

              </div>

              {/* Filter */}
              <select
                value={filter}
                onChange={(e) =>
                  setFilter(
                    e.target.value
                  )
                }
                className="bg-[#111411] border border-[#222722] rounded-2xl px-5 h-[60px] outline-none w-full lg:w-[220px]"
              >

                <option value="all">
                  All Transactions
                </option>

                <option value="income">
                  Income
                </option>

                <option value="expense">
                  Expense
                </option>

              </select>

            </div>

            {/* Table */}
            <div className="mt-8">

              <TransactionTable
                transactions={
                  filteredTransactions
                }
              />

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">

          {/* Modal Card */}
          <div className="bg-[#0F130F] border border-[#222722] rounded-[32px] w-full max-w-[620px] relative overflow-hidden">

            {/* Glow */}
            <div className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

            {/* Header */}
            <div className="flex items-center justify-between p-7 border-b border-[#1A1F1A] relative z-10">

              <div>

                <h2 className="text-[32px] leading-none font-bold">

                  Add Transaction

                </h2>

                <p className="text-[#8B9385] text-sm mt-3">

                  Create a new financial record

                </p>

              </div>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="w-12 h-12 rounded-2xl bg-[#181D18] border border-[#222722] flex items-center justify-center hover:border-[#B6FF5C] transition"
              >

                <X size={20} />

              </button>

            </div>

            {/* Form */}
            <div className="p-7 relative z-10">

              <TransactionForm />

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default TransactionsPage;