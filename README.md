# HTML-Tutorial

We dive into HTML Tutorial.

## VS-code extensions

We need some extensions while working with HTML in vs-code to make coding nice and clean.
| Extension | Identider |
| --: | :-- |
| Prettier | esbenp.prettier-vscode |
| Live Server|ritwickdey.liveserver|

## HTML format

First line of an html document is `<!DOCTYPE html>` it tells the browser that this file an html page.

The minimal html page look as follows

```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML PAGE TITLE</title>
    </head>
    <body>
        HTML PAGE BODY
    </body>
</html>
```

## Cool Trick

Type in an empty html document `!` and then press tab to automatically generate empty html template.

## To insert dummy text

`lorem50` you can replace 50 by any number of words that you want.

## Where to put JavaScript in HTML

* Best practice is to insert JavaScript code to the end of the body section as browser execute the html page top to bottom. So javascript should ideally run when browser has read all the dom
elements.

* Third party codes should be placed in the head section.

* You may either write complete script in the html file itself or write script in external file and just source it by its location.

* Open console to see effect.
