export default function Stats() {
  const stats = [
    { label: 'Active Projects', value: '40,000+' },
    { label: 'Keywords Tracked', value: '4,536,862' },
    { label: 'Domains Available', value: '125,000+' },
    { label: 'Countries Covered', value: '150+' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
