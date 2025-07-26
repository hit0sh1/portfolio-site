export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "ヒアリング・企画",
      description: "お客様のご要望や目標を詳しくお聞きし、最適なソリューションを企画します。",
      icon: "💭"
    },
    {
      number: "02", 
      title: "設計・デザイン",
      description: "ユーザビリティを重視したUI/UXデザインと技術設計を行います。",
      icon: "🎨"
    },
    {
      number: "03",
      title: "開発・実装", 
      description: "最新の技術スタックを使用して、高品質なWebアプリケーションを開発します。",
      icon: "💻"
    },
    {
      number: "04",
      title: "テスト・検証",
      description: "徹底的なテストを行い、品質とパフォーマンスを確保します。",
      icon: "🔍"
    },
    {
      number: "05",
      title: "リリース・運用",
      description: "本番環境へのデプロイとアフターサポートを提供します。",
      icon: "🚀"
    }
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">制作フロー</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            お客様のプロジェクトを成功に導くための、体系的な開発プロセスをご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-3">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-blue-300"></div>
                  <div className="w-0 h-0 border-l-4 border-l-blue-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">プロジェクト期間の目安</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="md:border-r border-gray-200 md:pr-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2-4週間</div>
                <div className="text-gray-600">コーポレートサイト</div>
              </div>
              <div className="md:border-r border-gray-200 md:pr-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">1-3ヶ月</div>
                <div className="text-gray-600">Webアプリケーション</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3-6ヶ月</div>
                <div className="text-gray-600">大規模システム</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}