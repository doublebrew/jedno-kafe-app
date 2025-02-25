import Link from 'next/link'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { siteConfig } from '@/config/site'

const mainNavItems = [
  {
    title: "E-shop",
    items: [
      { title: "Espresso", href: "/shop/espresso" },
      { title: "Filtr", href: "/shop/filter" },
      { title: "Instantní káva", href: "/shop/instant" },
      { title: "Příslušenství", href: "/shop/accessories" },
    ]
  },
  { title: "Kavárny", href: "/cafes" },
  { title: "Workshopy", href: "/workshops" },
  { title: "Catering", href: "/catering" },
  { title: "O nás", href: "/about" },
  { title: "B2B", href: "/b2b" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {mainNavItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                              >
                                {subItem.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                  >
                    {item.title}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
} 