(this["webpackJsonpevnwang.github.io"]=this["webpackJsonpevnwang.github.io"]||[]).push([[0],{54:function(e,t,s){},55:function(e,t,s){},57:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(0),c=s.n(r),n=s(20),i=s.n(n),l=(s(54),s(55),s(56),s(70)),d=s(76),o=s(75),h=s.p+"static/media/github_icon.c8007a9f.png",j=s.p+"static/media/linkedin_icon.cfa9d8d9.jpg",u=s(24);s(57);function b(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(l.a,{fluid:!0,className:"pr-0 pl-0",children:Object(a.jsxs)(d.a,{bg:"dark",variant:"dark",children:[Object(a.jsx)(d.a.Brand,{children:"Navigation"}),Object(a.jsxs)(o.a,{children:[Object(a.jsx)(o.a.Link,{href:"#about",children:"About"}),Object(a.jsx)(o.a.Link,{href:"#proj",children:"Projects"}),Object(a.jsx)(o.a.Link,{href:"#contact",children:"Contact"})]})]})}),Object(a.jsxs)("div",{className:"img1",children:[Object(a.jsx)("div",{className:"header1",children:Object(a.jsx)("span",{className:"border",children:"Welcome to my website!"})}),Object(a.jsx)("div",{className:"header2",children:Object(a.jsx)("span",{className:"border",children:"Evan Wang"})})]}),Object(a.jsxs)("div",{id:"about",className:"img2",children:[Object(a.jsx)("div",{className:"header3",children:Object(a.jsx)("span",{className:"border",children:"About Me"})}),Object(a.jsx)("div",{className:"about",children:Object(a.jsxs)("div",{className:"border",children:[Object(a.jsx)("h5",{children:"Education"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Rutgers University: B.S. Degree in Computer Science, Minor in Mathematics"}),Object(a.jsx)("li",{children:"Relevant Coursework: Linear Algebra, Data Structures, Databases, Design and Analysis of Alorgorithms, Computer Architecture, Software Methodology, Software Engineering, Data Science"})]}),Object(a.jsx)("h5",{children:"Experience"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Amazon.com, Inc. - Software Development Engineering Intern"}),Object(a.jsx)("li",{children:"Rutgers School of Social Work - Application Developer"})]}),Object(a.jsx)("h5",{children:"Skills"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Back-end and full-stack development"}),Object(a.jsx)("li",{children:"Java, Kotlin, Python, C, C#, Javascript, HTML/CSS, SQL"})]}),Object(a.jsx)("h5",{children:"Interests/Hobbies"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:"In my free time, I enjoy being active. I am a big sports fanatic as I both play and watch sports. I also like hiking and being around nature."})})]})})]}),Object(a.jsxs)("div",{id:"proj",className:"img3",children:[Object(a.jsx)("div",{className:"header3",children:Object(a.jsx)("span",{className:"border",children:"Projects"})}),Object(a.jsx)("a",{className:"proj",style:{top:"20%"},href:"https://customizablechess.web.app/",target:"_blank",rel:"noreferrer",children:"Customizable Chess"}),Object(a.jsx)("a",{className:"proj",style:{top:"30%"},href:"https://github.com/fireteam99/buyme",children:"BuyMe Auction Site"}),Object(a.jsx)("a",{className:"proj",style:{top:"40%"},href:"https://github.com/RGT123/PrinProgProject",children:"Dog Matcher"}),Object(a.jsx)(u.b,{className:"proj",style:{top:"50%"},to:"/gradecalculator",children:"GPA Calculator"})]}),Object(a.jsxs)("div",{id:"contact",className:"img1",children:[Object(a.jsx)("div",{className:"header4",children:Object(a.jsx)("span",{className:"border",children:"Links"})}),Object(a.jsxs)("div",{className:"link-container",children:[Object(a.jsx)("a",{href:"https://www.github.com/evnwang",target:"_blank",rel:"noreferrer",className:"mr-2 ml-2",children:Object(a.jsx)("img",{src:h,className:"center",alt:"github-icon"})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/evan-wang-",target:"_blank",rel:"noreferrer",className:"mr-2 ml-2",children:Object(a.jsx)("img",{src:j,className:"center",alt:"linkedin-icon"})})]}),Object(a.jsx)("div",{className:"email",children:Object(a.jsx)("span",{className:"border",children:"Email: wangevan.ew@gmail.com"})})]})]})}var m=s(40),O=s(27),x=s(42),p=s(43),v=s(22),g=s(47),C=s(46),f=(s(67),s(74)),y=s(71),I=s(44),A=s(73),G=s(72),k={A:4,"B+":3.5,B:3,"C+":2.5,C:2,D:1,F:0},N=function(e){Object(g.a)(s,e);var t=Object(C.a)(s);function s(e){var a;return Object(x.a)(this,s),(a=t.call(this)).state={showModal:!1,currentGPA:null,creditsEarned:null,numCourses:0,courseCredits:[],courseGrades:[],gpa:"",isInvalid:Array(3).fill(!1),courseCreditsIsInvalid:[],courseGradeIsInvalid:[]},a.handleClose=a.handleClose.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleCourseChange=a.handleCourseChange.bind(Object(v.a)(a)),a.calculate=a.calculate.bind(Object(v.a)(a)),a}return Object(p.a)(s,[{key:"handleClose",value:function(){this.setState({showModal:!1})}},{key:"handleChange",value:function(e){var t,s=e.target.name;"n"===s.charAt(0)?this.setState((t={},Object(O.a)(t,s,e.target.value),Object(O.a)(t,"courseCredits",this.state.courseCredits.length>0?this.state.courseCredits.slice(0,parseInt(e.target.value)):Array(parseInt(e.target.value)).fill(null)),Object(O.a)(t,"courseGrades",this.state.courseGrades.length>0?this.state.courseGrades.slice(0,parseInt(e.target.value)):Array(parseInt(e.target.value)).fill(null)),t)):this.setState(Object(O.a)({},s,e.target.value))}},{key:"handleCourseChange",value:function(e){var t=e.target.name.charAt(0),s=e.target.name.charAt(1);if("g"===t){var a=Object(m.a)(this.state.courseGrades);a[s]=e.target.value,this.setState({courseGrades:a})}else{var r=Object(m.a)(this.state.courseCredits);r[s]=parseFloat(e.target.value),this.setState({courseCredits:r})}}},{key:"calculate",value:function(){var e=Array(3).fill(!1),t=!0,s=[],a=[];if(e[0]=this.state.currentGPA&&(this.state.currentGPA<0||this.state.currentGPA>4)||!this.state.currentGPA&&this.state.creditsEarned,e[1]=this.state.creditsEarned&&this.state.creditsEarned<0||this.state.currentGPA&&!this.state.creditsEarned,e[2]=this.state.numCourses<1,this.state.numCourses>0){s=Array(this.state.numCourses).fill(!1),a=Array(this.state.numCourses).fill(!1);for(var r=0;r<this.state.numCourses;r++)s[r]=this.state.courseCredits[r]&&(this.state.courseCredits[r]<1||this.state.courseCredits[r]>5)||!this.state.courseCredits[r]&&this.state.courseGrades[r],a[r]=this.state.courseGrades[r]&&""===this.state.courseGrades[r]||this.state.courseCredits[r]&&!this.state.courseGrades[r];for(r=0;r<this.state.numCourses;r++)if(s[r]||a[r]){t=!1;break}}if(t&&!e.some((function(e){return e}))){var c=0,n=0;for(r=0;r<this.state.numCourses;r++)if(this.state.courseGrades[r]){var i=k[this.state.courseGrades[r]],l=this.state.courseCredits[r];n+=i*l,c+=l}this.state.currentGPA&&(n+=this.state.currentGPA*this.state.creditsEarned,c+=parseFloat(this.state.creditsEarned));var d=n/c;isNaN(d)?this.setState({showModal:!0,isInvalid:e,courseCreditsIsInvalid:s,courseGradeIsInvalid:a,gpa:""}):this.setState({gpa:d,isInvalid:e,courseCreditsIsInvalid:s,courseGradeIsInvalid:a})}else this.setState({isInvalid:e,courseCreditsIsInvalid:s,courseGradeIsInvalid:a,gpa:""})}},{key:"render",value:function(){for(var e=this,t=[],s=0;s<this.state.numCourses;s++)t.push(s);var r=t.map((function(t){return Object(a.jsxs)(f.a.Group,{as:y.a,children:[Object(a.jsxs)(f.a.Label,{column:!0,md:"2",children:["Course ",t+1,": "]}),Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(f.a.Control,{name:"g"+t,as:"select",defaultValue:"",onChange:e.handleCourseChange,isInvalid:e.state.courseGradeIsInvalid[t],children:[Object(a.jsx)("option",{value:"",children:"Course Grade"}),Object(a.jsx)("option",{value:"A",children:"A"}),Object(a.jsx)("option",{value:"B+",children:"B+"}),Object(a.jsx)("option",{value:"B",children:"B"}),Object(a.jsx)("option",{value:"C+",children:"C+"}),Object(a.jsx)("option",{value:"C",children:"C"}),Object(a.jsx)("option",{value:"D",children:"D"}),Object(a.jsx)("option",{value:"F",children:"F"})]}),Object(a.jsx)(f.a.Control.Feedback,{type:"invalid",children:"Please select a letter grade."})]}),Object(a.jsxs)(I.a,{children:[Object(a.jsx)(f.a.Control,{placeholder:"Course credits",name:"c"+t,type:"number",onChange:e.handleCourseChange,isInvalid:e.state.courseCreditsIsInvalid[t]}),Object(a.jsx)(f.a.Control.Feedback,{type:"invalid",children:"This value must be between 1 and 5."})]}),Object(a.jsx)(I.a,{md:"6"})]},t)}));return Object(a.jsxs)("div",{className:"calculator",children:[Object(a.jsxs)(A.a,{show:this.state.showModal,backdrop:"static",children:[Object(a.jsx)(A.a.Header,{closeButton:!0,children:Object(a.jsx)(A.a.Title,{children:"Error"})}),Object(a.jsx)(A.a.Body,{children:"There was a problem calculating your GPA. Please check your input values again."}),Object(a.jsx)(A.a.Footer,{children:Object(a.jsx)(G.a,{variant:"primary",onClick:this.handleClose,children:"Close"})})]}),Object(a.jsxs)(l.a,{fluid:!0,children:[Object(a.jsx)("h1",{className:"pt-2",style:{textAlign:"center"},children:"Calculate Your GPA"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(f.a.Label,{children:"Please input current GPA and credits earned, if applicable."}),Object(a.jsxs)(f.a.Group,{as:y.a,children:[Object(a.jsx)(f.a.Label,{column:!0,md:"2",children:"Current GPA:"}),Object(a.jsxs)(I.a,{children:[Object(a.jsx)(f.a.Control,{name:"currentGPA",onChange:this.handleChange,placeholder:"Enter GPA",type:"number",isInvalid:this.state.isInvalid[0]}),Object(a.jsx)(f.a.Control.Feedback,{type:"invalid",children:"GPA must be a value between 0 and 4."})]}),Object(a.jsx)(I.a,{md:"6"})]}),Object(a.jsxs)(f.a.Group,{as:y.a,children:[Object(a.jsx)(f.a.Label,{column:!0,md:"2",children:"Credits Earned:"}),Object(a.jsxs)(I.a,{children:[Object(a.jsx)(f.a.Control,{name:"creditsEarned",onChange:this.handleChange,placeholder:"Enter completed credits",type:"number",isInvalid:this.state.isInvalid[1]}),Object(a.jsx)(f.a.Control.Feedback,{type:"invalid",children:"Completed credits must be a nonempty, nonnegative number."})]}),Object(a.jsx)(I.a,{md:"6"})]}),Object(a.jsxs)(f.a.Group,{as:y.a,children:[Object(a.jsx)(f.a.Label,{column:!0,md:"4",children:"How many courses are you taking this semester?"}),Object(a.jsxs)(I.a,{children:[Object(a.jsx)(f.a.Control,{name:"numCourses",onChange:this.handleChange,placeholder:"Number of courses attempting",type:"number",isInvalid:this.state.isInvalid[2]}),Object(a.jsx)(f.a.Control.Feedback,{type:"invalid",children:"You must supply at least one course."})]}),Object(a.jsx)(I.a,{md:"4"})]})]}),t.length>0?Object(a.jsxs)(y.a,{children:[Object(a.jsx)(I.a,{md:"2"}),Object(a.jsx)(I.a,{style:{textAlign:"center"},children:"Grade"}),Object(a.jsx)(I.a,{style:{textAlign:"center"},children:"Number of Credits"}),Object(a.jsx)(I.a,{md:"6"})]}):"",r]}),Object(a.jsxs)(l.a,{fluid:!0,children:[""!==this.state.gpa&&Object(a.jsxs)("h5",{className:"pb-3",style:{color:"#d91111"},children:["GPA: ",this.state.gpa]}),Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)(G.a,{className:"mr-2 mb-4",style:{letterSpacing:"1px"},children:"Return to homepage."})}),Object(a.jsx)(G.a,{variant:"dark",className:"mb-4",style:{letterSpacing:"1px"},onClick:this.calculate,children:"Calculate!"})]})]})}}]),s}(c.a.Component),w=s(7);var P=function(){return Object(a.jsx)(u.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(w.c,{children:[Object(a.jsx)(w.a,{path:"/gradecalculator",children:Object(a.jsx)(N,{})}),Object(a.jsx)(w.a,{path:"/",children:Object(a.jsx)(b,{})})]})})})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,77)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),r(e),c(e),n(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.debf6a61.chunk.js.map