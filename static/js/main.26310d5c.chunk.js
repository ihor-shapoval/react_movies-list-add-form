(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),s=(i(16),i(11)),c=i(2),r=i(3),l=i(7),m=i(6),o=i(1),d=i.n(o),h=(i(17),i(4)),j=(i(18),i(19),i(0)),b=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:a,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:t})})]}),Object(j.jsxs)("div",{className:"content",children:[i,Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:n,children:"IMDB"})]})]})]})},p=function(e){var t=e.movies;return Object(j.jsx)("div",{className:"movies",children:t.map((function(e){return Object(j.jsx)(b,Object(h.a)({},e),e.imdbId)}))})},u=i(5),g=function(e){Object(l.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handleInput=function(t){var i=t.target,a=i.name,n=i.value;e.setState(Object(u.a)({},a,n))},e.resetForm=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e.handleSubmit=function(t){t.preventDefault(),e.props.addMovie(Object(h.a)({},e.state)),e.resetForm()},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state,t=e.title,i=e.description,a=e.imdbUrl,n=e.imgUrl,s=e.imdbId;return Object(j.jsxs)("form",{className:"text-center",onSubmit:this.handleSubmit,children:[Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{className:"w-75",placeholder:"Title",name:"title",type:"text",required:!0,value:t,onChange:this.handleInput})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{className:"w-75",placeholder:"Description",name:"description",type:"text",value:i,onChange:this.handleInput})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{className:"w-75",placeholder:"ImgUrl",name:"imgUrl",required:!0,value:n,type:"text",onChange:this.handleInput})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{className:"w-75",placeholder:"ImdbUrl",name:"imdbUrl",required:!0,value:a,type:"text",onChange:this.handleInput})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("input",{className:"w-75",placeholder:"ImdbId",name:"imdbId",required:!0,value:s,type:"text",onChange:this.handleInput})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Movie"})]})}}]),i}(o.Component),v=(i(21),i(10)),O=function(e){Object(l.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(p,{movies:e})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(g,{addMovie:this.addMovie})})]})}}]),i}(d.a.Component);n.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.26310d5c.chunk.js.map