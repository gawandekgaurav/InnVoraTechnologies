const MsmeBadge = ({ className = '' }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wide bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 whitespace-nowrap ${className}`}
  >
    MSME Certified
  </span>
)

export default MsmeBadge
