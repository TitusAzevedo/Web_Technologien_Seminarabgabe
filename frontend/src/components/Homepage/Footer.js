
const navigation = {
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Kontakt', href: '#' },
    { name: 'Funktionsweise', href: '#' },
  ],
  company: [
    { name: 'Über uns', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Mission', href: '#' },

  ],
  legal: [
    { name: 'Impressum', href: 'https://codinggarage.de/impressum.html' },
    { name: 'Datenschutzerklärung', href: 'https://codinggarage.de/datenschutz.html' },
    { name: 'Nutzungsbedinungen', href: '#' },
  ],
  
}

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                
              </div>
              <div className="">
                <h3 className="text-base font-medium text-white">Support</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">Unternehmen</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Rechtliches</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
     
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; 2022 CodinGarage UG(haftungsbeschränkt). Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
