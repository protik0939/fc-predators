import React, { useRef, useState, useEffect, useContext, Component } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa';
import { FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';
import { MdCast, MdFullscreen, MdFullscreenExit, MdPictureInPictureAlt } from 'react-icons/md';
import logo from '../../assets/fcplogo.svg'
import './LiveTV.css';
import { AuthContext } from '../../Provider/AuthProvider';
import NotAuthorized from '../NotAuthorized/NotAuthorized';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Helmet } from 'react-helmet-async';





const premiereLeague = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbZO8wT11oXlTFL1nn4Gpcf76uGH7ttWEaobQWm3FjvGidRU2BZTtxwbbsQN09ShsJSG_HN9BZcZX1jKtpNQs4nKDs68loAYMen-M2ifAzH0uO-GoK81vrKyGdHG7yPV3fPIXU6Y64ORah66jhinGWaNV-o0QIBANRfOpWwd0EnoyQrBs8F6j0UHtcS1HG/s1600/prmlg.webp';
const laliga = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgELTq09THvB76GiMlRkZG4d0jo8BKWMZlyQdCE93vt4kc1_kIAyeIUE3emq8e7SscJ6r2K035Gh_tFngG-HkLOWaG_pjC-vIsU3CHUV-dmuDt-EnNQxe0-uIXbHZCiW3pIPhc-xeFL25vkmyLUtyVAdPqKDlJduBc9wt12pciG6L1Uowk6IfoLfo2ttpzn/s1600/llg.webp';

const placeHolderImage = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK3xQMXb_p7fMnM-dRuSdd04ey-05FIS205gu9O6qHGhEqdcMYR-wXNTMVQMXZy336rlHbd6mGmM4nKm2_LmkiNPAFxlYzkvi58ud_mjDWpNJrwSOuMlsjTUKoKoB_FyuHE6IoKdGVkajIYbfls_qZq5iQ5fqbgkSsqxOGULRPGy6Ht2R1WGS1c9MnjhCZ/s1600/placeholder.webp";


const LiveTV = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);


    if (user?.email === 'protik0939@gmail.com' || user?.email === 'ishmakrahat02@gmail.com' || user?.email === 'jubairsiyum@gmail.com' || user?.email === 'ariffaisal895@gmail.com' || user?.email === 'msabbir081@gmail.com' || user?.email === 'rakibripa827@gmail.com' || user?.email === 'raghibshahriar990@gmail.com') {

        const channels = [
            {
                "cId": "0001",
                "cName": "Somoy TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Al3msyd24nKH0SN8HH4Q320E5bRIwxpUE-3gwMvcwbqqmHVbor1gQjvYX-7GUFLeX9oOMKJ5iF4dr0FvAj1gSKXQYo4xaVFdZngary283DpPLbRczwTQ6Oxh96Lf-_IK9esZz1LxaanotRz9RKdxHYJu18U80kO37c-JV8iB0V6IucemPOmYGLShIEmu/s1600/image_2024-08-25_205855532.png",
                "cLink": "https:\u002F\u002Fcustomer-t0nw9oic5pvyrmd4.cloudflarestream.com\u002F0e4195487bdb9b9dd9a2182651430e50\u002Fmanifest\u002Fvideo.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0002",
                "cName": "Deepto Tv",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVj9yd8SPc6IxZhh4KNHo1xBxzY0Yy_vzNC5HmxGIuCwdeGVacofLedyIb6SEsD2LiVUPi51nHsPDhOh4qLDKkkrB0K8_g6RqBmkDjMqoDTIiZHJCMWdEzvLzMM_fZH4XzPX9WGatcy8b1wI4XdwljHHRbp1AhrAYmc9HTw8UCf9Dj1ECXz4PgSLbbPheM/s1600/image_2024-08-25_205228391.png",
                "cLink": "https://byphdgllyk.gpcdn.net/hls/deeptotv/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0003",
                "cName": "Vision Plus TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPkmDfNkT5OsViQeB1pB9toicj3rnhVzwBMZ1OZ8J_U69iBQgLDZD4P36mh1XT6lJbl8wE5KlFsxbGPLMxI32bAzC_SzesxtzQoAYZCIbGK2rDiK8_ciOIuE-gcSfd5hgheuolOS9EoIz7S4ZWYIEf1oRtFFBCwR_Yb0qiMmg6_Zh2XPdQQRZTvrmnKBol/s1600/image_2024-08-25_105407886.png",
                "cLink": "https://fe.tring.al/delta/105/out/u/rdghfhsfhfshs.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0004",
                "cName": "ATN International",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVxGV78U7yFfm6kwuYN18FVWqQH8VCDsVLgM7QaEWl2rbuYUKlEpB7CvsfcxPnHkgi7C5xQxLcZhloB9RSIw361DFqapVktFuNH9K9CFZvQLoXOa1ZUE8c0tQJMj2nRTUdeCmo0mKbjv6svzxhgqhfS2McompBOqmj-pXABw-URiz8S__uszzAewrl_N7_/s1600/image_2024-08-25_105656467.png",
                "cLink": "https://d10rltuy0iweup.cloudfront.net/ATNINT/myStream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0005",
                "cName": "Sarjah Sports",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJDlDh-KttzJpXYNtqPHQryNFACcUuleIJohyphenhyphenX3l-rloraMAfe3a844S39YRPS5SAqXqcv2CWK3Tqm-fY6aloOhdOyebFZcO8lH8V2K0Kk6WMtuOW68S2L9dHCbC13NrwKSXDv1xAJz4yCPbzaNNcT5X5uKb1kgz5PCd9klMv5PRCfANLWpRmbFI5NKlk6/s1600/image_2024-08-25_110454528.png",
                "cLink": "https://svs.itworkscdn.net/smc4sportslive/smc4.smil/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0006",
                "cName": "Oman Sports",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhipz923iXGo2-sZKhNOBuNLHDJFHfaSChm2-mzcy59j_RwNXLhTk8AEZJNbuG7KZAItx7ynSr8NDXHAqtmugCIbV9T5i22yQZ0BFrpTIYYyzhJWP97TTagtscAEPM-g63jHfYFV5X7udOLl7Wluc3rb-T99e4tIZfmE0FCECdPZkzw131Tc-Ihp3zV8QjH/s1600/image_2024-08-25_120141380.png",
                "cLink": "https://partneta.cdn.mgmlcdn.com/omsport/smil:omsport.stream.smil/chunklist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0007",
                "cName": "RedBull TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAxXKXOHJr9dC6TtYGt4BSw-AmnITl9zyL4WO32UPSQIBVMXycXEbe0augWDGIujhmN532qkNItW9OGGfGy_E3j9Gntn0L2ihmsJlHacEQE1rvbbd57lztOJ9M8uaYP6wYhYA33rYMuS33CUMNPVhTi7sZrD7jwSc9qqfnrGAVogfc46cAFmLpqF7KD61J/s1600/image_2024-08-25_115419305.png",
                "cLink": "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0008",
                "cName": "CBS News",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU8rUDtLbbyfzxSDNFEnT9Rjjdgvl4HyWBur7uxL9KO1olGSeJWt1bj2KEPDUk0eInRJgd8T_sClg4tm5xyYu9lpsaP6f6eoUOfu-dmqGNWCay2GYB7c_IozEEvDQm8iSSTOu-Vld_0xeM0AqpEiXDhTDc4KyN7OmhdOMbVl2tPMEfet0VP_CLhtP1p64P/s1600/image_2024-08-25_153530426.png",
                "cLink": "https://dai.google.com/linear/hls/pb/event/Sid4xiTQTkCT1SLu6rjUSQ/stream/a4ef1f71-859e-4772-83f1-8123e12b8877:SIN2/variant/cdd90446ee9f709158c636691ce72a2c/bandwidth/288926.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0009",
                "cName": "Ekushey ETV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv1UfTh_1xNIbyUl5bAff7eaBAHLuttnRjPXv02GjWkZGxiIBTI4s8wXiPxafPsnP9qDd0z52IncSI5DJqjzQ4ozHOOCWCnLRpaBmd9aQJ9jOQWZvTNRsfgWPTaIJk9Cv3TH5oKP8SNUpv7HBZsgDDjcRyveK-UCEvqhcyDZcqMRkP5oW6nwvs7dSNa8U0/s1600/image_2024-08-26_133340246.png",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ekusheytv-8-org.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "00010",
                "cName": "Al Arabiya",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBM_CRl0lEwKS1wIDciOb1xZAsy6pw93O6ZTMcoOlk3FaOO57KoeO4W1zsYzwggtyUv34uiw5PlSdH16iHW2USL1gzTIj_TBdWbnU-bxgqtmgwWCBsCTOEJuxMV9hghRS6EyhQmMnvMwg2f7TaX782ZpWenJBwTiBu57OIMVtjnSW69_1qJRA-a06E1pbG/s1600/image_2024-08-25_204008851.png",
                "cLink": "https://shls-live-ak.akamaized.net/out/v1/f5f319206ed740f9a831f2097c2ead23/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0011",
                "cName": "Report TV HD",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX6MFTwgZKMnwFWiswqp3pbVHKzN-mzCn6jOM12412OMvTFvXmjeUkZv04jVMR-wNAExYB6L8c6x-KTxS3DDhP6FUxp1YRPWMu7Mp9N_EY7qUln74g_pV8dm6yqQih3UB-H_PZzQqxjDQ79By1kxcStiApH5tNOcKlOQeWPYoUDwOYJUkOdoBZgFWULVy3/s1600/image_2024-08-25_105042346.png",
                "cLink": "https://deb10stream.duckdns.org/hls/stream.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0012",
                "cName": "Astro Awani",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzDCwAJTNdOYpKCbn8roVi2ytXgPWIf1SiCwgQSXHqHsPKcUQNQguQT2GcR7kh4I0XSXV8vmHwDW3d01KkAeO2C2HKTrDx0GKF7ijQfFM66TKVT4UVOB122dJoS029DxzXOj5TVnFoP8BUOo-YoDOkOGiXhV2YQLCZgRgXbNOeHjjdBsPPkkviB-gsazp1/s1600/astroawani.webp",
                "cLink": "https://d2idp3hzkhjpih.cloudfront.net/out/v1/4b85d9c2bf97413eb0c9fd875599b837/index_3.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0013",
                "cName": "Rakuten Action Movie",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZfdZTaXNiAuGyxpOS_gOcSwXEN2rY3A0LqEVGVZkDE_VXKmR9trkefseJTQVowkdvIkQ3xP5NIF4Kksf_0UueLWBE3e7pHa_y0kEFnpE0kIUM6CQ3hbfJg_Tl_sd6yxaa0KcZKivgjq7ys5tSmhGGYdiLc7n3pXwd_tY6ZfgsHh8ZHlawXJnyUWL2Z7de/s1600/rtac.webp",
                "cLink": "https://0f846627524f4dd2995e93581379db82.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenActionMovies-1/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0014",
                "cName": "Rakuten Comedy Movie",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcDkOgf7xUyLVDKlxknZAP70v7tKCErG5xgC8hFU078L5JeVa5Z4CW3TupSVCO9NfxVUKFJcRzOjtTowzrTfXk_Qb-H1aEkpe-l0_gM9pUZUc8IXqSDN5jk0wqigIRP5bblpuY9rYXBFvwRD6eKLeAw0JuRQXl5i_6UUCY-EalDg01_a3ARzg3xxRLgLY8/s1600/rtcd.webp",
                "cLink": "https://7ed752b220a441b7b22bdf697c6c4df8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenComedyMovies-1/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0015",
                "cName": "Rakuten Drama Movie",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAl0C8juCM0uvn13bQ2fAokbIvdayB5CAN8oeSdnEkPNSFtsKYDjh9l0MHEs8TCX_R67lyBH5WSuZ9kNs2xy4I7a8YRX-DxDt1joaqm51IHwIbojFep9hoJNZi8rw_our96Llli7lD1CEMW9ddCEchP9YZRU5JT7KrlP8_7Kv8KqmkAmKwtKbRC5iiySBQ/s1600/rtdm.webp",
                "cLink": "https://df1aa472ff5b4780a8d91fe319778b4d.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenTVShows-1/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0016",
                "cName": "Rakuten Family Movie",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnkZp2AoWla8cA34ndE1fnRFi9SaQ1ZFXrV2ublnNj5hPh9thwojVhLFrtVu4bmp8__GoKm1y0VFFqI7AJs5GF-nJrd1O59k11SS72aVR_rDypOutoQ0CH9wcdiIY3wPbzrKUGz02oXAhZjG1fKPeJYxEO_N0M5MpKyXelg9OmbvXNJ-kXkRU0xZsF_-sr/s1600/rtfm.webp",
                "cLink": "https://9fa8baba055e4a52b0a8d1ae7d78bed8.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-at_RakutenFamily-1/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0017",
                "cName": "ABC News",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmMoC3UB71E9VUsaAgrbBkHgA2YGdkSzocBbDrSXp8_aGFmxCj562E5dYWSWYlp5TVujbk7nDR23BmrZnehKblMJvmM28qeF4R5do3nnAbhmpuURxV9aqTrdP5nSYb4nTxIICS5_qIQp9IcpiFxhyZQjCVKmFfF15Bg6DwmKjLhOFbQPl9YDfEhXIgyEYK/s1600/image_2024-08-25_213655009.png",
                "cLink": "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0018",
                "cName": "Zee Bangla HD",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikspKEGVePfVXM51dEr-WJmOBfHwd2CtBt6RkF33qIPWJHlHFAwQJoMj15aSAzZ-jP0MuuPfDEvManvz-3ppy2NE6fCIAbcCqC42R2EjTJ9XktUfzzVFOq97M9ey82R6xXf-UMgFGOtY3v4XlGjsPOA_VTjdQAZieU0GmUBe6gJkepGQhZXUYqNwbscm4j/s1600/zbhd.webp",
                "cLink": "https://entezeetv.fun/bdcast/hls/index.m3u8?id=2oxadfdx&e=.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0019",
                "cName": "9xm",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJarTsB7xYOQK0UZOZbZQpQTyvhPw6b0woR2rmDjDx9k7WCr-4418ykiUoF298PFsjOto1X5lBRKLHmSEMaq8mByeNLtgwsWmkC-oL37iNPc7bYF5z-3n1xTqM9lnInhU4g2tSpiClUW7SuBfJa88UOLsGuNHCygBk1OyeUNWzTFOrxAklcXJWu1WVZX8A/s1600/image_2024-08-26_135218705.png",
                "cLink": "https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0020",
                "cName": "BBC News",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO8cNAzsI3oIUesgX8iLARXpiYOvBlDe_-U1oDopn3eIFDecnnGC8acZIn50zzsq67LDqf6PiRMZzrfG4TZP20krg37qHU2izYubSkez7uHLpBJ68j8Tx4I-bJlSCa8BeagPjKlPoxHljatNyiWcZlSMMexKj0BbzgF5Yk_Awvf7c7xIjQ2E_wS1a0w92s/s1600/image_2024-08-26_133630988.png",
                "cLink": "https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0021",
                "cName": "NHK World",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3YRvclHTxX_BXSMe1nwUbzI48ZZ7K6IgxjAOyDu907BBCgHWXq8GpdJoCkSeECpt8y983mCoo6GePmCx6NdqfR1IBqifbryV44srlfaTN5-N-lecuszTTlQRGGZSttJsb0Z85y3PbgXjR6CK0tVmMkYqvQOwELq2Enawrzw-E9z2x6HNUID_E4aNk-IvN/s1600/nhkworld.webp",
                "cLink": "https://cdn.nhkworld.jp/www11/nhkworld-tv/bmcc-live/es/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0022",
                "cName": "More Than Tv Sports",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikl0k3Rec-fyJlgCdWwihLDjj5RBEBCgeRbyLQ3xpVRJqzymui2uwkVZHD_GIvE3Zhi1iFmym9SE632b8qhr9SqBNrxdIRU5waW33JqxrgLH8b7j3Ny89JZZAVdL5LKu-VqbJfEkvesQ7ZaogyvilQnH-ocqqHg-F99AQw0-p1TLzqVrhdJKfO51qnPq1X/s1600/image_2024-08-26_023015062.png",
                "cLink": "https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0023",
                "cName": "Channel S",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5O2wPe_NvC4UQq86T9u1zqO4Xiw6zEFWMukjw5Qzi-7p5iLRM1wpvJsSXZ-8KCjjpc0nqxIDxW3ea6edeMF0I5yh5xEBBEzqamw_TPzzo667EvFJNjZtmDL3sAuxrz3V-6UIB-i5NjLAxtR951nPOvE4Ewz1zLipZ5F2EuQo5RBxA2-337nHVWySeRSZC/s1600/channel%20s.webp",
                "cLink": "https://amigofx.com:1936/channelsreporter/channelsreporter/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0024",
                "cName": "Baharain Sports 1",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMmhp5D1Ct7SxsQnkpPN1SiiwwVafqCflT-NQkcTZq-x8C2Vg0zkKhAdX23zis3XCxsAwuotKXkkwCFVXoNuwh2d8cEmWBIfcPpZqyl0o-pzHX8vcOchQ3IpjcGxgt06wM6k7ufjaxzkWZhtcfh94dfAQdeCprXmCfL93ZJ_aHs21XVItila2lOtF1_tOV/s1600/image_2024-08-26_024251667.png",
                "cLink": "https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0025",
                "cName": "Baharain Sports 2",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGdVGtdmGA0xegCrkOPd6W4P1l2FSKVPH7bDH8GAnpK0HvTKz8IvoQsefIRTlZ5Dx4wJaCdd0rCFQh1wUKWlQ7oawEPRM31RBcw2jc5n8ge5Fg-BS24JWH36SapmOCFOgCsQZvT1gsC3VEPipOWIKmiSSLLTJfIoB6fWi-JH5qjjIq5Xp8kEELnL5X9U9N/s1600/image_2024-08-26_024516679.png",
                "cLink": "https://5c7b683162943.streamlock.net/live/ngrp:bahrainsportstwo_all/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0026",
                "cName": "Zee Bangla Cinema",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_5qtGh57VsMDD2f-UkNde8G7kZZG-v0WGPlsqYcXPDbcQRUwNwMiXsZSxetFyZNjQUYYHFFPHfDiwmS4XOVgWeDX83wsDBqOCQyXKLg-PAF5ompb2-Z8bQQx9ozrQJxI-V7i8jgDA1FjRsLoY0d-3tk5zRYwnl8hSXajPvW_aKgoJuS4KtMT_6xietabF/s1600/zbcnma.webp",
                "cLink": "https://entezeetv.fun/bdcast/hls/index.m3u8?id=f77vf029&e=.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0027",
                "cName": "Lacroose TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuTIwP_eRAQ-XDBkNxVizJg6S0D21THfwH2G1_kIQXSFMsJNtdhyj_7s5_zZRvzyv6RfRmFwB7c22uDh2-TUVd5VwuWFkMecr8ehX5zDZMMLadGZff8vIOBDqcWGMarXzjJkvF1LNdM9WYCJ4nwqQcvj_MUaXD2Ou9XCAvK0hqAGmhyphenhyphenrjForyJObB-uxBn/s1600/image_2024-08-26_025639217.png",
                "cLink": "https://1840769862.rsc.cdn77.org/FTF/LSN_SCTE.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0028",
                "cName": "Dubai Sports 1",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjSSTi9VrC9ZNcfyqnR51CAnPvASnZ4EAx1fa5ZRbTxdF1BI2hxFioqPvWTJrqYwFpLn3ATCDMHYrD6VyuxMbCh9-_9ww8SIqx9XChOGL6vstR7DTjd08uY74NFiTX9x03E9B25E2_FajHu7lcGGuHbu0hke2GSAft4yh0c6PlCsUKy_1tSY7S7LVd2CUd/s1600/ds1.webp",
                "cLink": "https://dmitnthvll.cdn.mangomolo.com/dubaisports/smil:dubaisports.stream.smil/chunklist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0029",
                "cName": "Dubai Sports 2",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGIIgNslYK-CflTxaRXC-oj5emHGNhApVISn1nZ3OBVBFVP-RUXIk5TtDJeFwJ5GiiWCSWzJigmUSlXV-9EwQcmUSxR4BmWP22Wbgr2dDsgkLv5QQBa3afCGWnGfFEocqE5jlA10A7XMQXZ2LGyaxabhQKX4kYGaYRAu2SkvPSJPv3VaDeDAG9mmripgv9/s1600/ds2.webp",
                "cLink": "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0030",
                "cName": "Dubai Sports 3",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiukmPSEXlahIQRqFTpgjXw0_-YDwgnLp1ouhq0Vw8psvvOSJcvOXFH-_lBvXVtUyaQCnK87Ja4xNONnljuvoM2bSdryAushnFxSpG3Bs_vIPMw80_LhKIHZVVufC4bIoGo2CQ89SaOrQy4nd1zvDxS7XH6tkwZGJGIuQ4ErJSt4UqDjpdrdVm5tSWECo4W/s1600/ds3.webp",
                "cLink": "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0031",
                "cName": "Discovery Asia",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgL3rxEfxNvgxwnM57SlBLdnAdyECz54KGzohJ1DVEDJqni0VMLSm4ZdH73TWZ0XPJRLrWn4f2FOddg81zcS9sDPmGFeIuvi4oOgcmHzYYCByGph7em1l046ve148mX4bVLe4OLZNTvT1TkCjJwojrGrNf11kdUYDAxw_NPnUJ2fCdAJoDi04VIb-qNAJXW/s1600/discovery%20asia.webp",
                "cLink": "https://cdn1.skygo.mn/live/disk1/Discovery_Asia/HLS-FTA/Discovery_Asia.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0032",
                "cName": "ASports",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpktKsis4NJlXr-vyp7nM5mN4ok9-Z5U5PMY1Gh2sifhBdpDPEcc2WITUKmTNpPBWSSPDLMvHIWd_SE-WAsh80u7lZOWlyN2kYpRhq6hgS6i1AoJGUotVQSlXcGj6L2P7NvSsf7S_o5o6f_cZ7JOeAfohMEF5a9pG6yvPVtiBwStk4Q8LPtAsnlT0eG5Bt/s1600/asports.webp",
                "cLink": "https://humsab.xyz/APakSpo/index.m3u8?token=bfaeae8c8599b3970bb1d7b0bc335988",
                "cCat": [""]
            },
            {
                "cId": "0033",
                "cName": "CNN",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHAre0IIURq5joMfeCEyt64-S_3dTO_M4IrfceZgqSXw-krMtbuGSRj9m_wTZc8t-g_z0-OstIA2O63KFpHeSW36QOctYYapfwWsJndDdL2t1aatFzD19eh4sUaR2lXPnV7n28WGLEMg_R79SpzRMYCYaSX2LPqnpuMv7SnX1kGqay_kaKgO9sGxy9bCeT/s1600/image_2024-08-26_111945695.png",
                "cLink": "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_4_1064000.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0034",
                "cName": "Enter 10 Bangla",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIs0Ac18BXqXuPK_HRE5WI0FwoGNUgqENUDBzbaSOn32Q02JCExNsZ9u-n8DWfnV0zUuNs-Rc0rnBmhUsaXZGNO036y7CwXrafbBSPduY48blF70n2D6AR_wtUd75Xgs3D9POo-d5b0TaWJzfqADZdCz0cug8ZYiZJ_aiKe4B0JUd6EinVkJ7L6a60dO9r/s1600/image_2024-08-27_002101356.png",
                "cLink": "https://cdn-singapore-5160-prod.tsv2.amagi.tv/linear/amg01448-samsungin-enterr10bangla-samsungin/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0035",
                "cName": "Cine Life",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtyrqFqiExUcoUUsgkypaWxJY60uuRKO2oVgDFpFi_KOu955w0bP9A2TorwaHf8b96rSm8zJcPj7ZEg7dxTahey-M0TvetoAOhjPalLqoN9tw_MME9n5UTVh2J9-3FXFlEjpj942-jFOArV18LkQWAD_1O5oFagqJoGFhNYg1M9QnZMf3AbocxnenpJ2cD/s1600/cl.webp",
                "cLink": "https://magnolia-cinelife.amagi.tv/hls/amagi_hls_data_magnoliaA-cinelife-oando/CDN/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0036",
                "cName": "FNX",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgANn2KxF26cvp8_k1Y-NLFZflZ5GBHZD5D9VJnowM026lpw4yWJxV17QT1J7ie5_jSs5uCk1tauSzOCMDCJoxu-QbHqrisK0iNcJ8EIrSC09WNrwkj_kBhFVMLhyphenhyphensDd0G9p-UBVAgZR5c61LfbmeRv9d8HBJR1cJkMP7Qe_2TYUgwOXA632zYzGpZP12tM/s1600/fnx.webp",
                "cLink": "https://castus-vod-dev.s3.amazonaws.com/vod_clients/kvcr/live/ch1/video.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0037",
                "cName": "Fox West Texas",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYDbO1kHCogwKX39H_4SNKWHMi_JdwajMaMHX1s53beP_hvJ9EMkF4z3S52Yn9PDc7B4f5jmEpnGseLJssfZomR4AQ87aXwjHorLPxKT39J83PbJLxnu3mU9x57p_wrQI5lYrByj_D128WnfvbA5NFevufT7_VuJuD22oXIsxiFbGUFALhUqTRIaQ762Pb/s1600/image_2024-08-26_115717548.png",
                "cLink": "https://livevideo01.myfoxzone.com/hls/live/2017381/elvs/live.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0038",
                "cName": "Fox West Texas",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhd5SwORVCmfYoOKmWbP2s0m-_V3E9hp1Jic0ErW1Rm6vwizlR8z9T1HOBEiA9ya3Tlu5GwZyGrCvgMngXMbEOX1mkEoADD-m1yvtoH8zpLOsjXmQUcdr13UeYkNlTrRgxD2M0ZSL3bzu0YFQFY_NTqVqmGdv1suvyyfuXdcg_XB83gH7X_ooZcXa4Ae2iE/s1600/image_2024-08-26_115944861.png",
                "cLink": "https://livevideo01.fox43.com/hls/live/2011656/elvs/live.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0039",
                "cName": "Fox 54",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2Zw-_GM3w0tlV-g_dSDqHYBRlGwFRymFJO8ovbHzEsjXhiSYwM2yesR0INFTh9pDz-e-GGoPF8EhSrEp3mrEBdrOjWm9xEZG7wj7buHQpjzJx7vq_C-xq_KBVSB0NkoEIiiNdNODW9CVXQs8J5bHRaZJm21KebS55skKeZBXEAxtPN97FoenENqLopI6x/s1600/image_2024-08-26_120727893.png",
                "cLink": "https://livevideo01.rocketcitynow.com/hls/live/2011659/elvs/live.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0040",
                "cName": "Real Madrid",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi59xhFJ8hWt7yx3qx1rn0UcyJlsFZ-2WVGmf7mhyphenhyphen7hjQlsCEPIMztU55kUXuDIlxY2eRTeGoFWhl-OSr-70ti4OoZs0Nh4BU8BEQeo2iF0ZrSW06DZYkhjwlmcSVsHbmJDok2dv8RzY8oC14li0SLdw-6_lBdKtBL5TTEEwT7HqqW_wVLOkawpkUSZQNHz/s1600/rmtv.webp",
                "cLink": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=1545",
                "cCat": [""]
            },
            {
                "cId": "0041",
                "cName": "Redbox Comedy",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIUq2cHFcULn01LmlUYJEj-44gu_rdA5s8yYqZHsab-QNJAHQJYEEDgzABYwIxc6FZVqrxnNQ4YXubYU2ynzHnQllidgm1mjZj3DFep0bJIyaaN5FewYy3RR-DqaFqhRVeScR2IBLouTmIz1Ck467wgbPNXDjTuthOrUhULNUuF_bXy_Q-BHq5xDiEBi2E/s1600/rdbxcmd.webp",
                "cLink": "https://comedy-redbox.amagi.tv/hls/amagi_hls_data_redboxAAA-comedy/CDN/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0042",
                "cName": "Redbox Rush",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYO8C85f8RWHaB0CBOn3k6LSOSHpQTVl-hRQ2OkzcMhw6eQUx4ZLzQ_P7LrNx-OPs218rDuNGJVx7W5iYXriaNs-eof4TGg1gxzTcVrUyBUWhvXOVZytzdAfIY6wBgoQLIxHtyrTKv96H0niDrnXY7DEgDWyywZ-GQ7xPI6sOwTQkUPhVPald79BDVitLA/s1600/rdbxrs.webp",
                "cLink": "https://rush-redbox.amagi.tv/hls/amagi_hls_data_redboxAAA-rush/CDN/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0043",
                "cName": "Redbox Spotlight",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjko-ormAXSbKZ1wNuYkdCGIoPsM_z5m1S1iCRWqWO_bHEtBSGV9NBtNZvdJSSD-_QyMrc0wCWTj9ndkHmD22WXbBEyrYkc6-jUL68DEEHNbjW8t1Snk2wAuQ0eLsiTI6LLLOQ0vdvLN5yoS6vfWyvKV8f7JAk2-OFVgBIJ1i8gJ_ldofzNFTRx7SOBXXMt/s1600/rdbxsplt.webp",
                "cLink": "https://spotlight-redbox.amagi.tv/hls/amagi_hls_data_redboxAAA-spotlight/CDN/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0044",
                "cName": "Wild Earth",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-kfy6p8k4BZBCOskL-Vh-YRA8JQfyfOlnacRbL5Si7FslzFjBWlbwByVyQd0Hs8ZYRcIGgEs44P7sxC-Et_6TvmC2_LLSDHooVwWV7bOLAmx04_W-hBgkFTXFblf3Gm4dj99XvgjQ21gwXuQ77c6NwJUJ8ckefeilLd_hLVUYLSfmLtkQjQXMtZV15bg2/s1600/image_2024-08-26_124748459.png",
                "cLink": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01290-wildearth-oando/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0045",
                "cName": "Sports en French",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3HH530pcR27PqOKjKtJU3egIa1RerBrjEHZwejhB1fqeM7fJNlGDG-3oP1V7AQSiaX8-NKf5NvtpDWgMvzYTEISEHNckAW0Zp0YlTza5DuvtuArUg_fo4HKyubHDjHYU3uswMsluwXB-6J2ecj2yMhpLqXafipLHJrGUDkXEEGDvTnK89YIZ8Xb4NcCPN/s1600/sef.webp",
                "cLink": "https://sp1564435593.mytvchain.info/live/sp1564435593_720/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0046",
                "cName": "Wapa Deportes",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAbX9VHJcQWe-fO3Zdf8Vnh1WMvJG0LGBX7FxUjINWIJGbZurNGgBRE4_FrrSLuufeqaW5fczby3zsS0_bUxpwUjwf61OEC0XV9ooYbQrxqvm8Xrs7kc_D0tjIUmwhPAx2KDmLnfev6vOoHo5hda4UnyW24TMqoIjSs4UE8nkQ3AHbpjppsmVtYi8YPh8G/s1600/wdpts.webp",
                "cLink": "https://live.field59.com/wapa/wapa2/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0047",
                "cName": "Cpe TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuSn_qcLY2kI8-afWsJxYqtjFEXYevYCp8Fer78S202tJCru_eeEEWipqqsslxBX8TWhE-xKEYpv0u6gEozxg6jxbRW1VNlmDE8EP0KHYGuuVZ455jBo6LakJ9M74QJth2zWmthBvX_jHplXAQL3wSqdI9rgxrDsIx-LZ2TKpFAcgg_eCoT4bfKTC31wT5/s1600/image_2024-08-26_021228200.png",
                "cLink": "https://stream.arcast.live/cpe/ngrp:cpe_all/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0048",
                "cName": "Of TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_k2SIWWr0k4MpNbr9NjC91ioeD6q0L1chMPLEjTGvuQceax95beFCiOpBfVAUNZbhMFpb9CPFYku33E_6PcuJeuSvHB1OtD7DT3RHe2_hrCArzmLuLhQeI2NEyAQFMFFaBz59i6oHMtYr7qBB_m8ABkjifo9gTHjvaHtB7r8J04qpra5kYd60-LqhqUMu/s1600/image_2024-08-26_023318653.png",
                "cLink": "https://5864df9ceac85.streamlock.net/germanpictures-live/mp4:streamschedule/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0049",
                "cName": "TVSN",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1wQ7uJVtERoFZPLl1T03edTBtrEvnG1y0vUWek1zpKls-ammcJszT9iBwMRpHQftyQ62L319lrXiZKcC67cTaLe9qP9zlmcpxZeX-AZsEjIUe3WFIFz6ILjE0l7wUaTap6NOB2Wsy8_4PxuO8hLzirM8f2So31bhSCre-NyM_Yy6INqzH0_1X8KROjjnh/s1600/image_2024-08-25_215544111.png",
                "cLink": "https://tvsnhlslivetest.akamaized.net/hls/live/2034711/TVSN-MSL4/master.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0050",
                "cName": "Discover Pakistan",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcoD1a5GOqTQ72u30nSpt2o3shyphenhyphenZkqTsplqSs_fnbo7LnalxJ47eNro-x7YYpw9UD3DcnbOdS49FTMgLTu7RgGlJYWgxcau4MC30ORZBwASOgk-nRVtBAlLyfjpg8kbnQqtt8rLOEv7RFi8iVJSl0WnEZ7inK2Ik57XAQNAdSR5I0P46b08zbYf6JCOc8s/s1600/image_2024-08-26_142000804.png",
                "cLink": "https://livecdn.live247stream.com/discoverpakistan/web/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0051",
                "cName": "TVQ Sports",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAm3UHuIiV26TqxIZDyG4MpZ9y5JLjy5gqVd2XPe4pulXkb3RXY8GNC5Anng9j0OMdJKaFaXAlNNF3aBsJ5EFs-eCv6N4X87vmoLk80mWQMtlsrK5p1-ZVzSgtLmDX7n1bPvojhysZJm9UNQEi_L-dy4lpAX5Ds-hAe4Az7vidpvFUQVpQBj22LJ_6fCjr/s1600/tvq%20sports.webp",
                "cLink": "https://dacastmmd.mmdlive.lldns.net/dacastmmd/1b6bbade53634f5a847b953c9adfd102/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0052",
                "cName": "Mav TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-3GUEGrLlfFPS5dzyYyshqYhvRlSs9inuvex_JUpJ2ThvuhY7Eooy203BdGco0sapzrNuakBb8kQxLvTztndW2WFEnUbquM7DFSxUqFId9aLeQTbkw1REmWjrij3x5oDbow8h-R3r8dPDefq06lHNy3zdMrBPWwFxpmX_K1MuDxUXIC2_sQ1ZAG2yJM20/s1600/image_2024-08-26_022434483.png",
                "cLink": "https://amg00378-maverickenterta-mavtv-smn-gb-samsung-rakuten-ozity.amagi.tv/playlist/amg00378-maverickenterta-mavtv-smn-gb-samsung-rakuten/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0053",
                "cName": "Sony Cine",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwNuafFz9pCZruo2YkZOBMyr6cnTVp-05-iLtJmvYfHELDthGZKtJRz9pXZVaqmPoPldWn3ESTDy1KliAxuyo4387GRln9QFpp46qYp4HueBkOuuDu7txDhS7dAi9UbVvVH_w9jK_4SR3JoMx3XEm86c_BB304rPo87ZSGn426Bs7b9giyxCYtdwtCvWPo/s1600/sony%20cine.webp",
                "cLink": "https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live1/cine_720p/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0054",
                "cName": "Zee One",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgV5wkjJlrCDpAJMRamzzyBeSeBXeURv1RJtLce5rm1WfQPhDYhW_WDQ15yh78aXzeq9WXcu1MbmFfkXTMf51O3m3-bCIEgSaeLgCSWzJu_tqZLj69fx8ce8Nvvv0WL_DR0OBc4MI01Sz416HrnQTBq7qItMF_zCm7pP_1U62OG8pmeRDn3Vor4dI1HNw68/s1600/zee%20one.webp",
                "cLink": "https://ef56ef401101403a8b06f1dec29ef1eb.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Samsung-de_ZeeOne/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0055",
                "cName": "Georgia Hollywood Review TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJZxUlb76fqgGWr5C_Q5efNlgUxMoWlwNRxgqmJ3Qd-Vsayhf1rxOSHPsRhW9XjT6ow7BBXAI8m9_kZuK-FWDVMC15Nb0OdrA0B7iYYwMiiWFpI7q3jotyarq-ZqL0uYCEb8DDt7KBZEI7rNwKRqllg9EY9Df7a53HYVyfDD3qSZ9xvQXHkqHNsgZou2VI/s1600/image_2024-08-26_032302283.png",
                "cLink": "https://30a-tv.com/gh.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0056",
                "cName": "Golf King",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHgFSVnLsG6zTF5QqH17kTuQ4FQFipiBxsNieFMPz-zZYiSov8Du5eIhhUQZ9sSpRurP9he1CfQT3FpCkRoA_UoJq0cC7MM9Q3IQJ1G9RnXZ35u7AnE32-TgSXOHaBwJ2I073WjUUnx5CZpj1VlDzmn5U49HzL7eS4c3vb9u4dyz80JZP9N5wPh09icnsh/s1600/image_2024-08-26_032618184.png",
                "cLink": "https://30a-tv.com/feeds/vidaa/golf.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0057",
                "cName": "Sky News",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFO_tD7Lx0aBull9SI1bAwAM9wI3wIoSKfHD9wSc-v_CP1OxSgAETsVPMIaV5AgBO1SQvsicR6L-PVsspsOpadsM9lCH2j1BWsj2E59I1aTC7w0boVvKYQ2efM3TL1LViqo9WroNhuJpwnhhg3BY8XSLY0gIw35vGIuyjHz8_qgi4xHU1_ye805ddgqr0Z/s1600/image_2024-08-25_214620543.png",
                "cLink": "https://skynewsau-live.akamaized.net/hls/live/2002689/skynewsau-extra1/master.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0058",
                "cName": "ESR Gaming Network",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixQJr_FhkCy-T9QZ5Fem5tljxntHCay2S6laEFwWndCm3hqW0_tMPk8z7t1qtuKfSGa75OvSLCVI52E64KfBlhy00W6RTXprlIS1A_4kdkvHLvNxG0LHZffSVe95-Y3CE-k1Yg6kN9OMvzqTFJcy4wfmSXdOoyOeUsII3FJ7P_5UdzHVrip-4gDWldcV08/s1600/image_2024-08-26_025239936.png",
                "cLink": "https://eyeonesports.com/ES2RA-628g.m3u8",
                "cCat": [""]
            },
        ];


        const sportsChannel = [
            {
                "cId": "01",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi59xhFJ8hWt7yx3qx1rn0UcyJlsFZ-2WVGmf7mhyphenhyphen7hjQlsCEPIMztU55kUXuDIlxY2eRTeGoFWhl-OSr-70ti4OoZs0Nh4BU8BEQeo2iF0ZrSW06DZYkhjwlmcSVsHbmJDok2dv8RzY8oC14li0SLdw-6_lBdKtBL5TTEEwT7HqqW_wVLOkawpkUSZQNHz/s1600/rmtv.webp",
                "cLink": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=1545",
                "cCat": 'pl'
            },
            {
                "cId": "0012",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn_Lwp-l0u0k2GAk6_9sKCEKWMZICjvvNfZ8g7VkaSflTe0HPh-0kQ3jwBWH5rw3_1lEVrh9l-h1XympHlzy9w4eYSVXzxxCHpL9pRKZ6i70jgCN4zWnRYpDRx9xQU_8M3oDKVMKp6IPJyDvumXam-k0MsknefwuIDXJH_DYXJEtjedWKoYFl4XuM0KT_8/s1600/tsports.webp",
                "cLink": "https://prod-ent-live-gm.jiocinema.com/bpk-tv/Sports18_Khel_voot_MOB/Fallback/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0032",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpktKsis4NJlXr-vyp7nM5mN4ok9-Z5U5PMY1Gh2sifhBdpDPEcc2WITUKmTNpPBWSSPDLMvHIWd_SE-WAsh80u7lZOWlyN2kYpRhq6hgS6i1AoJGUotVQSlXcGj6L2P7NvSsf7S_o5o6f_cZ7JOeAfohMEF5a9pG6yvPVtiBwStk4Q8LPtAsnlT0eG5Bt/s1600/asports.webp",
                "cLink": "https://humsab.xyz/APakSpo/index.m3u8?token=bfaeae8c8599b3970bb1d7b0bc335988",
                "cCat": [""]
            },
            {
                "cId": "0005",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJDlDh-KttzJpXYNtqPHQryNFACcUuleIJohyphenhyphenX3l-rloraMAfe3a844S39YRPS5SAqXqcv2CWK3Tqm-fY6aloOhdOyebFZcO8lH8V2K0Kk6WMtuOW68S2L9dHCbC13NrwKSXDv1xAJz4yCPbzaNNcT5X5uKb1kgz5PCd9klMv5PRCfANLWpRmbFI5NKlk6/s1600/image_2024-08-25_110454528.png",
                "cLink": "https://svs.itworkscdn.net/smc4sportslive/smc4.smil/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0006",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhipz923iXGo2-sZKhNOBuNLHDJFHfaSChm2-mzcy59j_RwNXLhTk8AEZJNbuG7KZAItx7ynSr8NDXHAqtmugCIbV9T5i22yQZ0BFrpTIYYyzhJWP97TTagtscAEPM-g63jHfYFV5X7udOLl7Wluc3rb-T99e4tIZfmE0FCECdPZkzw131Tc-Ihp3zV8QjH/s1600/image_2024-08-25_120141380.png",
                "cLink": "https://partneta.cdn.mgmlcdn.com/omsport/smil:omsport.stream.smil/chunklist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0007",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAxXKXOHJr9dC6TtYGt4BSw-AmnITl9zyL4WO32UPSQIBVMXycXEbe0augWDGIujhmN532qkNItW9OGGfGy_E3j9Gntn0L2ihmsJlHacEQE1rvbbd57lztOJ9M8uaYP6wYhYA33rYMuS33CUMNPVhTi7sZrD7jwSc9qqfnrGAVogfc46cAFmLpqF7KD61J/s1600/image_2024-08-25_115419305.png",
                "cLink": "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0022",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikl0k3Rec-fyJlgCdWwihLDjj5RBEBCgeRbyLQ3xpVRJqzymui2uwkVZHD_GIvE3Zhi1iFmym9SE632b8qhr9SqBNrxdIRU5waW33JqxrgLH8b7j3Ny89JZZAVdL5LKu-VqbJfEkvesQ7ZaogyvilQnH-ocqqHg-F99AQw0-p1TLzqVrhdJKfO51qnPq1X/s1600/image_2024-08-26_023015062.png",
                "cLink": "https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0024",
                "cName": "01",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMmhp5D1Ct7SxsQnkpPN1SiiwwVafqCflT-NQkcTZq-x8C2Vg0zkKhAdX23zis3XCxsAwuotKXkkwCFVXoNuwh2d8cEmWBIfcPpZqyl0o-pzHX8vcOchQ3IpjcGxgt06wM6k7ufjaxzkWZhtcfh94dfAQdeCprXmCfL93ZJ_aHs21XVItila2lOtF1_tOV/s1600/image_2024-08-26_024251667.png",
                "cLink": "https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0025",
                "cName": "02",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGdVGtdmGA0xegCrkOPd6W4P1l2FSKVPH7bDH8GAnpK0HvTKz8IvoQsefIRTlZ5Dx4wJaCdd0rCFQh1wUKWlQ7oawEPRM31RBcw2jc5n8ge5Fg-BS24JWH36SapmOCFOgCsQZvT1gsC3VEPipOWIKmiSSLLTJfIoB6fWi-JH5qjjIq5Xp8kEELnL5X9U9N/s1600/image_2024-08-26_024516679.png",
                "cLink": "https://5c7b683162943.streamlock.net/live/ngrp:bahrainsportstwo_all/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0026",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixQJr_FhkCy-T9QZ5Fem5tljxntHCay2S6laEFwWndCm3hqW0_tMPk8z7t1qtuKfSGa75OvSLCVI52E64KfBlhy00W6RTXprlIS1A_4kdkvHLvNxG0LHZffSVe95-Y3CE-k1Yg6kN9OMvzqTFJcy4wfmSXdOoyOeUsII3FJ7P_5UdzHVrip-4gDWldcV08/s1600/image_2024-08-26_025239936.png",
                "cLink": "https://eyeonesports.com/ES2RA-628g.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0027",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuTIwP_eRAQ-XDBkNxVizJg6S0D21THfwH2G1_kIQXSFMsJNtdhyj_7s5_zZRvzyv6RfRmFwB7c22uDh2-TUVd5VwuWFkMecr8ehX5zDZMMLadGZff8vIOBDqcWGMarXzjJkvF1LNdM9WYCJ4nwqQcvj_MUaXD2Ou9XCAvK0hqAGmhyphenhyphenrjForyJObB-uxBn/s1600/image_2024-08-26_025639217.png",
                "cLink": "https://1840769862.rsc.cdn77.org/FTF/LSN_SCTE.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0028",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjSSTi9VrC9ZNcfyqnR51CAnPvASnZ4EAx1fa5ZRbTxdF1BI2hxFioqPvWTJrqYwFpLn3ATCDMHYrD6VyuxMbCh9-_9ww8SIqx9XChOGL6vstR7DTjd08uY74NFiTX9x03E9B25E2_FajHu7lcGGuHbu0hke2GSAft4yh0c6PlCsUKy_1tSY7S7LVd2CUd/s1600/ds1.webp",
                "cLink": "https://dmitnthvll.cdn.mangomolo.com/dubaisports/smil:dubaisports.stream.smil/chunklist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0029",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGIIgNslYK-CflTxaRXC-oj5emHGNhApVISn1nZ3OBVBFVP-RUXIk5TtDJeFwJ5GiiWCSWzJigmUSlXV-9EwQcmUSxR4BmWP22Wbgr2dDsgkLv5QQBa3afCGWnGfFEocqE5jlA10A7XMQXZ2LGyaxabhQKX4kYGaYRAu2SkvPSJPv3VaDeDAG9mmripgv9/s1600/ds2.webp",
                "cLink": "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0030",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiukmPSEXlahIQRqFTpgjXw0_-YDwgnLp1ouhq0Vw8psvvOSJcvOXFH-_lBvXVtUyaQCnK87Ja4xNONnljuvoM2bSdryAushnFxSpG3Bs_vIPMw80_LhKIHZVVufC4bIoGo2CQ89SaOrQy4nd1zvDxS7XH6tkwZGJGIuQ4ErJSt4UqDjpdrdVm5tSWECo4W/s1600/ds3.webp",
                "cLink": "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0045",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3HH530pcR27PqOKjKtJU3egIa1RerBrjEHZwejhB1fqeM7fJNlGDG-3oP1V7AQSiaX8-NKf5NvtpDWgMvzYTEISEHNckAW0Zp0YlTza5DuvtuArUg_fo4HKyubHDjHYU3uswMsluwXB-6J2ecj2yMhpLqXafipLHJrGUDkXEEGDvTnK89YIZ8Xb4NcCPN/s1600/sef.webp",
                "cLink": "https://sp1564435593.mytvchain.info/live/sp1564435593_720/index.m3u8",
                "cCat": [""]
            },
            {
                "cId": "0069",
                "cName": "",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihyphenhyphen_ofJCV_WNa4DxXRJqObmIhw_O8X6fLyCzTnm9wyA9VSecoBM7gdF6qphj2EqoX_tJ8KAxwXjwqvXq4octcu5oLGE0Jx4S2wOPAu4hDYM3PzYQ1qyrS5geSNROUbEXgHJv5ctkqncqZhLukxi7FfxG-HFskiQnA3nkHkKOn9wEhHBtZ8Y0DTCvgPweKB/s1600/sp5.webp",
                "cLink": "https://humsab.xyz/S_Ten5/tracks-v1a1/mono.m3u8",
                "cCat": [""]
            }
        ]


        const jagoBdServer = [
            
            {
                "cId": "jb0058",
                "cName": "Jamuna TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmnVv1OWFqdF0H0ttAJnrbRInl49fbz81RaYVn2i-c_fwxkS-0QhzqLKMPv36_g4oXNtjOra7yJN9qJWbeYrEY7-ZUThRaa248oNBdj-Hqdcqx4Gklei1X1GEn7erImbYuzkf56JJsFppTF-X4ihW5cBFMO0WnQq6jun7o7XJa8cLkBR7GsYb6T_n_w-US/s1600/jamuna%20tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/jamuna-test-sample-ok.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0001",
                "cName": "BTV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuKEaKiZcU2SOXGTo1H3T3pVbCKGVJz-MsNKVHyI-wwRuXhdJoetXsB4Z4pAJOWXP1gaxrbEAdBJAqm3JOpP-Ph0s81TEfpg9gu8q9H3xPG0zPOKwftL40v40wL5XT3m-P6M4cBwqSOcRXyywcAsPAdxhvw4skelhDSAYzzMW9qXF3ew0ijc_OKUwFYm7P/s1600/btv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/Btv-g.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0002",
                "cName": "Ekushey TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv1UfTh_1xNIbyUl5bAff7eaBAHLuttnRjPXv02GjWkZGxiIBTI4s8wXiPxafPsnP9qDd0z52IncSI5DJqjzQ4ozHOOCWCnLRpaBmd9aQJ9jOQWZvTNRsfgWPTaIJk9Cv3TH5oKP8SNUpv7HBZsgDDjcRyveK-UCEvqhcyDZcqMRkP5oW6nwvs7dSNa8U0/s1600/image_2024-08-26_133340246.png",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ekusheytv-8-org.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0003",
                "cName": "Ekattor TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoHNr57AZDWGYnqvdpiC8Js7HDbk9ID-KrwG6g8Wavbuxowi3P4kx25sH8dXm7TUmcZuTs2MkUb6KmwwcisqksbG2Syq1YpsXHV0Gs2cUqwAbwCKy82BPSFT_-cwJSIQSGgl-bG0NYWEFYfsh-kIldOmrLqlWE6P6J-huZ91oeDMhhf8u9YPnmpOBodNB5/s1600/ekattor%20tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ekattor.stream/playlist.m3u8",
                "cCat": ["news"]
            },
            {
                "cId": "jb0004",
                "cName": "Gaan Bangla",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwW_asW-qQm0zpNB8G9MCc4dRe_MJXnpA8OseI8gYDIZ9QufZVFBSogMJxZoAQuNlvMrDQpJINHeO2pOEsb8eLpqaxGNt0CIrQUDVLzrWFRPnvmKgQr6KEnz4XiLR2dlMyEUpVO2E-BcKmkuTwgv2iOB9QhH_aFJuHP3OqAe2FPmemBX27mLVI8HJ6fRfk/s1600/gaanbangla.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/gaanbangla-8-orgd.stream/playlist.m3u8",
                "cCat": ["music"]
            },
            {
                "cId": "jb0006",
                "cName": "Deepto TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVj9yd8SPc6IxZhh4KNHo1xBxzY0Yy_vzNC5HmxGIuCwdeGVacofLedyIb6SEsD2LiVUPi51nHsPDhOh4qLDKkkrB0K8_g6RqBmkDjMqoDTIiZHJCMWdEzvLzMM_fZH4XzPX9WGatcy8b1wI4XdwljHHRbp1AhrAYmc9HTw8UCf9Dj1ECXz4PgSLbbPheM/s1600/image_2024-08-25_205228391.png",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/deeptotv.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0008",
                "cName": "DBC News",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXKm4FCFrNkAjH_33IRrISYeDrneIRvRRJ-1P3GOLngOlY0E7vkRntjaXyMCEBDGsR4aYBm-wYrbxWhyphenhyphenh1X8f9GN8qKw7lQTpuZYiIAuKBSnJuI7HFuQRQWTytLhgkMmj5t_SSvbFVTLq9bljv1wxuAUMufzbvmDqVWJpFZdh8NL9rnU5CbJPiNvuoGRMm/s1600/dbcnews.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/dbcnews.stream/playlist.m3u8",
                "cCat": ["news"]
            },
            {
                "cId": "jb0012",
                "cName": "Channel I",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhL6i7BRRteULM7CELrozq183rqTTSbakA3g43nKkMe1FE6dllqE5U82laTqcYMW7xy2QmvJirAWpGwvlIKiZTCjSWHd_86UsRUHOcHCZ51jrBWcNyxL5ZnNcUBWEeTgXjLYKz9UfdqjS5ghsdGklHGUl1Eg0W3tHQiDxApEG3yRj0gwcp_P4v9ShWfNNP2/s1600/channeli.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/channeli-8-org.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0009",
                "cName": "Global TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA23wkbGyzhkUUhTbhd-2IW2BWQ4aPUazoTMoo61Ow7CLpodAmrbt88biBzyDNnc5EfWRqN2AZOBc0QALCsHu3AAFg_DqhvceCyQzbmNNuqvLAFWX48BYs72oqsHIglZshZiKZ85S71y0ksgEbudKQYHwuR42KQfEb5CfydqGpBLBtk-KuuR_lbJqpg6_e/s1600/glbtv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/Global-g.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0010",
                "cName": "Ananda TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK0VwIPqOFxmUhbJXd3zOq4JIuHe79MMFU7FZMeflxHL7svxCw9sjAYhkxIkisv_J_fbD3yH8EwkKCrZ_nj5giqR3oSr6xhASroJHNhH8NdvDSXzDtBLLcXTtBRiqtpeEnIb6N9Sc6TqQO54xks7JbK4mhsEt8MRqH6nv9xL5O7bnQO_764h_AcIzSXwq4/s1600/andnd.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/anandatv.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0017",
                "cName": "Boishakhi TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKBtS4jmIBlbwMKhfC6q2iIRi9_q9ekvCWeony8kdVhiL6iH5qMRPNOFOgW2Jp-i9antf9OwatWzUBa7oAppllXj9J-TV6CU3XkYrTIteyrZQYkuBCGZhcOSJifyfzIgSJWEyZAIv2pjTn5a2fqiVOidcUxOo733i_8kAT0L6aUS2flEOn3j87RZzSGl0p/s1600/boishakhitv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/boishakhitv-org.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0018",
                "cName": "Desh TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFkk2m1nI3naZdjyXpCD0mpqqMuQlIaDfeRkMFU313lFj93P0mWxIiOWtTtkw0vMzBLBRKu7VVfESSs4qFCCjW8aJ35w9yAHOQdXB58uFsGWzFCfMiSQOlnuz6w0S9l5ySn892522Hbb14seWst1M6qOkK7prOGMVzbbYWiXrjA8uMC_KpLsBCBz07-Yxd/s1600/deshtv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/deshtv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0020",
                "cName": "Bijoy TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3XzMp7Fb4e69YM3DcJxyf61z4dKaae_tkQQdY-7poAADTK2KagVexSEXtFNH_3jnN30txvd703JnJuOrXijU2CNgx4wM0PvondQ0NsgdgZ0w1Vss_h_iYhQREC6bLVljyztHu7d29tec393VTHuJ7P-on7sLrFnv4xqFnjAthW2DGTQKmlV-XNHHQvh9Z/s1600/bijoytv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/bijoy00.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0021",
                "cName": "Banglavision HD",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN_NbuOWdCY5VG6owo-0_SSHEa-XHZ-ZNlQ9Prqvwgex_8cNzS0FcnwTZ2-pA0aRqnIMvZIVRN4p-m_Q4gsAYZoYBoKl14aYsztB03LPxPC_yOBxtP1-KN0vrK6VbOvA1zsU0x2DRmahRgXM91-XSAbjMGmEqx5jpJAlMSDFI0LV98aF-LBLBWNwYdCHH-/s1600/bvision.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/banglav000.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0022",
                "cName": "Bangla TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2dmH6E9B1naVsJDVSlgCC5zgFTQYfIgH-fnawr1grDhRUaYuIdVffCPgOpyOTjcrJ6zDBDICO8zLQZk07Xu-d29_vaxlJ3aF9j9uWzdmhMbwIkQLod4VmFpcXFM3MUHG3aZ4VTOPuWMjbHD0K240JRV950PB6UeB-fsScU6T6ESgOY4NdAdqS86Jwfg4Y/s1600/bngla%20tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/banglatvhd.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0027",
                "cName": "ATN Bangla",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuvrdTGt11VMTlTIypQg-hSR2utrORo0m8AUrfbZhZkj99l21Ai08XCI9PYp4KjL4CzBZre4zMwckJL2U-95U0EFuKKHP-BbL0WYff2NGpgwYJljB8STu6ppmGUSz36Ra3i886ZEujE_f98r47AxQ7A8RhDeug7dKFtmyQk2CR-_jVPwY2B2iFtWb4goGA/s1600/atnbangla.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnbd-8-org.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0039",
                "cName": "Somoy TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Al3msyd24nKH0SN8HH4Q320E5bRIwxpUE-3gwMvcwbqqmHVbor1gQjvYX-7GUFLeX9oOMKJ5iF4dr0FvAj1gSKXQYo4xaVFdZngary283DpPLbRczwTQ6Oxh96Lf-_IK9esZz1LxaanotRz9RKdxHYJu18U80kO37c-JV8iB0V6IucemPOmYGLShIEmu/s1600/image_2024-08-25_205855532.png",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/somoyt000011226615544544.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0040",
                "cName": "Channel 24",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzKQFZkbxAJeDx7Gj0wrFvVe6iUHPYF_cIIxZO05O09PuKs32ojB6entR9P4cbGUsvgdxQAvGcjaSXAjs7YtYZNDzJ9jaqCznXl_GiUGtOyabxTDFunmCEVmlcUjTb6ZyVL1JacuSSlXHhKia36w6TOpvZ4BUeDHqNNyIYPYvURe1XwSrWzXzidpAxS456/s1600/c24.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/channel24-sg-e8e.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0041",
                "cName": "SATV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC9pyPe4CXvsbt090jcDJw7g_oKNykKokO5ewwcn8_eM-tehyOw-RZ_FM_vKaDHPRXJ_IVG0diXLeNIdjye1s1bNe6Y3UQfNFmg85w0MaNbzUZUbMeSMpS0GoPpV_0M7sBZBVUNSz8bdFADaBSLC-Qeop7dbDYrzNBoCcI-gWAB8nxd343WRcQgUKsD5kR/s1600/satv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/satvoff5666.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0042",
                "cName": "RTV HD",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_t1EXr11HG8hK_oxJeQUHLstS9Had_5I_nIFGUsUI3eQKRdHOZxxV83EKDaatCe8RdzCye-x0LgvX14CVF3AZiq9q4KQM5HSy-wMBm4_TksRs7KVbPeBhqmjwwnvAWL5-KZsWz4EIHNN3vyMMpYrjtcv30bF1ke_OnqSSHGrE9vHxugyyFbXJ6vFhSx2a/s1600/rtv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/rtv-sg.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0043",
                "cName": "MY TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmEVFutRrpdh_5jvuVAh6TJUa85FFQshblMBwHyeeEIe2d5slwNLw5EQ3SWdT5udwD6nYb1AQviez5qY41G26dMW1qwy34CJ58shHlZ3XByHB9VWC6zhH7Mp3GmkrwzZiOYidgvFDMNKFefWDTT5XJPahyphenhyphenumtPWr17FsKTBKDNd6vaiAEMn5oyZR22K1Xn/s1600/mytv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/mytv-up-off.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0047",
                "cName": "Nexus TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB57ZvdCGVLNd2C_I_USp8YhjjVZ3CniGYMsCihZ8VI4U4KoX2xmQkXf2BWm92NJv6rhrTmC5aOX3FaBBvYDqR8g0ZFeo1KrcYnoCRNzF7YZvv6DNybngpeggwksadc1uvI2cpfTm3wvf8k0-rohyPxukw7rbsNNkPpCnZwxC_baeWdgPV2L1jRHyzv7fH/s1600/nexustv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/nexustv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0048",
                "cName": "News 24",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj3rK8nmJFB45i8B4ih7MoQWHexQQiNHKJ5xg3HQXFcdkoJ32kVZA54TWIIVeOmTxgckERWtff5meSvv9ipR3VQuuYszXMCDo7CmfRva0ndCniSwpAoZWMVAmns6qalWNkQlnDLLErhsoem3I56W_aOfxp2JpuLsja44xv_4vkSs1ubggltbfjWd3ZNYLH/s1600/n24.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/news24local.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0044",
                "cName": "Rajdhani TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirRDOObJ83k54nHb7hSu85HCak2bAhRAiq8a7M7AkFP9ld1-5t2_AJQe2O3Hq-FKe52vSMVNdMNKNUPTZjqFNvxPg8hkkEqJLnN5CsiFP-1rQ_9m2GG-HNwwesq5dOkP04R1pr3gt15efq5qL0VF3acqSHsK-OYstlKRBxtzO3xJaJ0dA4vbArQ97xo9AE/s1600/rajdhanitv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/rajdhanitv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0051",
                "cName": "Movie Bangla",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPzNP2He8TjMPVHS-ujrbJoN40ijlK3LskrK9CJey8jWxZAnVQW3feG668gzjTR9bGGVaTJahEvd-LdWw0wa_-EeneowO3BhWsX8decc3CCYgfi0ZY_VLPoUFIWgkoohYEAxt_ga_Y0dZVT1y4o3HmdFSyGkkiT3FIYNkJJqjETJJmsThvw-Vv3smHxUSP/s1600/mvibngla.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/moviebanglalink2.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0052",
                "cName": "Mohona TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiriPLC2JA0i5RHrBFcgf0Lq5jj2pnlR327cZLKoIs3duIPk26PgpQDHpCwyNjFB-yqGXfSFh39LMMUu5Ch5WpNqK0zIOwfSfLPQqhu6miHO_DXjPuZpc79hTYxZL5tRarhk4Q3QAd9qlWXlWd_fHKTpo-Lt03tGQmAkb58VfIp3ARYBGBQFBsWlvmBXSBI/s1600/mohonatv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/mohonatv00000223232244556633.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0064",
                "cName": "Independent TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFCmK_0hwtzDMuW3hRiHgYCJHIQATXty_gmrMjf2V71YAWv5fAXi3Pq8sTmNZL5wTL6ujwVKwxfDH2xEHj_wAqsrGZa1T2lNMlFFPaw30s6_PDnjJnUGYvfiYpJG1MnbaMrx7wAWshPawglicoiqcQF1wsGIuhkCS49E6NbkPReP90suDSNEgo6TK45SEv/s1600/independenttv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/independent-8-org.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0065",
                "cName": "Green TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSrHq8cVTKs8Xb30uQyhonnoV-DEXoWcBGLvDiVUAhwRHXYtZthdhC62ZY88r3nY-a5IvizL5a_Q5999vdRmeh9U0-vbiFSa2RR-JWZP8y04uPlZlekTdF8A2efnEwhrZXpKp3sKrb6svortgtNGDAIrei-6qDNU9XEFmAC7-AConUXyd8artl4IielecL/s1600/greentv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0066",
                "cName": "Ekhon TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsCv2LxvvvRgRLwyBMmJ-8YU2OqMri-FsRwb9Gl_hwOGsoAqR1uhZ1_ZzN1KViul2iqTo_XEBC7BvVLTO24ccmeG1jLKXBLJB63g0Kn3tfk1gIldxHQCOj0haNbJ3bIluvGza6-7OWc-D6nmhwUEKqbqgsoJFcCWPLFmLqxykLfJnai8EFePOzQQ4ckubZ/s1600/ekhontv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/globaltv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0067",
                "cName": "DW News",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTGlQVRlblrm8N7ckBHTqmM19wg-XZYEAJsSJOKWuav4StxH0023WSuK9zilOxUUOCEyK5wmNvdlsiEvkuFcLYhjl8Xg2io6uxfJaFg7tYdc_-w-Qku2j5yen5fvL8UU94xuHHB0sFLryIxmULVjX0ou1s_IXVTS-rvfOjLgR8YhiUVl_4CbgTxkwkbVej/s1600/dw.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/dwnews.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0060",
                "cName": "JagoNews24 TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqvTodkhc-B6ju8PVRFecxDVMQHMaj-7lSztDW88scvwtRhyCO5PJxPy0EKzE-xrkdBA7GHCtZQS3-ApVd_ToL8t0pcG9A-p1P3YFd_39CuEzx0i_yhVSyVdhSPqBIeGoE_zxaNbmzoaVqV4rp8wWcD8R_uVZmUs3UqdHFzIEGiScz0yc7Lesg_AwoP2h9/s1600/jagobd.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/jagonews24.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0032",
                "cName": "Voice of America",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU68Lzju0q9j0JNGs-uCwYpBAxRZ9XCxpl3vpWTr34Ys_QmEeXqVuyhIpixVS31yqm-5JYbUW7HvLwUrD6xOrXwzFpcyLwAicMKx_0WCjQE7wojKaYlldrgyEgQMGGeeyrPpPJ8dUxYNn5E0diMfeo8v6Hk_T_jmuzmqDOE-pq2AyIwfhGQUYctyRa3kRT/s1600/voa.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/voa.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0045",
                "cName": "NTV Europe",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitbNYqvwartahPN2xJhH55TKFHNxFnu-2ymOGP6wuWCcjg2hkch56qxP4Xdw-bJA4A4RWN1-WG9AqgPGj7x13Jg0ekDK6dCeoATF8RgRx5JLsk04MX-wakiXZsdLvpPjHRpbZ9jwxACQzQjaxbqzGvwu9kmFchPBh4rsIKjeSdRJsP1paVlQFhgap0o_Xa/s1600/ntveurope.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ntvuk00332211.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0014",
                "cName": "CGTN News",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRHRGtQsgHsX3YmQVi29NiyZt4Vq5p_zL860u9at-z8wpcL-7SvX4Lqu0Xy5XEgpvYR55QvhSmE9r_AsteT__ZXW7ZxCJ_3vw7xeQuH5POLu5l0Zf7OkP6a3DmQG-jzHglNo8lDMUHOtSgQ3VO3M1aqGhGkkpk_kHpqzVZJTSMqSd03eY4gQnz_-fiZ1Xm/s1600/cgtn.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/cgtn.stream/playlist.m3u8",
                "cCat": ["news"]
            },
            {
                "cId": "jb0016",
                "cName": "CGTN Documentary",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC5msJLKaRMFnL_vhErlMQZe1M3WRdr_b2Gq12S8LQWH2MUkZdEqra-eCAs6A4jAGzkKNf6PS3nVWj2PBs-LB-w10jmezS8SWznOs8okidi5vmJLCRmIfGk9xnyS4CcUuT1BME2itkJQZBoW4RaicxEeO6HnnK2mDW3ySs_U70lFmUh_Ts9PXE3hGiUx-i/s1600/cgtndcmnt.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/cgtndoc.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0055",
                "cName": "Makkah TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhABYVh5YNeGb-OR9sENRQYfagA6xi5sR8LVygIkUxjpe46PzGprMXWtnqZyAWRcLOQdzlIdM6cBcWCltlfactTX-0tNtG4JL12cqpfbcIKr5SaRTgR-xXg5_siYC8yAtRhdWJlB3eg4_0NojvTLySeS_Mh-NLkwvj6skFBgeDhrfAnVbqL3JD1_EroHFd/s1600/makkah%20tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/makkahtv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0056",
                "cName": "Makkah Live",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSLaKLm4naUwBBWUIpNxSu5_4n-lyvcupts7p_1qTXFiI5cJl_fvjB3ZZCos6S7EEcACpwO-8bZr_mPLZP5i_kBpPzoaxg19JmeuWbih8zLnCHrkZGcqGs3T1Jocod-X92nKDL4kbyBjQGdGDMUPtSKwZ4i6ngsn3i3V0zet6-EHCKBylko_i4BCGe5wQ9/s1600/makkahlive.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/makkah.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0005",
                "cName": "Discover Pakistan TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcoD1a5GOqTQ72u30nSpt2o3shyphenhyphenZkqTsplqSs_fnbo7LnalxJ47eNro-x7YYpw9UD3DcnbOdS49FTMgLTu7RgGlJYWgxcau4MC30ORZBwASOgk-nRVtBAlLyfjpg8kbnQqtt8rLOEv7RFi8iVJSl0WnEZ7inK2Ik57XAQNAdSR5I0P46b08zbYf6JCOc8s/s1600/image_2024-08-26_142000804.png",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/discoverpakistan.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0007",
                "cName": "Deen TV UK",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOawcV8f1NuSZgDR7NGQQb271VS2My3-H8EwjWdSw8s_eVCB9HJfMgx2LGsWGiOXZOAoYKoJlrkqRnFPyGi4P1Ow9_PWa9j1bgPptsPbvm5IolKvd84nyO7nnR7jVTOZQu0htA5uARdallhTn3y19UR3J4fjtL3rWxWyQ_Z53i6mi8t9HSa6uxeoD_9lar/s1600/deen%20tv%20uk.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/deentv.stream/playlist.m3u8",
                "cCat": ["religion"]
            },
            {
                "cId": "jb0011",
                "cName": "Colosal TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiz6fUU1yA4dmJWXQk_5FjOuPk8xHFuQmH8DJajWyqKDQPMCmkdzrFIvliOSs-cxMT6Ccq2JmEAwWJsa27CtuYoJxSFLc8id1MTSpkqZDFyA9dwZiEDPUCCV4n_XZ1QWpxPoEFfFKar856wA9_fUQ7pbnicUE94UtswH06T57eI630PP64DxXaXosZPyjXq/s1600/colosal.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/colosal.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0013",
                "cName": "Channel Europe",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIysI3WXJKzNMU0Hm7S5cth2DqZuTEYQdgl0gWpdiLZH7cDjAO3tzXAXx2vNA-SrCavlW5ZRO5ilPs6SaGRWf8bv7EX6OXrrPjICjyEKEnGYXIwgDY-Z123nuQnzXsovUtYbN8Q6YT284IuZuayP62v6UXZt3ezlyaGeXaRqW0o0SgLEPj6CbUzk7Cy1Oy/s1600/channeleurope.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/channeleurope.stream/playlist.m3u8",
                "cCat": ["general"]
            },
            {
                "cId": "jb0019",
                "cName": "Biswa Bangla 24",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTGeqgK0K_Ob-FUTXKspaWYkctQzPmFoc83Gu6sgCY4suCj7DKy-oGJ_KI6VYEcebPD8EK_NoTx2EGWW_aNoWdyoeHx01TfaLn7RbtCClP2d5dWjMKPTlRYLoUcFPuRHvgm8kJncNhlv-2RfwtiMo_1TwlcKp2bNfVnTavu5_VOD_7Wjv065DtPXecG93Q/s1600/bbtf.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/biswabanglatv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0024",
                "cName": "ATN Music",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQkA4wV2CqDRivbihfGVeHDIIpDLKH2kmEpYyXocSGv2lTbt2y8gWU7_wRTHoreC2WmTR6IEdMTYUBHbjV3Z1JNimQ8rf987hintdOk_bay9Dfp-QrqrgpQcRv8UDmjJG2yN9YNR06ry6RxQunp6zDD0prfC6Kc9PY6gurZP8MvbVdF1INhT4Hvp8PJRKP/s1600/atnmusic.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnmusic.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0025",
                "cName": "ATN Islamic TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjMtrUhI-AdsPw_fdejJoZ_jlbqqlfZ28C2F_a6z7_q7LKRH0SFeM3DbRxta8ar4D2sIs2WCKMfJvV5pDknkReJmtydC3h3Tn-4KGiCUgA55Ugr6GfsgLg01iC97k5f15_JKlrnOGuZoNPobMKD6CM67Wqy_CTRG0dIeL6-_X86rE5DS77BcEQGr8_So-k/s1600/atnislamic.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnislamictv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0026",
                "cName": "ATN Bangla UK",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkXwclNjTgosYKycd2dZBuTlQ8kliib_Bhx1HW7L1x3qpLhOVpL3hneKACGhnZwOBkcw9H0NbZy0ixvZEgPrBHkm4mEvISgZWS2FM0C3Vin3KY02bX9ueVhcZ-Wb8iJFBm1k1osCiUu_Wr9PXhQ1nDRihXBtN1lVg87Ko4FVFUfwsxT4VwS0lWH3RHw1wN/s1600/atnuk.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atnbanglauk-off.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0028",
                "cName": "Amar Bangla",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2VAi1JYlW_NB80ODilljUXUn_dFJb1zNvsNq3v7mUx05qXo-1USFGZ6FrxD5KrBpoGu75EgiCyoIP0CIF9rg-EU6XH4O1eXOxVwQZUaqwJnisGPGKKIIqn5QiR-LrukrPXg7tpb-p-W28QMqpDU5uQhpgIRCKF8gWVURptQHLsu36SQqpCj3VSERtTHis/s1600/amr%20bangla.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/amarbanglatv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0029",
                "cName": "Al Sunnah Al Nabawiyah TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYDvATz1SYnZiv5N8DwlGsgOQ-6R1Ijzcnmxd9WSsD4glQ6rUfSOzyVrDOwdIvbwgxfQ9hyphenhyphenSKllWxS2BgOtO2wmMOzamzjQXO6q51EafWLrViV2Kh2q7rmgKLiF3DYk2UPIJqWAzTjNijkRjsXSQ2tfYTb6-3ferYYOGrypG3x92_P30B8iBhCMsy28V2E/s1600/alsunnahalnabwah.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/madina.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0030",
                "cName": "Alpha TV Canada",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf0WZjFCeAiRaS7rccshKBTrl97y_0Uz0UegvgZJ4IVYA89Xi2yyBHej_VQjORpFs86u_ozB46ElOrT782Qq4MiKHZizqaKInDYVq32uGF97sFqLSGw_WlFlP7oZe2BafHGoFY4KppfLysh8lD9lXd6rRBMS98tLpnSWgTlbrOytpdaUmGlhyphenhyphenVTt-wHmK9/s1600/canadatv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/atvcanada.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0031",
                "cName": "AB TV USA",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNaTOeBLkv0PTAwZW7UcCrpESlykRxCCaqzgw3LR2Md5yqSjclzHqtyAdU6HSEamnHZNucBMd6vcX7i145bNpDQtF7MnWGjljd9nFmPEpC_f2-N_2Vg6BGP4I1hUkL2_h2Uufnau1RS5NmrjsVMueJuZX-ZVUkVUoLRig8RlXZZ8uKVvvJoQmfabZS4JsJ/s1600/abtv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/abtvusa.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0033",
                "cName": "Varendra TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv8hqo4hhBOVnBCvSCtLJ0Fa1ry12FSahsTK1SRdKvdVueFdkdxEEbu_LFJomHQm1zL-vd70g2YFLeXPm-SOIoGcglu_L7Hhlrl5zpzRI8PA62-HTiUoLsHknvjhTVcpBQ5DxlFGLnj7kYF1UOLdmHi3uGXVMSJkdk8Zf1Og8XzF4zG0z-CBx2TOJlegKk/s1600/varendra%20tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/varendratv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0034",
                "cName": "V2BEAT TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibgJy3ytpLppmllIJIdRfFVvhtQsGz1CG11geNSpLCCBlg4ssHW7e1smG5WxNlE7Z5Pg9QrYmYB2OVSKBsiW0KhJ-3UHJqqz220h9pckOL3-c3nzS7lEoVsfmgRZThHsqmo_vlIYr-iTmhdOqDajAswkxz4gnHpS6fHBS-TgyHFVBaTYeYZiAde4As-Knv/s1600/v2b.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/v2beattv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0035",
                "cName": "TV ONE UK",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSft3jFw9RNRqhoOaicWUgVozsgs0bqHCUd5eSPC8j4RIkcRvKegcbaT4MOx00SgsG9fFEJOZ5FtqfhWprnH5i40m965PPrX9XB9PH9lfgo9KPvVplYCKG-hKAqFw0ia81-Fj1N34yIuPjIIWWrD3nJKQWPewiO85bkVcS2H_mjCjTBej8eRQkLLEZcQV3/s1600/tvoneuk.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/tvoneuksni.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0036",
                "cName": "Times 24 TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgDX-yAaEeF5FZj9gMMUoLV78CVJLRzhh3NfuEggwrVBRf1UqkypHEfFYXeqHCzW1TQvAFBjsA1E077TtBZs-S1UwgvK8xN_w7FHoXALtQ95g44Rd95sy5HgAuiRIhNcisSBfgsSrv3rDENKVmyiTf7HP9gi5VsiRy-3tcfFUcw4qSsk-g8Sa5bnFE93J5/s1600/times24tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/times24tv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0037",
                "cName": "Time Television US",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB0vZxPvxFjatZ2PMoAsdAbOvU0aSlcPkbXmNEJ5qLnepBIz2ldrT7QbAer40xPKF8XZMNvdcT6VvqlKg0hKFOXzpt_OonGPXzUHEf2beVDAmmA-ezYqGYUsqOYW5_jTdy8hc4Iy-7lzSGTBSDf7RtmgsUWm_mf3sYRfY131pNg87PuR5ozXv5vQ-8aFkh/s1600/time%20television%20us.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/timetvusa.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0038",
                "cName": "The Channel TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdIHfK9G0n6yRuhSxNFdT6mvV8pHKpj3rg0MLFTocSxCjrEsmpkjcJS3hOmXIh8EjVA7eUqJDzP8e8jP13P4SlSHUPlCOeh_o0yP9g0hwUkAWLPuhAV7DSjdernvZtm-IasY64BG0WBWAflfa_X8E97J_R3chogrudssvEBltciy-RZAgNSKjuZR4ShSgb/s1600/thechanneltv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/thechanneltv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0046",
                "cName": "NRB TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm_9H8epPXS51m7_fPu3Mp2vWt7ridnQ6GAoaDbsm1LJCZZ3BvUjjxbPiQlIQo2Ai_anfZ1XTRgfaICeLITGvv0PC2Oq4vtT2L5mltP6RNlBMQud0_Ib5oadhMkSau-Ojp8jqIHoYR6vhlmNlb6dbKTdwc1xpRsdCgyVaHTJ7gJMruUqAB-1klZMo5iBk9/s1600/nrbtv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/nrb-eu.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0049",
                "cName": "NASA TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCvIsvlWPPFMOFPrilgZIsrYwQ5SxGFIv8p0CEyeHyCgyqesyP7namBw2va76vZ1Z01e0e5wxZmLstKSzt8ZvGEJ18wKEZgZIr3Yp3325-deDF2Iq8O9sUCuLw-mR8r7K_JXOxp6Nvu9ZdsofP1Yw92VPnNqkagfqMW2MeIc1q2mD009stnBn6cPbDK7MR/s1600/nasa%20tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/nasatv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0050",
                "cName": "NAN TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkspdeFfLelvflWFo3Sw885y_hQB728dNdcVDyNjO6TUxl-oleC7sS5CuP2LdwV4saklJI6akngKT-vwJWyl0o0Ff3q-lypy8gUpLF9dtiDMwZZ-fZ9FF6bXZsgylsL_5U6egbafK9sUydMA818dKaLsJemV_8_x-S_Te5arl8qD8OvCC7Xjpzcn8FAmz3/s1600/nantv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/nantv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0053",
                "cName": "Millennium TV USA",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivCbSrLZYi4e1GyYaEmE_iLsgKHdSwmkrP4wMelsusxUlenlSR3jfB5tNBGHn8hvI451AyQOrKtCwH2wX5ZUKGv3aH5dvF7phD0iUKAp6rsDNwG6BQEApcuRrc1pi0GwvF4HCh3CxC0OLkILG1H0V7M1qOnRKvJXWOoA68OY3CWtpbzcaRR7mI9Lkt9e2P/s1600/millenium%20tv%20usa.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/millenniumtv-odr-up2.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0054",
                "cName": "Millennium TV 24",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpViYxIkpf7ynOYo_Ke73F1FKvD6rSXOOUcvsXbwYj617PKVs-tv9TYsu-0S58aONA8QlcGDR7ik1F_cn7BGP45kxcsmxo3pqFD40o3oJEixh6BMG48GPOUHNPJad6d_PP4ugohM-wlu9wJg871AqnItPPE4OBFEZFZjkL6i-ksUq09uqVY5mrACZEm7E-/s1600/millenium%20tv%2024.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/mnews24.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0057",
                "cName": "JonmoBhumi TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7fPcMJnKg18XJkacdwf0olSqMTVQ6-4gRbrdv84_qDr1hV1jdXUSjHAOtxgqXndd-Wa72f9k9amFNhdBYFjNyyGJn3ZQztb21jNErf5psRksLQEBrLc8sgaMIJ449gsmGSdeXntrmw16DwfwmVei9OxnCknqff78c8Lr0w0wCFYK_DJdDrjWIKj2JJLZr/s1600/jonmovumi%20tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/jonmobhumitv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0059",
                "cName": "Jagoroni TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKQLLoe8z0cZrNiIqNI4WOhBSDwSsEnaK1LuR9rssQg-Wtq3Wgrbfnf6twxV0bMIzYT7kJguHZMyyjuNAwxKQ1v3xXp2HlgrUzNTmICva6dXZwsrEtXc8n5UFbAg6LPYZ161X5e-ZE_ZbDCiZjdZTnYr0t468FUtlSFSfUEktvmufEPISk3XMuRasgIz5E/s1600/jagoroni%20tv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/jagoronitv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0061",
                "cName": "Islam TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4M9CTJocgjkvyTf-rQ6l-TTyqHKKXT4bDG-enCRPmrsfM3Kh8ZaBWG7ndlkJpmpg_GiKLUkPx9Y4pjITM0BZ5pzancXyl9dCe-IKRFwcv_8G1Gl4jNolw7yAsZ8UOwfdhJY0VYBmhZ2JgMM0BEhPuuN9Mh1XkCXVAGh_OWu2cCnElmOgxGNWQigZJhZxc/s1600/islamtv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/islamtv.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0062",
                "cName": "Iqra Bangla",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit9uegsvZ9m_OipLYKvXa3Q8JFdaIHLhWy4EMaxTD2TSQEXWWO96l5rpey1b0PaLzA7wq1e7j8NNIDLyygxj7Sc0SFrS7JW323hAYIKOQ7AR9BTA59VapUbCB2L6E2NTK1BAaXQOwI9R_ze-daaESrWt13q2yH4QPpu9D1C8E6bz8XoVVQ4u5ZxHWg9crB/s1600/iqrabangla.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/iqrabanglatvoffice.stream/playlist.m3u8",
                "cCat": [""]
            },
            {
                "cId": "jb0063",
                "cName": "iON TV UK",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYr0qFVrM1Y_svatVEYkU5528kWCfEaVWPZn4lKHOL5IsCdFd3mGno6_QqIJUy-tcuNXThNqKrN0W3JTifizhmTg_nFJAFp6xNwBDDHYD32nmcSWdI9JfzbphgREEL0OTF3eyfCL95hmATI1NlUVp8jy70RNSMabDjQZenRhFkh2dvjo13wxo3NtLWMtz3/s1600/iontv.webp",
                "cLink": "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/iontvuk.stream/playlist.m3u8",
                "cCat": [""]
            },
        ]


        const featuredChannel = [
            {
                "cId": "00321",
                "cName": "A Sports",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho2EEo8__FyXniCZPLl8bBBtcgztQJlMFe05jTzZEOeCHbKbO1ooRPBRedy4_k4diXURMH6wQmUENVCgboBF_U8bCHKiS_qK7kTd8TGSFHgZLdqMWNjDU2pQ1xRA-c8OjnRkO02bTwuSdxSULF-m9GGL9sgUssrnbIS4cl2ieXiBjkam9Xuc1V3n28IoVb/s1600/bdvspak.webp",
                "cLink": "https://humsab.xyz/APakSpo/index.m3u8?token=bfaeae8c8599b3970bb1d7b0bc335988",
                "cCat": ["bdpak"]
            },
            {
                "cId": "00323",
                "cName": "Gazi TV",
                "cLogo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho2EEo8__FyXniCZPLl8bBBtcgztQJlMFe05jTzZEOeCHbKbO1ooRPBRedy4_k4diXURMH6wQmUENVCgboBF_U8bCHKiS_qK7kTd8TGSFHgZLdqMWNjDU2pQ1xRA-c8OjnRkO02bTwuSdxSULF-m9GGL9sgUssrnbIS4cl2ieXiBjkam9Xuc1V3n28IoVb/s1600/bdvspak.webp",
                "cLink": "https://edge01.iptv.digijadoo.net/live/gazi_tv_hd/chunks.m3u8?expires=1725029737&md5=KMkg_iCVjIV82UVtwnkAHQ&user=ec6dd7dec84545a2a15edb664bb2d4aa",
                "cCat": ["bdpak"]
            }
        ]


        const playerRef = useRef(null);
        const playerWrapperRef = useRef(null);
        const [playing, setPlaying] = useState(false);
        const [volume, setVolume] = useState(() => {
            const savedVolume = localStorage.getItem('volume');
            return savedVolume !== null ? parseFloat(savedVolume) : 0.8;
        });
        const [muted, setMuted] = useState(false);
        const [played, setPlayed] = useState(0);
        const [loaded, setLoaded] = useState(0);
        const [seeking, setSeeking] = useState(false);
        const [controlsVisible, setControlsVisible] = useState(true);
        const [currentlyPlaying, setCurrentlyPlaying] = useState("");
        const [buffering, setBuffering] = useState(false);

        useEffect(() => {
            const hideControlsTimeout = setTimeout(() => {
                setControlsVisible(false);
            }, 3000);

            return () => clearTimeout(hideControlsTimeout);
        }, [controlsVisible]);

        useEffect(() => {
            localStorage.setItem('volume', volume);
        }, [volume]);

        const handleMouseMove = () => {
            setControlsVisible(true);
        };

        const handlePlayPause = () => {
            setPlaying(prev => !prev);
        };

        const handleStop = () => {
            setPlaying(false);
            if (playerRef.current) {
                playerRef.current.seekTo(0);
            }
            setCurrentlyPlaying("")
            setBuffering(false)
        };

        const handleVolumeChange = e => {
            setVolume(parseFloat(e.target.value));
        };

        const handleToggleMuted = () => {
            setMuted(prev => !prev);
        };

        const handleSeekChange = e => {
            setPlayed(parseFloat(e.target.value));
        };

        const handleSeekMouseDown = () => {
            setSeeking(true);
        };

        const handleSeekMouseUp = e => {
            setSeeking(false);
            if (playerRef.current) {
                playerRef.current.seekTo(parseFloat(e.target.value));
            }
        };

        const handleFullscreen = () => {
            if (screenfull.isEnabled && playerWrapperRef.current) {
                screenfull.toggle(playerWrapperRef.current);
            }
        };

        const handleProgress = state => {
            if (!seeking) {
                setPlayed(state.played);
                setLoaded(state.loaded);
            }
        };

        const handleChannelChange = link => {
            setCurrentlyPlaying(link);
            setPlaying(true);
        };

        const handleBuffer = () => {
            setBuffering(true);
        };

        const handleBufferEnd = () => {
            setBuffering(false);
            setPlaying(true);
        };

        const handlePiP = () => {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture().catch(error => {
                    console.error('Error exiting Picture-in-Picture mode:', error);
                });
            } else if (playerRef.current && playerRef.current.getInternalPlayer()) {
                const videoElement = playerRef.current.getInternalPlayer();
                if (videoElement.requestPictureInPicture) {
                    videoElement.requestPictureInPicture().catch(error => {
                        console.error('Error entering Picture-in-Picture mode:', error);
                    });
                } else {
                    console.error('Picture-in-Picture is not supported in this browser.');
                }
            }
        };



        return (
            <div className='w-full flex sm:flex-col justify-between h-screen pt-[70px]'>
                {/* Video Player Section */}
            <Helmet>
                <title>Live TV | Fc Predators</title>
            </Helmet>
                <div className='w-1/2 sm:w-full relative h-full sm:h-1/2 p-2 sm:p-0'>
                    <div
                        ref={playerWrapperRef}
                        className="w-full relative h-full sm:h-full bg-[#000000] rounded-[10px]"
                        onMouseMove={handleMouseMove}
                    >

                        <ReactPlayer
                            width="100%"
                            height="100%"
                            ref={playerRef}
                            controls={false}
                            playing={playing}
                            volume={volume}
                            muted={muted}
                            url={currentlyPlaying}
                            onProgress={handleProgress}
                            onBuffer={handleBuffer}
                            onBufferEnd={handleBufferEnd}
                        />

                        {!currentlyPlaying && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 rounded-[10px] bg-black">
                                <img className='w-[30%]' src={logo} alt="" /> <h1 className='text-[#d5a538]'>Select Channel to Play</h1>
                            </div>
                        )}
                        {buffering && (
                            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-[10px] bg-black">
                                <span className="loading loading-ring loading-lg"></span>
                            </div>
                        )}
                        {controlsVisible && (
                            <div style={{ borderRadius: '0px 0px 10px 10px' }} className="controls  sm:rounded-[0x] absolute bottom-0 w-full flex justify-between p-5 space-x-4">


                                {/* Play/Pause Button */}
                                <button className="w-[5%] text-white" onClick={handlePlayPause}>
                                    {playing ? <FaPause /> : <FaPlay />}
                                </button>
                                {/* Stop Button */}
                                <button className="w-[5%] text-white" onClick={handleStop}>
                                    <FaStop />
                                </button>
                                {/* Volume Controls */}
                                <div className="flex justify-between w-[25%]">
                                    <button className="w-[30%] text-white" onClick={handleToggleMuted}>
                                        {muted ? <FaVolumeXmark /> : <FaVolumeHigh />}
                                    </button>
                                    <input
                                        className="w-[100%]"
                                        type="range"
                                        min={0}
                                        max={1}
                                        step="any"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        style={{
                                            '--played-percentage': `${100}%`,
                                            '--loaded-percentage': `${100}%`
                                        }}
                                    />
                                </div>
                                {/* Seek Bar */}
                                <input
                                    className="w-[55%]"
                                    type="range"
                                    min={0}
                                    max={1}
                                    step="any"
                                    value={played}
                                    onMouseDown={handleSeekMouseDown}
                                    onChange={handleSeekChange}
                                    onMouseUp={handleSeekMouseUp}
                                    style={{
                                        '--played-percentage': `${played * 100}%`,
                                        '--loaded-percentage': `${loaded * 100}%`
                                    }}
                                />
                                <button className="w-[5%] text-white">
                                    <MdPictureInPictureAlt onClick={handlePiP} />
                                </button>
                                {/* <button className='w-[3%] text-white'><MdCast /></button> */}
                                <button className="w-[5%] text-white" onClick={handleFullscreen}>
                                    {screenfull.isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Channel List Section */}
                <div className='w-1/2 sm:w-full text-center p-4 overflow-y-auto'>


                    <h1 className='text-2xl font-bold mb-4 text-[#d5a538]'>Featured</h1>
                    <div className='flex flex-wrap justify-center gap-2 mb-6'>
                        {featuredChannel.length > 0 ? (
                            featuredChannel.map(fChannel => (
                                <button onClick={() => handleChannelChange(fChannel.cLink)} key={fChannel.cId} className='w-[20%] sm:w-[30%] h-auto p-2 border '>
                                    <div className='w-full relative'>
                                        <LazyLoadImage
                                            className={`${fChannel.cLink === currentlyPlaying ? 'border-[5px] border-[#d5a538] border' : ''} shadow-lg w-full h-auto rounded-[50%]`}
                                            src={fChannel.cLogo}
                                            alt={fChannel.cName}
                                            placeholderSrc={placeHolderImage}
                                            effect="blur"
                                            wrapperProps={{
                                                // If you need to, you can tweak the effect transition using the wrapper style.
                                                style: { transitionDelay: "1s" },
                                            }}
                                        />
                                        <h1 className={`absolute ${fChannel.cCat == 'bdpak' ? 'text-[#000000]' : ''} text-[10px] w-full rounded-full p-2 bottom-2`}>{fChannel.cName}</h1>
                                    </div>


                                </button>
                            ))
                        ) : (
                            <span className="loading loading-bars loading-md"></span>
                        )}
                    </div>


                    <h1 className='text-2xl font-bold mb-4 text-[#d5a538]'>Sports</h1>
                    <div className='flex flex-wrap justify-center gap-2 mb-6'>
                        {sportsChannel.length > 0 ? (
                            sportsChannel.map(fChannel => (
                                <button onClick={() => handleChannelChange(fChannel.cLink)} key={fChannel.cId} className='w-[20%] sm:w-[30%] h-auto p-2 border '>
                                    <div className='w-full relative'>
                                        <LazyLoadImage
                                            className={`${fChannel.cLink === currentlyPlaying ? 'border-[5px] border-[#d5a538] border' : ''} shadow-lg w-full h-auto rounded-[50%]`}
                                            src={fChannel.cLogo}
                                            alt={fChannel.cName}
                                            placeholderSrc={placeHolderImage}
                                            effect="blur"
                                            wrapperProps={{
                                                // If you need to, you can tweak the effect transition using the wrapper style.
                                                style: { transitionDelay: "1s" },
                                            }}
                                        />
                                        <h1 className={`absolute ${fChannel.cCat == 'pl' ? 'text-[#ffffff]' : ''} ${fChannel.cCat == 'llg' ? 'text-[#fe0307]' : ''} w-full rounded-full p-2 bottom-2`}>{fChannel.cName}</h1>
                                    </div>


                                </button>
                            ))
                        ) : (
                            <span className="loading loading-bars loading-md"></span>
                        )}
                    </div>

                    <h1 className='text-2xl font-bold mb-4 text-[#d5a538]'>All</h1>
                    <div className='flex flex-wrap justify-center gap-2'>
                        {channels.length > 0 ? (
                            channels.map(channel => (
                                <button onClick={() => handleChannelChange(channel.cLink)} key={channel.cId} className='w-[20%] sm:w-[30%] h-auto p-2 border'>
                                    <LazyLoadImage
                                        className={`${channel.cLink === currentlyPlaying ? 'border-[5px] border-[#d5a538] border' : ''} w-full h-auto rounded-[50%]`}
                                        src={channel.cLogo}
                                        alt={channel.cName}
                                        placeholderSrc={placeHolderImage}
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                    />
                                    {/* <p className={`text-[10px] mt-2 ${channel.cLink === currentlyPlaying ? 'text-[#d5a538]' : 'text-[#505050]'}`}>{channel.cName}</p> */}
                                </button>
                            ))
                        ) : (
                            <span className="loading loading-bars loading-md"></span>
                        )}
                    </div>

                    <h1 className='text-2xl font-bold mb-4 mt-10 text-[#d5a538]'>Jago BD Server</h1>
                    <div className='flex flex-wrap justify-center gap-2'>
                        {jagoBdServer.length > 0 ? (
                            jagoBdServer.map(channel => (
                                <button onClick={() => handleChannelChange(channel.cLink)} key={channel.cId} className='w-[20%] sm:w-[30%] h-auto p-2 border'>
                                    <LazyLoadImage
                                        className={`${channel.cLink === currentlyPlaying ? 'border-[5px] border-[#d5a538] border' : ''} w-full h-auto rounded-[50%]`}
                                        src={channel.cLogo}
                                        alt={channel.cName}
                                        placeholderSrc={placeHolderImage}
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                    />
                                    {/* <p className={`text-[10px] mt-2 ${channel.cLink === currentlyPlaying ? 'text-[#d5a538]' : 'text-[#505050]'}`}>{channel.cName}</p> */}
                                </button>
                            ))
                        ) : (
                            <span className="loading loading-bars loading-md"></span>
                        )}
                    </div>

                </div>
            </div >
        );
    };

    return (
        <NotAuthorized />
    );

}
export default LiveTV;
