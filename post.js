function labnolThumb(e){return'<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="ID" loading="lazy">'.replace("ID",e)+'<div class="play"><svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"/><path d="M 45,24 27,14 27,34" fill="#fff"/></svg></div>'}function labnolIframe(){var e=document.createElement("iframe");e.setAttribute("src","https://www.youtube.com/embed/ID?autoplay=1".replace("ID",this.dataset.id)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),this.parentNode.replaceChild(e,this)}document.addEventListener("DOMContentLoaded",function(){var e,t,a=document.getElementsByClassName("youtube-player");for(t=0;t<a.length;t++)(e=document.createElement("div")).setAttribute("data-id",a[t].dataset.id),e.innerHTML=labnolThumb(a[t].dataset.id),e.onclick=labnolIframe,a[t].appendChild(e)});var next = document.getElementsByClassName('blog-pager-older-link')[0];if (next) {gPT(next, sOPT);function sOPT(data){sPT(data, next, '', '')};};var prev = document.getElementsByClassName('blog-pager-newer-link')[0];if (prev) {gPT(prev, sNPT);function sNPT(data){sPT(data, prev, '', '')};};function sPT(data, pL, pf, sf) {if (data.feed.entry) {if (data.feed.entry.length > 0) {var title = data.feed.entry[0].title.$t;}}if (title) {pL.innerHTML = pf + title + sf;pL.setAttribute('title', pf + title + sf);}};function gPT(pLk, callback) {var prevnext = pLk.getAttribute('href');var ePrevNext = document.createElement('script');ePrevNext.setAttribute('defer','');ePrevNext.src = 'https://lirikexcel.blogspot.com/feeds/posts/summary?alt=json-in-script&max-results=1&redirect=false&path='+prevnext+'&callback='+callback.name+'';document.body.appendChild(ePrevNext);};
