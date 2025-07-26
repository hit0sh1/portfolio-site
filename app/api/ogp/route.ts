import { NextRequest, NextResponse } from 'next/server'
import ogs from 'open-graph-scraper'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 })
  }

  try {
    console.log('Fetching OGP for URL:', url)
    
    const { result, error } = await ogs({ 
      url,
      timeout: 10000
    })
    
    if (error) {
      console.error('OGP error:', error)
      return NextResponse.json({
        title: url,
        description: 'Website description not available',
        image: null,
        url: url
      })
    }
    
    console.log('OGP result:', result)
    
    let ogImage: string | null = null
    if (result.ogImage) {
      if (Array.isArray(result.ogImage)) {
        ogImage = result.ogImage[0]?.url || null
      } else if (typeof result.ogImage === 'object' && result.ogImage && 'url' in result.ogImage) {
        ogImage = (result.ogImage as { url: string }).url
      } else if (typeof result.ogImage === 'string') {
        ogImage = result.ogImage
      }
      
      // Validate the image URL
      if (ogImage && (ogImage.includes('example.com') || !ogImage.startsWith('http'))) {
        ogImage = null
      }
    }
    
    return NextResponse.json({
      title: result.ogTitle || url,
      description: result.ogDescription || 'Website description not available',
      image: ogImage,
      url: result.requestUrl || url
    })
  } catch (error) {
    console.error('OGP scraping error:', error)
    return NextResponse.json({
      title: url,
      description: 'Website description not available',
      image: null,
      url: url
    })
  }
}