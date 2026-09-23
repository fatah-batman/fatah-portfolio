import { videoWork } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';

export function VideoWork() {
  return (
    <section id="video" className="py-24 bg-surface-elevated/30">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Video Work</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Combining technical precision with creative storytelling.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videoWork.map((video, index) => (
            <ScrollReveal key={video.id} delay={index * 0.2}>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold font-heading">{video.title}</h3>
                    <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold bg-accent/10 text-accent rounded-full whitespace-nowrap">
                      {video.views} Views
                    </span>
                  </div>
                  <p className="text-secondary text-sm">{video.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
