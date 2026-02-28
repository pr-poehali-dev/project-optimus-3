import { Mountain, Map, Leaf, Plus, Minus, Mail, Clock, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

interface Route {
  name: string
  difficulty: "Лёгкий" | "Средний" | "Сложный"
  distance: string
  duration: string
  elevation: string
  description: string
  highlights: string[]
  tags: string[]
  color: string
  badge: string
}

const FILTERS = ["Все", "Лёгкий", "Средний", "Сложный"] as const

const difficultyColor: Record<string, string> = {
  "Лёгкий": "bg-emerald-500/20 text-emerald-300 ring-emerald-500/30",
  "Средний": "bg-amber-500/20 text-amber-300 ring-amber-500/30",
  "Сложный": "bg-red-500/20 text-red-300 ring-red-500/30",
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("Все")

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

  const routes: Route[] = [
    {
      name: "Таганай — Откликной гребень",
      difficulty: "Средний",
      distance: "22 км",
      duration: "1–2 дня",
      elevation: "+900 м",
      description: "Классический маршрут по национальному парку Таганай с выходом на живописный скальный гребень. Открывается вид на сотни километров уральских хребтов.",
      highlights: ["Откликной гребень", "Белая скала", "Долина сказок"],
      tags: ["Нацпарк", "Панорама", "Скалы"],
      color: "from-emerald-900/50",
      badge: "🏔️",
    },
    {
      name: "Иремель — Большой Иремель",
      difficulty: "Сложный",
      distance: "22 км",
      duration: "1 день",
      elevation: "+900 м",
      description: "Восхождение на вторую по высоте вершину Южного Урала (1582 м). Каменные россыпи, тундровые плато и захватывающая 360° панорама.",
      highlights: ["Вершина 1582 м", "Тундровое плато", "Водопад на спуске"],
      tags: ["Вершина", "Тундра", "Альпийский"],
      color: "from-purple-900/50",
      badge: "⛰️",
    },
    {
      name: "Зюраткуль — озеро и хребет",
      difficulty: "Лёгкий",
      distance: "8–15 км",
      duration: "1 день",
      elevation: "+400 м",
      description: "Самое высокогорное озеро Урала на высоте 724 м. Деревянный настил к берегу, хребет Нургуш и панорама на голубое зеркало воды.",
      highlights: ["Озеро Зюраткуль", "Хребет Нургуш", "Деревянный настил"],
      tags: ["Озеро", "Семейный", "Нацпарк"],
      color: "from-blue-900/50",
      badge: "🌊",
    },
    {
      name: "Аркаим — степные холмы",
      difficulty: "Лёгкий",
      distance: "5–8 км",
      duration: "Полдня",
      elevation: "+80 м",
      description: "Прогулка по степи к древнему городищу эпохи бронзы (XXI–XVIII вв. до н.э.). Исторические раскопки, священные холмы и бескрайние степи.",
      highlights: ["Городище Аркаим", "Лысая гора", "Музей под открытым небом"],
      tags: ["История", "Степь", "Культура"],
      color: "from-amber-900/50",
      badge: "🏛️",
    },
    {
      name: "Большой Нургуш",
      difficulty: "Сложный",
      distance: "30 км",
      duration: "2 дня",
      elevation: "+1100 м",
      description: "Многодневный поход на высочайшую точку Челябинской области (1406 м). Высокогорное плато с карликовыми берёзами и каменными полями.",
      highlights: ["Вершина 1406 м", "Высокогорное плато", "Горная тайга"],
      tags: ["Многодневный", "Вершина", "Дикая природа"],
      color: "from-slate-700/50",
      badge: "🗻",
    },
    {
      name: "Водопад Атыш",
      difficulty: "Средний",
      distance: "14 км",
      duration: "1 день",
      elevation: "+300 м",
      description: "Уникальный подземный водопад, вытекающий прямо из скалы. Путь через смешанный лес Башкирии с переправами через реку Лемезу.",
      highlights: ["Водопад Атыш", "Пещера Заповедная", "Река Лемеза"],
      tags: ["Водопад", "Пещера", "Лес"],
      color: "from-cyan-900/50",
      badge: "💧",
    },
    {
      name: "Инзерские зубчатки",
      difficulty: "Средний",
      distance: "18 км",
      duration: "1 день",
      elevation: "+600 м",
      description: "Живописный скальный гребень на хребте Крака. Острые скальные «зубья» возвышаются над лесом — одно из самых фотогеничных мест Южного Урала.",
      highlights: ["Скальные зубья", "Вид на долину р. Инзер", "Сосновый бор"],
      tags: ["Скалы", "Фото", "Панорама"],
      color: "from-rose-900/50",
      badge: "🪨",
    },
    {
      name: "Шихан Торатау",
      difficulty: "Лёгкий",
      distance: "4 км",
      duration: "2–3 часа",
      elevation: "+220 м",
      description: "Одиночный известняковый холм — памятник природы федерального значения. Бывший коралловый риф древнего океана, возраст — 280 млн лет.",
      highlights: ["Вершина Торатау", "Вид на р. Белую", "Геологический памятник"],
      tags: ["Геология", "Короткий", "История"],
      color: "from-orange-900/50",
      badge: "🌋",
    },
    {
      name: "Крыкты — хребет Крыктытау",
      difficulty: "Сложный",
      distance: "35 км",
      duration: "2–3 дня",
      elevation: "+800 м",
      description: "Дикий и малопосещаемый хребет в Зауралье. Открытые ковыльные степи сменяются сосновым бором и скальными выходами. Для опытных туристов.",
      highlights: ["Скалы Сабакты", "Ковыльные степи", "Горные озёра"],
      tags: ["Многодневный", "Дикий", "Степь"],
      color: "from-lime-900/50",
      badge: "🌿",
    },
  ]

  const filtered = activeFilter === "Все" ? routes : routes.filter(r => r.difficulty === activeFilter)

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
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
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Mountain className="w-5 h-5" />
            <span className="font-medium">Маршруты Урала</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {["Маршруты", "Сложность", "Достопримечательности", "Вопросы", "Контакты"].map((item) => (
              <a key={item} href="#" className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Выбрать маршрут</Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Пешеходные маршруты Южного Урала</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Открой свой Урал.</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Подборка лучших пешеходных маршрутов к природным и историческим достопримечательностям Южного Урала. Найдите свой идеальный маршрут — от лёгких прогулок до горных восхождений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Смотреть маршруты
            </Button>
            <Button size="lg" variant="outline" className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg">
              Как выбрать маршрут
            </Button>
          </div>
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
      <section className="relative z-10 py-24 px-6" id="routes">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 md:p-12">

            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Все маршруты</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty mb-10">
                {routes.length} маршрутов по Южному Уралу — выберите по уровню сложности
              </p>

              {/* Filter Tabs */}
              <div className="inline-flex items-center gap-2 p-1.5 bg-black/30 ring-1 ring-white/10 rounded-full">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeFilter === f
                        ? "bg-white text-black shadow-md"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {f}
                    {f !== "Все" && (
                      <span className="ml-1.5 text-xs opacity-60">
                        {routes.filter(r => r.difficulty === f).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Route Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((route, index) => (
                <div
                  key={route.name}
                  className={`rounded-2xl bg-gradient-to-b ${route.color} to-white/[0.03] ring-1 ring-white/10 p-6 flex flex-col gap-4 hover:ring-white/20 transition-all duration-200 hover:-translate-y-0.5`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{route.badge}</span>
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">{route.name}</h3>
                        <span className={`inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full ring-1 font-medium ${difficultyColor[route.difficulty]}`}>
                          {route.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <Icon name="Footprints" size={14} fallback="MapPin" />
                      {route.distance}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {route.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {route.elevation}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed">{route.description}</p>

                  {/* Highlights */}
                  <div className="space-y-1">
                    {route.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {route.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-white/8 ring-1 ring-white/10 rounded-full text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="mt-auto w-full border-white/15 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm"
                  >
                    Подробнее о маршруте
                  </Button>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-white/40">
                <p className="text-xl">Маршруты не найдены</p>
              </div>
            )}

            {/* Stats Footer */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{routes.filter(r => r.difficulty === "Лёгкий").length}</div>
                <div className="text-sm text-emerald-400">Лёгких маршрута</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{routes.filter(r => r.difficulty === "Средний").length}</div>
                <div className="text-sm text-amber-400">Средних маршрута</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{routes.filter(r => r.difficulty === "Сложный").length}</div>
                <div className="text-sm text-red-400">Сложных маршрута</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Частые вопросы</h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед выходом на маршрут — сезон, сложность, снаряжение и безопасность на тропе.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? <Minus className="w-5 h-5 flex-shrink-0" /> : <Plus className="w-5 h-5 flex-shrink-0" />}
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
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Задать вопрос о маршруте</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Расскажите, какой маршрут вас интересует..." />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
              <div className="space-y-8">
                <p className="text-xl text-white/90 leading-relaxed text-pretty">
                  Не нашли подходящий маршрут или нужна помощь с выбором? Напишите нам — подберём оптимальный вариант под ваш уровень и интересы.
                </p>
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
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Mountain className="w-6 h-6" />
                  <span className="text-xl font-semibold">Маршруты Урала</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Подборка лучших пешеходных маршрутов Южного Урала — к горным вершинам, озёрам, водопадам и историческим местам.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">МАРШРУТЫ</h3>
                <ul className="space-y-3">
                  {["Таганай", "Зюраткуль", "Иремель", "Аркаим", "Нургуш"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ИНФОРМАЦИЯ</h3>
                <ul className="space-y-3">
                  {["Уровни сложности", "Сезонность", "Снаряжение", "Безопасность"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Сообщить об ошибке"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новые маршруты на почту</h3>
                <div className="flex gap-3">
                  <input type="email" placeholder="Введите ваш email" className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none" />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>
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
