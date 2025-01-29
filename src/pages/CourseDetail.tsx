import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, PlayCircle, CheckCircle } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
}

const courseVideos: Record<string, Video[]> = {
  'life-skills': [
    {
      id: 'ls1',
      title: 'Making Friends',
      description: 'Learn how to introduce yourself and make new friends',
      duration: '5:30',
      thumbnail: 'https://images.unsplash.com/photo-1556484687-30636164638b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ls2',
      title: 'Daily Routines',
      description: 'Essential morning and evening routines for independence',
      duration: '6:45',
      thumbnail: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&w=800&q=80',
    },
  ],
  'motor-skills': [
    {
      id: 'ms1',
      title: 'Fun with Balance',
      description: 'Simple exercises to improve balance and coordination',
      duration: '4:15',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ms2',
      title: 'Hand-Eye Coordination Games',
      description: 'Engaging activities to enhance hand-eye coordination',
      duration: '5:00',
      thumbnail: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80',
    },
  ],
  'emotional': [
    {
      id: 'em1',
      title: 'Understanding Feelings',
      description: 'Learn to identify and express different emotions',
      duration: '5:15',
      thumbnail: 'https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'em2',
      title: 'Calming Techniques',
      description: 'Simple strategies to manage strong emotions',
      duration: '4:30',
      thumbnail: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?auto=format&fit=crop&w=800&q=80',
    },
  ],
  'sensory': [
    {
      id: 'se1',
      title: 'Texture Exploration',
      description: 'Fun activities with different textures and materials',
      duration: '6:00',
      thumbnail: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'se2',
      title: 'Sound Recognition',
      description: 'Learn to identify and process different sounds',
      duration: '5:45',
      thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
    },
  ],
};

export default function CourseDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseId } = useParams();
  const { interest, category } = location.state || {};
  const [completedVideos, setCompletedVideos] = useState<string[]>([]);

  const videos = courseVideos[courseId || ''] || [];
  const progress = (completedVideos.length / videos.length) * 100;

  const handleVideoComplete = (videoId: string) => {
    if (!completedVideos.includes(videoId)) {
      setCompletedVideos([...completedVideos, videoId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/explore', { state: { interest } })}
          className="mb-8 flex items-center text-orange-600 hover:text-orange-700
                   text-lg font-medium transition-colors"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Back to Courses
        </button>

        <div className={`fun-card bg-gradient-to-r ${category?.color} text-white mb-8 p-8`}>
          <div className="flex items-center space-x-4">
            <category.icon className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">{category?.title}</h1>
              <p className="text-xl opacity-90">{category?.description}</p>
            </div>
          </div>
        </div>

        <div className="fun-card mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-700">Course Progress</h2>
            <span className="text-orange-600 font-medium">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="fun-card group">
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
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 
                            text-white px-2 py-1 rounded-lg text-sm">
                  {video.duration}
                </div>
                {completedVideos.includes(video.id) && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white 
                              p-1 rounded-full">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <button
                  onClick={() => handleVideoComplete(video.id)}
                  className={`fun-button w-full bg-gradient-to-r ${
                    completedVideos.includes(video.id)
                      ? 'from-green-400 to-green-600'
                      : 'from-orange-400 to-orange-600'
                  }`}
                >
                  {completedVideos.includes(video.id) ? 'Completed!' : 'Start Learning'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}