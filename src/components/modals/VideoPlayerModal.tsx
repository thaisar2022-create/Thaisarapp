import React, { useState } from 'react';
import { FreeVideo } from '../../types';

interface VideoPlayerModalProps {
  video: FreeVideo | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'notes' | 'vocab'>('notes');

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#181922] border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl my-6 relative">
        {/* Header */}
        <div className="p-4 bg-[#242531] flex justify-between items-center border-b border-white/10">
          <div>
            <h3 className="font-bold text-white text-base leading-snug">{video.title}</h3>
            <p className="text-xs text-[#aaaab9]">{video.subtitle} • {video.duration}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-transform active:scale-90"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Player Canvas Frame */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-80' : 'opacity-50'}`}
          />
          
          {/* Animated Overlay Simulation */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/30">
            <div className="flex justify-between items-center text-xs text-white/80">
              <span className="bg-[#059669] text-white px-2.5 py-0.5 rounded-full font-semibold">FREE LESSON</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {video.duration}</span>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="self-center w-16 h-16 bg-[#059669] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#059669]/50 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            {/* Play progress bar */}
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                <div className={`h-full bg-[#10b981] ${isPlaying ? 'w-2/3 transition-all duration-1000' : 'w-1/3'}`} />
              </div>
              <div className="flex justify-between text-[11px] text-white/70">
                <span>04:15</span>
                <span>{video.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info */}
        <div className="p-5">
          <div className="flex gap-2 border-b border-white/10 pb-3 mb-4">
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'notes'
                  ? 'bg-[#059669] text-white'
                  : 'bg-[#242531] text-[#aaaab9] hover:text-white'
              }`}
            >
              သင်ခန်းစာ မှတ်စုများ
            </button>
            <button
              onClick={() => setActiveTab('vocab')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'vocab'
                  ? 'bg-[#059669] text-white'
                  : 'bg-[#242531] text-[#aaaab9] hover:text-white'
              }`}
            >
              ဝါဟာရများ ({video.vocabularies?.length || 0})
            </button>
          </div>

          {activeTab === 'notes' && (
            <div className="space-y-2.5">
              {video.notes && video.notes.length > 0 ? (
                video.notes.map((note, i) => (
                  <div key={i} className="flex gap-2.5 bg-[#242531]/60 p-3 rounded-xl border border-white/5 text-xs text-[#e5e4f5]">
                    <span className="material-symbols-outlined text-[#10b981] text-base shrink-0">check_circle</span>
                    <span>{note}</span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-[#aaaab9]">ဤသင်ခန်းစာအတွက် မှတ်စုများ ရနိုင်ပါသည်။</p>
              )}
            </div>
          )}

          {activeTab === 'vocab' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {video.vocabularies?.map((item, idx) => (
                <div key={idx} className="bg-[#242531] p-3 rounded-xl border border-white/5 flex flex-col justify-between">
                  <span className="text-base font-bold text-[#d8b9ff]">{item.thai}</span>
                  <div className="text-xs text-[#aaaab9] mt-1">
                    <span className="text-[#10b981] mr-1">({item.phonetic})</span>
                    <span>{item.myanmar}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
