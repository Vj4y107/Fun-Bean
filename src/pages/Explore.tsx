import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Brain, Heart, Dumbbell, Sparkles } from 'lucide-react';

const courseCategories = [
  {
    id: 'life-skills',
    title: 'Basic Life Skills',
    description: 'Learn essential skills for daily life and social interaction',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'motor-skills',
    title: 'Motor Skills Development',
    description: 'Fun exercises to improve coordination and physical abilities',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?auto=format&fit=crop&w=800&q=80',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 'emotional',
    title: 'Emotional Regulation',
    description: 'Learn to understand and manage emotions effectively',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=800&q=80',
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 'sensory',
    title: 'Sensory Processing',
    description: 'Activities for better sensory integration and awareness',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-400 to-indigo-500',
  },
];

export default function Explore() {
  const navigate = useNavigate();
  const location = useLocation();
  const interest = location.state?.interest || 'games';

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/home', { state: { interest } })}
          className="mb-8 flex items-center text-orange-600 hover:text-orange-700
                   text-lg font-medium transition-colors"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 
                       bg-clip-text text-transparent mb-4">
            Explore Courses
          </h1>
          <p className="text-xl text-gray-600">Choose a category to start learning!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courseCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/course/${category.id}`, { 
                state: { interest, category } 
              })}
              className="fun-card group cursor-pointer"
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} 
                              opacity-75 flex items-center justify-center`}>
                  <category.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600
                           transition-colors">
                {category.title}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}