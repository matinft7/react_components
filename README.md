# react_components
some ready to use react components such as navbar, card etc.
## Components :
### navbar :
 - usage :
   `<NavBar appname="Snow" data={[{"name":"link1","href":"link1"}.{"name":"link2","href":"link2"}]} classnames={ styles.moon_navbar }/>` <br>
 - appname : it's your site name that appear in nav bar <br>
 - data : it should be an array that contain your navigation links <br>
 - classnames : it should ba an array that contain your css classes <br>
### card :
 - usage :
   `<Card img="" title="Time" text="Time to get full result" classnames={ [styles.moon_card,"w_30"] } />` <br>
 - img : your image src <br>
 - title : card title <br>
 - text : card text/info <br>
 - classnames : it should ba an array that contain your css classes <br>
### card-container
 - usage : just load your data in component like this :
   `const cards = [{image : {src:'/pic.jpg',alt:'product',width:350,height:350},text : {title:'card1',body:'card1-desc'}}]`
### card TS
 - usage :
   `<Card image={card.image} text={card.text}/>`
### navbar TS
 - usage : load your data in component like this
   `const links = [{ name:'home',href:'/'},{ name:'products',href:'/products'}]`
