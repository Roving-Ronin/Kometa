// Branch Detection

document$.subscribe(function() {

  // Update scroller marquees
  const scrollers = document.querySelectorAll('.scroller');
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Scrolling disabled, delete all but the first image (first two for theme-specific imaging)
    scrollers.forEach(scroller => {
      const images = Array.from(scroller.querySelectorAll('.scroller__inner > *'));
      for (let i = 2; i < images.length; i++) {
        images[i].remove();
      }
    });
  } else {
    scrollers.forEach(scroller => {
      // If clones are present, skip (this function can be triggered >1 times as SPA)
      if (scroller.querySelector('[aria-hidden=true]')) { return; }

      // Enable animation attribute
      scroller.setAttribute('data-animated', true);

      const scrollerInner = scroller.querySelector('.scroller__inner');

      // Randomize order of images if it is randomized
      if (scroller.classList.contains('randomized')) {
        for (let i = scrollerInner.children.length; i >= 0; i--) {
          scrollerInner.appendChild(scrollerInner.children[Math.random() * i | 0]);
        }
      }

      const scrollerContent = Array.from(scrollerInner.children); // Do not use live children

      scrollerContent.forEach(item => {
        const newItem = item.cloneNode(true);
        newItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(newItem);
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.href;
  const ellipsisSpan = document.querySelector(".md-ellipsis");
  const mdBanner = document.querySelector(".md-banner");

  let ellipsisText = "Kometa Wiki";
  let bannerColor = ""; // Declare bannerColor to avoid ReferenceError

  if (currentURL.includes("en/nightly") || currentURL.includes("en/develop")) {
    ellipsisText = currentURL.includes("en/nightly") ? "Kometa Nightly Wiki" : "Kometa Develop Wiki";
    bannerColor = "#611423";
  }

  if (!ellipsisSpan) {
    const newEllipsisSpan = document.createElement("span");
    newEllipsisSpan.classList.add("md-ellipsis");
    document.body.appendChild(newEllipsisSpan);
    newEllipsisSpan.textContent = ellipsisText;
  } else {
    ellipsisSpan.textContent = ellipsisText;
  }

  if (mdBanner && bannerColor) {
    mdBanner.style.setProperty("background-color", bannerColor, "important");
  }
});

// Table Sort
document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})

/*!
 * tablesort v5.2.1 (2021-10-30)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2021 ; Licensed MIT
*/

!function(){function a(b,c){if(!(this instanceof a))return new a(b,c);if(!b||"TABLE"!==b.tagName)throw new Error("Element must be a table");this.init(b,c||{})}var b=[],c=function(a){var b;return window.CustomEvent&&"function"==typeof window.CustomEvent?b=new CustomEvent(a):(b=document.createEvent("CustomEvent"),b.initCustomEvent(a,!1,!1,void 0)),b},d=function(a,b){return a.getAttribute(b.sortAttribute||"data-sort")||a.textContent||a.innerText||""},e=function(a,b){return a=a.trim().toLowerCase(),b=b.trim().toLowerCase(),a===b?0:a<b?1:-1},f=function(a,b){return[].slice.call(a).find(function(a){return a.getAttribute("data-sort-column-key")===b})},g=function(a,b){return function(c,d){var e=a(c.td,d.td);return 0===e?b?d.index-c.index:c.index-d.index:e}};a.extend=function(a,c,d){if("function"!=typeof c||"function"!=typeof d)throw new Error("Pattern and sort must be a function");b.push({name:a,pattern:c,sort:d})},a.prototype={init:function(a,b){var c,d,e,f,g=this;if(g.table=a,g.thead=!1,g.options=b,a.rows&&a.rows.length>0)if(a.tHead&&a.tHead.rows.length>0){for(e=0;e<a.tHead.rows.length;e++)if("thead"===a.tHead.rows[e].getAttribute("data-sort-method")){c=a.tHead.rows[e];break}c||(c=a.tHead.rows[a.tHead.rows.length-1]),g.thead=!0}else c=a.rows[0];if(c){var h=function(){g.current&&g.current!==this&&g.current.removeAttribute("aria-sort"),g.current=this,g.sortTable(this)};for(e=0;e<c.cells.length;e++)f=c.cells[e],f.setAttribute("role","columnheader"),"none"!==f.getAttribute("data-sort-method")&&(f.tabindex=0,f.addEventListener("click",h,!1),null!==f.getAttribute("data-sort-default")&&(d=f));d&&(g.current=d,g.sortTable(d))}},sortTable:function(a,h){var i=this,j=a.getAttribute("data-sort-column-key"),k=a.cellIndex,l=e,m="",n=[],o=i.thead?0:1,p=a.getAttribute("data-sort-method"),q=a.getAttribute("aria-sort");if(i.table.dispatchEvent(c("beforeSort")),h||(q="ascending"===q?"descending":"descending"===q?"ascending":i.options.descending?"descending":"ascending",a.setAttribute("aria-sort",q)),!(i.table.rows.length<2)){if(!p){for(var r;n.length<3&&o<i.table.tBodies[0].rows.length;)r=j?f(i.table.tBodies[0].rows[o].cells,j):i.table.tBodies[0].rows[o].cells[k],m=r?d(r,i.options):"",m=m.trim(),m.length>0&&n.push(m),o++;if(!n)return}for(o=0;o<b.length;o++)if(m=b[o],p){if(m.name===p){l=m.sort;break}}else if(n.every(m.pattern)){l=m.sort;break}for(i.col=k,o=0;o<i.table.tBodies.length;o++){var s,t=[],u={},v=0,w=0;if(!(i.table.tBodies[o].rows.length<2)){for(s=0;s<i.table.tBodies[o].rows.length;s++){var r;m=i.table.tBodies[o].rows[s],"none"===m.getAttribute("data-sort-method")?u[v]=m:(r=j?f(m.cells,j):m.cells[i.col],t.push({tr:m,td:r?d(r,i.options):"",index:v})),v++}for("descending"===q?t.sort(g(l,!0)):(t.sort(g(l,!1)),t.reverse()),s=0;s<v;s++)u[s]?(m=u[s],w++):m=t[s-w].tr,i.table.tBodies[o].appendChild(m)}}i.table.dispatchEvent(c("afterSort"))}},refresh:function(){void 0!==this.current&&this.sortTable(this.current,!0)}},"undefined"!=typeof module&&module.exports?module.exports=a:window.Tablesort=a}();

document.addEventListener("DOMContentLoaded", function() {
    tippy('[data-tooltip]', {
      theme: 'material',
      allowHTML: true,
      interactive: true,
      content(reference) {
        const id = reference.getAttribute('data-tooltip-id');
        const tooltipContent = document.getElementById(id);
        return tooltipContent ? tooltipContent.innerHTML : '';
      }
    });
});