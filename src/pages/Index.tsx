import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold">Богдан</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-secondary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-secondary transition-colors">
                О фотографе
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-secondary transition-colors">
                Услуги и цены
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-secondary transition-colors">
                Контакты
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/be2ccbac-61b9-470e-acbb-943019159d08/files/e00203d9-24bf-4a6a-ad20-65ff1c6c7be8.jpg"
            alt="Photography Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Портретная фотография
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Ловлю моменты, которые остаются навсегда
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            onClick={() => scrollToSection('contact')}
          >
            Заказать съёмку
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/be2ccbac-61b9-470e-acbb-943019159d08/files/ebcc3d19-a794-4c03-acfb-e72b520ee176.jpg"
                alt="Photographer"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">О фотографе</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Привет! Я Богдан — профессиональный фотограф с 7-летним опытом работы.
                </p>
                <p>
                  Моя специализация — портретная и свадебная фотография. Я верю, что каждый кадр должен рассказывать историю и передавать настоящие эмоции.
                </p>
                <p>
                  Работаю с профессиональным оборудованием Canon и использую современные техники обработки, чтобы создать уникальный визуальный стиль для каждого клиента.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={24} className="text-secondary" />
                    <span className="font-semibold">500+ съёмок</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-secondary" />
                    <span className="font-semibold">300+ клиентов</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Услуги и цены</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="User" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl font-heading">Портретная съёмка</CardTitle>
                <CardDescription>Индивидуальная фотосессия</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-heading font-bold text-secondary">5 000 ₽</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>1-2 часа съёмки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>15-20 обработанных фото</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Помощь с позированием</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Онлайн-галерея</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in border-secondary/50">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl font-heading">Свадебная съёмка</CardTitle>
                <CardDescription>Полный день вашей свадьбы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-heading font-bold text-secondary">25 000 ₽</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>8-10 часов съёмки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>200+ обработанных фото</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Фотокнига в подарок</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Все исходники на USB</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl font-heading">Корпоративная съёмка</CardTitle>
                <CardDescription>Для бизнеса и мероприятий</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-heading font-bold text-secondary">от 8 000 ₽</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>От 2 часов съёмки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>30+ обработанных фото</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Репортажная съёмка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                      <span>Быстрая обработка</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/be2ccbac-61b9-470e-acbb-943019159d08/files/720445f2-b70e-4124-9d11-9b8e71495f19.jpg"
              alt="Wedding Photography"
              className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Заказать съёмку</h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и я свяжусь с вами в течение 24 часов
          </p>
          
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="Ваше имя"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о желаемой съёмке..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-muted-foreground">
            © 2024 Богдан. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
