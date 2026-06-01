import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import {
  ScanLine,
  Receipt,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function OCRPage() {

  const extractedData = [
    {
      label: "Merchant",
      value: "Dominos Pizza",
    },

    {
      label: "Amount",
      value: "₹640",
    },

    {
      label: "Category",
      value: "Food",
    },

    {
      label: "Transaction Date",
      value: "18 Jul 2026",
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

                  AI Receipt Intelligence

                </div>

                <h1 className="text-[56px] leading-[60px] font-bold mt-6">

                  Smart OCR
                  <br />

                  Receipt Scanner

                </h1>

                <p className="text-[#8B9385] text-lg mt-6 leading-8 max-w-[760px]">

                  Upload receipts and automatically extract
                  transaction information using intelligent
                  OCR-powered financial parsing.

                </p>

              </div>

              {/* Right Summary */}
              <div className="bg-[#111411] border border-[#222722] rounded-[32px] p-7 min-w-[340px] relative overflow-hidden">

                {/* Glow */}
                <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[#8B9385] text-sm">
                        OCR Accuracy
                      </p>

                      <h2 className="text-[42px] leading-none font-bold mt-5">

                        98%

                      </h2>

                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                      <Sparkles size={28} />

                    </div>

                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#1A1F1A] my-7" />

                  <p className="text-[#8B9385] leading-7">

                    AI-powered receipt parsing automatically detects transaction details.

                  </p>

                </div>

              </div>

            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-6 mt-10">

              {/* Left Side */}
              <div className="col-span-12 xl:col-span-7">

                {/* Upload Area */}
                <div className="bg-[#111411] border border-dashed border-[#2E382E] rounded-[32px] p-10 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#B6FF5C]/5 blur-3xl rounded-full" />

                  <div className="relative z-10">

                    <div className="w-24 h-24 rounded-[28px] bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C] mx-auto">

                      <ScanLine size={42} />

                    </div>

                    <h2 className="text-[36px] leading-none font-bold mt-8">

                      Upload Receipt

                    </h2>

                    <p className="text-[#8B9385] text-lg mt-5 leading-8 max-w-[520px]">

                      Scan invoices, bills or payment receipts
                      to automatically extract financial transaction details.

                    </p>

                    {/* Button */}
                    <button className="bg-[#B6FF5C] text-black px-8 py-4 rounded-2xl font-semibold mt-10 hover:opacity-90 transition">

                      Choose Receipt File

                    </button>

                    <p className="text-[#8B9385] text-sm mt-6">

                      Supported formats: JPG, PNG, PDF

                    </p>

                  </div>

                </div>

              </div>

              {/* Right Side */}
              <div className="col-span-12 xl:col-span-5 flex flex-col gap-6">

                {/* Extracted Data */}
                <div className="bg-[#111411] border border-[#222722] rounded-[32px] p-7">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-[#B6FF5C]/10 flex items-center justify-center text-[#B6FF5C]">

                      <Receipt size={28} />

                    </div>

                    <div>

                      <h2 className="text-[30px] font-bold">
                        Extracted Data
                      </h2>

                      <p className="text-[#8B9385] mt-2">

                        AI-generated transaction details

                      </p>

                    </div>

                  </div>

                  {/* Data */}
                  <div className="flex flex-col gap-5 mt-8">

                    {extractedData.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="bg-[#181D18] border border-[#222722] rounded-2xl p-5"
                        >

                          <p className="text-[#8B9385] text-sm">

                            {item.label}

                          </p>

                          <h3 className="text-xl font-semibold mt-3">

                            {item.value}

                          </h3>

                        </div>
                      )
                    )}

                  </div>

                </div>

                {/* AI Status */}
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

                        OCR engine automatically identifies
                        merchant details, payment amount,
                        transaction date and spending category.

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

export default OCRPage;