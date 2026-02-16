import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Heart',
    title: 'Поддержу',
    description: 'Выслушаю без осуждения и помогу найти опору внутри себя. Вы не одиноки в своих переживаниях.',
  },
  {
    icon: 'HandHeart',
    title: 'Утешу',
    description: 'Создам безопасное пространство, где можно быть собой. Здесь ваши чувства важны и принимаются.',
  },
  {
    icon: 'Sun',
    title: 'Помогу обрести покой',
    description: 'Вместе найдём путь к внутренней гармонии. Шаг за шагом — к спокойствию и ясности.',
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-neutral-950 px-8 py-24 md:px-16 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <div
          className={cn(
            'mb-16 text-center transition-all duration-1000 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="mb-6 text-lg font-light tracking-widest uppercase text-white/40">
            Чем я могу помочь
          </p>
          <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-white/70">
            Вы распуститесь, как цветок под ласковым солнцем — ярко, естественно, прекрасно.
          </p>
          <div className="mt-8 inline-flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-5">
            <p className="text-lg font-light text-white/90">Первая консультация — <span className="font-medium text-white">бесплатно</span></p>
            <p className="text-sm font-light text-white/50">Далее — 500 ₽ за разговор</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                'group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-700 ease-out hover:border-white/20 hover:bg-white/10',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              )}
              style={{ transitionDelay: isVisible ? `${300 + index * 200}ms` : '0ms' }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Icon name={service.icon} size={28} className="text-white/70" />
              </div>
              <h3 className="mb-3 text-xl font-light text-white">
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/50">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}