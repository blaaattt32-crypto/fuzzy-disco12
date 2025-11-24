import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="uk">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EnglishSpeak - Онлайн-школа англійської для дітей і дорослих</title>
        <meta name="description" content="Онлайн-школа англійської EnglishSpeak. Індивідуальні уроки та міні-групи для дітей і дорослих. Пробний урок безкоштовно!">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
            
            body {
                font-family: 'Montserrat', sans-serif;
            }
            
            .gradient-bg {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            
            .gradient-text {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .hover-scale {
                transition: transform 0.3s ease;
            }
            
            .hover-scale:hover {
                transform: scale(1.05);
            }
            
            .card-shadow {
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .btn-primary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                transition: all 0.3s ease;
            }
            
            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
            }
            
            .smooth-scroll {
                scroll-behavior: smooth;
            }
        </style>
    </head>
    <body class="bg-gray-50 smooth-scroll">
        <!-- Header -->
        <header class="gradient-bg text-white py-6 sticky top-0 z-50 shadow-lg">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-graduation-cap text-4xl"></i>
                        <div>
                            <h1 class="text-3xl font-bold">EnglishSpeak</h1>
                            <p class="text-sm opacity-90">Онлайн-школа англійської для дітей і дорослих</p>
                        </div>
                    </div>
                    <nav class="hidden md:flex space-x-6">
                        <a href="#about" class="hover:opacity-80 transition">Про нас</a>
                        <a href="#programs" class="hover:opacity-80 transition">Програми</a>
                        <a href="#prices" class="hover:opacity-80 transition">Ціни</a>
                        <a href="#contacts" class="hover:opacity-80 transition">Контакти</a>
                    </nav>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="gradient-bg text-white py-20">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-5xl font-bold mb-6">Заговоріть англійською вже з перших уроків!</h2>
                <p class="text-xl mb-8 opacity-90">Індивідуальні уроки та міні-групи для дітей і дорослих</p>
                <a href="#trial" class="inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover-scale text-lg shadow-lg">
                    <i class="fas fa-rocket mr-2"></i>Записатися на пробний урок
                </a>
                <p class="mt-4 text-lg">✨ Безкоштовно!</p>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl font-bold mb-6 gradient-text">Хто ми</h2>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        EnglishSpeak — це сучасна онлайн-школа англійської мови. Ми працюємо в індивідуальному форматі 
                        та міні-групах, допомагаючи дітям і дорослим легко та впевнено заговорити англійською вже з перших уроків.
                    </p>
                </div>
            </div>
        </section>

        <!-- Programs Section -->
        <section id="programs" class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Наші напрямки навчання</h2>
                <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div class="bg-white p-6 rounded-xl card-shadow hover-scale">
                        <div class="text-4xl mb-4 text-purple-600">
                            <i class="fas fa-child"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Англійська для дітей</h3>
                        <p class="text-gray-600">6–17 років</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl card-shadow hover-scale">
                        <div class="text-4xl mb-4 text-purple-600">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Англійська для дорослих</h3>
                        <p class="text-gray-600">Всі рівні підготовки</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl card-shadow hover-scale">
                        <div class="text-4xl mb-4 text-purple-600">
                            <i class="fas fa-comments"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Розмовна англійська</h3>
                        <p class="text-gray-600">70% уроку — speaking</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl card-shadow hover-scale">
                        <div class="text-4xl mb-4 text-purple-600">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Підготовка до НМТ / ДПА</h3>
                        <p class="text-gray-600">Успішне складання екзаменів</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl card-shadow hover-scale">
                        <div class="text-4xl mb-4 text-purple-600">
                            <i class="fas fa-book"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Граматика з нуля</h3>
                        <p class="text-gray-600">Зрозуміло та доступно</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl card-shadow hover-scale">
                        <div class="text-4xl mb-4 text-purple-600">
                            <i class="fas fa-plane"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Англійська для подорожей</h3>
                        <p class="text-gray-600">Впевнено почувайтеся в будь-якій країні</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl card-shadow hover-scale md:col-start-2">
                        <div class="text-4xl mb-4 text-purple-600">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Підготовка до співбесід</h3>
                        <p class="text-gray-600">Отримайте роботу мрії</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Formats Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Формати занять</h2>
                <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div class="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl card-shadow">
                        <div class="text-5xl mb-4 text-purple-600 text-center">
                            <i class="fas fa-user"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-center">Індивідуальні уроки</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Персональна програма</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Повна увага викладача</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Адаптація під ваші цілі</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl card-shadow">
                        <div class="text-5xl mb-4 text-purple-600 text-center">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-center">Міні-групи 3–5 осіб</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Мотивація в команді</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Нижча вартість</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <span>Інтерактивні speaking-активності</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Prices Section -->
        <section id="prices" class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Ціни</h2>
                <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div class="bg-white p-8 rounded-xl card-shadow text-center hover-scale">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-user-graduate"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Індивідуальний урок</h3>
                        <p class="text-4xl font-bold gradient-text mb-2">250–350 грн</p>
                        <p class="text-gray-600">за урок</p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-xl card-shadow text-center hover-scale">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Міні-група</h3>
                        <p class="text-4xl font-bold gradient-text mb-2">120–150 грн</p>
                        <p class="text-gray-600">за урок / особа</p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-xl card-shadow text-center hover-scale text-white">
                        <div class="text-5xl mb-4">
                            <i class="fas fa-gift"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">Пробний урок</h3>
                        <p class="text-4xl font-bold mb-2">БЕЗКОШТОВНО</p>
                        <p class="text-sm opacity-90">Познайомтеся з нашою методикою</p>
                    </div>
                </div>
                
                <div class="text-center mt-12">
                    <a href="#trial" class="inline-block btn-primary text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg">
                        <i class="fas fa-rocket mr-2"></i>Записатися на пробний урок
                    </a>
                </div>
            </div>
        </section>

        <!-- Why Us Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Чому нас обирають</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <div class="text-center p-6">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-microphone"></i>
                        </div>
                        <h3 class="font-bold mb-2">70% уроку — speaking</h3>
                        <p class="text-gray-600 text-sm">Говоріть з перших хвилин</p>
                    </div>
                    
                    <div class="text-center p-6">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-user-check"></i>
                        </div>
                        <h3 class="font-bold mb-2">Індивідуальний підхід</h3>
                        <p class="text-gray-600 text-sm">Програма під ваші цілі</p>
                    </div>
                    
                    <div class="text-center p-6">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3 class="font-bold mb-2">Дружня атмосфера</h3>
                        <p class="text-gray-600 text-sm">Навчання без стресу</p>
                    </div>
                    
                    <div class="text-center p-6">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-star"></i>
                        </div>
                        <h3 class="font-bold mb-2">Професійні викладачі</h3>
                        <p class="text-gray-600 text-sm">B2–C1 рівень</p>
                    </div>
                    
                    <div class="text-center p-6">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3 class="font-bold mb-2">Гнучкий графік</h3>
                        <p class="text-gray-600 text-sm">Навчайтеся коли зручно</p>
                    </div>
                    
                    <div class="text-center p-6">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h3 class="font-bold mb-2">Контроль прогресу</h3>
                        <p class="text-gray-600 text-sm">Щотижневі звіти</p>
                    </div>
                    
                    <div class="text-center p-6">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-gift"></i>
                        </div>
                        <h3 class="font-bold mb-2">Пробний урок</h3>
                        <p class="text-gray-600 text-sm">Безкоштовно!</p>
                    </div>
                    
                    <div class="text-center p-6">
                        <div class="text-5xl mb-4 text-purple-600">
                            <i class="fas fa-laptop"></i>
                        </div>
                        <h3 class="font-bold mb-2">100% онлайн</h3>
                        <p class="text-gray-600 text-sm">Навчайтеся з будь-якої точки світу</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Teachers Section -->
        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Наша команда</h2>
                <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div class="bg-white p-8 rounded-xl card-shadow text-center">
                        <div class="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-5xl">
                            <i class="fas fa-user-graduate"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-2">Олена</h3>
                        <p class="text-purple-600 font-semibold mb-3">Викладач (С1)</p>
                        <p class="text-gray-600">5 років досвіду. Спеціалізується на розмовній англійській та роботі з дітьми.</p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-xl card-shadow text-center">
                        <div class="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-5xl">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-2">Максим</h3>
                        <p class="text-purple-600 font-semibold mb-3">Викладач (В2+)</p>
                        <p class="text-gray-600">Доступно пояснює граматику. Працює з дорослими та підлітками.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Відгуки наших учнів</h2>
                <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div class="bg-gray-50 p-6 rounded-xl card-shadow">
                        <div class="flex items-center mb-4">
                            <div class="text-yellow-400 text-xl">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4">"Донька в захваті від уроків! Результат помітний уже після місяця."</p>
                        <p class="font-semibold">— Ірина, мама учениці</p>
                    </div>
                    
                    <div class="bg-gray-50 p-6 rounded-xl card-shadow">
                        <div class="flex items-center mb-4">
                            <div class="text-yellow-400 text-xl">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4">"Дуже зручний формат і викладачі, які мотивують!"</p>
                        <p class="font-semibold">— Андрій, студент</p>
                    </div>
                    
                    <div class="bg-gray-50 p-6 rounded-xl card-shadow">
                        <div class="flex items-center mb-4">
                            <div class="text-yellow-400 text-xl">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <p class="text-gray-700 mb-4">"Підготувалася до НМТ за 3 місяці і склала на 180 балів!"</p>
                        <p class="font-semibold">— Марія, випускниця</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section id="trial" class="py-20 gradient-bg text-white">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-4xl font-bold mb-6">Готові розпочати навчання?</h2>
                <p class="text-xl mb-8 opacity-90">Запишіться на безкоштовний пробний урок прямо зараз!</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="https://t.me/englishspeak_bot" target="_blank" class="inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover-scale text-lg shadow-lg">
                        <i class="fab fa-telegram mr-2"></i>Написати в Telegram
                    </a>
                    <a href="https://instagram.com/englishspeak" target="_blank" class="inline-block bg-pink-500 text-white font-bold py-4 px-8 rounded-full hover-scale text-lg shadow-lg">
                        <i class="fab fa-instagram mr-2"></i>Instagram
                    </a>
                </div>
            </div>
        </section>

        <!-- Contacts Section -->
        <section id="contacts" class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Контакти</h2>
                <div class="max-w-2xl mx-auto">
                    <div class="grid md:grid-cols-2 gap-6">
                        <a href="https://t.me/englishspeak_bot" target="_blank" class="bg-white p-8 rounded-xl card-shadow text-center hover-scale">
                            <div class="text-5xl mb-4 text-blue-500">
                                <i class="fab fa-telegram"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Telegram</h3>
                            <p class="text-gray-600">@englishspeak_bot</p>
                        </a>
                        
                        <a href="https://instagram.com/englishspeak" target="_blank" class="bg-white p-8 rounded-xl card-shadow text-center hover-scale">
                            <div class="text-5xl mb-4 text-pink-500">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-2">Instagram</h3>
                            <p class="text-gray-600">@englishspeak</p>
                        </a>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <p class="text-gray-600 mb-4">Або зателефонуйте нам:</p>
                        <a href="tel:+380501234567" class="text-2xl font-bold gradient-text hover:opacity-80 transition">
                            <i class="fas fa-phone mr-2"></i>+380 (50) 123-45-67
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-8">
            <div class="container mx-auto px-4 text-center">
                <div class="flex items-center justify-center space-x-3 mb-4">
                    <i class="fas fa-graduation-cap text-3xl"></i>
                    <h3 class="text-2xl font-bold">EnglishSpeak</h3>
                </div>
                <p class="text-gray-400 mb-4">Онлайн-школа англійської для дітей і дорослих</p>
                <div class="flex justify-center space-x-6 mb-4">
                    <a href="https://t.me/englishspeak_bot" target="_blank" class="text-2xl hover:text-blue-400 transition">
                        <i class="fab fa-telegram"></i>
                    </a>
                    <a href="https://instagram.com/englishspeak" target="_blank" class="text-2xl hover:text-pink-400 transition">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <p class="text-gray-500 text-sm">© 2024 EnglishSpeak. Всі права захищені.</p>
            </div>
        </footer>

        <!-- Smooth scroll script -->
        <script>
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        </script>
    </body>
    </html>
  `)
})

export default app
