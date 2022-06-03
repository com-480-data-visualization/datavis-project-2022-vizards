# Technical Instructions

To run the project, you need a webserver running in this directory, because we are requesting third party libraries hosted by CDN providers. For the live server you have multiple options.

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- `python3 -m http.server`
- … (your favorite webserver)

We are using simple HTML, CSS and JS, so everything should work out of the box without modifying anything.

## Structure of the project

Since we are using plain HTML, JS and CSS, you don't need a compiler or packer. In the following or file structure for a better understanding.


```
.
├── README.md <-- you are here
├── index.html <-- Main loads all required files and display them (single page)
├── chartview/ <-- Vikus viewer
└── src/ <-- contains all required scripts and sources
    ├── css/ <-- stylesheet
    ├── data/ <-- data
    │   ├── heatmap_data/ 
    │   ├── music/ <-- required for the racebar
    ├── fonts/ <-- fonts
    ├── imgs/ <-- images
    └── js/ <-- scripts for vis. and features
```

Tested with Chrome and Firefox.