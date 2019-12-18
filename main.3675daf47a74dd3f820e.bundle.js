(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(22);const BoxPropTypes={borderWidth:prop_types_default.a.string,invert:prop_types_default.a.bool,padding:prop_types_default.a.string},Box=styled_components_browser_esm.b.div`
  ${props=>props.invert?"\n    background-color: var(--color-light);\n    filter: invert(100%);":""}

  background-color: inherit;
  border-width: ${props=>props.borderWidth};
  border: ${props=>props.borderWidth} solid;
  display: block;
  padding: ${props=>props.padding};

  /* ↓ For high contrast mode */
  outline: var(--border-thin) solid transparent;
  outline-offset: calc(var(--border-thin) * -1);
`;Box.propTypes=BoxPropTypes,Box.defaultProps={borderWidth:"var(--border-thin)",invert:!1,padding:"var(--s1)"};var layouts_Box=Box;const CenterPropTypes={andText:prop_types_default.a.bool,gutters:prop_types_default.a.string,intrinsic:prop_types_default.a.bool,max:prop_types_default.a.string},Center=styled_components_browser_esm.b.div`
  box-sizing: content-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props=>props.max};

  ${props=>props.intrinsic?"\n    align-items: center;\n    display: flex;\n    flex-direction: column;":""}

  ${({gutters:gutters})=>gutters?`\n    padding-left: ${gutters};\n    padding-right: ${gutters};`:""}

  ${props=>props.andText?"text-align: center;":""}
`;Center.propTypes=CenterPropTypes,Center.defaultProps={andText:!1,gutters:"0",intrinsic:!1,max:"var(--measure)"};var layouts_Center=Center;const ClusterPropTypes={align:prop_types_default.a.string,justify:prop_types_default.a.string,space:prop_types_default.a.string},Cluster=styled_components_browser_esm.b.div`
  > * {
    align-items: ${props=>props.align};
    display: flex;
    justify-content: ${props=>props.justify};
    margin: calc(${props=>props.space} / 2 * -1);
    flex-wrap: wrap;
  }

  > * > * {
    margin: calc(${props=>props.space} / 2);
  }
`;Cluster.propTypes=ClusterPropTypes,Cluster.defaultProps={align:"center",justify:"flex-start",space:"var(--s1)"};var layouts_Cluster=Cluster;const CoverPropTypes={centered:prop_types_default.a.string,minHeight:prop_types_default.a.string,noPad:prop_types_default.a.bool,space:prop_types_default.a.string},Cover=styled_components_browser_esm.b.div`
  display: flex;
  flex-direction: column;
  min-height: ${props=>props.minHeight};
  padding: ${({noPad:noPad,space:space})=>noPad?"0px":space};

  > * {
    margin-top: ${props=>props.space};
    margin-bottom: ${props=>props.space};
  }

  > :first-child:not(${props=>props.centered}) {
    margin-top: 0;
  }

  > :last-child:not(${props=>props.centered}) {
    margin-bottom: 0;
  }

  > ${props=>props.centered} {
    margin-top: auto;
    margin-bottom: auto;
  }
`;Cover.propTypes=CoverPropTypes,Cover.defaultProps={centered:"h1",minHeight:"100vh",noPad:!1,space:"var(--s1)"};var layouts_Cover=Cover;const FramePropTypes={ratio:prop_types_default.a.string.isRequired},Frame=styled_components_browser_esm.b.div`
  display: block;
  padding-bottom: ${({ratio:ratio})=>{const[ratioNumerator,ratioDenominator]=function selectRatioArray(ratio){const ratioParts=ratio.split(":",2);return[ratioParts[0],ratioParts[1]]}(ratio);return`calc(${ratioNumerator} / ${ratioDenominator} * 100%)`}};
  position: relative;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  > img, 
  > video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;Frame.propTypes=FramePropTypes,Frame.defaultProps={ratio:"6:9"};var layouts_Frame=Frame,react=__webpack_require__(0),react_default=__webpack_require__.n(react),es2015=__webpack_require__(161);const GridPropTypes={min:prop_types_default.a.string,isWide:prop_types_default.a.bool,space:prop_types_default.a.string},StyledGrid=styled_components_browser_esm.b.div`
  align-content: start;
  display: grid;
  gap: ${props=>props.space};
  grid-template-columns: ${props=>props.isWide?`repeat(auto-fit, minmax(${props.min}, 1fr))`:"100%"};
`,Grid=props=>{const gridRef=Object(react.useRef)(null),[isWide,setIsWide]=Object(react.useState)(props.isWide);return Object(es2015.a)(gridRef,()=>{const element=gridRef.current;if(element){const test=document.createElement("div");test.style.width=props.min,element.appendChild(test);const minToPixels=test.offsetWidth;element.removeChild(test),setIsWide(element.scrollWidth>minToPixels)}}),react_default.a.createElement(StyledGrid,Object.assign({},props,{isWide:isWide,ref:gridRef}))};Grid.propTypes=GridPropTypes,Grid.defaultProps={min:"250px",isWide:!1,space:"var(--s0)"};var layouts_Grid=Grid;const ImposterPropTypes={breakout:prop_types_default.a.bool,margin:prop_types_default.a.string,fixed:prop_types_default.a.bool},Imposter=styled_components_browser_esm.b.div`
  position: ${props=>props.fixed?"fixed":"absolute"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Contents */
  --margin: ${props=>props.margin};
  overflow: auto;
  max-height: calc(100% - (var(--margin) * 2));
  max-width: calc(100% - (var(--margin) * 2));
`;Imposter.propTypes=ImposterPropTypes,Imposter.defaultProps={breakout:!1,margin:"0",fixed:!1};var layouts_Imposter=Imposter;const ReelPropTypes={height:prop_types_default.a.string,itemWidth:prop_types_default.a.string,overflowing:prop_types_default.a.bool,space:prop_types_default.a.string,thumbColor:prop_types_default.a.string,trackColor:prop_types_default.a.string},StyledReel=styled_components_browser_esm.b.div`
  display: flex;
  height: ${props=>props.height};
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-color: ${props=>props.thumbColor} ${props=>props.trackColor};

  ::-webkit-scrollbar {
    height: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props=>props.trackColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props=>props.trackColor};
    background-image: linear-gradient(${props=>props.trackColor} 0, ${props=>props.trackColor} 0.25rem, ${props=>props.thumbColor} 0.25rem, ${props=>props.thumbColor} 0.75rem, ${props=>props.trackColor} 0.75rem);
  }

  > * {
    flex: 0 0 ${props=>props.itemWidth};
  }


  > img {
    height: 100%;
    flex-basis: auto;
    width: auto;
  }

  > * + * {
    margin-left: ${props=>props.space};
  }

  ${props=>props.overflowing&&styled_components_browser_esm.a`
    padding-bottom: ${props.space};
  `}
`,Reel=props=>{const reelRef=Object(react.useRef)(null),[overflowing,setOverflowing]=Object(react.useState)(props.overflowing);return Object(es2015.a)(reelRef,entry=>{const element=reelRef.current;element&&setOverflowing(element.scrollWidth>entry.width)}),react_default.a.createElement(StyledReel,Object.assign({},props,{overflowing:overflowing,ref:reelRef}))};Reel.propTypes=ReelPropTypes,Reel.defaultProps={itemWidth:"auto",overflowing:!1,space:"1rem",height:"auto",trackColor:"#000",thumbColor:"#fff"};var layouts_Reel=Reel;function selectSpace(space){return"0"===space?"0px":space}try{selectSpace.displayName="selectSpace",selectSpace.__docgenInfo={description:"",displayName:"selectSpace",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.",name:"match",required:!0,type:{name:"(regexp: string | RegExp) => RegExpMatchArray"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nReplaces text in a string, using a regular expression or search string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.",name:"search",required:!0,type:{name:"(regexp: string | RegExp) => number"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\rIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"(separator: string | RegExp, limit?: number) => string[]"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\rIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"() => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"() => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/selectSpace.ts#selectSpace"]={docgenInfo:selectSpace.__docgenInfo,name:"selectSpace",path:"src/utils/selectSpace.ts#selectSpace"})}catch(__react_docgen_typescript_loader_error){}const SidebarPropTypes={contentMin:prop_types_default.a.string,noStretch:prop_types_default.a.bool,side:prop_types_default.a.oneOf(["left","right"]),sideWidth:prop_types_default.a.string,space:prop_types_default.a.string,wrapReverse:prop_types_default.a.bool},Sidebar=styled_components_browser_esm.b.div`
  overflow: hidden;

  > * {
    display: flex;
    flex-wrap: ${({wrapReverse:wrapReverse})=>wrapReverse?"wrap-reverse":"wrap"};
    margin: calc(${props=>selectSpace(props.space)} / 2 * -1);
    ${props=>props.noStretch?"align-items: flex-start;":""}
  }

  > * > * {
    flex-grow: 1;
    ${({sideWidth:sideWidth})=>sideWidth?`flex-basis: ${sideWidth};`:""}
    margin: calc(${props=>selectSpace(props.space)} / 2);
  }

  > * > ${({side:side})=>"left"!==side?":first-child":":last-child"} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(${props=>props.contentMin} - ${props=>selectSpace(props.space)});
  }
`;Sidebar.propTypes=SidebarPropTypes,Sidebar.defaultProps={contentMin:"50%",noStretch:!1,side:"left",sideWidth:"25%",space:"var(--s1)",wrapReverse:!1};var layouts_Sidebar=Sidebar;const StackPropTypes={recursive:prop_types_default.a.bool,splitAfter:prop_types_default.a.number,space:prop_types_default.a.string},Stack=styled_components_browser_esm.b.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${props=>props.recursive?"":">"} * + * {
    margin-top: ${props=>props.space};
  }

  ${({splitAfter:splitAfter})=>splitAfter?`\n    .stack-l > :nth-child(${splitAfter}) {\n      margin-bottom: auto;\n    }`:""}
`;Stack.propTypes=StackPropTypes,Stack.defaultProps={recursive:!1,space:"var(--s1)"};var layouts_Stack=Stack;const SwitcherPropTypes={limit:prop_types_default.a.number,space:prop_types_default.a.string,threshold:prop_types_default.a.string},Switcher=styled_components_browser_esm.b.div`
  display: block;

  > * {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: calc((${props=>selectSpace(props.space)} / 2) * -1);
  }

  > * > * {
    flex-basis: calc((${props=>props.threshold} - (100% - ${props=>selectSpace(props.space)})) * 999);
    margin: calc(${props=>selectSpace(props.space)} / 2);
    flex-grow: 1;
  }

  > * > :nth-last-child(n+${props=>props.limit+1}),
  > * > :nth-last-child(n+${props=>props.limit+1}) ~ * {
    flex-basis: 100%;
  }
`;Switcher.propTypes=SwitcherPropTypes,Switcher.defaultProps={limit:4,space:"var(--s1)",threshold:"var(--measure)"};var layouts_Switcher=Switcher;__webpack_require__.d(__webpack_exports__,"a",(function(){return layouts_Box})),__webpack_require__.d(__webpack_exports__,"b",(function(){return layouts_Center})),__webpack_require__.d(__webpack_exports__,"c",(function(){return layouts_Cluster})),__webpack_require__.d(__webpack_exports__,"d",(function(){return layouts_Cover})),__webpack_require__.d(__webpack_exports__,"e",(function(){return layouts_Frame})),__webpack_require__.d(__webpack_exports__,"f",(function(){return layouts_Grid})),__webpack_require__.d(__webpack_exports__,"g",(function(){return layouts_Imposter})),__webpack_require__.d(__webpack_exports__,"h",(function(){return layouts_Reel})),__webpack_require__.d(__webpack_exports__,"i",(function(){return layouts_Sidebar})),__webpack_require__.d(__webpack_exports__,"j",(function(){return layouts_Stack})),__webpack_require__.d(__webpack_exports__,"k",(function(){return layouts_Switcher}))},352:function(module,exports,__webpack_require__){__webpack_require__(353),__webpack_require__(465),module.exports=__webpack_require__(466)},374:function(module,exports){},466:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(343),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(217);__webpack_require__(800);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(802),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_0__.withInfo)({inline:!0,source:!0}))}.call(this,__webpack_require__(467)(module))},472:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":256,"./nestedObjectAssign.js":256};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=472},800:function(module,exports,__webpack_require__){var content=__webpack_require__(801);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(318)(content,options);content.locals&&(module.exports=content.locals)},801:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(317)(!1)).push([module.i,":root {\n  --measure: 70ch;\n  --ratio: 1.5;\n  --s-5: calc(var(--s-4) / var(--ratio));\n  --s-4: calc(var(--s-3) / var(--ratio));\n  --s-3: calc(var(--s-2) / var(--ratio));\n  --s-2: calc(var(--s-1) / var(--ratio));\n  --s-1: calc(var(--s0) / var(--ratio));\n  --s0: 1em;\n  --s1: calc(var(--s0) * var(--ratio));\n  --s2: calc(var(--s1) * var(--ratio));\n  --s3: calc(var(--s2) * var(--ratio));\n  --s4: calc(var(--s3) * var(--ratio));\n  --s5: calc(var(--s4) * var(--ratio));\n\n  color: #02091A;\n}\n\n* {\n  box-sizing: border-box;\n}\n",""])},802:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.tsx":803,"./1-Box.stories.tsx":804,"./10-Imposter.stories.tsx":805,"./2-Center.stories.tsx":806,"./3-Cluster.stories.tsx":807,"./4-Cover.stories.tsx":808,"./5-Frame.stories.tsx":809,"./6-Grid.stories.tsx":810,"./6-Reel.stories.tsx":811,"./7-Sidebar.stories.tsx":812,"./8-Stack.stories.tsx":813,"./9-Switcher.stories.tsx":814};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=802},803:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"baseCss",(function(){return baseCss}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Welcome"};const baseCss=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Base CSS"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This library is based on ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://every-layout.dev"},"every-layout.dev"),", and its layouts have CSS variables as default values."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"For example, here's the CSS file used in this Storybook"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre",null,":root {\n  --measure: 70ch;\n  --ratio: 1.5;\n  --s-5: calc(var(--s-4) / var(--ratio));\n  --s-4: calc(var(--s-3) / var(--ratio));\n  --s-3: calc(var(--s-2) / var(--ratio));\n  --s-2: calc(var(--s-1) / var(--ratio));\n  --s-1: calc(var(--s0) / var(--ratio));\n  --s0: 1em;\n  --s1: calc(var(--s0) * var(--ratio));\n  --s2: calc(var(--s1) * var(--ratio));\n  --s3: calc(var(--s2) * var(--ratio));\n  --s4: calc(var(--s3) * var(--ratio));\n  --s5: calc(var(--s4) * var(--ratio));\n\n  color: #02091A;\n}\n\n* {\n  box-sizing: border-box;\n}\n"))},804:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"simpleBorderedBox",(function(){return simpleBorderedBox}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Box"};const simpleBorderedBox=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"1em"},"Contents")},805:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxImposter",(function(){return boxImposter}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Imposter"};const boxImposter=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.g,{fixed:!0,margin:"var(--s1)",style:{width:"100vw",zIndex:1}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{padding:"var(--s1)",style:{background:"black",color:"white"}},"I am a Box in an Imposter"))},806:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxedCenteredBox",(function(){return boxedCenteredBox}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Center"};const boxedCenteredBox=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"1em"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.b,{andText:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"Contents")))},807:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxCluster",(function(){return boxCluster}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Cluster"};const boxCluster=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"var(--s0)"},"Videos"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"var(--s0)"},"Images"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"var(--s0)"},"Posts"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"var(--s0)"},"Features"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"var(--s0)"},"Neoscope"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"var(--s0)"},"The Byte"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"var(--s0)"},"Social"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"var(--s0)"},"Newsletter")))},808:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxCover",(function(){return boxCover}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Cover"};const boxCover=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.d,{centered:".main"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"4px"},"Videos"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{className:"main",borderWidth:"1px",padding:"4px"},"Posts"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"4px"},"Features"))},809:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxFrame69",(function(){return boxFrame69})),__webpack_require__.d(__webpack_exports__,"boxFrame43",(function(){return boxFrame43})),__webpack_require__.d(__webpack_exports__,"boxFrame12",(function(){return boxFrame12}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Frame"};const boxFrame69=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.e,{ratio:"6:9"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"4px"},"I'm an image")),boxFrame43=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.e,{ratio:"4:3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"4px"},"I'm an image")),boxFrame12=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.e,{ratio:"1:2"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",padding:"4px"},"I'm an image"))},810:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxGrid",(function(){return boxGrid}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Grid"};const boxGrid=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.f,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"1"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"2"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"3"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"4"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"5"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"6"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"7"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"8"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"9"))},811:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxReel",(function(){return boxReel}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Reel"};const boxReel=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.h,{thumbColor:"blue"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",style:{height:"20em",width:"20em"}},"1"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",style:{height:"20em",width:"20em"}},"2"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px",style:{height:"20em",width:"20em"}},"3"))},812:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxSidebar",(function(){return boxSidebar}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Sidebar"};const boxSidebar=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.i,{sideWidth:"12rem",contentMin:"60%"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"Side"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.b,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"Main")))))},813:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxStack",(function(){return boxStack}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Stack"};const boxStack=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.j,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"Top"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"Middle"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.j,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"> Top"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"> Middle"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"> Bottom"))))},814:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"boxSwitcher",(function(){return boxSwitcher}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_exports__.default={title:"Switcher"};const boxSwitcher=()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.k,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"Top"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"Middle"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.k,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"> Top"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"> Middle"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{borderWidth:"1px"},"> Bottom"))))))}},[[352,1,2]]]);
//# sourceMappingURL=main.3675daf47a74dd3f820e.bundle.js.map