(this.webpackJsonpmintrello=this.webpackJsonpmintrello||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/Mintrello-Butler.39efeebc.gif"},34:function(e,t,a){e.exports=a.p+"static/media/splashfiller1.2c273915.gif"},35:function(e,t,a){e.exports=a.p+"static/media/splashfiller2.9c41f4d9.gif"},36:function(e,t,a){e.exports=a.p+"static/media/buter-pocket.824b9f8c.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/main.6cb3861d.png"},38:function(e,t,a){e.exports=a.p+"static/media/drag_card.68ae77b1.gif"},39:function(e,t,a){e.exports=a.p+"static/media/create_newlist.2faf547f.gif"},40:function(e,t,a){e.exports=a.p+"static/media/drag_list.9d434513.gif"},41:function(e,t,a){e.exports=a.p+"static/media/edit_card_title.ebe523fb.gif"},42:function(e,t,a){e.exports=a.p+"static/media/edit_card_description.5341eaab.gif"},43:function(e,t,a){e.exports=a.p+"static/media/create_card.22db11eb.gif"},44:function(e,t,a){e.exports=a.p+"static/media/delete_card.cbe5b823.gif"},45:function(e,t,a){e.exports=a.p+"static/media/list_title.8a4239a5.gif"},46:function(e,t,a){e.exports=a.p+"static/media/delete_list.f7e8292b.gif"},48:function(e,t,a){e.exports=a(63)},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=a(13),s=a(17),o=a(4),d=a(9),m=a(5),u=a(6),p=a(10),b=a(8),h=a(7),f=a(19),E=a(24),g=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={id:n.props.card.id,title:n.props.card.title,description:n.props.card.description},n.update=n.update.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.deleteCard=n.deleteCard.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(d.a)({},e,a.currentTarget.value))}}},{key:"handleClick",value:function(e){this.props.closeModal(),this.props.editCard(this.state)}},{key:"deleteCard",value:function(){this.props.removeCard(this.props.column,this.props.card),this.props.closeModal()}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"card-title-container"},r.a.createElement("span",{className:"card-title-icon",id:"card-show-icons"},r.a.createElement(f.a,{icon:E.b}),r.a.createElement("h3",null,"Title")),r.a.createElement("br",null),r.a.createElement("textarea",{className:"card-title-editor",spellCheck:"false",defaultValue:this.state.title,onChange:this.update("title")}),r.a.createElement("span",{className:"card-show-close",onClick:this.handleClick},r.a.createElement(f.a,{icon:E.c})),r.a.createElement("div",{className:"card-show-listname"})),t=r.a.createElement("div",{className:"card-description"},r.a.createElement("div",{className:"card-description-top"},r.a.createElement("span",{className:"card-desc-icon",id:"card-show-icons"},r.a.createElement(f.a,{icon:E.a})),r.a.createElement("h3",null,"Description")),r.a.createElement("textarea",{className:"card-description-editor",defaultValue:this.state.description,onChange:this.update("description"),placeholder:"Click here to add a description...",spellCheck:"false"}));return r.a.createElement("div",{className:"card-show"},r.a.createElement("div",{className:"card-show-title"}," ",e," "),r.a.createElement("div",{className:"card-show-desc"}," ",t," "),r.a.createElement("button",{className:"show-card-delete",onClick:this.deleteCard}," Delete Card"))}}]),a}(r.a.Component),O=Object(i.b)(null,(function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})}}}))(g),v=(a(60),Object(i.b)((function(e){return{modal:e.modal}}),(function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})}}}))((function(e){var t,a=e.modal;e.closeModal;if(!a)return null;switch(a.type){case"show-card":t=r.a.createElement(O,{card:a.item[0],editCard:a.item[1],removeCard:a.item[2],column:a.item[3]});break;default:return null}return r.a.createElement("div",{className:"modal-background"},r.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t))}))),j=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar-container"},r.a.createElement(s.b,{to:"/"},r.a.createElement("h3",null,"Mintrello")))}}]),a}(r.a.Component),C=a(33),k=a.n(C),y=a(34),N=a.n(y),S=a(35),x=a.n(S),I=a(36),w=a.n(I),L=a(30),M=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("h1",{className:"about"},"~ Meet the Engineers ~"),r.a.createElement("div",{className:"footer-desc"},r.a.createElement("div",{className:"githubs"},r.a.createElement("h3",null,r.a.createElement(f.a,{icon:L.a})," \xa0Github Links"),r.a.createElement("section",{className:"github-links"},r.a.createElement("a",{href:"https://github.com/lordrickyz/mintrello",target:"_blank"},"Github Repo"),r.a.createElement("a",{href:"https://github.com/lordrickyz",target:"_blank"},"Ricky Zheng"),r.a.createElement("a",{href:"https://github.com/CGodl",target:"_blank"},"Carl Godlewski"),r.a.createElement("a",{href:"https://github.com/LouisVelz",target:"_blank"},"Louis Velazquez"))),r.a.createElement("div",{className:"linkedins"},r.a.createElement("h3",null,r.a.createElement(f.a,{icon:L.b})," \xa0Linkedin Links"),r.a.createElement("section",{className:"linkedin-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/rickyzhengs/",target:"_blank"},"Ricky Zheng"),r.a.createElement("a",{href:"https://www.linkedin.com/in/louis-velazquez-bb63085a/",target:"_blank"},"Louis Velazquez"),r.a.createElement("a",{href:"https://www.linkedin.com/in/carl-godlewski-b64b0512/",target:"_blank"},"Carl Godlewski")))))}}]),a}(r.a.Component),_=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"splash-page-container"},r.a.createElement("header",null,r.a.createElement(j,null)),r.a.createElement("div",{className:"splash-page-top"},r.a.createElement("img",{className:"butler-gif",src:k.a,alt:"The Butler is missing :O"}),r.a.createElement("div",{className:"splash-page-main-words"},r.a.createElement("h1",null,"Mintrello"),r.a.createElement("p",null,"Keep project planning sweet and simple"),r.a.createElement("ul",{className:"start-buttons-container"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/tutorial"},r.a.createElement("button",{className:"left-start-btn"},"Tutorial"))),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/dashboard"},r.a.createElement("button",{className:"right-start-btn"},"Get Started")))))),r.a.createElement("ul",{className:"splash-page-body"},r.a.createElement("li",null,r.a.createElement("h1",null,"Track",r.a.createElement("br",null),r.a.createElement("p",null,"With Mintrello you don't have to worry about losing track of project status. Keep up on current tasks with Mintrello's project board. Break up projects in to smaller pieces with cards."," ")),r.a.createElement("img",{src:N.a,alt:"I'm missing :O"})),r.a.createElement("li",null,r.a.createElement("h1",null,"Complete",r.a.createElement("br",null),r.a.createElement("p",null,"Complete, delete, forget. Mintrello's emphasis on a minimalist structure ensures the only visible projects are the ones you still need to complete.")),r.a.createElement("img",{src:x.a,alt:"I'm missing :O"})),r.a.createElement("li",null,r.a.createElement("h1",null,"Take anywhere",r.a.createElement("br",null),r.a.createElement("p",null,"With Mintrello you keep track of projects on your PC or your mobile. Mintrello's design ensures a clean interface no matter your screen size."," ")),r.a.createElement("img",{className:"butler-pocket",src:w.a,alt:"I'm missing :O"}))),r.a.createElement(M,null))}}]),a}(r.a.Component),T=a(2),D=a(18),A=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(D.b,{draggableId:this.props.card.id,index:this.props.index},(function(t,a){return r.a.createElement("div",Object.assign({className:"card-container"},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),r.a.createElement("div",{onClick:function(){return e.props.openShowModal([e.props.card,e.props.editCard,e.props.removeCard,e.props.column])},id:"card-click-container"},r.a.createElement("span",{id:"card-item-title"},e.props.card.title)))}))}}]),a}(r.a.Component),z=Object(i.b)(null,(function(e){return{openShowModal:function(t){return e(function(e,t){return{type:"OPEN_MODAL",modal:{type:e,item:t}}}("show-card",t))}}}))(A),J=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={id:"card-".concat(n.props.cardLength),title:"",description:""},n.update=n.update.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(d.a)({},e,a.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.props.column,{id:"card-".concat(this.props.cardLength),title:this.state.title,description:""}),this.setState({title:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"card-form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"card-form"},r.a.createElement("input",{type:"text",value:this.state.title,onChange:this.update("title"),className:"card-input-title",placeholder:"Enter Card Title"}),r.a.createElement("input",{type:"submit",value:"+Add Card",disabled:!this.state.title,className:"card-input-submit"})))}}]),a}(r.a.Component),P=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={id:n.props.column.id,title:n.props.column.title,cardIds:n.props.column.cardIds},n.update=n.update.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.deleteColumn=n.deleteColumn.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(d.a)({},e,a.target.value))}}},{key:"handleClick",value:function(e){this.props.editColumn(this.state)}},{key:"deleteColumn",value:function(){this.props.removeColumn(this.props.column)}},{key:"render",value:function(){var e=this;return r.a.createElement(D.b,{draggableId:this.props.column.id,index:this.props.index},(function(t){return r.a.createElement("div",Object.assign({className:"column-container"},t.draggableProps,{ref:t.innerRef}),r.a.createElement("div",Object.assign({className:"column-item-header"},t.dragHandleProps),r.a.createElement("textarea",{className:"list-name-editor",onBlur:e.handleClick,onChange:e.update("title"),defaultValue:e.props.column.title})),r.a.createElement(D.c,{droppableId:e.props.column.id},(function(t,a){return r.a.createElement("div",Object.assign({className:"column-card-container",ref:t.innerRef},t.droppableProps),e.props.cards.map((function(t,a){return r.a.createElement(z,{key:t.id,card:t,column:e.props.column,index:a,editCard:e.props.editCard,removeCard:e.props.removeCard})})),t.placeholder,r.a.createElement(J,{column:e.props.column,onSubmit:e.props.addCard,cards:e.props.cards,cardLength:Object.keys(e.props.totalCards).length+1}),r.a.createElement("button",{className:"remove-clmn-btn",onClick:e.deleteColumn},"Remove Column"))})))}))}}]),a}(r.a.Component),R={cards:{"card-1":{id:"card-1",title:"Trashing",description:"Take out the garbage"},"card-2":{id:"card-2",title:"Watching",description:"Watch my favorite show"},"card-3":{id:"card-3",title:"Charging",description:"Charge my phone"},"card-4":{id:"card-4",title:"Cooking",description:"Cook Dinner"}},columns:{"column-1":{id:"column-1",title:"To Do",cardIds:["card-1","card-2","card-3","card-4"]},"column-2":{id:"column-2",title:"In Progress",cardIds:[]},"column-3":{id:"column-3",title:"Done",cardIds:[]}},columnOrder:["column-1","column-2","column-3"]},G=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={id:"column-".concat(n.props.columnLength),title:"",cardIds:[]},n.update=n.update.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(d.a)({},e,a.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit({id:"column-".concat(this.props.columnLength),title:this.state.title,cardIds:[]}),this.setState({title:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"list-form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"list-form"},r.a.createElement("input",{type:"text",value:this.state.title,onChange:this.update("title"),className:"list-input-title",placeholder:"Enter Column Title..."}),r.a.createElement("input",{type:"submit",value:"+Add Column",disabled:!this.state.title,className:"list-input-submit"})))}}]),a}(r.a.Component),V=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).addColumn=function(e){var t=Object(T.a)(Object(T.a)({},n.state),{},{columns:Object(T.a)(Object(T.a)({},n.state.columns),{},Object(d.a)({},e.id,e)),columnOrder:n.state.columnOrder.concat(e.id)});n.setState(t),localStorage.setItem("state",JSON.stringify(t))},n.editColumn=function(e){var t=Object(T.a)(Object(T.a)({},n.state),{},{columns:Object(T.a)(Object(T.a)({},n.state.columns),{},Object(d.a)({},e.id,e))});n.setState(t),localStorage.setItem("state",JSON.stringify(t))},n.removeColumn=function(e){var t=n.state.columnOrder.filter((function(t){return t!==e.id})),a=Object.assign({},n.state.columns);delete a[e];var r=Object(T.a)(Object(T.a)({},n.state),{},{columns:a,columnOrder:t});n.setState(r),localStorage.setItem("state",JSON.stringify(r))},n.addCard=function(e,t){var a=Object(T.a)(Object(T.a)({},n.state),{},{cards:Object(T.a)(Object(T.a)({},n.state.cards),{},Object(d.a)({},t.id,t)),columns:Object(T.a)(Object(T.a)({},n.state.columns),{},Object(d.a)({},e.id,Object(T.a)(Object(T.a)({},e),{},{cardIds:n.state.columns[e.id].cardIds.concat(t.id)})))});n.setState(a),localStorage.setItem("state",JSON.stringify(a))},n.editCard=function(e){var t=Object(T.a)(Object(T.a)({},n.state),{},{cards:Object(T.a)(Object(T.a)({},n.state.cards),{},Object(d.a)({},e.id,e))});n.setState(t),localStorage.setItem("state",JSON.stringify(t))},n.removeCard=function(e,t){var a=t.id,r=e.id,c=Object.assign({},n.state.cards);delete c[t];var l=n.state.columns[r].cardIds.filter((function(e){return e!==a})),i=Object(T.a)(Object(T.a)({},n.state),{},{cards:c,columns:Object(T.a)(Object(T.a)({},n.state.columns),{},Object(d.a)({},r,Object(T.a)(Object(T.a)({},e),{},{cardIds:l})))});n.setState(i),localStorage.setItem("state",JSON.stringify(i))},n.onDragEnd=function(e){var t,a=e.destination,r=e.source,c=e.draggableId,l=e.type;if(a&&(a.droppableId!==r.droppableId||a.index!==r.index)){if("column"===l){var i=Array.from(n.state.columnOrder);i.splice(r.index,1),i.splice(a.index,0,c);var s=Object(T.a)(Object(T.a)({},n.state),{},{columnOrder:i});return n.setState(s),void localStorage.setItem("state",JSON.stringify(s))}var o=n.state.columns[r.droppableId],m=n.state.columns[a.droppableId];if(o===m){var u=Array.from(o.cardIds);u.splice(r.index,1),u.splice(a.index,0,c);var p=Object(T.a)(Object(T.a)({},o),{},{cardIds:u}),b=Object(T.a)(Object(T.a)({},n.state),{},{columns:Object(T.a)(Object(T.a)({},n.state.columns),{},Object(d.a)({},p.id,p))});return n.setState(b),void localStorage.setItem("state",JSON.stringify(b))}var h=Array.from(o.cardIds);h.splice(r.index,1);var f=Object(T.a)(Object(T.a)({},o),{},{cardIds:h}),E=Array.from(m.cardIds);E.splice(a.index,0,c);var g=Object(T.a)(Object(T.a)({},m),{},{cardIds:E}),O=Object(T.a)(Object(T.a)({},n.state),{},{columns:Object(T.a)(Object(T.a)({},n.state.columns),{},(t={},Object(d.a)(t,f.id,f),Object(d.a)(t,g.id,g),t))});n.setState(O),localStorage.setItem("state",JSON.stringify(O))}},n.state=n.props.data,localStorage.setItem("state",JSON.stringify(n.state)),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",{className:"dashboard-nav"},r.a.createElement(j,null)),r.a.createElement(D.a,{onDragEnd:this.onDragEnd},r.a.createElement(D.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(t){return r.a.createElement("div",Object.assign({className:"dashboard-container"},t.droppableProps,{ref:t.innerRef}),e.state.columnOrder.map((function(t,a){var n=e.state.columns[t],c=n.cardIds.map((function(t){return e.state.cards[t]}));return r.a.createElement(P,{key:n.id,column:n,columnOrder:e.state.columnOrder,cards:c,totalCards:e.state.cards,index:a,addCard:e.addCard,editCard:e.editCard,removeCard:e.removeCard,editColumn:e.editColumn,removeColumn:e.removeColumn})})),t.placeholder,r.a.createElement(G,{onSubmit:e.addColumn,columns:e.state.columns,columnLength:e.state.columnOrder.length+1,columnOrder:e.state.columnOrder}))}))))}}]),a}(r.a.Component),B=Object(i.b)((function(){return{data:null!=localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):R}}),null)(V),q=a(37),W=a.n(q),U=a(38),H=a.n(U),K=a(39),Z=a.n(K),F=a(40),Q=a.n(F),X=a(41),Y=a.n(X),$=a(42),ee=a.n($),te=a(43),ae=a.n(te),ne=a(44),re=a.n(ne),ce=a(45),le=a.n(ce),ie=a(46),se=a.n(ie),oe=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tutorial-bg"},r.a.createElement(j,null),r.a.createElement("div",{className:"tutorial"},r.a.createElement("h1",null,"Tutorial"),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Main Page"),r.a.createElement("p",null,'The main page starts with three lists, "To Do", "In Progress" and "Done"')),r.a.createElement("img",{src:W.a})),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("img",{src:ae.a}),r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Creating a Card"),r.a.createElement("p",null,'To create a card simply click on the "Enter Card Title" at the bottom of a list and then click "Add Card"'))),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Creating a List"),r.a.createElement("p",null,'To create a list simply click on the "Enter List Title" to the right of the page and then click "Add List"')),r.a.createElement("img",{src:Z.a})),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("img",{src:H.a}),r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Draging a Card"),r.a.createElement("p",null,"Cards can be grad from list to another by clicking on the card and dragging it to another list"))),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Draging a List"),r.a.createElement("p",null,"Lists can be dragged to a different position by clicking on the list and dragging them to a different place")),r.a.createElement("img",{src:Q.a})),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("img",{src:Y.a}),r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Updating a Card's Title"),r.a.createElement("p",null,"Clicking on a card will open the card for detailed information about a card, to modify a card just click on the text and then close a card"))),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Updating a Card's description"),r.a.createElement("p",null,"Once the card has been open, clicking on the description will let you type and update the description. Simply close it to keep the changes")),r.a.createElement("img",{src:ee.a})),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("img",{src:le.a}),r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Updating a List's Title"),r.a.createElement("p",null,"Simply clicking on a list's title and typing a different title will change the title of the list. As easy as it gets."))),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Erasing a Card"),r.a.createElement("p",null,"Erasing a Card requires clicking on a card and then clicking on the erase button")),r.a.createElement("img",{src:re.a})),r.a.createElement("div",{className:"tutorial-steps"},r.a.createElement("img",{src:se.a}),r.a.createElement("div",{className:"inner-text"},r.a.createElement("h3",null,"Erasing a List"),r.a.createElement("p",null,"Simply click on the erase button at the buttom of a list to erase the list and all the cards inside of it"))),r.a.createElement(s.b,{to:"/dashboard",className:"tutorial-to-dashboard"},r.a.createElement("h1",null,"Enjoy Mintrello!"))),r.a.createElement(M,null))}}]),a}(r.a.Component),de=(a(62),function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:_}),r.a.createElement(o.a,{exact:!0,path:"/tutorial",component:oe}),r.a.createElement(o.a,{exact:!0,path:"/dashboard",component:B})))}),me=function(e){var t=e.store;return r.a.createElement(i.a,{store:t},r.a.createElement(s.a,null,r.a.createElement(de,null)))},ue=a(15),pe=a(47),be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"OPEN_MODAL":return t.modal;case"CLOSE_MODAL":return{};default:return e}},he=Object(ue.c)({modal:be}),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(ue.e)(he,e,Object(ue.a)(pe.a))};document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root"),t=fe();window.getState=t.getState,l.a.render(r.a.createElement(me,{store:t}),e)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.0f6aaf03.chunk.js.map