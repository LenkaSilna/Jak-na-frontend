export default {
  html: [
    {
      id: '1',
      text: 'Co znamená zkratka HTML?',
      source: [
        { text: 'Home Tool Markup Language' },
        { text: 'Hyperlinks and Text Markup Language' },
        { text: 'Hyper Text Markup Language' },
      ],
      ok: 2,
      link: '',
    },
    {
      id: '2',
      text: 'Který z těchto tagů je uzavírací?',
      source: [
        { text: '<b>' },
        { text: '<b/>' },
        { text: '</b>' },
        { text: '</b/>' },
      ],
      ok: 3,
      link: '',
    },
    {
      id: '3',
      text: 'Vyberte správný HTML tag pro největší nadpis.',
      source: [
        { text: '<big>' },
        { text: '<h6>' },
        { text: '<head>' },
        { text: '<h1>' },
      ],
      ok: 3,
      link: '',
    },
    {
      id: '4',
      text: 'Vyberte správný HTML tag pro odstavec.',
      source: [{ text: '<b>' }, { text: '<p>' }, { text: '<o>' }],
      ok: 1,
      link: '',
    },
    {
      id: '5',
      text: 'Vyberte správný HTML tag pro písmo psané kurzívou.',
      source: [
        { text: '<i>' },
        { text: '<ii>' },
        { text: '<italy>' },
        { text: '<italic>' },
      ],
      ok: 0,
      link: '',
    },
    {
      id: '6',
      text: 'Která z těchto možností má správný tvar pro HTML odkaz?',
      source: [
        { text: 'a>http://www.klikzone.cz</a>' },
        { text: '<a name="http://www.adresa.cz">adresa.cz</a>' },
        { text: '<a href="http://www.adresa.cz">adresa.cz</a>' },
        { text: '<a url="http://www.adresa.cz">adresa.cz</a>' },
      ],
      ok: 2,
      link: '',
    },
    {
      id: '7',
      text: 'Která z těchto možností má správný tvar pro e-mailový odkaz?',
      source: [
        { text: '<a href="mailto:postmaster@email.cz">' },
        { text: '<mail>postmaster@email.cz</mail>' },
        { text: '<a href="postmaster@email.cz">' },
      ],
      ok: 0,
      link: '',
    },
    {
      id: '8',
      text: 'Pomocí kterého HTML tagu vytvoříte očíslovaný seznam?',
      source: [
        { text: '<num>' },
        { text: '<ol>' },
        { text: '<ul>' },
        { text: '<list>' },
      ],
      ok: 1,
      link: '',
    },
    {
      id: '9',
      text: 'Která z těchto možností má správný tvar pro vložení obrázku?',
      source: [
        { text: '<image src="image.gif">' },
        { text: '<img src="image.gif">' },
        { text: '<img>image.gif</img>' },
        { text: '<img href="image.gif>' },
      ],
      ok: 1,
      link: '',
    },
    {
      id: '10',
      text: 'Jak vytvoříte vodorovnou čáru?',
      source: [{ text: '<hr>' }, { text: '</hr>' }, { text: '<br>' }],
      ok: 0,
      link: '',
    },
    {
      id: '11',
      text: 'Jak se zapisují pomocné HTML komentáře?',
      source: [
        { text: '<-- OBSAH ZAČÍNÁ ZDE -->' },
        { text: '<!-- OBSAH ZAČÍNÁ ZDE --!>' },
        { text: '<-- OBSAH ZAČÍNÁ ZDE --!>' },
        { text: '<!-- OBSAH ZAČÍNÁ ZDE -->' },
      ],
      ok: 3,
      link: '',
    },
    {
      id: '12',
      text: 'Kam se v HTML dokumentu vkládají metadata?',
      source: [
        { text: 'do sekce <body>' },
        { text: 'do menu' },
        { text: 'do sekce <head>' },
        { text: 'nikam, metadata se vkládají do externího CSS souboru' },
      ],
      ok: 2,
      link: '',
    },
    {
      id: '13',
      text: 'Jak vytvoříte textové pole?',
      source: [
        { text: '<input type="text"/>' },
        { text: '<input type="textfield">' },
        { text: '<textfield>' },
      ],
      ok: 0,
      link: '',
    },
    {
      id: '14',
      text: 'Vyberte možnost pro kterou platí, že všechny tagy patří do tabulky.',
      source: [
        { text: '<html><head><body>' },
        { text: '<table><tt><tr>' },
        { text: '<table><td><tr>' },
        { text: '<table><head><tfoot>' },
      ],
      ok: 2,
      link: '',
    },
    {
      id: '15',
      text: 'Je možné vložit do obrázku odkaz?',
      source: [{ text: 'ano' }, { text: 'ne' }],
      ok: 0,
      link: '',
    },
    {
      id: '16',
      text: 'Tag <font>?',
      source: [
        { text: 'je nový a perspektivní' },
        { text: 'má mnohem větší možnosti, než CSS' },
        { text: 'je zastaralý, na formátování textu se používá CSS' },
        { text: 'se používá pouze v XHTML' },
      ],
      ok: 2,
      link: 'https://www.w3schools.com/tags/tag_font.asp',
    },
    {
      id: '17',
      text: 'Počet úrovní nadpisů v HTML je?',
      source: [{ text: '3' }, { text: '4' }, { text: '5' }, { text: '6' }],
      ok: 3,
      link: 'https://www.w3schools.com/html/html_headings.asp',
    },
    {
      id: '18',
      text: 'Atribut lang v tomto kódu <p lang="en-GB">Welcome to our wonderful website.</p>',
      source: [
        { text: 'Určuje jazyk webových stránek - v tomto případě angličtinu.' },
        {
          text: 'Určuje jazyk a místní podobu jazyka použitou pro webové stránky - v tomto případě britskou angličtinu.',
        },
        {
          text: 'Určuje jazyk a místní podobu jazyka použitou pro odstavce - v tomto případě britskou angličtinu. Určuje jazyk odstavce - v tomto případě angličtinu.',
        },
      ],
      ok: 2,
      link: 'https://stackoverflow.com/questions/11318961/what-is-the-difference-between-html-lang-en-and-html-lang-en-us',
    },
    {
      id: '19',
      text: 'Stejný identifikátor se může vyskytnout maximálně:',
      source: [
        { text: '1× v odlíle (sekci)' },
        { text: '1× v na celém website' },
        { text: 'prakticky neomezeně' },
        { text: '1× na stránce' },
      ],
      ok: 3,
      link: 'http://htmlguru.cz/css-selektor-id.html',
    },
    {
      id: '20',
      text: 'Stejná třída se může vyskytnout maximálně:',
      source: [
        { text: '1× v odlíle (sekci)' },
        { text: '1× v na celém website' },
        { text: 'prakticky neomezeně' },
        { text: '1× na stránce' },
      ],
      ok: 2,
      link: 'http://htmlguru.cz/css-selektor-trida.html',
    },
    {
      id: '21',
      text: 'Kdy se používá značka <link>?',
      source: [
        {
          text: 'Při propojování souborů se styly, JavaScriptu a ikon pro mobilní aplikace',
        },
        { text: 'Při propojování souborů se styly, faviconů a assets' },
        { text: 'Při propojování souborů se styly a faviconů' },
        {
          text: 'Při propojování souborů se styly, externích adres URL a faviconů',
        },
      ],
      ok: 2,
      link: 'https://www.w3schools.com/tags/tag_link.asp',
    },
    {
      id: '22',
      text: 'K jakým značkám se pojí atribut value?',
      source: [
        { text: '<button><input><form>' },
        { text: '<input><label><meter>' },
        { text: '<input><option><textarea>' },
        { text: '<li><input><option>' },
      ],
      ok: 3,
      link: 'https://www.w3schools.com/tags/att_input_value.asp',
    },
    // {
    //   id: '23',
    //   text: 'K jakým značkám se pojí atribut value?',
    //   source: [
    //     { text: '<button><input><form>' },
    //     { text: '<input><label><meter>' },
    //     { text: '<input><option><textarea>' },
    //     { text: '<li><input><option>' },
    //   ],
    //   ok: 3,
    //   link: 'https://www.w3schools.com/tags/att_input_value.asp',
    // },
    // {
    //   id: '24',
    //   text: 'Doplňte do mezer
    //     <address ______ _____>
    //     <span itemprop="streetAddress">6410 Via Real</span><br />
    //     <span itemprop="addressLocality">Carpinteria</span>,
    //     <span itemprop="addressRegion">CA</span>
    //     <span itemprop="addressCode">93013</span>
    //   </address>',
    //   source: [
    //     { text: 'itemscope itemtype="http://schema.org/PostalAddress"' },
    //     { text: 'itemsref="http://schema.org/PostalAddress" itemid="address"' },
    //     { text: 'itemscope itemref="http://schema.org/PostalAddress"' },
    //     { text: 'itemid="address" itemtype="http://schema.org/PostalAddress"' },
    //   ],
    //   ok: 0,
    //   link: 'https://www.tutorialspoint.com/html5/html5_microdata.htm',
    // },
    {
      id: '25',
      text: 'Element aside se používá:',
      source: [
        { text: 'pro cokoli, co nepatří k hlavnímu tématu daného bloku' },
        {
          text: 'pro cokoli, co chcete posunout na stranu ať už je to sidebar nebo obrázekobtékaný textem',
        },
        { text: 'pro cokoli v závorkách' },
        { text: 'pro cokoli v sidebaru' },
      ],
      ok: 0,
      link: 'https://www.w3schools.com/tags/tag_aside.asp',
    },
    {
      id: '26',
      text: 'Se kterými značkami se pojí prvek source?',
      source: [
        { text: '<svg>, <picture>, <audio>, and <video>' },
        { text: '<picture>, <audio>, and <video>' },
        {
          text: 'Protože je zaměnitelný s atributem src <source>, takže pro elementy, které používají src, můžeme použít <source>',
        },
        { text: '<audio> and <video>' },
      ],
      ok: 0,
      link: 'https://www.w3schools.com/tags/tag_source.asp',
    },
    {
      id: '27',
      text: 'Který atribut se nepoužívá pro <input>?',
      source: [
        { text: '<input type = "color">' },
        { text: '<input type = "tel">' },
        { text: '<input type = "week">' },
        { text: '<input type = "num">' },
      ],
      ok: 3,
      link: 'https://www.w3schools.com/tags/tag_input.asp',
    },
    {
      id: '28',
      text: 'Který HTML kód po kliknutí telefonuje na uvedené číslo?',
      source: [
        { text: '<a href="tel: 802-555-1212">Call me</a>' },
        { text: '<a href="phone">802-555-1212</a>' },
        { text: '<a href="tel">802-555-1212</a>' },
        { text: '<a href="phone: 802-555-1212">Call me</a>' },
      ],
      ok: 0,
      link: 'https://developers.google.com/web/fundamentals/native-hardware/click-to-call',
    },
    {
      id: '29',
      text: 'Defer v kódu <script defer src = "myscript.js"> </script>?',
      source: [
        { text: 'Stahuje skript ze serveru.' },
        { text: 'Spouští skript po dokončení HTML analýzy („parsování“)' },
        { text: 'Spouští skript jakmile je to možné' },
        { text: 'Při spuštění skriptu pozastavuje analýzu HTML („parsování“)' },
      ],
      ok: 1,
      link: 'https://www.w3schools.com/tags/att_script_defer.asp',
    },
    {
      id: '30',
      text: 'Co je kořenový prvek v HTML? ',
      source: [
        { text: '<!DOCTYPE html>' },
        { text: '<html>' },
        { text: '<root>' },
        { text: '<body>' },
      ],
      ok: 1,
      link: 'https://www.w3.org/TR/2010/WD-html-markup-20100624/html.html',
    },
    {
      id: '31',
      text: 'Jáka sémantická značka se v HTML používá pro citování?',
      source: [
        { text: '<q>' },
        { text: '<quote>' },
        { text: '<blockquote>' },
        { text: '<notation>' },
      ],
      ok: 1,
      link: 'https://www.w3schools.com/html/html_quotation_elements.asp',
    },
    {
      id: '32',
      text: 'Jak vypadají komentáře v HTML?',
      source: [
        { text: '//komentář' },
        { text: '/* komentář */' },
        { text: '<! komentář ->' },
        { text: '<!-- komentář -->' },
      ],
      ok: 3,
      link: 'https://www.w3schools.com/html/html_comments.asp',
    },
    {
      id: '33',
      text: 'Jakým způsobem připojujeme soubory se styly (style.css) do HTML dokumentu?',
      source: [
        { text: '<style link="style.css">' },
        { text: '<link rel="stylesheet" href="style.css">' },
        { text: '<style src="style.css"></style>' },
        { text: '<link style="style.css">' },
      ],
      ok: 1,
      link: 'https://www.w3schools.com/tags/att_link_rel.asp',
    },
    {
      id: '34',
      text: 'Které formáty obrázků zobrazuje většina webových prohlížečů?',
      source: [
        { text: 'JPG, GIF, TIF' },
        { text: 'JPG, TIF, BMP' },
        { text: 'TIF, BMP, GIF' },
        { text: 'PNG, GIF, JPG' },
      ],
      ok: 3,
      link: 'https://www.vzhurudolu.cz/prirucka/obrazky-formaty',
    },
    {
      id: '35',
      text: 'Jaký je správný kód odkazu, který po kliknutí odešle e-mail na e-mail@example.com s předmětem „Dobrý den“?',
      source: [
        {
          text: '<a href="mailto:email@example.com&subject=Hello">Click me</a>',
        },
        { text: '<a href="mailto:email@example.com">Hello</a>' },
        {
          text: '<a href="mailto:email@example.com?subject=Hello">Click me</a>',
        },
        {
          text: '<a href="mailto:email@example.com?&subject=Hello">Click me</a>',
        },
      ],
      ok: 2,
      link: 'https://www.w3schools.com/tags/tag_address.asp',
    },
    {
      id: '36',
      text: 'Jakým atributem aktivujeme určitý prvek na stránce stisknutím určité klávesy?',
      source: [
        { text: 'accesskey' },
        { text: 'shortcut' },
        { text: 'keyboard' },
        { text: 'access' },
      ],
      ok: 0,
      link: 'https://www.w3schools.com/tags/att_global_accesskey.asp',
    },
    {
      id: '37',
      text: 'Jak sémanticky nejlépe označit, že text odkazuje na vstup z klávesnice?',
      source: [
        { text: '<p>Zmáčkněte <tt>Enter</tt> a pokračujte.</p>' },
        { text: '<p>Zmáčkněte <kbd>Enter</kbd> a pokračujte.</p>' },
        { text: '<p>Zmáčkněte <samp>Enter</samp> a pokračujte.</p>' },
        { text: '<p>K pokračování zmáčkněte Enter.</p>' },
      ],
      ok: 1,
      link: 'https://www.w3schools.com/tags/tag_kbd.asp',
    },
    {
      id: '38',
      text: 'Doplňte do mezery <link href="phone.css" rel="stylesheet" _____="print" />:',
      source: [
        { text: 'title' },
        { text: 'type' },
        { text: 'device' },
        { text: 'media' },
      ],
      ok: 3,
      link: 'https://www.w3schools.com/tags/att_link_media.asp',
    },
    {
      id: '39',
      text: 'Chceme-li, aby se odkaz otevřel v novém okně, použijeme atribut:',
      source: [
        { text: '_blank' },
        { text: '_self' },
        { text: '_new' },
        { text: '_parent' },
      ],
      ok: 0,
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp',
    },
    {
      id: '40',
      text: 'Co má na starosti tento kód <audio controls src="sound.mp3" type="audio/mpeg">When does this text display?</audio>?',
      source: [
        {
          text: 'Text se zobrazí nad ovládacími prvky zvuku, pokud ho pomocí CSS neumístíme jinam.',
        },
        { text: 'Text se zobrazí pod ovládacími prvky zvuku.' },
        { text: 'Text se zobrazí, pokud prohlížeč nedokáže přehrát zvuk.' },
        { text: 'Text se nikdy nezobrazí.' },
      ],
      ok: 2,
      link: 'https://www.w3schools.com/html/html5_audio.asp',
    },
  

    {
      id: '41',
      text: 'Které tři značky byly v HTML4 zastaralé, ale začal se zmovu používat v HTML5?',
      source: [
        { text: '<rb> <rp> <rt>nk' },
        { text: '<acronym> <code> <wbr>' },
        { text: '<hgroup> <q> <wbr>' },
        { text: '<b> <i> <u>' },
      ],
      ok: 0,
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp',
    },
    {
      id: '42',
      text: 'Doplňte do mezery <a href="https://es.yahoo.com/" hreflang="____" target="_blank">Visita Yahoo</a>:',
      source: [
        { text: 'es' },
        { text: 'es-spanish' },
        { text: 'es-es' },
        { text: 'spanish' },
      ],
      ok: 2,
      link: 'https://www.w3schools.com/tags/ref_language_codes.asp',
    },
    {
      id: '43',
      text: 'Doplňte do mezery <form method="post" action="mailto:info@linkedin.com" ____="text/plain">',
      source: [
        { text: 'enctype' },
        { text: 'media' },
        { text: 'type' },
        { text: 'rel' },
      ],
      ok: 0,
      link: 'https://www.w3schools.com/tags/ref_language_codes.asp',
    },
    // {
    //   id: '44',
    //   text: ' Doplňte do mezery v kódu: <section itemscope itemtype="http://schema.org/Restaurant">
    //   <h1 itemprop="name">Nadia's Garden</h1>
    //   <p itemscope ______ ______>
    //     <span itemprop="ratingValue">4.5</span> stars - based on
    //     <span itemprop="reviewCount">120</span> reviews
    //   </p>
    // </section> :',
    //   source: [
    //     { text: 'itemprop="aggregateRating" itemref="http://schema.org/AggregateRating"' },
    //     { text: 'itemprop="aggregateRating" itemtype="http://schema.org/AggregateRating"' },
    //     { text: 'itemid="aggregateRating" itemtype="http://schema.org/AggregateRating"' },
    //     { text: 'itemid="aggregateRating" itemref="http://schema.org/AggregateRating"' },
    //   ],
    //   ok: 1,
    //   link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype',
    // },
    {
      id: '45',
      text: 'Který name atribut se nepoužívá uvnitř značky <meta>?',
      source: [
        { text: 'charset' },
        { text: 'viewport' },
        { text: 'generator' },
        { text: 'author' },
      ],
      ok: 0,
      link: 'https://www.w3schools.com/html/html_charset.asp',
    },
    {
      id: '46',
      text: 'Jaké je absolutní hodnota URL stránky s názvem page.html?',
      source: [
        { text: 'http://www.linkedin.com/dir/page.html' },
        { text: 'page.html' },
        { text: 'http://www.linkedin.com/page.html' },
        { text: 'dir/page.html' },
      ],
      ok: 0,
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL',
    },
   
  ],

  CSS: [
    {
      id: '1',
      text: 'Co znamená zkratka CSS?',
      source: [
        { text: 'Creative Style Sheets' },
        { text: 'Cascading Style Sheets' },
        { text: 'Colorful Style Sheets' },
        { text: 'Cascading Sheets Style' },
      ],
      ok: 1,
      link: '',
    },
    {
      id: '2',
      text: 'Který HTML tag značí vestavěný CSS styl?',
      source: [
        { text: '<css>' },
        { text: '<script>' },
        { text: '<div>' },
        { text: '<style>' },
      ],
      ok: 3,
      link: '',
    },
    {
      id: '3',
      text: 'Jaká je správná forma odkazu na externí CSS styl?',
      source: [
        { text: '<style src="externi-soubor.css">' },
        {
          text: '<link rel="stylesheet" type="text/css" href="externí-soubor.css"> ',
        },
        { text: '<stylesheet>externi-soubor.css</stylesheet>' },
      ],
      ok: 1,
      link: '',
    },
    {
      id: '4',
      text: 'Kde v HTML dokumentu je správné místo pro umístění odkazu na externí CSS styl?',
      source: [
        { text: '1. řádek dokumentu' },
        { text: 'V sekci <body>' },
        { text: 'Na konci dokumentu' },
        { text: 'V sekci <head>' },
      ],
      ok: 3,
      link: '',
    },
    {
      id: '5',
      text: 'Která z těchto možností má správný tvar pro CSS informaci?',
      source: [
        { text: '{body:color=blue(body)}' },
        { text: 'body:color=blue' },
        { text: 'body {color: blue;} ' },
        { text: '{body;color:blue}' },
      ],
      ok: 2,
      link: '',
    },
    {
      id: '6',
      text: 'Který atribut se používá pro změnu barvy na pozadí?',
      source: [
        { text: 'background-color:' },
        { text: 'backcolor:' },
        { text: 'color:' },
      ],
      ok: 0,
      link: '',
    },
    {
      id: '7',
      text: 'Jak určíte barvu pro všechny nadpisy <h1>',
      source: [
        { text: 'all.h1 {color:red}' },
        { text: 'h1.all {color:red}' },
        { text: 'h1 {color:red}' },
        { text: '#h1 {color:red}' },
      ],
      ok: 2,
      link: '',
    },
    {
      id: '8',
      text: 'Pomocí kterého atributu určíte velikost textu?',
      source: [
        { text: 'text-size' },
        { text: 'text-height' },
        { text: 'font-size' },
        { text: 'font-style' },
      ],
      ok: 2,
      link: '',
    },
    {
      id: '9',
      text: 'Jak vytvoříte tučné písmo?',
      source: [
        { text: 'font-weight:bold' },
        { text: 'font:b' },
        { text: 'style:bold' },
        { text: 'font-style:bold' },
      ],
      ok: 0,
      link: '',
    },
    {
      id: '10',
      text: 'Jak vytvoříte podtrhnuté písmo?',
      source: [
        { text: 'text-decoration:no underline' },
        { text: 'decoration:underline' },
        { text: 'ext-decoration:underline' },
      ],
      ok: 2,
      link: '',
    },
    {
      id: '11',
      text: 'Jak je správná forma zápisu CSS třídy?',
      source: [
        { text: '.jméno-třídy { atribut: hodnota; }' },
        { text: '#jméno-třídy { atribut: hodnota; }' },
        { text: '(jméno-třídy) { atribut: hodnota; }' },
      ],
      ok: 0,
      link: '',
    },
    {
      id: '12',
      text: 'Který atribut slouží pro určení šířky?',
      source: [{ text: 'height' }, { text: 'size' }, { text: 'width' }],
      ok: '',
      link: 2,
    },
    {
      id: '13',
      text: 'Pomocí kterého atributu určíte styl seznamu?',
      source: [
        { text: 'list-style:' },
        { text: 'list-type:' },
        { text: 'style:' },
      ],
      ok: 0,
      link: '',
    },
    {
      id: '14',
      text: 'Jak uděláte, aby každé slovo v textu začínalo automaticky velkým písmenem?',
      source: [
        { text: 'text-transform:uppercase' },
        { text: 'text-transform:capitalize' },
        { text: 'text-transform:lowercase:' },
        { text: 'nelze' },
      ],
      ok: 1,
      link: '',
    },
    {
      id: '15',
      text: 'Lze v CSS upravovat jednotlivé strany u rámečku?',
      source: [
        { text: 'ano' },
        { text: 'ano, ale pouze levou a pravou stranu' },
        { text: 'ano, ale pouze horní a dolní stranu' },
        { text: 'nelze' },
      ],
      ok: 0,
      link: '',
    },
  ],
};

