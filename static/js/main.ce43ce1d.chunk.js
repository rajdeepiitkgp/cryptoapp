(this.webpackJsonpcryptoapp=this.webpackJsonpcryptoapp||[]).push([[0],{337:function(e,c,t){},339:function(e,c,t){"use strict";t.r(c);var a,s=t(0),n=t.n(s),r=t(26),i=t.n(r),l=t(30),j=t(27),o=t(342),d=t(344),h=t(351),b=t(43),u=t(348),x=t(194),O=t(350),p=t(352),m=t(353),v=t(354),g=t(355),y=t(356),f=t.p+"static/media/cryptocurrency.1548aced.png",N=t(4),w=d.a.Title,C=function(){var e=Object(s.useState)(!0),c=Object(b.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(null),r=Object(b.a)(n,2),i=r[0],j=r[1];return Object(s.useEffect)((function(){var e=function(){return j(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(s.useEffect)((function(){a(i>=768)}),[i]),Object(N.jsxs)("div",{className:"nav-container",children:[Object(N.jsxs)("div",{className:"logo-container",children:[Object(N.jsx)(u.a,{src:f,size:"large"}),Object(N.jsx)(w,{level:2,className:"logo",children:Object(N.jsx)(l.b,{to:"/",children:"Cryptoverse"})}),Object(N.jsx)(x.a,{className:"menu-control-container",onClick:function(){return a(!t)},children:Object(N.jsx)(p.a,{})})]}),t&&Object(N.jsxs)(O.a,{theme:"dark",children:[Object(N.jsx)(O.a.Item,{icon:Object(N.jsx)(m.a,{}),children:Object(N.jsx)(l.b,{to:"/",children:"Home"})}),Object(N.jsx)(O.a.Item,{icon:Object(N.jsx)(v.a,{}),children:Object(N.jsx)(l.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(N.jsx)(O.a.Item,{icon:Object(N.jsx)(g.a,{}),children:Object(N.jsx)(l.b,{to:"/exchanges",children:"Exchanges"})}),Object(N.jsx)(O.a.Item,{icon:Object(N.jsx)(y.a,{}),children:Object(N.jsx)(l.b,{to:"/news",children:"News"})})]})]})},k=t(28),S=t.n(k),P=t(347),T=t(90),E=t(52),M=t(343),q=t(120),A=t(40),F={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"ae4b4ae2f3msh9e51287d5501b2fp1f75afjsne15a91c5c97d"},I=function(e){return{url:e,headers:F}},L=Object(q.a)({reducerPath:"cryptoApi",baseQuery:Object(A.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return I("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return I("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timePeriod;return I("/coin/".concat(c,"/history/").concat(t))}}),getExchanges:e.query({query:function(){return I("/exchanges")}})}}}),H=L.useGetCryptosQuery,U=L.useGetCryptoDetailsQuery,V=L.useGetCryptoHistoryQuery,D=L.useGetExchangesQuery,Q=function(e){var c=e.simplified,t=H(c?10:100),a=t.data,n=t.isFetching,r=Object(s.useState)([]),i=Object(b.a)(r,2),j=i[0],o=i[1],d=Object(s.useState)(""),h=Object(b.a)(d,2),u=h[0],x=h[1];return Object(s.useEffect)((function(){var e,c=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));o(c)}),[a,u]),n?Object(N.jsx)(ve,{}):Object(N.jsxs)(N.Fragment,{children:[!c&&Object(N.jsx)("div",{className:"search-crypto",children:Object(N.jsx)(P.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return x(e.target.value)}})}),Object(N.jsx)(T.a,{gutter:[32,32],className:"crypto-card-container",children:null===j||void 0===j?void 0:j.map((function(e){return Object(N.jsx)(E.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(N.jsx)(l.b,{to:"/crypto/".concat(e.id),children:Object(N.jsxs)(M.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(N.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:""}),hoverable:!0,children:[Object(N.jsxs)("p",{children:["Price: ",S()(e.price)]}),Object(N.jsxs)("p",{children:["Market Cap: ",S()(e.marketCap)]}),Object(N.jsxs)("p",{children:["Daily Change: ",S()(e.change),"%"]})]})})},e.id)}))})]})},$=t(123),G=t(346),z=t(357),R=t(358),W=t(359),J=t(360),Z=t(124),_=t(361),B=t(197),K=d.a.Title,X=d.a.Text,Y=G.a.Option,ee=function(){var e,c=Object(j.f)().coinId,t=Object(s.useState)("7d"),a=Object(b.a)(t,2),n=a[0],r=a[1],i=U(c),l=i.data,o=i.isFetching,d=V({coinId:c,timePeriod:n}).data;if(o)return Object(N.jsx)(ve,{});var h=null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.coin,u=[{title:"Price to USD",value:"$ ".concat(h.price&&S()(h.price)),icon:Object(N.jsx)(z.a,{})},{title:"Rank",value:h.rank,icon:Object(N.jsx)(R.a,{})},{title:"24h Volume",value:"$ ".concat(h.volume&&S()(h.volume)),icon:Object(N.jsx)(W.a,{})},{title:"Market Cap",value:"$ ".concat(h.marketCap&&S()(h.marketCap)),icon:Object(N.jsx)(z.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(S()(h.allTimeHigh.price)),icon:Object(N.jsx)(J.a,{})}],x=[{title:"Number Of Markets",value:h.numberOfMarkets,icon:Object(N.jsx)(v.a,{})},{title:"Number Of Exchanges",value:h.numberOfExchanges,icon:Object(N.jsx)(g.a,{})},{title:"Aprroved Supply",value:h.approvedSupply?Object(N.jsx)(Z.a,{}):Object(N.jsx)(_.a,{}),icon:Object(N.jsx)(B.a,{})},{title:"Total Supply",value:"$ ".concat(S()(h.totalSupply)),icon:Object(N.jsx)(B.a,{})},{title:"Circulating Supply",value:"$ ".concat(S()(h.circulatingSupply)),icon:Object(N.jsx)(B.a,{})}];return Object(N.jsxs)(E.a,{className:"coin-detail-container",children:[Object(N.jsxs)(E.a,{className:"coin-heading-container",children:[Object(N.jsxs)(K,{level:2,className:"coin-name",children:[h.name," (",h.slug,") Price"]}),Object(N.jsxs)("p",{children:[h.name," Live Price in US dollars. View value statistics, market cap and supply."]})]}),Object(N.jsx)(G.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return r(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(N.jsx)(Y,{children:e},e)}))}),Object(N.jsx)(fe,{coinHistory:d,currentPrice:S()(h.price),coinName:h.name}),Object(N.jsxs)(E.a,{className:"stats-container",children:[Object(N.jsxs)(E.a,{className:"coin-value-statistics",children:[Object(N.jsxs)(E.a,{className:"coin-value-statistics-heading",children:[Object(N.jsxs)(K,{level:3,className:"coin-details-heading",children:[h.name," Value Statistics"]}),Object(N.jsxs)("p",{children:["An overview showing the stats of ",h.name]})]}),u.map((function(e){var c=e.title,t=e.value,a=e.icon;return Object(N.jsxs)(E.a,{className:"coin-stats",children:[Object(N.jsxs)(E.a,{className:"coin-stats-name",children:[Object(N.jsx)(X,{children:a}),Object(N.jsx)(X,{children:c})]}),Object(N.jsx)(X,{className:"stats",children:t})]})}))]}),Object(N.jsxs)(E.a,{className:"other-stats-info",children:[Object(N.jsxs)(E.a,{className:"coin-value-statistics-heading",children:[Object(N.jsx)(K,{level:3,className:"coin-details-heading",children:"Other Statistics"}),Object(N.jsx)("p",{children:"An overview showing the stats of all cryptocurrencies"})]}),x.map((function(e){var c=e.title,t=e.value,a=e.icon;return Object(N.jsxs)(E.a,{className:"coin-stats",children:[Object(N.jsxs)(E.a,{className:"coin-stats-name",children:[Object(N.jsx)(X,{children:a}),Object(N.jsx)(X,{children:c})]}),Object(N.jsx)(X,{className:"stats",children:t})]})}))]})]}),Object(N.jsxs)(E.a,{className:"coin-desc-link",children:[Object(N.jsx)(T.a,{className:"coin-desc",children:Object(N.jsxs)(K,{level:3,className:"coin-details-heading",children:["What is ",h.name,Object($.a)(h.description)]})}),Object(N.jsxs)(E.a,{className:"coin-links",children:[Object(N.jsxs)(K,{level:3,className:"coin-details-heading",children:[h.name," Links"]}),h.links.map((function(e){return Object(N.jsxs)(T.a,{className:"coin-link",children:[Object(N.jsx)(K,{level:5,className:"link-name",children:e.type}),Object(N.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},ce=t(349),te=d.a.Text,ae=ce.a.Panel,se=function(){var e,c=D(),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.exchanges;return a?Object(N.jsx)(ve,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(T.a,{children:[Object(N.jsx)(E.a,{span:6,children:"Exchanges"}),Object(N.jsx)(E.a,{span:6,children:"24h Trade Volume"}),Object(N.jsx)(E.a,{span:6,children:"Markets"}),Object(N.jsx)(E.a,{span:6,children:"Change"})]}),Object(N.jsx)(T.a,{children:Object(N.jsx)(E.a,{span:24,children:s.map((function(e){return Object(N.jsx)(ce.a,{children:Object(N.jsx)(ae,{showArrow:!1,header:Object(N.jsxs)(T.a,{children:[Object(N.jsxs)(E.a,{span:6,children:[Object(N.jsx)(te,{children:Object(N.jsxs)("strong",{children:[e.rank,"."]})}),Object(N.jsx)(u.a,{className:"exchange-image",src:e.iconUrl}),Object(N.jsx)(te,{children:Object(N.jsx)("strong",{children:e.name})})]}),Object(N.jsxs)(E.a,{span:6,children:["$",S()(e.volume)]}),Object(N.jsx)(E.a,{span:6,children:S()(e.numberOfMarkets)}),Object(N.jsxs)(E.a,{span:6,children:[S()(e.marketShare),"%"]})]},e.id),children:Object($.a)(e.description||"")},e.id)})}))})})]})},ne=t(185),re=t.n(ne),ie={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"ae4b4ae2f3msh9e51287d5501b2fp1f75afjsne15a91c5c97d"},le=Object(q.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(A.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var c=e.newsCategory,t=e.count;return{url:"/news/search?q=".concat(c,"&safeSearch=off&textFormat=Raw&freshness=Day&count=").concat(t),headers:ie}}})}}}),je=le.useGetCryptoNewsQuery,oe=d.a.Text,de=d.a.Title,he=G.a.Option,be="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",ue=function(e){var c,t=e.simplified,a=Object(s.useState)("Cryptocurrency"),n=Object(b.a)(a,2),r=n[0],i=n[1],l=je({newsCategory:r,count:t?6:12}).data,j=H(100).data;return(null===l||void 0===l?void 0:l.value)?Object(N.jsxs)(T.a,{gutter:[24,24],children:[!t&&Object(N.jsx)(E.a,{span:24,children:Object(N.jsxs)(G.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return i(e)},filterOption:function(e,c){return c.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(N.jsx)(he,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===j||void 0===j||null===(c=j.data)||void 0===c?void 0:c.coins.map((function(e){return Object(N.jsx)(he,{value:e.name,children:e.name})}))]})}),l.value.map((function(e,c){var t,a,s,n,r,i;return Object(N.jsx)(E.a,{xs:24,sm:12,lg:8,children:Object(N.jsx)(M.a,{hoverable:!0,className:"news-card",children:Object(N.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(N.jsxs)("div",{className:"news-image-container",children:[Object(N.jsx)(de,{className:"news-title",level:4,children:e.name}),Object(N.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl)||be,alt:"news"})]}),Object(N.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(N.jsxs)("div",{className:"provider-container",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(u.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl)||be,alt:""}),Object(N.jsx)(oe,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(N.jsx)(oe,{children:re()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))]}):Object(N.jsx)(ve,{})},xe=t(345),Oe=d.a.Title,pe=function(){var e,c=H(10),t=c.data,a=c.isFetching,s=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return a?Object(N.jsx)(ve,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Oe,{level:2,className:"Heading",children:"Global Crypto Stats"}),Object(N.jsxs)(T.a,{children:[Object(N.jsx)(E.a,{span:12,children:Object(N.jsx)(xe.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(N.jsx)(E.a,{span:12,children:Object(N.jsx)(xe.a,{title:"Total Exchanges",value:S()(s.totalExchanges)})}),Object(N.jsx)(E.a,{span:12,children:Object(N.jsx)(xe.a,{title:"Total Market Cap",value:S()(s.totalMarketCap)})}),Object(N.jsx)(E.a,{span:12,children:Object(N.jsx)(xe.a,{title:"Total 24h Volume",value:S()(s.total24hVolume)})}),Object(N.jsx)(E.a,{span:12,children:Object(N.jsx)(xe.a,{title:"Total Markets",value:S()(s.totalMarkets)})})]}),Object(N.jsxs)("div",{className:"home-heading-container",children:[Object(N.jsx)(Oe,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(N.jsx)(Oe,{level:3,className:"show-more",children:Object(N.jsx)(l.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(N.jsx)(Q,{simplified:!0}),Object(N.jsxs)("div",{className:"home-heading-container",children:[Object(N.jsx)(Oe,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(N.jsx)(Oe,{level:3,className:"show-more",children:Object(N.jsx)(l.b,{to:"/news",children:"Show More"})})]}),Object(N.jsx)(ue,{simplified:!0})]})},me=t(341),ve=function(){return Object(N.jsx)("div",{className:"loader",children:Object(N.jsx)(me.a,{})})},ge=t(191),ye=d.a.Title,fe=function(e){for(var c,t=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],r=[],i=0;i<(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length);i++){var l,j;n.push(t.data.history[i].price),r.push(new Date(t.data.history[i].timestamp).toLocaleDateString())}var o={labels:r,datasets:[{label:"Price in USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(T.a,{className:"chart-header",children:[Object(N.jsxs)(ye,{level:2,className:"chart-title",children:[s," Price Chart"]}),Object(N.jsxs)(E.a,{className:"price-container",children:[Object(N.jsxs)(ye,{level:5,className:"price-change",children:[null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(N.jsxs)(ye,{level:5,className:"current-price",children:["Current ",s," Price: $ ",a]})]})]}),Object(N.jsx)(ge.a,{data:o,option:{scales:{yAsis:[{ticks:{beginAtZero:!0}}]}}})]})},Ne=(t(337),function(){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)("div",{className:"navbar",children:Object(N.jsx)(C,{})}),Object(N.jsxs)("div",{className:"main",children:[Object(N.jsx)(o.a,{children:Object(N.jsx)("div",{className:"routes",children:Object(N.jsxs)(j.c,{children:[Object(N.jsx)(j.a,{exact:!0,path:"/",children:Object(N.jsx)(pe,{})}),Object(N.jsx)(j.a,{exact:!0,path:"/exchanges",children:Object(N.jsx)(se,{})}),Object(N.jsx)(j.a,{exact:!0,path:"/news",children:Object(N.jsx)(ue,{})}),Object(N.jsx)(j.a,{exact:!0,path:"/cryptocurrencies",children:Object(N.jsx)(Q,{})}),Object(N.jsx)(j.a,{exact:!0,path:"/crypto/:coinId",children:Object(N.jsx)(ee,{})})]})})}),Object(N.jsxs)("div",{className:"footer",children:[Object(N.jsxs)(d.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(N.jsx)("br",{}),"All rights reserved"]}),Object(N.jsxs)(h.b,{children:[Object(N.jsx)(l.b,{to:"/",children:"Home"}),Object(N.jsx)(l.b,{to:"/exchanges",children:"Exchanges"}),Object(N.jsx)(l.b,{to:"/news",children:"News"})]})]})]})]})}),we=(t(338),t(29)),Ce=t(11),ke=Object(Ce.a)({reducer:(a={},Object(we.a)(a,L.reducerPath,L.reducer),Object(we.a)(a,le.reducerPath,le.reducer),a)}),Se=t(37);i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(l.a,{children:Object(N.jsx)(Se.a,{store:ke,children:Object(N.jsx)(Ne,{})})})}),document.getElementById("root"))}},[[339,1,2]]]);
//# sourceMappingURL=main.ce43ce1d.chunk.js.map