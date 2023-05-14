import Card from "../UI/Card";
import Email from "../UI/Email";
import Name from "../UI/Name";
import Person from "../UI/Person";
import Role from "../UI/Role";
import Footer from "../components/Footer";
const Info = () => {
  return (
    <div className="End__background w-fit h-fit ">
      <div className="grid gap-8 py-8 min-[840px]:mx-4 justify-items-center content-center min-[840px]:grid-cols-3 ">
        <Card classes="Spotify__background ">
          <p className="text-[#4CF060] text-center drop-shadow-xl m-8 text-4xl font-bold">
            Spotify
          </p>
          <p className="text-[#4CF060] text-center mx-10">
            Odkrywaj i przesłuchuj playlistę stworzoną specjalnie na juwenalia.
            Znajdziesz tam najnowsze hity i kultowe kawałki z różnych gatunków
            muzycznych, które idealnie nadają się do tańca i zabawy na imprezach
            studenckich. Posłuchaj ulubionych utworów i dołącz do juwenalowej
            atmosfery dzięki playlistom na Spotify!
          </p>
          <iframe
            className="rounded-xl my-12"
            src="https://open.spotify.com/embed/playlist/39q9MNRrTbPdYbGQzkmr9r?utm_source=generator"
            width="100%"
            height="152"
            title="Spotify"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Card>
        <Card classes="min-[840px]:mt-20 ">
          <div className="flex justify-center ">
            <p
              className="bg-purple-main text-white text-center drop-shadow-xl m-8 text-4xl font-bold -rotate-12 px-4 py-4 min-[400px]:m-8"
              id="kontakt"
            >
              Kontakt
            </p>
          </div>
          <div className="flex flex-wrap max-[540px]:w-1/3  max-[1460px]:gap-3">
            <Person>
              <Name>Justyna Owczarek</Name>
              <Email>justynaowczarek@interia.pl</Email>
              <Role>Organizator</Role>
            </Person>
            <Person>
              <Name>Klaudia Szumacher </Name>
              <Email>klaudia.szumacher@onet.pl</Email>
              <Role>Organizator</Role>
            </Person>
            <Person>
              <Name>Aniela Libertowska</Name>
              <Email>aniela.libertowska@pcz.pl</Email>
              <Role>Organizator</Role>
            </Person>
            <Person>
              <Name>Wiktor Mucha</Name>
              <Email>wiktor.mucha@onet.eu</Email>
              <Role>Koordynator artystów</Role>
            </Person>
            <Person>
              <Name>Kinga Stawicka </Name>
              <Email>s129633ks@student.pcz.pl </Email>
              <Role>Koordynator współpracy marketingowej</Role>
            </Person>
            <Person>
              <Name>Kamila Jeżak </Name>
              <Email>kamila.jezak2000@gmail.com</Email>
              <Role>Koordynator social media</Role>
            </Person>
            <Person>
              <Name>Aleksandra Pyrkosz </Name>
              <Email>s129758ap@student.pcz.pl </Email>
              <Role>Koordynator wolontariuszy</Role>
            </Person>
            <Person>
              <Name>Marta Posak </Name>
              <Email>marta.posak@wp.pl</Email>
              <Role>Koordynator imprez towarzyszących</Role>
            </Person>
            <Person>
              <Name>Weronika Kowalik </Name>
              <Email>weronikakowalik@opoczta.pl</Email>
              <Role>Koordynator artystów</Role>
            </Person>
            <Person>
              <Name>Karolina Woźniak</Name>
              <Email>karolina.w97@onet.eu</Email>
              <Role>Koordynator współpracy marketingowej</Role>
            </Person>
            <Person>
              <Name>Zuzanna Skoczylas</Name>
              <Email>S134016ZS@student.pcz.pl</Email>
              <Role>Koordynator imprez towarzyszących</Role>
            </Person>
            <Person>
              <Name>Serafin Pędziwiatr </Name>
              <Email>Spedziwiatr@pcz.pl</Email>
              <Role>Koordynator technicznych</Role>
            </Person>
          </div>
        </Card>

        <Card>
          <div className="flex justify-center ">
            <p
              className="bg-purple-main text-white text-center drop-shadow-xl m-8 text-4xl font-bold -rotate-12 px-4 py-4 min-[400px]:m-8"
              id="regulamin"
            >
              Regulamin
            </p>
          </div>
          <ul className="list-disc text-black w-fit ml-6">
            <li>
              Jednym z obowiązków uczestników imprezy jest przestrzeganie
              regulaminu oraz poleceń organizatora.
            </li>
            <li>
              Ewentualne naruszenie regulaminu lub stwarzanie zagrożenia przez
              uczestników imprezy skutkuje usunięciem ich z imprezy.
            </li>
            <li>
              Bezpieczeństwo jest priorytetem imprezy, na terenie imprezy
              zabronione jest posiadanie i spożywanie alkoholu przez osoby
              niepełnoletnie.
            </li>
            <li>
              Aby zapewnić bezpieczeństwo uczestników, obowiązuje szereg zasad i
              zakazów, w tym zakaz wchodzenia na zamknięte obszary.
            </li>
            <li>
              Czystość i porządek przede wszystkim, każdy uczestnik powinien
              wyrzucać śmieci do odpowiednich pojemników.
            </li>
            <li>
              Uczestnicy imprezy unikają niebezpiecznych zachowań, takich jak
              pozostawianie rzeczy bez nadzoru i chodzenie po niebezpiecznych
              obszarach, dbając o swoje osobiste bezpieczeństwo.
            </li>
            <li>
              Jeżeli uczestnik imprezy zauważy niebezpieczną sytuację, wypadek,
              zaginięcie, itp., powinien jak najszybciej zgłosić to odpowiednim
              służbom na terenie imprezy.
            </li>
            <li>
              Dozwolone przedmioty i substancje na terenie imprezy są ściśle
              określone, a uczestnicy nie mogą używać niebezpiecznych
              przedmiotów lub substancji, takich jak fajerwerki, petardy, czy
              narkotyki
            </li>
          </ul>
          <p
            className="text-center text-black mt-4 mb-2 cursor-pointer"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1NgGSG_rHNWr2rcco2AhwxV8-AV2r7ACM/view?usp=sharing"
              )
            }
          >
            Szczegółowy regulamin dostępny [TUTAJ]
          </p>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
