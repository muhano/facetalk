const string ="#love#instagood#photooftheday#fashion#beautiful#happy#cute#tbt#like4like#followme#picoftheday#follow#me#selfie#summer#art#instadaily#friends#repost#nature#girl#fun#style#smile#food#instalike#likeforlike#family#travel#fitness#euro2020#tagsforlikes#follow4follow#nofilter#life#beauty#amazing#instamood#igers#instagram#photo#music#photography#makeup#dog#beach#sunset#model#foodporn#motivation#followforfollow#sky#lifestyle#design#gym#f4f#toofunny#cat#handmade#hair#vscocam#bestoftheday#vsco#funny#dogsofinstagram#drawing#artist#f4fl#flowers#baby#wedding#girls#instapic#pretty#photographer#instafood#party#inspiration#lol#cool#workout#likeforfollow#swag#fit#healthy#yummy#blackandwhite#foodie#moda#home#christmas#black#memes#winter#pink#sea#landscape#blue#london#holiday"
const array = string.split('#')
const json = array.map(el => {
  return {
    name: el
  }
})
json.shift()

const fs = require('fs')
fs.writeFileSync("./tags.json", JSON.stringify(json,null,2))


const countries = [
  {
    "name": "Brazil"
  },
  {
    "name": "Croatia"
  },
  {
    "name": "China"
  },
  {
    "name": "Guatemala"
  },
  {
    "name": "Indonesia"
  },
  {
    "name": "Czech Republic"
  },
  {
    "name": "Poland"
  },
  {
    "name": "Greece"
  },
  {
    "name": "Canada"
  },
  {
    "name": "Animals"
  },
  {
    "name": "Canada"
  },
  {
    "name": "Canada"
  },

]