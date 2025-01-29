import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, Sparkles } from 'lucide-react';

export default function Deficiency() {
  const navigate = useNavigate();
  const [deficiency, setDeficiency] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleNext = () => {
    navigate('/interests');
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="fun-card relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200 to-pink-400 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative">
            <div className="text-center space-y-4 mb-12">
              <div className="flex justify-center space-x-4">
                <Star className="w-8 h-8 text-yellow-400 animate-bounce-slow" />
                <Heart className="w-8 h-8 text-pink-400 animate-bounce-slow [animation-delay:0.2s]" />
                <Sparkles className="w-8 h-8 text-sky-400 animate-bounce-slow [animation-delay:0.4s]" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 
                           bg-clip-text text-transparent">
                Tell us about yourself!
              </h1>
              <p className="text-xl text-gray-600">Let's make your experience special!</p>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <label className="block text-2xl font-medium text-gray-700 text-center mb-6">
                  Choose what describes you best:
                </label>
                
                <div className="space-y-4">
                  <label className="block">
                    <div className={`fun-card cursor-pointer ${
                      deficiency === 'ASD' ? 'ring-4 ring-orange-400 bg-orange-50/50' : ''
                    }`}>
                      <input
                        type="radio"
                        name="deficiency"
                        value="ASD"
                        checked={deficiency === 'ASD'}
                        onChange={(e) => setDeficiency(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-4">
                        <div className={`w-6 h-6 rounded-full border-3 flex items-center justify-center
                                    ${deficiency === 'ASD' 
                                      ? 'border-orange-500 bg-orange-500' 
                                      : 'border-gray-300'
                                    }`}>
                          {deficiency === 'ASD' && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="text-xl">ASD (Autism Spectrum Disorder)</span>
                      </div>
                    </div>
                  </label>

                  <label className="block">
                    <div className={`fun-card cursor-pointer ${
                      deficiency === 'ID' ? 'ring-4 ring-orange-400 bg-orange-50/50' : ''
                    }`}>
                      <input
                        type="radio"
                        name="deficiency"
                        value="ID"
                        checked={deficiency === 'ID'}
                        onChange={(e) => setDeficiency(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-4">
                        <div className={`w-6 h-6 rounded-full border-3 flex items-center justify-center
                                    ${deficiency === 'ID' 
                                      ? 'border-orange-500 bg-orange-500' 
                                      : 'border-gray-300'
                                    }`}>
                          {deficiency === 'ID' && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="text-xl">ID (Intellectual Disability)</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="fun-card bg-gradient-to-r from-sky-50 to-pink-50">
                <label className="flex items-start space-x-4 cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-6 h-6 border-3 rounded-lg border-gray-300 
                                peer-checked:border-orange-500 peer-checked:bg-orange-500
                                flex items-center justify-center transition-colors">
                      {agreedToTerms && (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-lg text-gray-700">
                    I agree to the{' '}
                    <a href="#" className="text-orange-500 hover:text-orange-600 underline decoration-2 decoration-orange-200 hover:decoration-orange-500 transition-colors">
                      Terms of Use
                    </a>,{' '}
                    <a href="#" className="text-orange-500 hover:text-orange-600 underline decoration-2 decoration-orange-200 hover:decoration-orange-500 transition-colors">
                      Privacy Policy
                    </a>, and{' '}
                    <a href="#" className="text-orange-500 hover:text-orange-600 underline decoration-2 decoration-orange-200 hover:decoration-orange-500 transition-colors">
                      Refund Policy
                    </a>
                  </span>
                </label>
              </div>

              <button
                onClick={handleNext}
                disabled={!deficiency || !agreedToTerms}
                className="fun-button w-full text-xl py-4 bg-gradient-to-r from-orange-400 to-orange-600"
              >
                Let's Continue!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}