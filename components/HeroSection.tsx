export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          こんにちは、
          <br />
          <span className="text-blue-600">宮川仁志</span>です
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          フルスタックエンジニアとして、革新的なWebアプリケーションを開発しています
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            プロジェクトを見る
          </a>
          <a
            href="#contact"
            className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
