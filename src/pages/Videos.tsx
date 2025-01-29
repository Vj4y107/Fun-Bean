import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Learning Colors with Fun Bean",
    description: "Join us on a colorful adventure to learn about different colors through fun activities!",
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    duration: "5:30",
    videoSrc: "/videos/sample.mp4",
  },
  {
    id: 2,
    title: "Counting Numbers 1-10",
    description: "Learn to count from 1 to 10 with fun animations and catchy songs!",
    thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80",
    duration: "4:15",
    videoSrc: "/videos/sample.mp4",
  },
  {
    id: 3,
    title: "Animal Friends Adventure",
    description: "Meet different animals and learn about their sounds and habitats!",
    thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    duration: "6:45",
    videoSrc: "/assets/fun-bean-video.mp4",
  },
  {
    id: 4,
    title: "Shapes and Patterns",
    description: "Discover the world of shapes and patterns in this fun-filled video!",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    duration: "5:00",
    videoSrc: "/assets/fun-bean-video.mp4",
  },
  {
    id: 5,
    title: "Sing Along ABC's",
    description: "Learn the alphabet with our catchy ABC song and colorful animations!",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    duration: "4:30",
    videoSrc: "/assets/fun-bean-video.mp4",
  },
  {
    id: 6,
    title: "Fun with Science",
    description: "Simple and fun science experiments for young curious minds!",
    thumbnail: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80",
    duration: "7:15",
    videoSrc: "/assets/fun-bean-video.mp4",
  },
];

const themes = {
  movies: {
    primary: 'from-orange-400 to-brown-500',
    secondary: 'orange-600',
  },
  cartoons: {
    primary: 'from-orange-400 to-brown-500',
    secondary: 'orange-600',
  },
  sports: {
    primary: 'from-green-400 to-blue-500',
    secondary: 'green-600',
  },
  music: {
    primary: 'from-purple-400 to-pink-500',
    secondary: 'purple-600',
  },
  games: {
    primary: 'from-blue-400 to-purple-500',
    secondary: 'blue-600',
  },
};

export default function Videos() {
  const navigate = useNavigate();
  const location = useLocation();
  const interest = (location.state?.interest || 'games') as keyof typeof themes;
  const theme = themes[interest];

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/home', { state: { interest } })}
          className={`mb-8 flex items-center text-${theme.secondary} hover:text-orange-700 text-lg font-medium transition-colors`}
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Home
        </button>

        <div className={`fun-card bg-gradient-to-r ${theme.primary} text-white mb-8 p-8`}>
          <div className="flex items-center space-x-4">
            <PlayCircle className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Fun Bean Videos</h1>
              <p className="text-xl opacity-90">Watch and learn with fun!</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="fun-card group cursor-pointer hover:scale-102"
              onClick={() => handleVideoClick(video.videoSrc)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl 
                            flex items-center justify-center opacity-0 group-hover:opacity-100 
                            transition-opacity">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-lg text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="mt-4">
                <h3 className={`text-xl font-bold text-${theme.secondary} mb-2`}>
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <video controls className="w-full h-auto">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setSelectedVideo(null)}
                className="mt-4 text-red-500 hover:text-red-700"
              >
                Close Video
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
