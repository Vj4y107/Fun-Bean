import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Film, Music, Gamepad, PlayCircle, Trophy } from 'lucide-react';

const interests = [
  {
    id: 'movies',
    name: 'Movies',
    icon: Film,
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    description: 'Watch amazing films and stories!',
    gradient: 'from-red-600 to-yellow-500'
  },
  {
    id: 'cartoons',
    name: 'Cartoons',
    icon: PlayCircle,
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&w=800&q=80',
    description: 'Fun animated adventures!',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    description: 'Get active and play sports!',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    id: 'music',
    icon: Music,
    name: 'Music',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
    description: 'Discover amazing sounds!',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'games',
    name: 'Games',
    icon: Gamepad,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    description: 'Play exciting games!',
    gradient: 'from-blue-500 to-purple-500'
  }
];

export default function InterestSelection() {
  const navigate = useNavigate();
  const [selectedInterest, setSelectedInterest] = useState('');

  const handleNext = () => {
    if (selectedInterest) {
      navigate('/home', { state: { interest: selectedInterest } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-rose-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/deficiency')}
          className="mb-8 flex items-center text-orange-600 hover:text-orange-700
                   text-lg font-medium transition-colors"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back
        </button>

        <div className="text-center mb-12 space-y-4">
          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 bg-gradient-to-r from-orange-200 via-rose-200 to-purple-200 blur-xl opacity-50"></div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 
                       bg-clip-text text-transparent relative">
              What do you like?
            </h1>
          </div>
          <p className="text-2xl text-gray-600">Pick your favorite and let's have fun!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest) => (
            <div
              key={interest.id}
              onClick={() => setSelectedInterest(interest.id)}
              className={`interest-card group ${
                selectedInterest === interest.id
                  ? 'ring-4 ring-orange-400 ring-offset-4'
                  : ''
              }`}
            >
              <div className="relative h-80">
                <img
                  src={interest.image}
                  alt={interest.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className={`interest-card-overlay rounded-3xl bg-gradient-to-t ${interest.gradient}`}>
                  <interest.icon className="w-12 h-12 text-white mb-4 
                                        transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {interest.name}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {interest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleNext}
            disabled={!selectedInterest}
            className="fun-button text-xl py-4 px-12 bg-gradient-to-r from-orange-400 to-orange-600
                     shadow-lg shadow-orange-200 hover:shadow-orange-300"
          >
            Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
}