function StatCard({
  title,
  amount,
  change,
}) {
  return (
    <div className="bg-[#111411] border border-[#222722] rounded-[28px] p-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-40px] right-[-40px] w-[140px] h-[140px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

      {/* Title */}
      <p className="text-[#8B9385] text-sm">
        {title}
      </p>

      {/* Amount */}
      <h2 className="text-[38px] leading-none font-bold mt-5">
        {amount}
      </h2>

      {/* Change */}
      <div className="mt-6 inline-flex items-center bg-[#B6FF5C]/10 text-[#B6FF5C] px-4 py-2 rounded-xl text-sm">

        {change}

      </div>

    </div>
  );
}

export default StatCard;