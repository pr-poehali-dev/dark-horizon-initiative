import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Заявка на бесплатную поддержку%0A%0AИмя: ${encodeURIComponent(name)}%0AКонтакт: ${encodeURIComponent(contact)}%0AСообщение: ${encodeURIComponent(message)}`;
    window.open(`https://t.me/Irinaiaaaa?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <section ref={sectionRef} className="bg-neutral-900 px-8 py-24 md:px-16 md:py-32">
      <div className="container mx-auto max-w-xl">
        <div
          className={cn(
            'transition-all duration-1000 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="mb-10 text-center">
            <p className="mb-4 text-lg font-light tracking-widest uppercase text-white/40">
              Запись
            </p>
            <p className="text-2xl font-light text-white md:text-3xl">
              Бесплатная первая поддержка
            </p>
            <p className="mt-3 text-sm font-light text-white/50">
              Заполните форму — я свяжусь с вами лично
            </p>
          </div>

          {sent ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
              <div className="mb-4 flex justify-center">
                <Icon name="CircleCheck" size={48} className="text-green-400/80" />
              </div>
              <p className="text-xl font-light text-white">Спасибо за обращение!</p>
              <p className="mt-2 text-sm font-light text-white/50">
                Отправьте сообщение в открывшемся Telegram — и я отвечу вам в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-light text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Telegram или телефон"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-light text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
                />
              </div>
              <div>
                <textarea
                  placeholder="Кратко опишите, что вас беспокоит (необязательно)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-light text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-white py-4 text-sm font-medium text-neutral-900 transition-opacity hover:opacity-90"
              >
                Записаться бесплатно
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
