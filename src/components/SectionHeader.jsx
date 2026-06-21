export default function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-14 sm:mb-20">
      {tag && (
        <p className={`text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 sm:mb-5 ${
          light ? 'text-gold-400/80' : 'text-safari-600'
        }`}>
          {tag}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] px-2 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4 ${
          light ? 'text-white/60' : 'text-gray-500'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 sm:mt-8 w-16 h-px mx-auto ${light ? 'bg-gold-400/30' : 'bg-safari-300'}`} />
    </div>
  )
}
