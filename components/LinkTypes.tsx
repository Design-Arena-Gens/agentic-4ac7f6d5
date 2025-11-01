export default function LinkTypes() {
  const linkTypes = [
    {
      title: 'Guest Posts',
      description: 'Publish high-quality content on authoritative websites in your niche',
      features: ['Custom content', 'Editorial review', 'Dofollow links', 'Permanent placement'],
    },
    {
      title: 'Niche Edits',
      description: 'Get your links added to existing content on relevant pages',
      features: ['Quick turnaround', 'Contextual placement', 'Natural integration', 'Cost-effective'],
    },
    {
      title: 'Link Insertions',
      description: 'Add links to high-traffic pages with established authority',
      features: ['Aged content', 'Real traffic', 'Topical relevance', 'Fast delivery'],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Link Building Strategy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Multiple link types to match your SEO goals and budget
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {linkTypes.map((type, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <ul className="space-y-3">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
