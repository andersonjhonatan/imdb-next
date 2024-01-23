import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import SearchItem from '@/components/SearchItem'
import NavBarTrendingTopRated from '@/components/NavBarTrendingTopRated'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Imdb Clone - Anderson',
  description: 'Imdb Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBarTrendingTopRated />
          <SearchItem  />
          {children}
        </Providers>
      </body>
    </html>
  )
}
