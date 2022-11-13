# CSS Tutorial

## Syntax

```css
selector {
    property1: value;
    property2: value;
}
```

## CSS Selectros

There are mainly 3 selectors. `element`, `class` and `id` a `class`. These are in following priority.

```
element < class < id < inline-style
```

### Element selectors

for example `h1` `span` `div` `btn` and many more

```css
element {
    property1: value;
    property2: value;
}
```

### Class selectors

Say our html dom looks something like

```html
<h1 class="big-header">Title</h1>
```

Syntax of Class selector is

```css
.className {
    property1: value;
    property2: value;
}
```

### Id selectors

HTML element can only have one id but many classes. Say our html dom looks something like

```html
<h1 id="big-header">Title</h1>
```

Syntax of Class selector is

```css
#idName {
    property1: value;
    property2: value;
}
```

### Hybrid selector

Multiple selector type may also be merged together for specific style. There should be no empty space inbetween in that case.

```css
h1.className#idName {
    property1: value;
    property2: value;
}
```

### Ancestor child selector

Say you only want to style those paragraph elements that are inside a div in that case you can insert a white space between ancestor and child. such as

```css
ancestor-selector child-selector {
    prop: value;
}
/* For example*/
div p {
    color: red;
}
```

### Selectors for sharing style

If you want to have two or more elements to share some style you can achieve so by inserting a comma(,) among selectors.

```css
.selector1,
.selector2 {
    prop: red;
}
```

## How to define external css file

The best way to link css with html is to reference the external file.

```html
<head>
    <link rel="stylesheet" href="style.css" />
</head>
```

## Some quick tips for css properties

### `color` to change text color.

### `Box` model

Understanding this box model is very necessary.

![](__ref/box-model.png)

Can you guess the output of following css style.

```
.box{
    height: 100px;
    width: 100px;
    padding: 20px;
    margin: 50px;
    border: 10px solid black;
    background-color: red;
}
```

![](__ref/box-model-output.png)

### Different units

#### `px`

pixels

#### `%`

percentage of width and height.

#### `em`

For font related application. if font size is say 16px then 1em=16px

#### `rem`

Similar to `em`. `em` scale with the font size for parent element whereas `rem` scales with the font size of root.

### Position

#### `static`

By default position is `static`.

#### `relative`

This allows us to position the element relative to where it would normally be if the position is `static`. As given example

```css
.child-one {
    height: 30px;
    background-color: red;
    position: relative;
    left: 10px;
    top: 10px;
}
/* child-two and child-three have static position*/
```

![](__ref/pos-relative.png)

Look how it overflowed the child-two. 

#### `absolute`



