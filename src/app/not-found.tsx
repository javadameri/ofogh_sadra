import { Metadata } from 'next';
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/components').then((module) => module.Layout))
const ErrorPage = dynamic(() => import('@/components').then((module) => module.ErrorPage))

export const metadata: Metadata = {
    title: "صفحه نامعتبر | بلیط اینجا",
    description: "خرید و رزرو بلیط هواپیما پ قطار و تور های مسافرتی",
    alternates: {  
      canonical: 'https://funticket.co',  
    },  
  };

export default function NotFound() {

    return (
        <Layout >
            <main>
                <ErrorPage />
            </main>
        </Layout>
    )
}