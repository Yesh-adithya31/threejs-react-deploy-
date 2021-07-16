(this["webpackJsonpthreejs-react-deploy-"]=this["webpackJsonpthreejs-react-deploy-"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(35),i=a.n(c),r=(a(44),a.p,a(45),a(12)),o=a(52),l=a(36),d=a(6);Object(r.b)({OrbitControls:l.a});var h=function(){var e=Object(r.e)(),t=e.camera,a=e.gl;return Object(d.jsx)("orbitControls",{attach:"orbitControls",args:[t,a.domElement]})},j=a(0),b=function(e){var t=Object(r.d)(j.TextureLoader,"/threejs-react-deploy-/autoshop.jpg"),a=Object(r.e)().gl,n=Object(s.useMemo)((function(){return new j.WebGLCubeRenderTarget(t.image.height).fromEquirectangularTexture(a,t)}),[]);return Object(d.jsx)("primitive",{attach:"background",object:n})},u=a(7),p=a(8),f=function(e){var t=Object(o.c)((function(){return Object(u.a)({args:[20,1,10]},e)})),a=Object(p.a)(t,2),s=a[0];a[1];return Object(d.jsxs)("mesh",Object(u.a)(Object(u.a)({ref:s},e),{},{receiveShadow:!0,children:[Object(d.jsx)("boxBufferGeometry",{args:[200,1,100]}),Object(d.jsx)("meshPhysicalMaterial",{transparent:!0,opacity:.2})]}))},m={activeMesh:{},activeMeshName:"Capot001_CAR_PAINT_0",cameraPos:new j.Vector3(9,2,4),target:new j.Vector3(4,0,0),shouldUpdate:!0,name:""},O=function(e){var t=function(e){m.activeMesh&&(m.activeMesh.material.color=new j.Color(e.target.style.background))};return Object(d.jsxs)("div",{style:{position:"absolute",zIndex:1,left:0,right:0,margin:"auto",width:"fit-content",display:"flex",top:"20px"},children:[Object(d.jsx)("div",{onClick:t,style:{background:"blue",height:50,width:50}}),Object(d.jsx)("div",{onClick:t,style:{background:"yellow",height:50,width:50}}),Object(d.jsx)("div",{onClick:t,style:{background:"white",height:50,width:50}})]})},g=a(20),x=function(e){var t=e.position,a=void 0===t?[0,0,0]:t,s=e.offset,n=void 0===s?[0,0,0]:s,c=e.dims,i=void 0===c?[1,1,1]:c,r=e.visible,l=void 0!==r&&r,h=e.children,j=Object(o.c)((function(){return{mass:1,args:i,position:a}})),b=Object(p.a)(j,2),u=b[0],f=b[1];return Object(d.jsxs)("group",{ref:u,api:f,children:[Object(d.jsxs)("mesh",{scale:i,visible:l,children:[Object(d.jsx)("boxBufferGeometry",{}),Object(d.jsx)("meshPhysicalMaterial",{wireframe:!0})]}),Object(d.jsx)("group",{position:n,children:h})]})},v=a(39),w=(a(50),function(e){return console.log(e.name),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:e.imageUrl,width:"100%",height:"100%",alt:"user"})}),Object(d.jsx)("div",{className:"story",id:"story1",children:Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("p",{children:[" ",e.des]})]})})]})})})});Object(r.b)({DragControls:v.a});var y=function(e){var t=Object(s.useRef)(),a=Object(s.useRef)(),n=Object(r.e)(),c=n.camera,i=n.gl,o=n.scene,l=Object(s.useState)([]),h=Object(p.a)(l,2),j=h[0],b=h[1];return Object(s.useEffect)((function(){b(t.current.children)}),[]),Object(s.useEffect)((function(){a.current.addEventListener("hoveron",(function(e){return o.orbitControls.enabled=!1})),a.current.addEventListener("hoveroff",(function(e){return o.orbitControls.enabled=!0})),a.current.addEventListener("dragstart",(function(e){var t;null===(t=e.object.api)||void 0===t||t.mass.set(0),console.log(e.object.uuid)})),a.current.addEventListener("dragend",(function(e){var t;return null===(t=e.object.api)||void 0===t?void 0:t.mass.set(1)})),a.current.addEventListener("drag",(function(e){var t,a;null===(t=e.object.api)||void 0===t||t.position.copy(e.object.position),null===(a=e.object.api)||void 0===a||a.velocity.set(0,0,0)}))}),[j]),Object(d.jsxs)("group",{ref:t,children:[Object(d.jsx)("dragControls",{transformGroup:e.transformGroup,ref:a,args:[j,c,i.domElement]}),e.children]})},k=a(40),M=function(e){var t,a=Object(r.d)(k.a,"/threejs-react-deploy-"+e.path);return a.animations.length>0&&(t=new j.AnimationMixer(a.scene),a.animations.forEach((function(e){t.clipAction(e).play()}))),Object(r.c)((function(e,a){var s;null===(s=t)||void 0===s||s.update(a)})),a.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=j.FrontSide)})),Object(d.jsx)("primitive",{object:a.scene,scale:e.scale})},S=function(e){return Object(g.a)(e),Object(d.jsxs)(s.Suspense,{fallback:null,children:[Object(d.jsx)(y,{transformGroup:!0,children:Object(d.jsx)(x,{position:[4,2,0],dims:[3,2,6],offset:[0,-.4,.8],children:Object(d.jsx)(M,{path:"/tesla_model_3/scene.gltf",scale:new Array(3).fill(.01),objectName:"teslaModel3"})})}),Object(d.jsx)(y,{transformGroup:!0,children:Object(d.jsx)(x,{position:[-4,2,0],dims:[3,2,7],offset:[0,-.8,.2],children:Object(d.jsx)(M,{path:"/tesla_model_s/scene.gltf",scale:new Array(3).fill(.012),objectName:"teslaModelS"})})}),Object(d.jsx)("group",{children:Object(d.jsx)(M,{path:"/biped_robot/scene.gltf",scale:new Array(3).fill(.02)})})]})},C=function(e){return Object(g.a)(e),Object(r.c)((function(e){var t=e.camera,a=e.scene;(m.activeMesh.name!==m.activeMeshName&&(m.activeMesh=a.getObjectByName(m.activeMeshName)||{}),m.shouldUpdate)&&(t.position.lerp(m.cameraPos,.1),a.orbitControls.target.lerp(m.target,.1),a.orbitControls.update(),t.position.clone().sub(m.cameraPos).length()<.1&&(m.shouldUpdate=!1))})),null},E=a(14),T={zIndex:1,position:"absolute",bottom:"30vh",height:"30px",width:"30px",background:"white",textAlign:"center",borderRadius:"100%",fontSize:20,fontWeight:"bold",opacity:.7,border:"1px solid black",cursor:"pointer"},N=function(e){Object(g.a)(e);var t=Object(s.useState)("Model 3 | Tesla"),a=Object(p.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)("https://www.aljazeera.com/wp-content/uploads/2020/08/1b494d172c944119820d384269fc82d0_18.jpeg?resize=770%2C513"),r=Object(p.a)(i,2),o=r[0],l=r[1],h=Object(s.useState)("Tesla Inc. will start exporting Model 3 sedans made at its gigafactory on the outskirts of Shanghai to Europe later this month, seeking to boost sales in one of the fastest-growing electric-car markets.The car will be shipped to more than 10 countries, including Germany, France and Switzerland, the automaker said in a statement sent via WeChat on Monday. The company\u2019s Shanghai factory \u2014 its first outside the U.S. \u2014 opened for local deliveries at the start of this year."),j=Object(p.a)(h,2),b=j[0],f=j[1],O={1:{cameraPos:[9,2,4],target:[4,0,0],name:"Capot001_CAR_PAINT_0",mainName:"Model 3 | Tesla",des:"Tesla Inc. will start exporting Model 3 sedans made at its gigafactory on the outskirts of Shanghai to Europe later this month, seeking to boost sales in one of the fastest-growing electric-car markets.The car will be shipped to more than 10 countries, including Germany, France and Switzerland, the automaker said in a statement sent via WeChat on Monday. The company\u2019s Shanghai factory \u2014 its first outside the U.S. \u2014 opened for local deliveries at the start of this year.",imgUrl:"https://www.aljazeera.com/wp-content/uploads/2020/08/1b494d172c944119820d384269fc82d0_18.jpeg?resize=770%2C513"},2:{cameraPos:[1,2,5],target:[-4,0,0],name:"object005_bod_0",mainName:"Model S | Tesla",des:"Tesla's CEO Elon Musk announced today that the customer deliveries of the refreshed Tesla Model S Plaid - scheduled on June 3, 2021 - were pushed back to June 10.The additional week is required for the company to make some final, undisclosed tweaks.At the same time, Elon Musk said that the new Model S feels like a spaceship:",imgUrl:"https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop"}},x=function(e){var t,a;(t=m.cameraPos).set.apply(t,Object(E.a)(O[e].cameraPos)),(a=m.target).set.apply(a,Object(E.a)(O[e].target)),m.activeMeshName=O[e].name,m.shouldUpdate=!0,c(O[e].mainName),l(O[e].imgUrl),f(O[e].des)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{name:n,imageUrl:o,des:b}),Object(d.jsx)("button",{onClick:function(e){return x(2)},style:Object(u.a)({left:"40vw"},T),children:"<"}),Object(d.jsx)("button",{onClick:function(e){return x(1)},style:Object(u.a)({right:"40vw"},T),children:">"})]})},P=function(e){var t=Object(s.useRef)(),a=Object(r.e)().scene;return Object(s.useEffect)((function(){a.lights?a.lights.push(t):a.lights=[t]}),[]),Object(d.jsxs)("mesh",Object(u.a)(Object(u.a)({},e),{},{ref:t,children:[Object(d.jsx)("pointLight",{castShadow:!0,"shadow-mapSize-height":Math.pow(2,10),"shadow-mapSize-width":Math.pow(2,10),"shadow-radius":10}),Object(d.jsx)("sphereBufferGeometry",{args:[.2,20,20]}),Object(d.jsx)("meshPhongMaterial",{emissive:"white"})]}))},_=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ambientLight",{intensity:.2}),Object(d.jsx)("directionalLight",{"shadow-mapSize-height":Math.pow(2,10),"shadow-mapSize-width":Math.pow(2,10),"shadow-radius":10,position:[6,3,0],intensitym:2,castShadow:!0}),Object(d.jsx)(P,{position:[0,3,0]}),Object(d.jsx)(P,{position:[6,3,0]}),Object(d.jsx)(P,{position:[-6,3,0]})]})},z=a(32),L=function(){var e=Object(s.useState)(null),t=Object(p.a)(e,2),a=t[0],n=t[1],c=Object(r.e)().scene;return Object(s.useEffect)((function(){c.lights&&3===c.lights.length&&n(c.lights)}),[c.lights]),a?Object(d.jsx)(z.b,{children:Object(d.jsx)(z.a,{focusDistance:0,focalLength:.02,bokehScale:2,height:480})}):null};var A=function(){return Object(d.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(d.jsx)(O,{}),Object(d.jsx)(N,{}),Object(d.jsxs)(r.a,{gl:{powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1},shadowMap:!0,style:{background:"black"},camera:{position:[7,7,7]},children:[Object(d.jsx)(s.Suspense,{fallback:null,children:Object(d.jsx)(b,{})}),Object(d.jsx)(C,{state:m}),Object(d.jsx)(_,{}),Object(d.jsx)(h,{}),Object(d.jsx)("axesHelper",{args:[5]}),Object(d.jsxs)(o.a,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(f,{position:[0,-.5,0]})]}),Object(d.jsx)(L,{})]})]})},U=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,54)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),U()}},[[51,1,2]]]);
//# sourceMappingURL=main.ecfbf957.chunk.js.map