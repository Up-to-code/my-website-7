export default function ProjectLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="w-full h-[60vh] bg-gray-200" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="h-4 w-24 bg-gray-200 rounded mb-8" />

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="space-y-4 mb-8">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 w-20 bg-gray-200 rounded-full" />
              ))}
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-32 bg-gray-200 rounded-lg" />
              <div className="h-10 w-32 bg-gray-200 rounded-lg" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="h-6 w-40 bg-gray-200 rounded mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-video bg-gray-200 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

