!function(w,d){
    
    var b = d.body;

    function isMobile() {
        var c = 0;
        !function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) c = 1;}(navigator.userAgent||navigator.vendor||window.opera);
        return c;
    }
	
	function size(){
		b.classList = "";
		b.classList.add(getSize());
	}
	
	function getSize(){
		var s = navigator.platform || '',
			t = isMobile(),
			u = w.devicePixelRatio || -1,
			x = navigator.userAgent||navigator.vendor||w.opera,
			y = w.innerWidth,
			z = navigator.hardwareConcurrency || -1;
			
		// regex match or old phone built in browser
		if(t || (z == -1 && y < 768) ) return 'm';
		
		//for emulation
		if(y < 768) return 'm';
		
		//for emulation
		if(y < 1024) return 't';
		
		//probably a huge desktop
		if(y > 1920) return 'hd';
		
		//basic tablet support
		if(x.match(/android|ipad|playbook|silk/i)) return 't';

		//samsung galaxy have up to 8 cores and pixel ratio always greater than 1
		if(u > 1 && x.match('/SAMSUNG-SGH/') && z <= 8) return 'm';
		
		// probably an android tablet
		if(z<=8 && x.match(/android/i)) return 't';

		//probably a desktop/laptop
		if(x.match(/\bCrOs\b/) || s.match(/Win|Mac|Sun|Linux|HP|Opera/)) return 'd';
		
		return 'm';// when in doubt, serve mobile?
	}
	
	w.getSize = getSize;
    
    function create( el, props ){
		var s = d.createElement(el);
		for(var prop in props){
			s[prop] = props[prop];
		}
		d.head.appendChild(s);  
    }
   
    //init
    // 1. add css to body
    create('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons', rel: 'stylesheet' });
	create('style', { innerHTML: "{{css}}" });
	
    // 2. size
    size();
    // 3. show body
    b.style.opacity = 1;
    // 4. listen for resize
    var t = null;
    w.addEventListener('resize', function(){
        clearTimeout(t);
        t = setTimeout(size,20);
    });
    
}(window,document);