import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
              <Image 
                src="/顔.png" 
                alt="プロフィール画像" 
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-gray-100">情熱的なWebエンジニア</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              モダンなWeb技術を駆使して、ユーザー体験を重視したアプリケーション開発を行っています。
              フロントエンドからバックエンドまで、幅広い技術スタックに対応可能です。
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              常に新しい技術を学び、チームと協力して価値のあるプロダクトを創造することに情熱を注いでいます。
            </p>
            <div className="flex gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 dark:text-gray-200">経験年数</h4>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 dark:text-gray-200">完成プロジェクト</h4>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 dark:text-gray-200">技術スタック</h4>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">8+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}