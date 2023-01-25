import Footer from "../components/Homepage/Footer";
export default function Imprint() {
    return (
      <>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-lg font-semibold text-indigo-600">Tekado</h2>
              <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Impressum
              </p>
              <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500"></p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <h3 className="text-gray-500 text-xl">Angaben gemäß § 5 TMG</h3>
          <p className="mt-2">
            CodinGarage UG (haftungsbeschränkt) <br />
            Josefine-Clouth-Straße 17 <br />
            50733 Köln <br />
            Deutschland <br />
            <br />
            Handelsregister: HRB 110775 <br />
            Registergericht: Köln <br />
            Geschäftsführer: Eren Kocaman <br />
            <br />
          </p>

          <h3 className="text-gray-500 text-xl">Kontakt</h3>
          <p className="mt-2">
            Tel.: 0175 8616726 <br />
            E-Mail: info@codingarage.com <br />
            <br />
          </p>

          <h3 className="text-gray-500 text-xl">EU-Streitschlichtung</h3>
          <p className="mt-2">
            Plattform der EU-Kommission zur Online-Streitbeilegung:
            <a href="https://ec.europa.eu/consumers/odr">
              https://ec.europa.eu/consumers/odr
            </a>
            <br />
            <br />
          </p>

          <h3 className="text-gray-500 text-xl">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h3>
          <p className="mt-2">
            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            <br />
            <br />
          </p>

          <h3 className="text-gray-500 text-xl">
            Disclaimer – rechtliche Hinweise
          </h3>

          <p className="mt-2 mb-10">
            <b>Warnhinweis zu Inhalten</b> <br />
            Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden
            mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite
            übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der
            bereitgestellten kostenlosen und frei zugänglichen journalistischen
            Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben
            die Meinung des jeweiligen Autors und nicht immer die Meinung des
            Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei
            zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem
            Nutzer und dem Anbieter zustande, insoweit fehlt es am
            Rechtsbindungswillen des Anbieters.
            <br />
            <br />
            <b>Externe Links</b> <br />
            Diese Website enthält Verknüpfungen zu Websites Dritter („externe
            Links“). Diese Websites unterliegen der Haftung der jeweiligen
            Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der
            externen Links die fremden Inhalte daraufhin überprüft, ob etwaige
            Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
            ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle
            und zukünftige Gestaltung und auf die Inhalte der verknüpften
            Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der
            Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen
            macht. Eine ständige Kontrolle der externen Links ist für den
            Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar.
            Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe
            Links unverzüglich gelöscht.
            <br />
            <br />
            <b>Urheber- und Leistungsschutzrechte</b> <br />
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem
            deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
            Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
            bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder
            jeweiligen Rechteinhabers. Dies gilt insbesondere für
            Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
            Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
            anderen elektronischen Medien und Systemen. Inhalte und Rechte
            Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
            Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter
            Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung
            von Kopien und Downloads für den persönlichen, privaten und nicht
            kommerziellen Gebrauch ist erlaubt.
          </p>

          <a
            href="https://www.it-recht-kanzlei.de/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.it-recht-kanzlei.de/logo/Logo_Juristisch_betreut_durch_IT-Recht_Kanzlei.png?i=478af-2e031-39c6-907c-1"
              alt="Vertreten durch die IT-Recht Kanzlei"
            />
          </a>
        </div>

        <Footer />
      </>
    );
}
