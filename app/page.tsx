import Header from "./component/header/page";
import Footer from "./component/footer/page";
import Navbar from "./component/navbar/page";

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Chair A", price: "$120", image: "https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gwsezLK8e6t0n4uE39sdDnshX4ufNg2joRbGMj~HsT1--5OWMVLFc9FB0oteteRfIfLauXE14uKtPZHJ1Bjulvk2D89oxrTN~FHfSivjkU5~2MCWhHPTeCl1lqIennA47mAWw3fSE1nxTvygvPDuUdRwmsJDQbnPaxbue~eGh0rRxuEbWaen2nzAJIv7QNfGuIsZx8A8kr2~L5Zvs~8aBffMxqU98WgnXvznEdChIYf3-Lobs7PHmuOOQCOgVSzfWuYB68ksYX2x7Z2CTx9wJy9ttWw8ZPMMuSRNG8tGlcBv14yzyWJpzbY-73YRZXcJ82Vlkqjp2munOJtoHaACwQ__" },
    { id: 2, name: "Chair B", price: "$150", image: "https://s3-alpha-sig.figma.com/img/db5f/e91e/81f40d5069977639c120b46b02efd85d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ki0dOtDyxz9UhthmDghd1k9eAaTFY4krxLYefk2G8HZ90JjZjXuJgoN9MwXTcWL3FzlfWZhjwYjop2bquSY6gh6v3TknubrItAP9yrzhfTT6Z2mjdXZDg33rGKI~0vVFNlJ9D1r64BINXNqkMQEW7EaEpwtOszpQvgySicx7pq~kY5xp0l7wuxzSx~YS6~gBf2X3LMcNgdPoXpUsqBemYLONZzmSw4JIZ~wLYZlbMmvD1bWG1LUFaBCdGfQd2izup0xo44UF8RfcZPCef3kPUtEWQ1sA5DJndpeovByNAT3d1SKQvD8osUHBUnT0BpTijQ7fAfkTY~FSD7Ubo0rwbw__" },
    { id: 3, name: "Table C", price: "$200", image: "https://s3-alpha-sig.figma.com/img/ac53/427c/ec2feb66129667973939b2ea5191c695?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lLx-d3VgVJ4ICUAjnq49bbJpxZEm29ibILnTcrFELRKLsNce3TXZ9IR6oKnldixTs6JCB2wjHEtlkWMBWq1jKfJMHzsUqrK4Xl7yvsbtGxKv7NZXXz8YPWRUXoxu7QjInNoxt9KywZMPRSJlv88WVt6G5puBJyX7U3wTvyKopG~MhXjJQe0Hbf5Lrzocx6fu429FIcAzgPBATLGLdyY~KMb18sE0lUMT5IHJVySfymm2oMoWyipoQRmluehVUNx230bAV5yVFNz3Pd8RcB7lCaIfwfYJOrwqIzRxPlaUcUNZp4qbqldWs6ZivXZqCCNV88HVWjNIl~amwBE1wH7OzQ__" },
    { id: 4, name: "Sofa D", price: "$350", image: "https://s3-alpha-sig.figma.com/img/fe50/2c91/678776be52471704ed6aa26cd1d28dd8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ltZ9PfyiKimyYErYnFvmap0pKTOFZrOS4bbhxd7~63o1PUZOUZ9xrcV4wBG48pBe60cOnwh4Q2OBJR7st3RxuqeuB48Du~Vz8N0xOyqo~9lu0SYr71EgjDOBGC-N61KW0bBen2ZzWdmXJcTpavBMF1g5jJGa-5ARw2gs0cqaHvXgLgT2ld3zGbuDTVJhqD6Su2CSxxeCIWl2ETkRSkHsBhlaUX3J3xcqi-JM-hKPHLcjc9sN-jTATIr0icGYAchSd-OiJQV3WjtZ-2hFqktCRedrFq7l9upLcWoNvfl9kj52r2bZm3mChYmzmPzcR33oL54JWHhpt43hjCueHp985Q__" },
   
 
 
 
  ];
  const LatestProducts = [
    { id: 1, name: "Chair A", price: "$120", image: "https://s3-alpha-sig.figma.com/img/4e1b/8c82/f15b5765f466da190975101e10dfdab2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qj~bNtvJxPlaYJdshMIgdvIwDSC~kJI6l8hYRSEl~FbjcsWftsaekhyo~i-budOuoBT6rUIIYpHt7Xgrn~lYHEGdxbhZSpsZ~ytrGtOQ2LQFJxBPaPnYsTZJ6ZjfcDGPOQMiIUs-n8NHX5XajRLfhLYSUmXN~Hcakin01~VNWUr7H1PPYGdIT221idYARUEEtb4rFWXcnaUzgKvhvPliFCxZgCMxWo78Zh1PP27ms64X~ZQfLpBA49aEB4tvmTjzq576P7jSsmhynZJPJTInsKbRYnbFvnO99AZnVYa0YljAmp3bUYvmPHFBCqkrcd43l5y18~-7-zf-gHQRgMrbPg__" },
    { id: 2, name: "Table C", price: "$200", image: "https://s3-alpha-sig.figma.com/img/b0ac/220b/08d5f05fcb65d0cce1b3bbe9ef93003b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kdkUTl4QdyjDOB1A8RXpZJ3E-DudkDaDjO0jPcDvZyPYM3mMTu2VycHo6NDwvB7OxGJbMMgfulaPGeKqc7KDZloAAGhXCRU2Xd-FPXv22Bkh0QbSrpb6Wlx-Q0HOWvDzf0FVEY~9bYU0fhwKG~f5QMNhGkSkIIWR30R0aQKE2d3FwTz14ssZ~SZtlywDKxcGSm00EW7VLIPBE9Lt9wk-6ajlvVehB-F-FLvt~a~obvsiQjcPE5ww2tMJkBSfYra7jke4GJ22sJxsLWVoyt6p-a92Sn6326fmwlMI89iRPLcjRpy3JoQn1Qws2tZDPrGBQttY3oQcq0OAiNTo-nHSkg__" },
    { id: 3, name: "Sofa D", price: "$350", image: "https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gwsezLK8e6t0n4uE39sdDnshX4ufNg2joRbGMj~HsT1--5OWMVLFc9FB0oteteRfIfLauXE14uKtPZHJ1Bjulvk2D89oxrTN~FHfSivjkU5~2MCWhHPTeCl1lqIennA47mAWw3fSE1nxTvygvPDuUdRwmsJDQbnPaxbue~eGh0rRxuEbWaen2nzAJIv7QNfGuIsZx8A8kr2~L5Zvs~8aBffMxqU98WgnXvznEdChIYf3-Lobs7PHmuOOQCOgVSzfWuYB68ksYX2x7Z2CTx9wJy9ttWw8ZPMMuSRNG8tGlcBv14yzyWJpzbY-73YRZXcJ82Vlkqjp2munOJtoHaACwQ__" },
    { id: 4, name: "Sofa D", price: "$350", image: "https://s3-alpha-sig.figma.com/img/e8d0/7d05/5f94bd8eef92ee5845fcca1420c3e6fa?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RhgEi~PMjuHtLTTDF1HRjEJ~1XjDPMlZPLJLXSxwM8GJG5mB~-zYqMFfq48yGQirfR~MSnuqAf00Eoh8JASLyaqVM5LA~UMbPOgXNzW7EVQp-rtOUtABjZX42g3Mp1SbUPnMvqb6ptLm8qL~VqvJiwZ4r7I3TCmtYuQ9KhiNYjpxpSRHe78mTDOZte6rQ4ctRPYpTG1aDQehVhj7jI1HjmpVmoWIIyxf-BCfruXaRzWn951cE-u1HojHPGwpWiyRgGoTAcNUJwH6mwjCaAR8wsZTwDUKfYuWP12w~Cel9pwrbm9I-9l4guR6--LtOaJA2~EzAu5Va8eRoxY7KaidqQ__" },
    { id: 5, name: "Sofa D", price: "$350", image: "https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vle4opOHNd~2Wt8oBUZ0744MSJS~i1N9T8iEEKtblnP~mzPuaG3M8uy9JIwfPE67HxaSsHw4JUZ~O9suqi0XYdjKJHfyEoRE3b-F1cZ0AGSNxkD-dbG1quKKS99DL3nc45xeSZwoN0b5Qw3TQg5eB-BDf72nzkVxM23Onk5NwM16o~AFKBMcb1WRwja8QczAqrRdSloYkDQqUnw2KwLtUxgXmEGov5njVewvcWei5eU6mj6xuBZKgrqYMt7KlArVnxMU-dOHJReLNAvXDx5bkNJSuXX9RWAcBqO~qK7X3r3E3BspCNjNtCKKdRuzGMD9cP1XDe5Ix53swLRuxsCAHg__" },
    { id: 6, name: "Sofa D", price: "$350", image: "https://s3-alpha-sig.figma.com/img/fe50/2c91/678776be52471704ed6aa26cd1d28dd8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ltZ9PfyiKimyYErYnFvmap0pKTOFZrOS4bbhxd7~63o1PUZOUZ9xrcV4wBG48pBe60cOnwh4Q2OBJR7st3RxuqeuB48Du~Vz8N0xOyqo~9lu0SYr71EgjDOBGC-N61KW0bBen2ZzWdmXJcTpavBMF1g5jJGa-5ARw2gs0cqaHvXgLgT2ld3zGbuDTVJhqD6Su2CSxxeCIWl2ETkRSkHsBhlaUX3J3xcqi-JM-hKPHLcjc9sN-jTATIr0icGYAchSd-OiJQV3WjtZ-2hFqktCRedrFq7l9upLcWoNvfl9kj52r2bZm3mChYmzmPzcR33oL54JWHhpt43hjCueHp985Q__" },

 
 
 
  ];
  const TrendingProducts = [
    { id: 1, name: "Chair A", price: "$120", image: "https://s3-alpha-sig.figma.com/img/6eac/9ed6/f0567dbeace7c9dbaa02b7b75570f3bc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VcBjwCD0RInP3I73w5kblIh4Vpu9-MuC2HuaqgJi~njfDHikawFU~VoNpvUV~SsP-raQ~kVwt4b11fpqh4datlt0JDNkp27YeLmIbndEml5QSlMJKuaZU5FeTtxQ2zG0OeHyCXrGotloADJj3FtgTMuCykCF3fFIteoxde79qGi4BdQHxiMXF9Yswbf-Mzq5Ywb-0-JHm9J7K5~hvaomvgkytOLNK-KbEpyrozd~lhDjEF7q3YOV5y42bd7ReCPdmNKftsJSDbt1IY-jlKElqexesscwtYm3x9uFqLJ-w83T3vR~86-imgBrOIql2DyOYbnBpIk4CkmudtvkZwi~gg__" },
    { id: 2, name: "Chair B", price: "$150", image: "https://s3-alpha-sig.figma.com/img/e70a/c286/dc012e6f46348c947e76cbc241026273?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lz6h2dwsV6h~BeDC~GtWfyCY2Bs3t~nzeUPNQKTUkLrKd3tyF8jHSpIBDPx13IKMKNjtpmPuzpNvvy6xPGepGL6fAmh-C33DgtQaYOjSbxtnj-rTokwdDekEEeCoSsU1BQnPwXw45iwrAM5VDpKpYGBI4bT6G5ajCf-mMRF7o9SZLfW8hxUg8scmSvpSZ3ErJNKUPm9Y3wz8PiyBFgmwaqjO5q5hpCPN-i~4kXLuKHy-ZqPrsjkcs4D~v4AZvtq8X~mzmMNdR6QRJXVuoVnGMDF7mbtCL6624CcaoHzuwl-t8bii6nmirt28uYtS30Unt4mS52AQSFWlN3F4TtnTrQ__" },
    { id: 3, name: "Table C", price: "$200", image: "https://s3-alpha-sig.figma.com/img/402f/024e/43e865f7def49808ba73dcffe65b6b21?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a9TsZrX2A3orFgb2Q5JUDSThZUlVgxiv0eBzovM5i0YurHcA5ssmfzrA6rzDIG8J8GLv4OR99cluiGtSIDankMAjSI27VEPpblVixZD8goiKcgVamfKnYOvGqsqN~YTuNEV6-eLarR8YFNTBJ9mj-uenIT7td5BBZSOCn0d0TR-1t-hBvmJwfz27kNVQMfSll66zvQEIqU3q3lxHNcZxcHPdZ7qP~McmmH~g05fBOwas2vHx-uMuwval1daOK9Vq7Co0i3ixwluTWFtaRJojj39ZM9ppxOnJNSWKw0gPrcVzbSA4M79Pv9AuaC10DT8C~hU04~c3K6gGerinUz2iCw__" },
    { id: 4, name: "Sofa D", price: "$350", image: "https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vle4opOHNd~2Wt8oBUZ0744MSJS~i1N9T8iEEKtblnP~mzPuaG3M8uy9JIwfPE67HxaSsHw4JUZ~O9suqi0XYdjKJHfyEoRE3b-F1cZ0AGSNxkD-dbG1quKKS99DL3nc45xeSZwoN0b5Qw3TQg5eB-BDf72nzkVxM23Onk5NwM16o~AFKBMcb1WRwja8QczAqrRdSloYkDQqUnw2KwLtUxgXmEGov5njVewvcWei5eU6mj6xuBZKgrqYMt7KlArVnxMU-dOHJReLNAvXDx5bkNJSuXX9RWAcBqO~qK7X3r3E3BspCNjNtCKKdRuzGMD9cP1XDe5Ix53swLRuxsCAHg__" },
   
 
 
 
  ];
  const TopCategories = [
    { id: 1, name: "Chair A", price: "$120", image: "https://s3-alpha-sig.figma.com/img/6eac/9ed6/f0567dbeace7c9dbaa02b7b75570f3bc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VcBjwCD0RInP3I73w5kblIh4Vpu9-MuC2HuaqgJi~njfDHikawFU~VoNpvUV~SsP-raQ~kVwt4b11fpqh4datlt0JDNkp27YeLmIbndEml5QSlMJKuaZU5FeTtxQ2zG0OeHyCXrGotloADJj3FtgTMuCykCF3fFIteoxde79qGi4BdQHxiMXF9Yswbf-Mzq5Ywb-0-JHm9J7K5~hvaomvgkytOLNK-KbEpyrozd~lhDjEF7q3YOV5y42bd7ReCPdmNKftsJSDbt1IY-jlKElqexesscwtYm3x9uFqLJ-w83T3vR~86-imgBrOIql2DyOYbnBpIk4CkmudtvkZwi~gg__" },
    { id: 2, name: "Chair B", price: "$150", image: "https://s3-alpha-sig.figma.com/img/e70a/c286/dc012e6f46348c947e76cbc241026273?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lz6h2dwsV6h~BeDC~GtWfyCY2Bs3t~nzeUPNQKTUkLrKd3tyF8jHSpIBDPx13IKMKNjtpmPuzpNvvy6xPGepGL6fAmh-C33DgtQaYOjSbxtnj-rTokwdDekEEeCoSsU1BQnPwXw45iwrAM5VDpKpYGBI4bT6G5ajCf-mMRF7o9SZLfW8hxUg8scmSvpSZ3ErJNKUPm9Y3wz8PiyBFgmwaqjO5q5hpCPN-i~4kXLuKHy-ZqPrsjkcs4D~v4AZvtq8X~mzmMNdR6QRJXVuoVnGMDF7mbtCL6624CcaoHzuwl-t8bii6nmirt28uYtS30Unt4mS52AQSFWlN3F4TtnTrQ__" },
    { id: 3, name: "Table C", price: "$200", image: "https://s3-alpha-sig.figma.com/img/402f/024e/43e865f7def49808ba73dcffe65b6b21?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a9TsZrX2A3orFgb2Q5JUDSThZUlVgxiv0eBzovM5i0YurHcA5ssmfzrA6rzDIG8J8GLv4OR99cluiGtSIDankMAjSI27VEPpblVixZD8goiKcgVamfKnYOvGqsqN~YTuNEV6-eLarR8YFNTBJ9mj-uenIT7td5BBZSOCn0d0TR-1t-hBvmJwfz27kNVQMfSll66zvQEIqU3q3lxHNcZxcHPdZ7qP~McmmH~g05fBOwas2vHx-uMuwval1daOK9Vq7Co0i3ixwluTWFtaRJojj39ZM9ppxOnJNSWKw0gPrcVzbSA4M79Pv9AuaC10DT8C~hU04~c3K6gGerinUz2iCw__" },
    { id: 4, name: "Sofa D", price: "$350", image: "https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vle4opOHNd~2Wt8oBUZ0744MSJS~i1N9T8iEEKtblnP~mzPuaG3M8uy9JIwfPE67HxaSsHw4JUZ~O9suqi0XYdjKJHfyEoRE3b-F1cZ0AGSNxkD-dbG1quKKS99DL3nc45xeSZwoN0b5Qw3TQg5eB-BDf72nzkVxM23Onk5NwM16o~AFKBMcb1WRwja8QczAqrRdSloYkDQqUnw2KwLtUxgXmEGov5njVewvcWei5eU6mj6xuBZKgrqYMt7KlArVnxMU-dOHJReLNAvXDx5bkNJSuXX9RWAcBqO~qK7X3r3E3BspCNjNtCKKdRuzGMD9cP1XDe5Ix53swLRuxsCAHg__" },
   
 
 
 
  ];

  return (
    <div>
      <Header />
      <Navbar />

      <img src="/image/promotion bg.png" alt="bg" />
      <img className="ml-[700px] absolute top-[141px] h-[500px]" src="/image/sofa promotional header.png" alt="" />
      <img className="absolute top-[250px] ml-48 h-[200px]" src="/image/header text.png" alt="" />
      <img
        className="absolute top-[90px] h-[280px]"
        src="https://s3-alpha-sig.figma.com/img/b0ab/7b45/906d2aaf430d5bb6b86d462a9e91a8af?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iJfZpnUewa1Qq5m4aXAAxwSqZXmk0sLkAgWlxyMRI0eMQRl-TYsSnAfv4RWtTyAVbDBLdC63vn0hdk80OM1nFm-fWjtyxWdxQt~zLdKLLe2JBidinQ~67JdPn2PRDYl6MoEmnDsWZH6GwZmKDhf1Ny-afECTH1OJvLPGBYuARMetJUozZuwkF4ac4FSeklIvgnjDLFkDNUiLvjZAQqmm~5C~newyDXs4xfD~ickNUGMQO3hiQNNeHfa9GRU2cDM2BFna87CftXZT2QQaME6lzpm-Wn0bdZlV2ftQTq5vTr7B4pw4dCTDyaTYBXYi299U3S2J994ILvi8U9CrD5P3VQ__"
        alt=""
      />

      {/* Featured Products Section */}
      <h1 className="text-2xl font-bold text-center mt-24">Featured Products</h1>


      {/* Product Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="bg-pink-600 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      <h2 className="text-center text-3xl font-bold text-blue-900 ">Latest Products</h2>
      <h1 className="text-lg ml-[400px] mt-4  flex space-x-12">
 <span>New Arrivals</span> 
<span>Best Seller</span> 
 <span>Featured</span>
  <span>Special Offer</span>
 
  
</h1>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LatestProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="bg-pink-600 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gray-50 py-16 mt-16">
        <h2 className="text-4xl font-bold text-center text-blue-800">What Shopex Offer!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-truck"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Free Delivery</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-undo-alt"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">100% Cash Back</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-green-500 text-4xl mb-4">
              <i className="fas fa-medal"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Quality Product</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </div>
      <img src="/image/promotion bg.png" alt="bg" />

<img className="absolute top-[3000px]" src="\image\unique feature sofa.png" alt="sofa" />
<a className="bg-pink-500 text-white px-11 py-3 absolute top-[3365px] ml-[550px]" href="">Add to Cart</a>

<section className="flex mt-12 ml-12 space-x-8">
  <div className="bg-pink-100 w-[420px] h-[290px]">
    <h1 className="text-blue-900 text-2xl ml-4 font-semibold">23% Off in all products</h1>
    <a className="text-pink-500 underline mt-12 ml-4" href=""> Shop Now </a>
    <img className="ml-48 mb-4" src="https://s3-alpha-sig.figma.com/img/429c/934a/dc8a953600bab29da0ff9265ab06bb80?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R4SPlyJMgGQV4pi9DQUO4Oh8zBPmPkpSX65oYeKwuvOzsSiVTZ7vELulKvzMegSRGXVMrV8~-a7ytTFvifgeEWRZxiyHgr5cCGEJZ7eZj7tmoB5ASkJjDPZS9Pu-rW6wHsg0brSFIPF1w~uQ9opMPqfnZka3pDYuJ0ZnupUAGhMcs7PRZNic~RFQ0sfNa1JgdX8KxC5sPpMeODjglQnIn0b3JMvdbSbN3OL0UEXpH297LJj0UEyoZrF0Mt-K2lTFKlWmRCpmof4lZmaGK3TyoCH9E-qsIFjmxePqGRcnyMsCB9CqCm~MpzgmR3DJaj9in7m8RWanyWJmGbRhnLll-Q__" alt="product" />
  </div>


  <div className="bg-purple-100 w-[420px] h-[290px]">
    <h1 className="text-blue-900 text-2xl ml-4 font-semibold">23% Off in all products</h1>
    <a className="text-pink-500 underline mt-12 ml-4" href=""> Shop Now </a>
    <img className="ml-12 mt-[-150px]" src="https://s3-alpha-sig.figma.com/img/5c7c/ebfc/bebf2952988250989ce526d7c72d8017?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JyKVRyECHX3nqLX6E3P0BTPFBrzlRuBMR62WLxj2hf5rVGBEgjc1iLZ24SDqGPfIQ07cRv9x2sGR~BGQJWxdsiJPZOQCzYCFuKYfswBKb4WlJvEOdI~zN744foP1NtEQV5iOdBVz8501aen~~0F1V9O9as8YRPU68-u93hEW2A9ySWQ3fDKyybuP2G6dYawNM9PlY2qmgRnC0-uMrGDnE4D2bakjw0O9MVVV4~a7UabpSjF14OQeBO6KYHfPhMEIUg5CEqcH1Fo7N3FQOaxfccMYEaq7gmjdGadsvVLFrY4W9yYHDl9cUnS-6q~9rkLwQlxHTwPk1IhPmvln81gQYw__" alt="product" />
  </div>
<li  ><img src="\image\Trnding products list.png" alt="img" />
<img src="\image\Trnding products list (2).png" alt="" />
<img src="\image\Trnding products list (1).png" alt="" />

</li>



</section>
<img className="ml-24" src="\image\discount sofa.png" alt="" />
<a className="bg-pink-500 text-white px-[64px] py-4 absolute top-[4260px] ml-24" href="">Shop Now</a>



<h1 className="text-3xl text-blue-900 font-bold text-center mt-24">Trending Products</h1>
  {/* Product Grid */}
  <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TrendingProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-auto h-auto object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="bg-pink-600 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
            </div>
          ))}
        </div> 
      </section>
      <h1 className="text-3xl text-blue-900 font-bold text-center mt-24">Top Categories</h1>

      
   
      {/* Product Grid in Circle Layout */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {TopCategories.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="w-48 h-48 flex items-center justify-center rounded-full shadow-md bg-white p-4">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-full" />
              </div>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>
     
    {/* Newsletter Section */}
    <section className="relative text-center">
        <img className="w-full h-[462px] object-cover" src="https://s3-alpha-sig.figma.com/img/fc5b/0171/c1d0c8969022c818d8d4ef9026d858fa?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TjWhq4cASKq8be8kuph-E3yR0W0I7TBGFQtOsfJQbC8ByadDE~wFos8ShhHxA8H0gMFv88bXH~lJ1aZtm6rSwa2Za0paKz-CVkr69saUS~VKMju3qBwrFL65JhBujUggnaGZ9hl9TxML-KxfNL~2-QY8Ja2KEa3rk0GP5kc7shckvXDLwomWRyLWTJla7ku78szQAO0DBbItKj4lQGHQP16B9qJ3uSKPymgHSojG43ORt9qK60LOI5HgxX5uAgaMOWjVIKxVaRkeqmyWb08AW4qNdCkT0iPrXwtvaNlfu2tKbeki5UASf8Xo1KjoStXl-w8JL6tzCSTZKRlYUtuoiw__" alt="Newsletter Background" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full max-w-lg">
          <h2 className="text-3xl text-blue-900 font-bold">Get Latest Update By Subscribe Our Newsletter</h2>
          <div className="mt-4 flex justify-center">
            <button className="ml-2 bg-pink-500 text-white px-12 py-2 ">Shop Now</button>
          </div>
        </div>
      </section>
      <img className="ml-32 mt-6 " src="https://s3-alpha-sig.figma.com/img/8b8f/73ef/0917d8479a5c41ee633cb4a6233f64b7?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JxTJWchXSnjD3WBTvieRxV0mGAnGZf6~scupDFthlCgkDCd65RaYyupp~30Aot2yNhFMfYD5MMfY8qBm2UmKVUjHPQULc~oztbU-40L42dCa3dA0b1prAc2MnyL933Q2i3FEdMTTaB4YIkqIvnpyodrOWfr9Bkdh4XHJDM15s-WnXFZDbVKDIhL2zackyppWejMU1IFT6X6Ah8ehQHuZh5QKDSMAAsZgiIyJP7UNeXaoC7JPABxJfMg15VcipvhwsePwJxo5r8p~ArJzAanKb5I8nKzHskXVtQbGqYawlTStoULwTQbbM76FwCPYsQXw0ut3C81HOL9mE~qKfrlZ6w__" alt="" />
<h1 className="text-4xl text-blue-900 text-center font-bold mt-6">Latest Blog</h1>

<section className="flex mt-12 ml-12 space-x-8 ">
<img className="w-[370px]" src="\image\Leatest blog.png" alt="" />
<img className="w-[370px]" src="\image\Leatest blog (1).png" alt="" />
<img className="w-[370px]" src="\image\Leatest blog (2).png" alt="" />

</section>

 <Footer />  
   </div>
  );
}
