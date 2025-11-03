import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Equipment {
  id: number;
  name: string;
  category: string;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  image: string;
  specs: string[];
  available: boolean;
}

const equipmentData: Equipment[] = [
  {
    id: 1,
    name: 'Автокран 16 тн - 18 метров',
    category: 'Автокраны',
    pricePerDay: 28000,
    pricePerWeek: 168000,
    pricePerMonth: 560000,
    image: 'https://cdn.poehali.dev/projects/436e8d22-751d-4d90-8c7a-6f8bdf7c5c21/files/bb24bac3-7574-4846-99b8-385999ffe732.jpg',
    specs: ['Грузоподъемность: 16 т', 'Вылет стрелы: 18 м', 'Высота подъема: 22 м'],
    available: true
  },
  {
    id: 2,
    name: 'Автокран 25 тн - 21 метр',
    category: 'Автокраны',
    pricePerDay: 35000,
    pricePerWeek: 210000,
    pricePerMonth: 700000,
    image: 'https://cdn.poehali.dev/projects/436e8d22-751d-4d90-8c7a-6f8bdf7c5c21/files/bb24bac3-7574-4846-99b8-385999ffe732.jpg',
    specs: ['Грузоподъемность: 25 т', 'Вылет стрелы: 21 м', 'Высота подъема: 28 м'],
    available: true
  },
  {
    id: 3,
    name: 'Бульдозер гусеничный',
    category: 'Земляные работы',
    pricePerDay: 30000,
    pricePerWeek: 180000,
    pricePerMonth: 600000,
    image: 'https://cdn.poehali.dev/projects/436e8d22-751d-4d90-8c7a-6f8bdf7c5c21/files/2c617ffa-1063-4312-819f-42afee607572.jpg',
    specs: ['Мощность: 180 л.с.', 'Ширина отвала: 3.8 м', 'Тяговое усилие: 18 т'],
    available: true
  },
  {
    id: 4,
    name: 'Погрузчик фронтальный',
    category: 'Погрузочная техника',
    pricePerDay: 20000,
    pricePerWeek: 120000,
    pricePerMonth: 400000,
    image: 'https://cdn.poehali.dev/projects/436e8d22-751d-4d90-8c7a-6f8bdf7c5c21/files/83869ced-f00e-45aa-b62c-c6299e02ab19.jpg',
    specs: ['Грузоподъемность: 5 т', 'Вместимость ковша: 3 м³', 'Мощность: 150 л.с.'],
    available: true
  },
  {
    id: 5,
    name: 'Каток дорожный',
    category: 'Дорожная техника',
    pricePerDay: 18000,
    pricePerWeek: 108000,
    pricePerMonth: 360000,
    image: 'https://cdn.poehali.dev/projects/436e8d22-751d-4d90-8c7a-6f8bdf7c5c21/files/2c617ffa-1063-4312-819f-42afee607572.jpg',
    specs: ['Ширина вальца: 2.1 м', 'Вес: 12 т', 'Статическая нагрузка: 35 кг/см'],
    available: true
  },
  {
    id: 6,
    name: 'Экскаватор-погрузчик',
    category: 'Универсальная техника',
    pricePerDay: 22000,
    pricePerWeek: 132000,
    pricePerMonth: 440000,
    image: 'https://cdn.poehali.dev/projects/436e8d22-751d-4d90-8c7a-6f8bdf7c5c21/files/83869ced-f00e-45aa-b62c-c6299e02ab19.jpg',
    specs: ['Глубина копания: 5.7 м', 'Грузоподъемность: 4.5 т', 'Вместимость ковша: 1 м³'],
    available: false
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Аренда спецтехники');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    period: '',
    message: ''
  });

  const categories = ['Аренда спецтехники', ...Array.from(new Set(equipmentData.map(eq => eq.category)))];

  const filteredEquipment = selectedCategory === 'Аренда спецтехники' 
    ? equipmentData 
    : equipmentData.filter(eq => eq.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">СпецСтрой</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section id="hero" className="bg-gradient-to-br from-secondary via-secondary to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Аренда спецтехники для профессионалов
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Надежная строительная техника с опытными операторами. Работаем с юридическими лицами по всей России.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="FileText" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Icon name="Download" size={20} className="mr-2" />
                Прайс-лист
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Вся техника проходит регулярное техобслуживание</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Работаем 24/7</h3>
              <p className="text-gray-600">Круглосуточная диспетчерская служба</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опытные операторы</h3>
              <p className="text-gray-600">Сертифицированные специалисты с опытом от 5 лет</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="FileCheck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Полный пакет документов</h3>
              <p className="text-gray-600">Договор, акты, все необходимые разрешения</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-secondary">Аренда спецтехники</h2>
          <p className="text-center text-gray-600 mb-12">Выберите необходимую технику для вашего проекта</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((equipment) => (
              <Card key={equipment.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{equipment.name}</CardTitle>
                    {equipment.available ? (
                      <Badge className="bg-green-500">В наличии</Badge>
                    ) : (
                      <Badge variant="secondary">Занято</Badge>
                    )}
                  </div>
                  <CardDescription className="mb-4">{equipment.category}</CardDescription>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    {equipment.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span className="text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                      <div>
                        <div className="text-xs text-gray-500">Сутки</div>
                        <div className="font-semibold">{equipment.pricePerDay.toLocaleString()} ₽</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Неделя</div>
                        <div className="font-semibold">{equipment.pricePerWeek.toLocaleString()} ₽</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Месяц</div>
                        <div className="font-semibold">{equipment.pricePerMonth.toLocaleString()} ₽</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full" 
                        disabled={!equipment.available}
                        onClick={() => setSelectedEquipment(equipment)}
                      >
                        <Icon name="FileText" size={18} className="mr-2" />
                        Оформить заявку
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Заявка на аренду</DialogTitle>
                        <DialogDescription>
                          {selectedEquipment?.name}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Контактное лицо *</Label>
                            <Input 
                              id="name" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">Компания *</Label>
                            <Input 
                              id="company" 
                              required
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Телефон *</Label>
                            <Input 
                              id="phone" 
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input 
                              id="email" 
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="period">Срок аренды *</Label>
                          <Select 
                            value={formData.period}
                            onValueChange={(value) => setFormData({...formData, period: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите срок" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="day">1-6 дней</SelectItem>
                              <SelectItem value="week">1-3 недели</SelectItem>
                              <SelectItem value="month">1 месяц и более</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="message">Комментарий</Label>
                          <Textarea 
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="Укажите адрес объекта, дополнительные требования"
                          />
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full">
                            Отправить заявку
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-gray-200 mb-8">
                Наши специалисты помогут подобрать технику под ваши задачи и рассчитают стоимость аренды.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-200">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-200">info@specstroy.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-200">г. Москва, ул. Промышленная, д. 15</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-gray-200">Круглосуточно, без выходных</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Быстрая заявка</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="quick-name">Ваше имя *</Label>
                  <Input id="quick-name" required />
                </div>
                <div>
                  <Label htmlFor="quick-phone">Телефон *</Label>
                  <Input id="quick-phone" type="tel" required />
                </div>
                <div>
                  <Label htmlFor="quick-message">Какая техника нужна?</Label>
                  <Textarea id="quick-message" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Truck" size={24} className="text-primary" />
            <span className="text-xl font-bold">СпецСтрой</span>
          </div>
          <p className="text-gray-400">
            © 2024 СпецСтрой. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;