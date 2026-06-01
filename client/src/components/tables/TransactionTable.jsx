import {
  Trash2,
} from "lucide-react";

import {
  useTransactions,
} from "../../context/TransactionContext";

function TransactionTable({
  transactions,
}) {

  const { deleteTransaction } =
    useTransactions();

  return (
    <div className="bg-[#111411] border border-[#222722] rounded-[28px] p-7 overflow-hidden">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-[30px] leading-none font-semibold">
            Latest Activity
          </h2>

          <p className="text-[#8B9385] text-sm mt-4">
            Quick overview of your recent financial activity
          </p>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-8">

        <table className="w-full min-w-[900px]">

          {/* Head */}
          <thead>

            <tr className="border-b border-[#1A1F1A] text-left">

              <th className="pb-5 text-[#8B9385] font-medium">
                Transaction
              </th>

              <th className="pb-5 text-[#8B9385] font-medium">
                Category
              </th>

              <th className="pb-5 text-[#8B9385] font-medium">
                Date
              </th>

              <th className="pb-5 text-[#8B9385] font-medium">
                Status
              </th>

              <th className="pb-5 text-[#8B9385] font-medium text-right">
                Amount
              </th>

              <th className="pb-5 text-[#8B9385] font-medium text-right">
                Action
              </th>

            </tr>

          </thead>

          {/* Body */}
          <tbody>

            {transactions.map(
              (item) => (

                <tr
                  key={item._id}
                  className="border-b border-[#1A1F1A] hover:bg-[#151915] transition"
                >

                  {/* Title */}
                  <td className="py-6">

                    <div>

                      <h3 className="font-semibold text-lg">

                        {item.title}

                      </h3>

                      <p className="text-[#8B9385] text-sm mt-2">

                        {item.type}

                      </p>

                    </div>

                  </td>

                  {/* Category */}
                  <td className="py-6">

                    <div className="inline-flex items-center bg-[#181D18] border border-[#222722] px-4 py-2 rounded-xl text-sm">

                      {item.category}

                    </div>

                  </td>

                  {/* Date */}
                  <td className="py-6 text-[#8B9385]">

                    {new Date(
                      item.date
                    ).toLocaleDateString()}

                  </td>

                  {/* Status */}
                  <td className="py-6">

                    <div className="inline-flex items-center bg-[#B6FF5C]/10 text-[#B6FF5C] px-4 py-2 rounded-xl text-sm">

                      {item.status}

                    </div>

                  </td>

                  {/* Amount */}
                  <td className="py-6 text-right">

                    <h3
                      className={`text-xl font-bold ${
                        item.type ===
                        "income"
                          ? "text-[#B6FF5C]"
                          : "text-white"
                      }`}
                    >

                      {item.type ===
                      "income"
                        ? "+"
                        : "-"}

                      ₹
                      {item.amount.toLocaleString()}

                    </h3>

                  </td>

                  {/* Delete */}
                  <td className="py-6 text-right">

                    <button
                      onClick={() =>
                        deleteTransaction(
                          item._id
                        )
                      }
                      className="w-11 h-11 rounded-2xl bg-[#181D18] border border-[#222722] flex items-center justify-center ml-auto hover:border-red-500 hover:text-red-400 transition"
                    >

                      <Trash2 size={18} />

                    </button>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

      {/* Empty State */}
      {transactions.length === 0 && (

        <div className="flex flex-col items-center justify-center py-20">

          <h2 className="text-2xl font-semibold">
            No Transactions Found
          </h2>

          <p className="text-[#8B9385] mt-4">

            Add a transaction to begin tracking financial activity.

          </p>

        </div>

      )}

    </div>
  );
}

export default TransactionTable;