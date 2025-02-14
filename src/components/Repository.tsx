import type React from "react"
import { useState } from "react"
import { Search, Play } from "lucide-react"

interface Video {
  id: string
  title: string
  category: string
  jobType: string
  url: string
  thumbnail: string
  duration: string
  views: string
  uploadDate: string
  influencer: string
}

const jobCategories = [
  "All",
  "Delivery Jobs",
  "Manufacturing Jobs",
  "Logistics Jobs",
  "Warehouse Jobs",
  "Construction Jobs",
]

const sampleVideos: Video[] = [
  {
    id: "1",
    title: "How to Become a Top-Rated Delivery Driver",
    category: "Delivery Jobs",
    jobType: "Full-time",
    url: "https://example.com/video1",
    thumbnail: "https://picsum.photos/seed/delivery1/300/200",
    duration: "12:45",
    views: "850K",
    uploadDate: "2023-05-15",
    influencer: "John Doe",
  },
  {
    id: "2",
    title: "Essential Skills for Warehouse Workers in 2023",
    category: "Warehouse Jobs",
    jobType: "Part-time",
    url: "https://example.com/video2",
    thumbnail: "https://picsum.photos/seed/warehouse1/300/200",
    duration: "15:30",
    views: "620K",
    uploadDate: "2023-05-10",
    influencer: "Jane Smith",
  },
  {
    id: "3",
    title: "A Day in the Life of a Swiggy Delivery Partner",
    category: "Food Delivery",
    jobType: "Full-time",
    url: "https://example.com/video3",
    thumbnail: "https://picsum.photos/seed/swiggy1/300/200",
    duration: "18:22",
    views: "1.2M",
    uploadDate: "2023-05-05",
    influencer: "Alice Johnson",
  },
  {
    id: "4",
    title: "Top 5 Benefits of Working as a Delhivery Driver",
    category: "Logistics Jobs",
    jobType: "Full-time",
    url: "https://example.com/video4",
    thumbnail: "https://picsum.photos/seed/delhivery1/300/200",
    duration: "10:15",
    views: "750K",
    uploadDate: "2023-04-30",
    influencer: "Bob Brown",
  },
  {
    id: "5",
    title: "How to Excel in Your Factory Worker Interview",
    category: "Manufacturing Jobs",
    jobType: "Part-time",
    url: "https://example.com/video5",
    thumbnail: "https://picsum.photos/seed/factory1/300/200",
    duration: "14:50",
    views: "580K",
    uploadDate: "2023-04-25",
    influencer: "Charlie Davis",
  },
  {
    id: "6",
    title: "Safety Tips for Construction Workers: What Every Newcomer Should Know",
    category: "Construction Jobs",
    jobType: "Full-time",
    url: "https://example.com/video6",
    thumbnail: "https://picsum.photos/seed/construction1/300/200",
    duration: "20:05",
    views: "920K",
    uploadDate: "2023-04-20",
    influencer: "Diana Evans",
  },
]

const Repository = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredVideos, setFilteredVideos] = useState(sampleVideos)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    filterVideos(term, selectedCategory)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterVideos(searchTerm, category)
  }

  const filterVideos = (term: string, category: string) => {
    const filtered = sampleVideos.filter(
      (video) =>
        (video.title.toLowerCase().includes(term) ||
          video.category.toLowerCase().includes(term) ||
          video.jobType.toLowerCase().includes(term)) &&
        (category === "All" || video.category === category),
    )
    setFilteredVideos(filtered)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
        Blue-Collar Job Recruitment Videos
      </h2>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-xl blur opacity-25"></div>
        <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800">
          <div className="flex items-center mb-6">
            <Search className="absolute left-9 top-9 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 bg-black/50 border border-slate-800 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-slate-50"
            />
          </div>
          <div className="flex justify-center mb-6">
            {jobCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 mx-2 rounded-lg ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-200 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-slate-400 mb-2">Category: {video.category}</p>
                  <p className="text-sm text-slate-400 mb-2">Job Type: {video.jobType}</p>
                  <p className="text-sm text-slate-400 mb-2">Influencer: {video.influencer}</p>
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                    <span>{video.views} views</span>
                    <span>{video.uploadDate}</span>
                  </div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-md text-white font-medium hover:from-cyan-500 hover:to-violet-600 transition-colors inline-flex items-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repository

