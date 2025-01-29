import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, PlayCircle, Gamepad, Music, Trophy } from 'lucide-react';

const themes = {
  movies: {
    primary: 'from-orange-400 to-brown-500',
    secondary: 'orange-600',
    icon: PlayCircle,
  },
  cartoons: {
    primary: 'from-orange-400 to-brown-500',
    secondary: 'orange-600',
    icon: PlayCircle,
  },
  sports: {
    primary: 'from-green-400 to-blue-500',
    secondary: 'green-600',
    icon: Trophy,
  },
  music: {
    primary: 'from-purple-400 to-pink-500',
    secondary: 'purple-600',
    icon: Music,
  },
  games: {
    primary: 'from-blue-400 to-purple-500',
    secondary: 'blue-600',
    icon: Gamepad,
  },
};

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const interest = location.state?.interest || 'games';
  const theme = themes[interest as keyof typeof themes];

  const sections = [
    {
      title: 'Pre-K & K Playground',
      description: 'Fun learning activities for little ones!',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
      action: () => console.log('Pre-K & K Playground clicked'),
    },
    {
      title: 'Explore',
      description: 'Discover amazing new things!',
      image: 'https://images.unsplash.com/photo-1488998527040-85054a85150e?auto=format&fit=crop&w=800&q=80',
      action: () => navigate('/explore', { state: { interest } }),
    },
    {
      title: 'Activities',
      description: 'Fun games and challenges!',
      image: 'https://images.unsplash.com/photo-1509924603848-aca5e5f276d7?auto=format&fit=crop&w=800&q=80',
      action: () => console.log('Activities clicked'),
    },
    {
      title: 'Watch Videos',
      description: 'Exciting videos just for you!',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
      action: () => navigate('/videos', { state: { interest } }),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={() => navigate('/interests')}
        className="mb-6 flex items-center text-orange-600 hover:text-orange-700"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Back to Interests
      </button>

      <div className={`fun-card bg-gradient-to-r ${theme.primary} text-white mb-8 p-8`}>
        <div className="flex items-center space-x-4">
          <theme.icon className="w-12 h-12" />
          <div>
            <h1 className="text-4xl font-bold">Welcome to Fun Bean!</h1>
            <p className="text-xl opacity-90">Let's have some fun with {interest}!</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="fun-card hover:shadow-xl">
            <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Book className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className={`text-2xl font-bold text-${theme.secondary} mb-2`}>
              {section.title}
            </h2>
            <p className="text-gray-600">{section.description}</p>
            <button 
              onClick={section.action}
              className={`fun-button mt-4 bg-gradient-to-r ${theme.primary}`}
            >
              Start Playing!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
