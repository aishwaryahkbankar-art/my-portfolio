interface SectionHeadingProps {
  number?: string
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  align = 'left'
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        {number && (
          <span className="font-mono text-xs font-semibold tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200/60">
            {number}
          </span>
        )}
        {tag && (
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
            {tag}
          </span>
        )}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
