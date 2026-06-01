import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import {
  Upload,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";

function ImportPage() {

  const importedTransactions = [
    {
      title: "Amazon Purchase",
      amount: "₹4,999",
      category: "Shopping",
    },

    {
      title: "Uber Ride",
      amount: "₹820",
      category: "Transport",
    },

    {
      title: "Dominos",
      amount: "₹640",
      category: "Food",
    },
  ];

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

                  Bank Statement Import

                </div>

                <h1 className="text-[56px] leading-[60px] font-bold mt-6">

                  Import Financial
                  <br />

                  Transactions

                </h1>

                <p className="text-[#8B9385] text-lg mt-6 leading-8 max-w-[760px]">

                  Upload CSV bank statements and automatically
                  organize financial records into categorized
                  transactions.

                </p>

              </div>

              {/* Right Summary */}
              <div className="bg-[#111411] border border-[#222722] rounded-[32px] p-7 min-w-[340px] relative overflow-hidden">

                <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[#8B9385] text-sm">
                        Imported Records
                      </p>

                      <h2 className="text-[42px] leading-none font-bold mt-5">

                        248

                      </h2>

                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                      <FileSpreadsheet size={28} />

                    </div>

                  </div>

                  <div className="h-px bg-[#1A1F1A] my-7" />

                  <p className="text-[#8B9385] leading-7">

                    CSV parsing system automatically categorizes imported financial activities.

                  </p>

                </div>

              </div>

            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-6 mt-10">

              {/* Left */}
              <div className="col-span-12 xl:col-span-7">

                {/* Upload Area */}
                <div className="bg-[#111411] border border-dashed border-[#2E382E] rounded-[32px] p-10 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                  <div className="relative z-10">

                    <div className="w-24 h-24 rounded-[28px] bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C] mx-auto">

                      <Upload size={40} />

                    </div>

                    <h2 className="text-[36px] leading-none font-bold mt-8">

                      Upload CSV File

                    </h2>

                    <p className="text-[#8B9385] text-lg mt-5 leading-8 max-w-[520px]">

                      Drag & drop your bank statement CSV file
                      or browse local files to import transaction history.

                    </p>

                    {/* Button */}
                    <button className="bg-[#B6FF5C] text-black px-8 py-4 rounded-2xl font-semibold mt-10 hover:opacity-90 transition">

                      Choose CSV File

                    </button>

                    <p className="text-[#8B9385] text-sm mt-6">

                      Supported formats: .csv

                    </p>

                  </div>

                </div>

              </div>

              {/* Right */}
              <div className="col-span-12 xl:col-span-5 flex flex-col gap-6">

                {/* Parsing Preview */}
                <div className="bg-[#111411] border border-[#222722] rounded-[32px] p-7">

                  <h2 className="text-[30px] font-bold">
                    Parsing Preview
                  </h2>

                  <p className="text-[#8B9385] mt-3 leading-7">

                    Automatically detected financial records from uploaded CSV.

                  </p>

                  {/* List */}
                  <div className="flex flex-col gap-5 mt-8">

                    {importedTransactions.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="bg-[#181D18] border border-[#222722] rounded-2xl p-5"
                        >

                          <div className="flex items-start justify-between">

                            <div>

                              <h3 className="font-semibold text-lg">

                                {item.title}

                              </h3>

                              <p className="text-[#8B9385] text-sm mt-2">

                                {item.category}

                              </p>

                            </div>

                            <p className="text-[#B6FF5C] font-semibold">

                              {item.amount}

                            </p>

                          </div>

                        </div>
                      )
                    )}

                  </div>

                </div>

                {/* Import Status */}
                <div className="bg-[#111411] border border-[#222722] rounded-[32px] p-7">

                  <div className="flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C] flex-shrink-0">

                      <CheckCircle2 size={28} />

                    </div>

                    <div>

                      <h2 className="text-[28px] leading-none font-bold">

                        Smart Categorization

                      </h2>

                      <p className="text-[#8B9385] mt-5 leading-8">

                        Transactions are automatically organized into categories like shopping, food, transport and entertainment.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ImportPage;