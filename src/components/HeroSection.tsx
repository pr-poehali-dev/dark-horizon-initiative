import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/c11f7b55-2fd1-49fd-a230-1155555e6873/files/61582d4b-6245-4f76-b332-7ea5ee205ff2.jpg',
  'https://cdn.poehali.dev/projects/c11f7b55-2fd1-49fd-a230-1155555e6873/files/bbd54ab3-1e28-4b3c-be51-ccdadb56cdab.jpg',
  'https://cdn.poehali.dev/projects/c11f7b55-2fd1-49fd-a230-1155555e6873/files/f38b442f-8483-4990-b8e4-e36951709778.jpg',
  'https://cdn.poehali.dev/projects/c11f7b55-2fd1-49fd-a230-1155555e6873/files/d996c696-39b8-4394-b413-19277d8e49e7.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-8">
            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-lg font-light tracking-widest uppercase text-white/60">
                Безопасность · Доверие · Развитие
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                <p className="text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
                  Психологическая поддержка
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Быть открытой. Говорить по делу. Помогать там, где это нужно.
                </p>
                <p className="max-w-lg text-base font-light leading-relaxed text-white/60">
                  Вы можете быть собой — я здесь, чтобы поддержать и помочь вам найти свой путь. Ваши идеи + моя готовность действовать = результат.
                </p>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-700 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/20"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="text-sm font-medium">Написать в Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
