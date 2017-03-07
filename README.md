### ez-framework

# abstract
-----
- to provide as small as possible file size.
- deliver a basic unstyled responsive framework in a single javascript file.
- instead of using media queries, use a simple concept of device type:
	- mobile
	- tablet
	- desktop
	- huge desktop
- needs to render fast
- no screen flicker
- no dependencies; PERIOD!
- familiar 12 column layout concept
	
# roadmap
-----
1. ~~grid~~
2. ~~basic size selection~~
3. ~~improve device size selection~~
4. ~~basic typography~~
5. scaling typography
6. navbar component
7. list component(s)
8. inputs/select/textarea
9. buttons 
10. ~~animated loading indicator~~
	
# building
-----
1. clone repo
2. install dependencies with `npm install`
3. build with gulp `gulp`
	
# usage
-----
```html
<!-- its really this simple -->
<script src="dist/ez.min.js"></script>
```
	
# documentation
-----

1. `.row` - a row of columns
2. `.container(.fluid)` - a container element with max width of 1200px. add `.fluid` class for full width.
3. `.col` - a column element. default width 100%, so in case of element having class `.col.m-12` width will be 100% since no selector other than `.col` will match. 
4. `.col.m-{1-11}` m stands for **mobile**. width of element is 100 / number (in percent), same as bootstrap and foundation.
5. `.col.t-{1-11}` t stands for **tablet**. width of element is 100 / number (in percent), same as bootstrap and foundation.
6. `.col.d-{1-11}` m stands for **desktop**. width of element is 100 / number (in percent), same as bootstrap and foundation.
7. `.col.hd-{1-11}` hd stands for **huge-desktop**. width of element is 100 / number (in percent), same as bootstrap and foundation.
8. `.loading(.hide-contents)` attaching this class will overlay an element with an loading indicator animation. add `.hide-contents` to hide all other children of the element.