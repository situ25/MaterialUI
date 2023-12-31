import React from 'react'
import { TableContainer,Table,TableBody,TableHead,TableRow,TableCell,Paper } from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>FirstName</TableCell>
                    <TableCell>LastName</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    
                    tableData.map((tableRow)=>(
                        <TableRow>
                        <TableCell>{tableRow.id}</TableCell>
                        <TableCell>{tableRow.first_name}</TableCell>
                        <TableCell>{tableRow.last_name}</TableCell>
                        <TableCell align='center'>{tableRow.email}</TableCell>
                        </TableRow>
                    ))

                }
            </TableBody>
    </Table>
    </TableContainer>
  )

}

const tableData=[{
    "id": 1,
    "first_name": "Eleanor",
    "last_name": "Atwel",
    "email": "eatwel0@latimes.com"
  }, {
    "id": 2,
    "first_name": "Marice",
    "last_name": "Acors",
    "email": "macors1@hao123.com"
  }, {
    "id": 3,
    "first_name": "Clari",
    "last_name": "Beachamp",
    "email": "cbeachamp2@mozilla.com"
  }, {
    "id": 4,
    "first_name": "Loydie",
    "last_name": "Derisly",
    "email": "lderisly3@angelfire.com"
  }, {
    "id": 5,
    "first_name": "Micaela",
    "last_name": "Starling",
    "email": "mstarling4@com.com"
  }, {
    "id": 6,
    "first_name": "Deloris",
    "last_name": "De Gregario",
    "email": "ddegregario5@facebook.com"
  }, {
    "id": 7,
    "first_name": "Maximilianus",
    "last_name": "Templeton",
    "email": "mtempleton6@usda.gov"
  }, {
    "id": 8,
    "first_name": "Rupert",
    "last_name": "Curnokk",
    "email": "rcurnokk7@discuz.net"
  }, {
    "id": 9,
    "first_name": "Cart",
    "last_name": "Mars",
    "email": "cmars8@home.pl"
  }, {
    "id": 10,
    "first_name": "Mattie",
    "last_name": "Hewertson",
    "email": "mhewertson9@webmd.com"
  }, {
    "id": 11,
    "first_name": "Kattie",
    "last_name": "Whitecross",
    "email": "kwhitecrossa@economist.com"
  }, {
    "id": 12,
    "first_name": "Kaitlyn",
    "last_name": "Okie",
    "email": "kokieb@hostgator.com"
  }, {
    "id": 13,
    "first_name": "Liam",
    "last_name": "MacCrann",
    "email": "lmaccrannc@flavors.me"
  }, {
    "id": 14,
    "first_name": "Melisande",
    "last_name": "Goff",
    "email": "mgoffd@yahoo.co.jp"
  }, {
    "id": 15,
    "first_name": "Catharine",
    "last_name": "Thornton-Dewhirst",
    "email": "cthorntondewhirste@zdnet.com"
  }, {
    "id": 16,
    "first_name": "Sheila-kathryn",
    "last_name": "Van",
    "email": "svanf@mysql.com"
  }, {
    "id": 17,
    "first_name": "Kenn",
    "last_name": "Symson",
    "email": "ksymsong@360.cn"
  }, {
    "id": 18,
    "first_name": "Yolanda",
    "last_name": "Buckoke",
    "email": "ybuckokeh@networkadvertising.org"
  }, {
    "id": 19,
    "first_name": "Bryn",
    "last_name": "Mongan",
    "email": "bmongani@businesswire.com"
  }, {
    "id": 20,
    "first_name": "Adelheid",
    "last_name": "Grayston",
    "email": "agraystonj@slate.com"
  }, {
    "id": 21,
    "first_name": "Wilhelmine",
    "last_name": "Freak",
    "email": "wfreakk@bandcamp.com"
  }, {
    "id": 22,
    "first_name": "Lyndy",
    "last_name": "Bourne",
    "email": "lbournel@php.net"
  }, {
    "id": 23,
    "first_name": "Bastian",
    "last_name": "Rankine",
    "email": "brankinem@imdb.com"
  }, {
    "id": 24,
    "first_name": "Lara",
    "last_name": "Burkett",
    "email": "lburkettn@geocities.com"
  }, {
    "id": 25,
    "first_name": "Siffre",
    "last_name": "Chadburn",
    "email": "schadburno@marriott.com"
  }, {
    "id": 26,
    "first_name": "Magdalen",
    "last_name": "Tooting",
    "email": "mtootingp@geocities.jp"
  }, {
    "id": 27,
    "first_name": "Cynthea",
    "last_name": "Tourmell",
    "email": "ctourmellq@shinystat.com"
  }, {
    "id": 28,
    "first_name": "Alessandro",
    "last_name": "Kelson",
    "email": "akelsonr@delicious.com"
  }, {
    "id": 29,
    "first_name": "Hailee",
    "last_name": "Laye",
    "email": "hlayes@stumbleupon.com"
  }, {
    "id": 30,
    "first_name": "Marrilee",
    "last_name": "Speeks",
    "email": "mspeekst@wordpress.com"
  }, {
    "id": 31,
    "first_name": "Cam",
    "last_name": "Rewan",
    "email": "crewanu@techcrunch.com"
  }, {
    "id": 32,
    "first_name": "Essa",
    "last_name": "Hay",
    "email": "ehayv@usatoday.com"
  }, {
    "id": 33,
    "first_name": "Bernie",
    "last_name": "Futter",
    "email": "bfutterw@4shared.com"
  }, {
    "id": 34,
    "first_name": "Wendel",
    "last_name": "Gillaspy",
    "email": "wgillaspyx@yale.edu"
  }, {
    "id": 35,
    "first_name": "Roch",
    "last_name": "Wakelam",
    "email": "rwakelamy@usgs.gov"
  }, {
    "id": 36,
    "first_name": "Truda",
    "last_name": "Staten",
    "email": "tstatenz@va.gov"
  }, {
    "id": 37,
    "first_name": "Ryley",
    "last_name": "De Cruce",
    "email": "rdecruce10@nifty.com"
  }, {
    "id": 38,
    "first_name": "Saxe",
    "last_name": "Quodling",
    "email": "squodling11@businessinsider.com"
  }, {
    "id": 39,
    "first_name": "Katherine",
    "last_name": "Schelle",
    "email": "kschelle12@blogs.com"
  }, {
    "id": 40,
    "first_name": "Paulina",
    "last_name": "Tebbett",
    "email": "ptebbett13@time.com"
  }, {
    "id": 41,
    "first_name": "Rickard",
    "last_name": "Ryott",
    "email": "rryott14@deliciousdays.com"
  }, {
    "id": 42,
    "first_name": "Sigrid",
    "last_name": "Tanman",
    "email": "stanman15@cocolog-nifty.com"
  }, {
    "id": 43,
    "first_name": "Anatol",
    "last_name": "Tiller",
    "email": "atiller16@mozilla.org"
  }, {
    "id": 44,
    "first_name": "Moria",
    "last_name": "Bagguley",
    "email": "mbagguley17@cyberchimps.com"
  }, {
    "id": 45,
    "first_name": "Bibbye",
    "last_name": "Paulson",
    "email": "bpaulson18@europa.eu"
  }, {
    "id": 46,
    "first_name": "Court",
    "last_name": "Bruinsma",
    "email": "cbruinsma19@sciencedirect.com"
  }, {
    "id": 47,
    "first_name": "Clary",
    "last_name": "Easthope",
    "email": "ceasthope1a@bravesites.com"
  }, {
    "id": 48,
    "first_name": "Tiffani",
    "last_name": "Priden",
    "email": "tpriden1b@hud.gov"
  }, {
    "id": 49,
    "first_name": "Anatole",
    "last_name": "Lahrs",
    "email": "alahrs1c@yellowpages.com"
  }, {
    "id": 50,
    "first_name": "Doralyn",
    "last_name": "Melland",
    "email": "dmelland1d@pcworld.com"
  }, {
    "id": 51,
    "first_name": "Ileane",
    "last_name": "Ech",
    "email": "iech1e@sun.com"
  }, {
    "id": 52,
    "first_name": "Cesya",
    "last_name": "McKinstry",
    "email": "cmckinstry1f@patch.com"
  }, {
    "id": 53,
    "first_name": "Wenda",
    "last_name": "Iacobo",
    "email": "wiacobo1g@moonfruit.com"
  }, {
    "id": 54,
    "first_name": "Winny",
    "last_name": "Delucia",
    "email": "wdelucia1h@cnn.com"
  }, {
    "id": 55,
    "first_name": "Angy",
    "last_name": "Darinton",
    "email": "adarinton1i@sohu.com"
  }, {
    "id": 56,
    "first_name": "Tripp",
    "last_name": "Crabbe",
    "email": "tcrabbe1j@biblegateway.com"
  }, {
    "id": 57,
    "first_name": "Noby",
    "last_name": "Brisset",
    "email": "nbrisset1k@linkedin.com"
  }, {
    "id": 58,
    "first_name": "Leupold",
    "last_name": "Bancroft",
    "email": "lbancroft1l@domainmarket.com"
  }, {
    "id": 59,
    "first_name": "Abramo",
    "last_name": "Posselwhite",
    "email": "aposselwhite1m@eventbrite.com"
  }, {
    "id": 60,
    "first_name": "Sheila",
    "last_name": "Yellowlea",
    "email": "syellowlea1n@scribd.com"
  }, {
    "id": 61,
    "first_name": "Netta",
    "last_name": "Oxterby",
    "email": "noxterby1o@comcast.net"
  }, {
    "id": 62,
    "first_name": "Janey",
    "last_name": "Owthwaite",
    "email": "jowthwaite1p@msu.edu"
  }, {
    "id": 63,
    "first_name": "Amandy",
    "last_name": "Higbin",
    "email": "ahigbin1q@i2i.jp"
  }, {
    "id": 64,
    "first_name": "Sherwynd",
    "last_name": "Andrews",
    "email": "sandrews1r@fda.gov"
  }, {
    "id": 65,
    "first_name": "Francisco",
    "last_name": "Neasham",
    "email": "fneasham1s@patch.com"
  }, {
    "id": 66,
    "first_name": "Patti",
    "last_name": "Sposito",
    "email": "psposito1t@marketwatch.com"
  }, {
    "id": 67,
    "first_name": "Dedie",
    "last_name": "Grigaut",
    "email": "dgrigaut1u@cloudflare.com"
  }, {
    "id": 68,
    "first_name": "Ardelia",
    "last_name": "Gorriessen",
    "email": "agorriessen1v@psu.edu"
  }, {
    "id": 69,
    "first_name": "Sylvia",
    "last_name": "Tatham",
    "email": "statham1w@ucoz.com"
  }, {
    "id": 70,
    "first_name": "Florian",
    "last_name": "Tonn",
    "email": "ftonn1x@baidu.com"
  }, {
    "id": 71,
    "first_name": "Mariette",
    "last_name": "Sharrock",
    "email": "msharrock1y@ebay.co.uk"
  }, {
    "id": 72,
    "first_name": "Adelbert",
    "last_name": "Slowan",
    "email": "aslowan1z@cbsnews.com"
  }, {
    "id": 73,
    "first_name": "Mycah",
    "last_name": "Becks",
    "email": "mbecks20@canalblog.com"
  }, {
    "id": 74,
    "first_name": "Kellsie",
    "last_name": "Bownd",
    "email": "kbownd21@ucsd.edu"
  }, {
    "id": 75,
    "first_name": "Elmo",
    "last_name": "MacGauhy",
    "email": "emacgauhy22@domainmarket.com"
  }, {
    "id": 76,
    "first_name": "Jeno",
    "last_name": "Dibb",
    "email": "jdibb23@sbwire.com"
  }, {
    "id": 77,
    "first_name": "Melania",
    "last_name": "Hardesty",
    "email": "mhardesty24@ehow.com"
  }, {
    "id": 78,
    "first_name": "Trula",
    "last_name": "Bickerton",
    "email": "tbickerton25@phoca.cz"
  }, {
    "id": 79,
    "first_name": "Sherm",
    "last_name": "Altofts",
    "email": "saltofts26@gravatar.com"
  }, {
    "id": 80,
    "first_name": "Silvan",
    "last_name": "Konmann",
    "email": "skonmann27@netscape.com"
  }, {
    "id": 81,
    "first_name": "Suki",
    "last_name": "Hedan",
    "email": "shedan28@addthis.com"
  }, {
    "id": 82,
    "first_name": "Dena",
    "last_name": "Yellowley",
    "email": "dyellowley29@addtoany.com"
  }, {
    "id": 83,
    "first_name": "Donavon",
    "last_name": "Simson",
    "email": "dsimson2a@posterous.com"
  }, {
    "id": 84,
    "first_name": "Werner",
    "last_name": "McCumesky",
    "email": "wmccumesky2b@fotki.com"
  }, {
    "id": 85,
    "first_name": "Anabal",
    "last_name": "Vandenhoff",
    "email": "avandenhoff2c@mediafire.com"
  }, {
    "id": 86,
    "first_name": "Sibbie",
    "last_name": "Brownsmith",
    "email": "sbrownsmith2d@cpanel.net"
  }, {
    "id": 87,
    "first_name": "Vin",
    "last_name": "Pendreigh",
    "email": "vpendreigh2e@wisc.edu"
  }, {
    "id": 88,
    "first_name": "Pepe",
    "last_name": "Imlock",
    "email": "pimlock2f@taobao.com"
  }, {
    "id": 89,
    "first_name": "Cecilius",
    "last_name": "Garces",
    "email": "cgarces2g@cam.ac.uk"
  }, {
    "id": 90,
    "first_name": "Stefania",
    "last_name": "Bedingfield",
    "email": "sbedingfield2h@tripadvisor.com"
  }, {
    "id": 91,
    "first_name": "Celie",
    "last_name": "Skittreal",
    "email": "cskittreal2i@uiuc.edu"
  }, {
    "id": 92,
    "first_name": "Raoul",
    "last_name": "Deards",
    "email": "rdeards2j@statcounter.com"
  }, {
    "id": 93,
    "first_name": "Abdul",
    "last_name": "Feld",
    "email": "afeld2k@t-online.de"
  }, {
    "id": 94,
    "first_name": "Rachelle",
    "last_name": "Lanchester",
    "email": "rlanchester2l@forbes.com"
  }, {
    "id": 95,
    "first_name": "Mireielle",
    "last_name": "Skipping",
    "email": "mskipping2m@google.com.hk"
  }, {
    "id": 96,
    "first_name": "Tan",
    "last_name": "Behnen",
    "email": "tbehnen2n@freewebs.com"
  }, {
    "id": 97,
    "first_name": "Britta",
    "last_name": "Bointon",
    "email": "bbointon2o@feedburner.com"
  }, {
    "id": 98,
    "first_name": "Harmonie",
    "last_name": "Hawkin",
    "email": "hhawkin2p@china.com.cn"
  }, {
    "id": 99,
    "first_name": "Andris",
    "last_name": "Lett",
    "email": "alett2q@reuters.com"
  }, {
    "id": 100,
    "first_name": "Dorolisa",
    "last_name": "Stoeckle",
    "email": "dstoeckle2r@senate.gov"
  }]
