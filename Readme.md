
# Frontend Boilerplate

A boilerplate of things that mostly shouldn't exist.

## Contains

- [x] [Webpack](https://webpack.github.io)
- [x] [Babel](https://babeljs.io/)
<br>
- [x] [React](https://facebook.github.io/react/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)
<br>
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] [Rucksack](http://simplaio.github.io/rucksack/docs)


## Setup

```
$ npm install
```

## Build

```
$ npm run build
```

## Running

```
$ npm start
```

---

FORMAT: 1A
HOST: http://polls.apiblueprint.org/

# media

Polls is a simple API allowing consumers to view polls and vote in them.

## Questions Collection [/questions]

### List All Questions [GET]

+ Response 200 (application/json)

        [
            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 2048
                    }, {
                        "choice": "Python",
                        "votes": 1024
                    }, {
                        "choice": "Objective-C",
                        "votes": 512
                    }, {
                        "choice": "Ruby",
                        "votes": 256
                    }
                ]
            }
        ]

### Create a New Question [POST]

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

+ Request (application/json)

        {
            "question": "Favourite programming language?",
            "choices": [
                "Swift",
                "Python",
                "Objective-C",
                "Ruby"
            ]
        }

+ Response 201 (application/json)

    + Headers

            Location: /questions/2

    + Body

            {
                "question": "Favourite programming language?",
                "published_at": "2015-08-05T08:40:51.620Z",
                "choices": [
                    {
                        "choice": "Swift",
                        "votes": 0
                    }, {
                        "choice": "Python",
                        "votes": 0
                    }, {
                        "choice": "Objective-C",
                        "votes": 0
                    }, {
                        "choice": "Ruby",
                        "votes": 0
                    }
                ]
            }
            
            
## Users api [/users]

### Get all users [GET]

+ Response 200 (application/json)

        [
            {
                "id": 1, 
                "name": "Sandruso", 
                "email": "sandro.rybarik@gmail.com"
            }, {
                "id": 2, 
                "name": "Marko", 
                "email": "marko.rybarik@gmail.com"
            }, {
                "id": 3, 
                "name": "Martin", 
                "email": "marko.rybarik@gmail.com"
            }
        ]
