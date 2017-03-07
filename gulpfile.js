/* cfg */
var VERSION =  '1.0.0';
/* end cfg */

var gulp = require('gulp'),
	fs = require('fs'),
	ugly = require('uglify-js'),
	sass = require('node-sass'),
	uglifycss = require('uglifycss');
	
gulp.task('default', function() {
	//first compile our sass
	sass.render({
		
		file: './src/ez.scss'
		
	}, function(err, result) { 
	
		if(err){
			console.log(err);
			return;
		}
		
		//next read the code for ez.js
		var code = fs.readFileSync('./src/ez.js','utf8');
		//also read the copyright
		var copyright = fs.readFileSync('./src/copyright.txt','utf8');
		
		var replace = {
			'{{version}}': VERSION,
			'{{date}}': getBuildDate()
		};
		//the following code is order dependent; css insertion must come after minification because uglify will choke on the css.
		//specifically, it chokes on the url encoded svg background image of selects.
		//replace placeholders in copyright
		for(var prop in replace){
			copyright = copyright.replace(prop,replace[prop]);
		}
		//now uglify the code and compress it as small as possible
		var ast = ugly.parse(code); // parse code and get the initial AST
		ast.figure_out_scope();
		compressor = ugly.Compressor({hoist_vars:true,unsafe:true});
		ast.transform(compressor);
        ast.compute_char_frequency();
		ast.mangle_names();
		var final_code = ast.print_to_string(); 
		//finally, uglify the css and add it into the javascript code
		var result_css = result.css.toString();
		final_code = final_code.replace('{{css}}',uglifycss.processString(result_css).replace(/"/g,'\''));//the processed css must be escaped
		
		//concat copyright and code and write to the dist folder.
		fs.writeFile('./dist/ez.min.js',copyright + "\r\n" + final_code, 'utf8',function(){
			console.log('built ez.min.js successfully');
		});
	
	});
	
});

function getBuildDate()
{
    var date = new Date(),
        datevalues = [
           date.getFullYear(),
           date.getMonth(),
           date.getDate(),
           date.getHours(),
           date.getMinutes(),
           date.getSeconds(),
        ],
        ts = Date.UTC.apply(Date,datevalues),
        date2 = new Date(ts);
        
    var month = date2.getMonth() + 1;//date is 0 based in Node?
    var day = date2.getDate();
    var hour = date2.getHours();
    var min = date2.getMinutes();
    var sec = date2.getSeconds();

    month = (month < 10 ? '0' : '') + month;
    day = (day < 10 ? '0' : '') + day;
    hour = (hour < 10 ? '0' : '') + hour;
    min = (min < 10 ? '0' : '') + min;
    sec = (sec < 10 ? '0' : '') + sec;
	
    var str = date.getFullYear() + '-' + month + '-' + day + '_' +  hour + ':' + min + ':' + sec + ' UTC';

    return str;
}