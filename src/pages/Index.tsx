import { Compass, Map, Sparkles, ShieldCheck, Mountain, Leaf, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Нужна ли специальная подготовка для маршрутов?",
      answer:
        "Зависит от маршрута. У нас есть лёгкие прогулочные тропы для начинающих (3–5 км) и серьёзные многодневные маршруты для опытных туристов. На каждой карточке маршрута указан уровень сложности — выбирайте подходящий.",
    },
    {
      question: "Когда лучше всего идти в поход по Южному Уралу?",
      answer:
        "Лучший сезон — с июня по сентябрь. В это время дороги проходимы, реки не слишком полноводные, а природа в полном расцвете. Зимой часть маршрутов доступна для лыжных прогулок.",
    },
    {
      question: "Есть ли маршруты с детьми?",
      answer:
        "Да! Несколько маршрутов отлично подходят для семей с детьми от 7 лет. Они короткие, с набором высоты не более 200 м и интересными природными объектами — водопадами, скалами и лесными тропами.",
    },
    {
      question: "Можно ли пройти маршруты самостоятельно?",
      answer:
        "Большинство маршрутов можно пройти самостоятельно — они описаны с подробными ориентирами и GPS-треками. Для сложных маршрутов рекомендуем идти с проводником или группой.",
    },
  ]

  const routes = [
    {
      name: "Таганай",
      difficulty: "Средний",
      distance: "20–50 км",
      description: "Горный хребет с видом на Уральские горы, живописными скальными останцами и уникальной флорой высокогорья.",
      highlight: "Белая скала, Откликной гребень",
      color: "from-emerald-900/40",
    },
    {
      name: "Зюраткуль",
      difficulty: "Лёгкий",
      distance: "5–15 км",
      description: "Высокогорное озеро на высоте 724 м — самое высокое озеро Урала. Окружено лесами и горными хребтами.",
      highlight: "Озеро Зюраткуль, Нургуш",
      color: "from-blue-900/40",
    },
    {
      name: "Иремель",
      difficulty: "Сложный",
      distance: "22 км",
      description: "Восхождение на вторую по высоте вершину Южного Урала (1582 м). Каменные россыпи, тундровые плато и захватывающие панорамы.",
      highlight: "Вершина Большой Иремель",
      color: "from-purple-900/40",
    },
    {
      name: "Аркаим",
      difficulty: "Лёгкий",
      distance: "3–8 км",
      description: "Степные тропы к древнему городищу эпохи бронзы. Исторические холмы, раскопки и бескрайние уральские степи.",
      highlight: "Городище Аркаим, Лысая гора",
      color: "from-amber-900/40",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/81c6a95d-91b1-4e95-9481-351c9606bdf5/files/39cdf3c8-e933-4fd1-b36b-1b0aad76dae7.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Mountain className="w-5 h-5" />
            <span className="font-medium text-balance">Маршруты Урала</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Маршруты", "Сложность", "Достопримечательности", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Выбрать маршрут</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Пешеходные маршруты Южного Урала</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Открой свой Урал.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Подборка лучших пешеходных маршрутов к природным и историческим достопримечательностям Южного Урала. Найдите свой идеальный маршрут — от лёгких прогулок до горных восхождений.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Смотреть маршруты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Как выбрать маршрут
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Map className="w-4 h-4" />
            <span className="text-sm font-medium">Маршруты для любого уровня подготовки</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Map" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Подробные маршруты</h3>
              <p className="text-white/80 leading-relaxed">GPS-треки, описание троп и ключевые ориентиры для каждого маршрута.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="BarChart3" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Уровни сложности</h3>
              <p className="text-white/80 leading-relaxed">Маршруты для новичков, любителей и опытных туристов — каждый найдёт свой.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Landmark" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Достопримечательности</h3>
              <p className="text-white/80 leading-relaxed">Горные вершины, озёра, водопады, скалы и древние городища на пути.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Нетронутая природа</h3>
              <p className="text-white/80 leading-relaxed">Заповедники и национальные парки с уникальной уральской флорой и фауной.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Популярные маршруты</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Выберите маршрут под свои интересы и уровень подготовки — от лёгких прогулок до серьёзных восхождений.
              </p>
            </div>

            {/* Route Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className={`rounded-2xl bg-gradient-to-b ${route.color} to-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col h-80`}
                >
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white/40 mb-2">0{index + 1}.</div>
                    <h3 className="text-xl font-semibold mb-2">{route.name}</h3>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs px-2 py-1 bg-white/10 rounded-full">{route.difficulty}</span>
                      <span className="text-xs px-2 py-1 bg-white/10 rounded-full">{route.distance}</span>
                    </div>
                    <p className="text-white/70 leading-relaxed text-sm mb-3">{route.description}</p>
                    <p className="text-white/50 text-xs">📍 {route.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Все маршруты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед выходом на маршрут — сезон, сложность, снаряжение и безопасность на тропе.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Задать вопрос о маршруте</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Расскажите, какой маршрут вас интересует..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Не нашли подходящий маршрут или нужна помощь с выбором? Напишите нам — подберём оптимальный вариант под ваш уровень и интересы.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white text-2xl font-bold">
                      У
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Команда Маршруты Урала</h4>
                      <p className="text-gray-600">Помощь в выборе маршрута</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Mountain className="w-6 h-6" />
                  <span className="text-xl font-semibold">Маршруты Урала</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Подборка лучших пешеходных маршрутов Южного Урала — к горным вершинам, озёрам, водопадам и историческим местам. Для начинающих и опытных туристов.
                </p>
              </div>

              {/* Routes Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">МАРШРУТЫ</h3>
                <ul className="space-y-3">
                  {["Таганай", "Зюраткуль", "Иремель", "Аркаим"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ИНФОРМАЦИЯ</h3>
                <ul className="space-y-3">
                  {["Уровни сложности", "Сезонность", "Снаряжение", "Безопасность"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Сообщить об ошибке"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новые маршруты на почту</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Маршруты Урала</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
