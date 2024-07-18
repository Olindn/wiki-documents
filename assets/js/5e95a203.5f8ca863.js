"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4245],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(58168),i=(n(96540),n(15680));const a={description:"I2S test with XIAO ESP32S3",title:"I2S Test",keywords:["ESP32S3","XIAO","ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/respeaker_i2s_test",last_update:{date:"7/1/2024",author:"Jessie"}},s=void 0,o={unversionedId:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_i2s_test",id:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_i2s_test",title:"I2S Test",description:"I2S test with XIAO ESP32S3",source:"@site/docs/Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_i2s_test.md",sourceDirName:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3",slug:"/respeaker_i2s_test",permalink:"/respeaker_i2s_test",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_i2s_test.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1719792e3,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{description:"I2S test with XIAO ESP32S3",title:"I2S Test",keywords:["ESP32S3","XIAO","ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/respeaker_i2s_test",last_update:{date:"7/1/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"ReSpeaker Lite Voice Assistant Kit",permalink:"/xiao_respeaker"},next:{title:"Sine Wave Generator with ReSpeaker Lite",permalink:"/respeaker_streams_generator"}},l={},p=[{value:"Functionality",id:"functionality",level:3},{value:"Code",id:"code",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This project is a test sketch for verifying the functionality of the I2S interface on the ReSpeaker Lite board, which integrates a ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},"XIAO ESP32S3")," microcontroller and a microphone array. The sketch generates a square wave audio signal, writes it to the I2S interface, and then reads back the samples from the onboard microphone array to check the integrity of the I2S transmission and reception."),(0,i.yg)("h3",{id:"functionality"},"Functionality"),(0,i.yg)("p",null,"The sketch starts by initializing the serial communication and configuring the I2S pins, it generates a square wave audio signal based on the specified frequency and amplitude. The generated audio samples are written to the I2S interface using the I2S.write() function."),(0,i.yg)("p",null,"The sketch then reads back the samples from the microphone array through the I2S interface using the I2S.read() function and counts the number of non-zero samples received."),(0,i.yg)("h3",{id:"code"},"Code"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <ESP_I2S.h>\n#include <wav_header.h>\n\nI2SClass I2S;\n\nconst int sampleRate = 16000;                         // sample rate in Hz\nconst int frequency = 440;                            // frequency of square wave in Hz\nconst int amplitude = 500;                            // amplitude of square wave\nint32_t sample = amplitude;                           // current sample value\nconst int halfWavelength = sampleRate / frequency;    // half wavelength of square wave\n\nint count = 0;\nint i2s_read = 0;\nbool i2s_test = true;\n\nvoid setup() {\n  Serial.begin(115200);\n  while(!Serial);             // Wait for the serial port to connect\n\n  I2S.setPins(8, 7, 43, 44);  // Configure I2S pins\n  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)){\n    Serial.println("Failed to initialize I2S!");\n    while(1);                 // Halt if failed to initialize\n  }\n}\n\nvoid loop() {\n  if(i2s_test){\n    Serial.println("I2S test!");\n\n    // Generate and write square wave samples\n    for(int i = 0; i < 32000; i++){\n      if(count % halfWavelength == 0){\n        sample = -sample;    // Toggle sample value to create square wave\n      }\n      I2S.write(sample);     // Write sample to right channel\n      count++;\n    }\n\n    // Read samples from I2S and count non-zero samples\n    i2s_read=0;\n    for(int i = 0; i < 32000; i++){\n      int sample_read = I2S.read();\n      Serial.print(sample_read);\n      Serial.print(" ");\n      if(sample_read != 0 && sample_read != 0xFFFF){\n        i2s_read++;\n      }\n    }\n    Serial.println();\n\n    // Check if the number of valid samples is above a threshold\n    if(i2s_read > 16000){\n      Serial.println("I2S RX pass!");\n    } else{\n      i2s_read = 0;\n      for(int i = 0; i < 32000; i++){\n        int sample_read = I2S.read();\n        if (sample_read != 0 && sample_read != 0xFFFF){\n          i2s_read++;\n        }\n      }\n      if(i2s_read > 16000)\n        Serial.println("I2S RX pass!");\n      else\n        Serial.println("I2S RX fail!");\n    }\n\n    Serial.println("OVER");\n    i2s_test = false;\n  }\n}\n')),(0,i.yg)("p",null,"If the number of non-zero samples received exceeds a threshold (16000 in this case), the I2S reception is considered a pass. Otherwise, it is considered a fail."),(0,i.yg)("p",null,"The test results, including the I2S sample values and the pass/fail status, are printed to the Serial Monitor."),(0,i.yg)("p",null,"Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"Serial Monitor")," to view the test result."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-test-pass.png",alt:"pir",width:800,height:"auto"})))}d.isMDXComponent=!0}}]);