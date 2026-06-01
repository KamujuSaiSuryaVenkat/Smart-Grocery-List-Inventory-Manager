function BankCard({
  totalBalance,
}) {

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#B6FF5C] p-7 min-h-[240px] flex flex-col justify-between">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-white/10 blur-3xl rounded-full" />

      {/* Top */}
      <div className="flex items-start justify-between relative z-10">

        {/* Chip */}
        <div className="w-16 h-12 rounded-2xl bg-black/10 backdrop-blur-md" />

        {/* Brand */}
        <div className="text-right">

          <p className="text-black/70 text-sm">
            Pantry Pro Card
          </p>

          <h3 className="text-black text-lg font-semibold mt-1">

            Premium

          </h3>

        </div>

      </div>

      {/* Card Number */}
      <div className="relative z-10">

        <h2 className="text-[34px] tracking-[4px] font-bold text-black leading-none">

          1234 5678 9012 3456

        </h2>

      </div>

      {/* Bottom */}
      <div className="flex items-end justify-between relative z-10">

        {/* Left */}
        <div>

          <p className="text-black/60 text-sm">
            Card Holder
          </p>

          <h3 className="text-black font-semibold text-xl mt-2">

            SHRAVANI SAHARE

          </h3>

          <div className="mt-5">

            <p className="text-black/60 text-sm">
              Available Balance
            </p>

            <h2 className="text-[36px] leading-none font-bold text-black mt-2">

              ₹{totalBalance.toLocaleString()}

            </h2>

          </div>

        </div>

        {/* Right */}
        <div className="text-right">

          <p className="text-black/60 text-sm">
            Expiry
          </p>

          <h3 className="text-black font-bold text-xl mt-2">

            09/28

          </h3>

        </div>

      </div>

    </div>
  );
}

export default BankCard;