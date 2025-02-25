import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">O nás</h3>
            <ul className="space-y-2">
              <li><Link href="/about">O společnosti</Link></li>
              <li><Link href="/cafes">Naše kavárny</Link></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">E-shop</h3>
            <ul className="space-y-2">
              <li><Link href="/shop/espresso">Espresso</Link></li>
              <li><Link href="/shop/filter">Filtr</Link></li>
              <li><Link href="/shop/instant">Instantní káva</Link></li>
              <li><Link href="/shop/accessories">Příslušenství</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Služby</h3>
            <ul className="space-y-2">
              <li><Link href="/workshops">Workshopy</Link></li>
              <li><Link href="/catering">Catering</Link></li>
              <li><Link href="/b2b">Velkoobchod (B2B)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Sledujte nás</h3>
            <div className="flex space-x-4">
              <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
              <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
} 