(this.webpackJsonpcryptoapp=this.webpackJsonpcryptoapp||[]).push([[0],{254:function(e,t,c){},256:function(e,t,c){"use strict";c.r(t);var r,s=c(0),a=c(26),n=c.n(a),i=c(29),l=c(27),o=c(260),j=c(262),d=c(268),O=c(266),b=c(267),h=c(269),x=c(270),u=c(271),p=c(272),v=c.p+"static/media/cryptocurrency.1548aced.png",m=c(6),_=function(){return Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsxs)("div",{className:"logo-container",children:[Object(m.jsx)(O.a,{src:v,size:"large"}),Object(m.jsx)(j.a.Title,{level:2,className:"logo",children:Object(m.jsx)(i.b,{to:"/",children:"Cryptoverse"})})]}),Object(m.jsxs)(b.a,{theme:"dark",children:[Object(m.jsx)(b.a.Item,{icon:Object(m.jsx)(h.a,{}),children:Object(m.jsx)(i.b,{to:"/",children:"Home"})}),Object(m.jsx)(b.a.Item,{icon:Object(m.jsx)(x.a,{}),children:Object(m.jsx)(i.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(m.jsx)(b.a.Item,{icon:Object(m.jsx)(u.a,{}),children:Object(m.jsx)(i.b,{to:"/exchanges",children:"Exchanges"})}),Object(m.jsx)(b.a.Item,{icon:Object(m.jsx)(p.a,{}),children:Object(m.jsx)(i.b,{to:"/news",children:"News"})})]})]})},S=c(88),T=c(52),C=c.n(T),E=c(263),y=c(80),P=c(48),N=c(261),g=c(108),f=c(37),R={"x-rapidapi-host":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CRYPTO_RAPIDAPI_HOST,"x-rapidapi-key":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_RAPIDAPI_KEY},w=Object(g.a)({reducerPath:"cryptoApi",baseQuery:Object(f.d)({baseUrl:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CRYPTO_API_URL}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return{url:"/coins?limit=".concat(e),headers:R}}})}}}),A=w.useGetCryptosQuery,D=function(e){var t=e.simplified,c=A(t?10:100),r=c.data,a=c.isFetching,n=Object(s.useState)([]),l=Object(S.a)(n,2),o=l[0],j=l[1],d=Object(s.useState)(""),O=Object(S.a)(d,2),b=O[0],h=O[1];return Object(s.useEffect)((function(){var e,t=null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));j(t)}),[r,b]),a?Object(m.jsx)(Z,{}):Object(m.jsxs)(m.Fragment,{children:[!t&&Object(m.jsx)("div",{className:"search-crypto",children:Object(m.jsx)(E.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return h(e.target.value)}})}),Object(m.jsx)(y.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(m.jsx)(P.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(m.jsx)(i.b,{to:"/crypto/".concat(e.id),children:Object(m.jsxs)(N.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(m.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:""}),hoverable:!0,children:[Object(m.jsxs)("p",{children:["Price: ",C()(e.price)]}),Object(m.jsxs)("p",{children:["Market Cap: ",C()(e.marketCap)]}),Object(m.jsxs)("p",{children:["Daily Change: ",C()(e.change),"%"]})]})})},e.id)}))})]})},H=function(){return Object(m.jsx)("div",{children:"CryptoDetails"})},I=function(){return Object(m.jsx)("div",{children:"Exchanges"})},W=c(265),K=c(147),F=c.n(K),L={"x-bingapis-sdk":"true","x-rapidapi-host":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NEWS_RAPIDAPI_HOST,"x-rapidapi-key":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_RAPIDAPI_KEY},U=Object(g.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(f.d)({baseUrl:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NEWS_API_URL}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=off&textFormat=Raw&freshness=Day&count=").concat(c),headers:L}}})}}}),k=U.useGetCryptoNewsQuery,V=j.a.Text,M=j.a.Title,B=W.a.Option,q="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",Q=function(e){var t,c=e.simplified,r=Object(s.useState)("Cryptocurrency"),a=Object(S.a)(r,2),n=a[0],i=a[1],l=k({newsCategory:n,count:c?6:12}).data,o=A(100).data;return(null===l||void 0===l?void 0:l.value)?Object(m.jsxs)(y.a,{gutter:[24,24],children:[!c&&Object(m.jsx)(P.a,{span:24,children:Object(m.jsxs)(W.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return i(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(m.jsx)(B,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.coins.map((function(e){return Object(m.jsx)(B,{value:e.name,children:e.name})}))]})}),l.value.map((function(e,t){var c,r,s,a,n,i;return Object(m.jsx)(P.a,{xs:24,sm:12,lg:8,children:Object(m.jsx)(N.a,{hoverable:!0,className:"news-card",children:Object(m.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(m.jsxs)("div",{className:"news-image-container",children:[Object(m.jsx)(M,{className:"news-title",level:4,children:e.name}),Object(m.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(r=c.thumbnail)||void 0===r?void 0:r.contentUrl)||q,alt:"news"})]}),Object(m.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(m.jsxs)("div",{className:"provider-container",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(O.a,{src:(null===(s=e.provider[0])||void 0===s||null===(a=s.image)||void 0===a||null===(n=a.thumbnail)||void 0===n?void 0:n.contentUrl)||q,alt:""}),Object(m.jsx)(V,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(m.jsx)(V,{children:F()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(m.jsx)(Z,{})},G=c(264),Y=j.a.Title,z=function(){var e,t=A(10),c=t.data,r=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return r?Object(m.jsx)(Z,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Y,{level:2,className:"Heading",children:"Global Crypto Stats"}),Object(m.jsxs)(y.a,{children:[Object(m.jsx)(P.a,{span:12,children:Object(m.jsx)(G.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(m.jsx)(P.a,{span:12,children:Object(m.jsx)(G.a,{title:"Total Exchanges",value:C()(s.totalExchanges)})}),Object(m.jsx)(P.a,{span:12,children:Object(m.jsx)(G.a,{title:"Total Market Cap",value:C()(s.totalMarketCap)})}),Object(m.jsx)(P.a,{span:12,children:Object(m.jsx)(G.a,{title:"Total 24h Volume",value:C()(s.total24hVolume)})}),Object(m.jsx)(P.a,{span:12,children:Object(m.jsx)(G.a,{title:"Total Markets",value:C()(s.totalMarkets)})})]}),Object(m.jsxs)("div",{className:"home-heading-container",children:[Object(m.jsx)(Y,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(m.jsx)(Y,{level:3,className:"show-more",children:Object(m.jsx)(i.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(m.jsx)(D,{simplified:!0}),Object(m.jsxs)("div",{className:"home-heading-container",children:[Object(m.jsx)(Y,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(m.jsx)(Y,{level:3,className:"show-more",children:Object(m.jsx)(i.b,{to:"/news",children:"Show More"})})]}),Object(m.jsx)(Q,{simplified:!0})]})},J=c(259),Z=function(){return Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)(J.a,{})})},X=(c(254),function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)(_,{})}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(o.a,{children:Object(m.jsx)("div",{className:"routes",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(z,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/exchanges",children:Object(m.jsx)(I,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/news",children:Object(m.jsx)(Q,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/cryptocurrencies",children:Object(m.jsx)(D,{})}),Object(m.jsx)(l.a,{exact:!0,path:"/crypto/:coinId",children:Object(m.jsx)(H,{})})]})})}),Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)(j.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(m.jsx)("br",{}),"All rights reserved"]}),Object(m.jsxs)(d.b,{children:[Object(m.jsx)(i.b,{to:"/",children:"Home"}),Object(m.jsx)(i.b,{to:"/exchanges",children:"Exchanges"}),Object(m.jsx)(i.b,{to:"/news",children:"News"})]})]})]})]})}),$=(c(255),c(123)),ee=c(10),te=Object(ee.a)({reducer:(r={},Object($.a)(r,w.reducerPath,w.reducer),Object($.a)(r,U.reducerPath,U.reducer),r)}),ce=c(35);n.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(ce.a,{store:te,children:Object(m.jsx)(X,{})})}),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.95816e2b.chunk.js.map