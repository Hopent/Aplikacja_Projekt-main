import "./PlanetCard1.css";

const PlanetCard1 = () => {
  return (
    <div className="kafelki4">
      <div className="kafelki5">
        <img className="kafelek-wenus" alt="" src="/kafelek--wenus@2x.png" />
        <div className="nazywana-jest-czasem-container">
          <p className="nazywana-jest-czasem">{`Nazywana jest czasem siostrzaną planetą Ziemi, gdyż oba te globy powstały w zasadzie z tej samej materii, mniej więcej w tym samym czasie i mają podobne rozmiary, masy i gęstości. Widziana z daleka często porównywana była do bogini olśniewającej urody nazywanej różnie `}</p>
          <p className="nazywana-jest-czasem">w różnych czasach.</p>
        </div>
        <div className="wenus-jest-drug-container">
          <p className="nazywana-jest-czasem">Wenus jest</p>
          <p className="nazywana-jest-czasem">{`drugą planetą `}</p>
          <p className="nazywana-jest-czasem">od słońca.</p>
        </div>
      </div>
      <div className="kafelki6">
        <div className="szczegowe-dane">Szczegółowe dane:</div>
        <div className="charakterystyka-fizyczna-red-container">
          <p className="nazywana-jest-czasem">Charakterystyka fizyczna:</p>
          <ul className="wenus-ma-bardzo-wolny-okres-ob">
            <li className="rednica-wenus-wynosi">
              Średnica Wenus wynosi około 12 104 km, co czyni ją bardzo zbliżoną
              rozmiarami do Ziemi.
            </li>
            <li className="rednica-wenus-wynosi">
              Masa Wenus to około 0,815 masy Ziemi.
            </li>
          </ul>
          <p className="nazywana-jest-czasem">&nbsp;</p>
          <p className="nazywana-jest-czasem">Okres obrotu:</p>
          <ul className="wenus-ma-bardzo-wolny-okres-ob">
            <li className="rednica-wenus-wynosi">
              Wenus ma bardzo wolny okres obrotu własnego, który wynosi około
              243 dni ziemskie.
            </li>
            <li className="rednica-wenus-wynosi">
              Interesującą cechą jest to, że Wenus obraca się w kierunku
              przeciwnym do kierunku obiegu wokół Słońca, co oznacza, że na
              powierzchni planety dzień trwa dłużej niż rok.
            </li>
          </ul>
        </div>
      </div>
      <div className="kafelki7">
        <div className="atmosfera-atmosfera-wenus-container">
          <p className="nazywana-jest-czasem">Atmosfera:</p>
          <ul className="wenus-ma-bardzo-wolny-okres-ob">
            <li className="rednica-wenus-wynosi">
              Atmosfera Wenus jest bardzo gęsta i składa się głównie z dwutlenku
              węgla (CO2).
            </li>
            <li className="rednica-wenus-wynosi">
              Obecność gęstej atmosfery powoduje efekt cieplarniany, który
              sprawia, że temperatura na powierzchni Wenus jest wyjątkowo
              wysoka.
            </li>
          </ul>
          <p className="nazywana-jest-czasem">&nbsp;</p>
          <p className="nazywana-jest-czasem">Temperatura na powierzchni:</p>
          <ul className="wenus-ma-bardzo-wolny-okres-ob">
            <li className="rednica-wenus-wynosi">
              Wenus jest najgorętszą planetą w Układzie Słonecznym.
            </li>
            <li className="rednica-wenus-wynosi">
              Średnia temperatura na powierzchni planety wynosi około 467 stopni
              Celsiusza (872 stopnie Fahrenheita), co jest znacznie wyższe od
              temperatury wrzenia ołowiu.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard1;
