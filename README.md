# Carousel-sass-es6


It is a simple carousel module that loads data from JSON file (data could be retrieved directly by calling the REST API , but it has to be cross domaine origin allowed .

I have used the following Tools and frameworks :

##ES6 :
 Very easily to write code in modern ECMAScript 6 standards  
##Yo ( Yeoman ) :
 to scaffold my project easily to a structured folders using file generators and kick start configurations
##Webpack :
 A very handy module bundler  and  task manager i have used it to implement SASS , and Babel from ES6 to ES5  Javascript supported in all browsers , as well from watching file changes , run and build my project .
##Sass :
i have used sass to override some bootstrap variables ,set my own variables and have more dynamic css .



I have only used native javascript ( Vanilla ) in my code to  load JSON , manipulate the DOM , and control the Carousel ( no JQuery , No bootstrap ) , there is also another version that i buit using bootstrap 3  .[Boostrap/Sass/ES6 Carousel code]  (https://github.com/chakAs3/carousel-bootstrap-vanillajs)



## Demo
to see the final result it is deployed here [Online Demo](http://trixlabs.com/ww/carousel-no-bootstrap/).

## Deploy locally

first clone the project to your workspace
```sh

$ git clone https://github.com/chakAs3/carousel-bootstrap-vanillajs.git

```

run npm install to install all dependencies ( package.json )

```sh

$ npm install

```

build the project using webpack commad or npm

```sh

$ npm run build

```

serve the web application on localhost using webpack command or npm

```sh

$ npm run start

```


## Conclusion :

It is good to challenge yourself by writing only Vanilla Javascript in your project, you can win more performance and be more aware of what is under the hood, so you can fix things in your way, But it is absolutely not a productive way. The code that you can write with Angular JS in 15 mins and easily to maintain later on you need probably 2 hours or more to get there and it may not be a perfect result and not easy to be maintained by other team members. But anyway to be an angular or react developer, you have to be first a Vanilla Javascript developer .

I may code a new version using Angular 2 (NG CLI comes with sass, unity test, e2e, easy to stage your project before deployment, and pushing code source on github with build deployment on Github pages  ), just to compare between these techniques and frameworks .
