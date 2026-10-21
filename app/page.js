import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function Home() {
  const { data: tools } = await supabase.from('ai_tools').select('*')

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">World Official Cyber Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools && tools.map((tool: any, index: number) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{tool.cons || tool.name}</h2>
            <p className="text-gray-300 mb-4">{tool.description}</p>
            <a 
              href={tool.url} 
              target="_blank" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              ٹول وزٹ کریں
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
