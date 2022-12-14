import{a as r}from"./index.f16c040b.js";import{C as a}from"./index.c9bc1c73.js";import{C as i}from"./Card.1a6f5bab.js";import{C as l}from"./HtmlTagsEditor.b55f3dc8.js";import{C as c}from"./SettingsRow.0d51ff21.js";import{S as p}from"./External.051baee5.js";import{n as d}from"./vueComponentNormalizer.58b0a173.js";import"./isArrayLikeObject.5268a676.js";import"./default-i18n.0e73c33c.js";import"./client.b661b356.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./constants.71b051da.js";import"./portal-vue.esm.272b3133.js";import"./Tooltip.a36a3967.js";import"./Slide.01023b2f.js";import"./Editor.f11f5d3a.js";import"./UnfilteredHtml.155f6b63.js";import"./Row.89c6bb85.js";var u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-rss-content"},[e("core-card",{attrs:{slug:"rssContent","header-text":t.strings.rssContent},scopedSlots:t._u([{key:"tooltip",fn:function(){return[e("div",[t._v(t._s(t.strings.tooltip))])]},proxy:!0}])},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"rssContent",!0))}}),t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global?e("core-alert",{attrs:{type:"red"},domProps:{innerHTML:t._s(t.strings.rssFeedDisabled)}}):t._e()],1),e("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.$aioseo.urls.feeds.global,target:"_blank",disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global}},[e("svg-external"),t._v(" "+t._s(t.strings.openYourRssFeed)+" ")],1)]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.rssBeforeContent},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{checkUnfilteredHtml:"","minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"],disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global},model:{value:t.options.rssContent.before,callback:function(n){t.$set(t.options.rssContent,"before",n)},expression:"options.rssContent.before"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.beforeRssDescription)+" ")])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.rssAfterContent},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{checkUnfilteredHtml:"","minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"],disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global},model:{value:t.options.rssContent.after,callback:function(n){t.$set(t.options.rssContent,"after",n)},expression:"options.rssContent.after"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.afterRssDescription)+" ")])]},proxy:!0}])})],1)],1)},_=[];const f={components:{CoreAlert:a,CoreCard:i,CoreHtmlTagsEditor:l,CoreSettingsRow:c,SvgExternal:p},data(){return{strings:{tooltip:this.$t.__("Automatically add content to your site's RSS feed.",this.$td),description:this.$t.__("This feature is used to automatically add content to your site's RSS feed. More specifically, it allows you to add links back to your blog and your blog posts so scrapers will automatically add these links too. This helps search engines identify you as the original source of the content.",this.$td),learnMore:this.$t.__("Learn more",this.$td),rssFeedDisabled:this.$t.sprintf(this.$t.__("Your RSS feed has been disabled. Disabling the global RSS feed is NOT recommended. This will prevent users from subscribing to your content and can hurt your SEO rankings. You can re-enable the global RSS feed in the %1$scrawl content settings%2$s.",this.$td),'<a href="'+this.$aioseo.urls.aio.searchAppearance+'&aioseo-scroll=crawl-content-global-feed&aioseo-highlight=crawl-content-global-feed#/advanced">',"</a>"),rssContent:this.$t.__("RSS Content Settings",this.$td),openYourRssFeed:this.$t.__("Open Your RSS Feed",this.$td),rssBeforeContent:this.$t.__("RSS Before Content",this.$td),rssAfterContent:this.$t.__("RSS After Content",this.$td),beforeRssDescription:this.$t.__("Add content before each post in your site feed.",this.$td),afterRssDescription:this.$t.__("Add content after each post in your site feed.",this.$td),unfilteredHtmlError:this.$t.sprintf(this.$t.__("Your user account role does not have access to edit this field. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"unfilteredHtml",!0))}}},computed:{...r(["options"])}},o={};var m=d(f,u,_,!1,h,null,null,null);function h(t){for(let s in o)this[s]=o[s]}const G=function(){return m.exports}();export{G as default};
