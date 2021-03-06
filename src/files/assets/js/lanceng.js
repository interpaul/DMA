// JQUERY JQGRID
// =============
var cog = '<button id="pop" type="button" class="btn btn-default btn-xs" role="button"><i class="fa fa-cog"></i></button>';
var editBtn = '<button id="edit-btn" type="button" class="btn btn-default btn-xs" role="button"><i class="fa fa-pencil"></i></button>';
var enRestore = '<button id="restore" type="button" class="btn btn-default btn-xs" role="button"><i class="fa fa-mail-reply"></i></button>';
var delBtn = '<button id="restore" type="button" class="btn btn-default btn-xs" role="button"><i class="fa fa-trash-o"></i></button>'
var disRestore = '<button disabled id="restore" type="button" class="btn btn-default btn-xs" role="button"><i class="fa fa-mail-reply"></i></button>';
var sendMessage = '<button id="sendMessage" type="button" class="btn btn-default btn-xs" role="button"><i class="fa fa-envelope"></i></button>'
var enGroup = '<div class="btn-group btn-group-xs">'+editBtn+enRestore+'</div>';
var disGroup = '<div class="btn-group btn-group-xs">'+editBtn+disRestore+'</div>';
var longGroup = '<div class="btn-group btn-group-xs">'+editBtn+enRestore+editBtn+'</div>';
var csGroup = '<div class="btn-group btn-group-xs">'+editBtn+delBtn+'</div>';
var msGroup = '<div class="btn-group btn-group-xs">'+sendMessage + delBtn + '</div>';
jQuery(function(){
	var lastsel;
	var myData = [
        {product: 'lorem', com_type:'transfers',  dis_com:'22', ret_com_min:'15', ret_com:'2.5667', ret_com_max: '1.6', actions: cog},
        {product: 'duis', com_type:'transfers',  dis_com:'11', ret_com_min:'10', ret_com:'12.5833', ret_com_max: '12.65', actions: enGroup},
        {product: 'irure', com_type:'transfers',  dis_com:'14', ret_com_min:'11', ret_com:'42.5333', ret_com_max: '1.5833', actions: disGroup},
        {product: 'amet', com_type:'transfers',  dis_com:'21', ret_com_min:'20', ret_com:'5.5667', ret_com_max: '3.4833', actions: longGroup},
        {product: 'consectetur', com_type:'transfers',  dis_com:'21', ret_com_min:'14', ret_com:'42.55', ret_com_max: '23.5167'},
        {product: 'elit', com_type:'transfers',  dis_com:'23', ret_com_min:'12', ret_com:'142.6', ret_com_max: '1.5333'},
        {product: 'nisi', com_type:'transfers',  dis_com:'20', ret_com_min:'2', ret_com:'2.55', ret_com_max: '17.5333'},
        {product: 'qui', com_type:'transfers',  dis_com:'20', ret_com_min:'4', ret_com:'432.4667', ret_com_max: '2.5'},
        {product: 'culpa', com_type:'transfers',  dis_com:'18', ret_com_min:'15', ret_com:'22.5', ret_com_max: '10.5167'},
        {product: 'sunt', com_type:'transfers',  dis_com:'16', ret_com_min:'7', ret_com:'42.5167', ret_com_max: '1.55'},
        {product: 'nulla', com_type:'transfers',  dis_com:'7', ret_com_min:'5', ret_com:'4.5', ret_com_max: '1.5333'},
        {product: 'velit', com_type:'residuals',  dis_com:'11', ret_com_min:'10', ret_com:'24.4667', ret_com_max: '54.3667'},
        {product: 'esse', com_type:'residuals',  dis_com:'14', ret_com_min:'11', ret_com:'24.1917', ret_com_max: '5.7606'},
        {product: 'commodo', com_type:'residuals',  dis_com:'17', ret_com_min:'14', ret_com:'2.2722', ret_com_max: '55.3111'},
        {product: 'labore', com_type:'residuals',  dis_com:'21', ret_com_min:'17', ret_com:'0.2521', ret_com_max: '55.28'},
        {product: 'tempor', com_type:'residuals',  dis_com:'27', ret_com_min:'25', ret_com:'25.2097', ret_com_max: '55.2478'},
        {product: 'officia', com_type:'residuals',  dis_com:'20', ret_com_min:'14', ret_com:'25.1231', ret_com_max: '6.3375'},
        {product: 'deserunt', com_type:'residuals',  dis_com:'13', ret_com_min:'9', ret_com:'25.7911', ret_com_max: '55.9428'},
        {product: 'mollit', com_type:'residuals',  dis_com:'10', ret_com_min:'6', ret_com:'25.7911', ret_com_max: '55.9428'},
        {product: 'anim', com_type:'residuals',  dis_com:'9', ret_com_min:'1', ret_com:'25.6167', ret_com_max: '56.2667'},
        {product: 'est', com_type:'residuals',  dis_com:'12', ret_com_min:'11', ret_com:'25.3622', ret_com_max: '55.3911'},
        {product: 'ipsum', com_type:'resitrans',  dis_com:'11', ret_com_min:'4', ret_com:'34.3469', ret_com_max: '62.1983'},
        {product: 'sed', com_type:'resitrans',  dis_com:'13', ret_com_min:'10', ret_com:'34.5167', ret_com_max: '69.1833'},
        {product: 'ullamco', com_type:'resitrans',  dis_com:'23', ret_com_min:'22', ret_com:'31.8314', ret_com_max: '65.0689'},
        {product: 'magna', com_type:'resitrans',  dis_com:'23', ret_com_min:'10', ret_com:'31.6125', ret_com_max: '65.7094'}
           ]
	jQuery('#list').jqGrid({
	    datatype: 'local',
        colNames:['Product','Comission Type','Distributor Comission', 'Retailers Comission (Min)','Retailers Comission','Retailers Comission (MAX)', 'Actions'],
        colModel:[
            {name:'product', index:'product', editable: true},
            {name:'com_type', index:'com_type', editable: true, edittype: 'select', editoptions: {value: "tr: transfers; rd: residuals; rt: resitrans"}},
            {name:'dis_com', index:'dis_com', editable: true, cellattr: function(val){return 'data-oldval="'+(val+2)+'"'}},
            {name:'ret_com_min', index:'ret_com_min', editable: true, cellattr: function(val){return 'data-oldval="'+(val+7)+'"'}},
            {name:'ret_com', index:'ret_com', editable: true, sorttype: 'float'},
            {name:'ret_com_max', index:'ret_com_max', editable: true, sorttype: 'float', cellattr: function(val){return 'data-oldval="'+(val+4)+'"'}},
            {name:'actions', index:'actions', editable: false, sortable: false, search: false},
                   ],
        pager: "#pager",
        hidegrid: false,
        multiselect: true,
        multiboxonly: true,
        multiselectWidth: 40,
        height: '100%',
        rowNum: 10,
        rowList: [10, 20, 30],
	    viewrecords: true,
	    autowidth: true,
	    gridview: true,
	    cellEdit: false,
	    cellsubmit: 'clientArray',
	    editurl: 'clientArray',
	    data : myData,
		caption: 'Comission',
		gridComplete: function(){
			$("#list tbody .ui-row-ltr td:nth-child(6)").digitCapacity('.');
			$("#list tbody .ui-row-ltr td:nth-child(7)").digitCapacity('.');
			$(".ui-jqgrid tr.jqgrow td:has('#pop')").css('overflow', 'visible');
			$("#pop").popover({
				html: true,
				content: '<ul><li><a href="#fake">General Info</a></li><li><a href="#fake">Bank Info</a></li><li><a href="#fake">Manage Comission</a></li><li><a href="#fake">Manage Products</a></li><li><a href="#fake">Manage Fees</a></li></ul>',
				title: 'Distributor ID',
				placement: 'left'
			});
			$('#pop').on('hide.bs.popover', function () {
				$(this).blur();
			})
			/*$("tr#2 td").hover(function() {

				if($(this).is("[data-oldval]")){
					$(this).wrapInner('<span></span>');
					$(this).children('span').popover({
						title: 'Defval',
						placement: 'top',
						selector: 'body',
						trigger: 'manual',
						content: $(this).attr("data-oldval"),
					}).popover('show');
				}
			}, function(){
				if($(this).is("[data-oldval]")){
					$(this).children('span').popover('hide');
					var currVal = $(this).children('span').text();
					$(this).text(currVal);

				}
			});*/
			$("tr#2").hover(function(){
				$(this).children('[data-oldval]').each(function() {
					$(this).wrapInner('<span class="oldval"></span>');
					$(this).children('span').popover({
						placement: 'top',
						selector: 'body',
						trigger: 'manual',
						html: 'true',
						content: 'Default value: <strong>'+$(this).attr("data-oldval")+'</strong>',
					}).popover('show');
				});
			}, function(){
				$(this).children('span').popover('hide');
				$(this).children('[data-oldval]').each(function() {
					var currVal = $(this).children('span').text();
					$(this).text(currVal);
				});
			});
		},
		ondblClickRow: function(id){
			jQuery("#list tbody tr#"+id+" td:has('span')").each(function() {
				var old_val = $(this).children('span').text();
				$(this).text(old_val);
			});
			if(id && id!==lastsel){
				jQuery('#list').jqGrid('restoreRow',lastsel);
				lastsel=id;

	            jQuery("#list").jqGrid('editRow',id,
				{
				    keys : true,
				    aftersavefunc: function() {
				        jQuery("#list").trigger('reloadGrid');
				    },
				    afterrestorefunc: function() {
				        jQuery("#list").trigger('reloadGrid');
				    }
				});
			} else if(id == lastsel){
	            jQuery("#list").jqGrid('editRow',id,
					{
					    keys : true,
					    aftersavefunc: function() {
					        jQuery("#list").trigger('reloadGrid');
					    },
					    afterrestorefunc: function() {
					        jQuery("#list").trigger('reloadGrid');
					    }
					});

			}
        },
		});
	jQuery("#list").jqGrid('navGrid','#pager',{add: false, edit: false, del:false, search:false, refresh: false}, //options
		{reloadAfterSubmit:false}, // del options
		{reloadAfterSubmit:false}, // del options
		{reloadAfterSubmit:false} // del options
	);
	jQuery("#list").navButtonAdd('#pager',{
	   title:"Add product",
	   caption: "Add item",
	   buttonicon:"fa fa-plus-circle",
	   onClickButton: function(){
	   		var recCount = jQuery("#list").jqGrid('getGridParam', 'records');
	    	jQuery("#list").addRowData(recCount+1, 'first');
			if(recCount/* && id!==lastsel*/){
				jQuery('#list').jqGrid('restoreRow',lastsel);
				jQuery("#list tbody tr#"+(recCount+1)+" td:has('span')").each(function() {
					var old_val = $(this).children('span').text();
					$(this).text(old_val);
				});

	            jQuery("#list").jqGrid('editRow',(recCount+1),
				{
				    keys : true,
				    aftersavefunc: function() {
				        jQuery("#list").trigger('reloadGrid');
				    },
				    afterrestorefunc: function() {
				        jQuery("#list").trigger('reloadGrid');
				    }
				});
				lastsel=recCount+1;
			}
	   },
	   position:"first"
	});
	jQuery("#list").navButtonAdd('#pager',{
	   title:"Remove product",
	   caption: "Delete",
	   buttonicon:"fa fa-trash-o",
	   onClickButton: function(){
	   		var selectedItems = jQuery("#list").jqGrid('getGridParam', 'selarrrow');
	   		for (var i = selectedItems.length - 1; i >= 0; i--) {
	   			jQuery("#list").delRowData(selectedItems[i]);
	   		};
	   },
	   position:"last"
	});
	jQuery("#list").navButtonAdd('#pager',{
	   title:"Refresh",
	   caption: "Refresh",
	   buttonicon:"fa fa-refresh",
	   position:"last"
	});
	jQuery("#list").jqGrid('filterToolbar',{searchOperators : false});
	$('body').bind("DOMSubtreeModified",function(){//don't forget to remove if we'll deside don't use floating/popup edit
		$(".ui-jqdialog select, .ui-jqdialog input[type=text]").addClass('form-control');
	});
	jQuery("#list").addClass('table-hover table-striped');

	function resizeGrids() {
		var reportObjectsGrid = $("#list");
		reportObjectsGrid.setGridWidth($(".page-heading").width());
	};

	var popTimes = 0;

	function SidebarPopover(){
		if($("html").width() < 991 && popTimes != 1){
			$("body").addClass('sidebar-is-closed').removeClass('sidebar-is-opened');
			$(".show-sidebar").attr({
				'data-container': 'body',
				'data-toggle': 'popover',
				'data-placement': 'bottom',
				'data-content': 'Navigation is hidden. Please click this button to view menu.',
				'data-trigger': 'manual',
			});
			setTimeout(function() {
				$(".show-sidebar").popover('show');
			}, 1500);
			setTimeout(function() {
				//$(".show-sidebar").popover('hide');
			}, 5500);
			popTimes = 1;
			$(".first-level").attr('data-toggle', 'tooltip');
		}
	}
	SidebarPopover();

	var resizeTimer;

	$(window).bind('resize', function () {
		clearTimeout(resizeTimer);
		setTimeout(SidebarPopover, 60);
		resizeTimer = setTimeout(resizeGrids, 60);
		resizeTimer = setTimeout(slimScrollResize, 60);
	});
	$(".ui-search-input input[type=text]").addClass('form-control input-sm');
	$(".ui-search-input input[type=text]").css({
		padding: '5px 17px 5px 10px',
	});
	$(".ui-search-toolbar th div:has(table)").css('padding-left', '0');
	$(".ui-search-clear a").html('&times');
	$(".ui-jqgrid-bdiv table").addClass('table-hover table-striped');
});
//#####################################	TREEGRID ##########################################################################################################################################
var treeData = [{hierarchy: "Zone changes", type: "", level:"0", id:"1", parent:"null", isLeaf:false, expanded:true, loaded:true},
				{hierarchy: "Customer", type:"site", level:"1", id:"5", parent:"1", isLeaf:false, expanded:false, loaded:true},
				{hierarchy: "Distributor", type:"site", level:"1", id:"6", parent:"1", isLeaf:false, expanded:false, loaded:true},
				{hierarchy: "Retailer", type:"site", level:"1", id:"7", parent:"1", isLeaf:false, expanded:false, loaded:true},
				{hierarchy: "Resource changes", type: "", level:"0", id:"2", parent:"null", isLeaf:false, expanded:true, loaded:true},
				{hierarchy: "PDF", type: "res-type", level:"1", id:"3", parent:"2", isLeaf:false, expanded:true, loaded:true},
				{hierarchy: "Privacy policy", type:"resource", level:"2", id:"4", parent:"3", isLeaf:true, expanded:false, loaded:true}];
var grid = jQuery('#change-tree');
jQuery('#change-tree').jqGrid({
    datatype: 'jsonstring',
    colNames: ['Hierarchy', 'Type'],
    colModel:[
        {name:'hierarchy', index:'hierarchy', sortable:'false', width:'300', fixed:'true'},
        {name:'type', index:'type', sortable:'false', width:'100', fixed:'true'},
               ],
    height: "auto",
    datastr: treeData,
    treedatatype: "json",
    treeGrid: true,
    gridview: true,
    treeGridModel: 'adjacency',
    ExpandColumn: 'hierarchy',
    jsonReader: {
                    repeatitems: false,
                    root: function (obj) { return obj; },
                    page: function (obj) { return 1; },
                    total: function (obj) { return 1; },
                    records: function (obj) { return obj.length; }
                },
});

function slimScrollResize(){
	$('.slimscroller').slimscroll({
	height: 'auto',
	position: 'right',
	color: '#DDD',
	size: '3px',
	railOpacity: 0.3,
	wheelStep: 20
	});
}

function getLiHeight(){
	var lis = $(".res-grid li").not(".image-change .res-grid li");
	var maxLiHeight = 0;
	if(lis.length > 0){
		for(var i = 0; i < lis.length; i++){
			if (lis[i].offsetHeight > maxLiHeight) {
				if(lis[i].offsetHeight < 233){
					maxLiHeight = lis[i].offsetHeight + 97;
				} else {
					maxLiHeight = lis[i].offsetHeight;
				}
			};
			console.log(maxLiHeight);
		}
		return maxLiHeight;
	}
}

function ShowHideSidebar() {
    $("body").toggleClass("sidebar-is-closed sidebar-is-opened");
    $(".overlay").toggleClass("none");
    setTimeout(resizeGrid, 60);
    if (getSidebarWidth() === 45) {
        $(".first-level").attr('data-toggle', 'tooltip');
    } else {
        $(".first-level").removeAttr('data-toggle');
    }
    $(".sidebar-menu .active.selected .second-level").slideDown('fast');
}

function showSidebarOnHover() {
    $("html").on("mouseover", ".sidebar-is-closed .sidebar-menu", function (e, t) {
        $("body").removeClass("sidebar-is-closed").addClass("sidebar-is-opened have-to-close");
        setTimeout(resizeGrid, 60);
    });
    $("html").on("mouseleave", ".have-to-close .sidebar-menu", function () {
        $("body").removeClass("sidebar-is-opened have-to-close").addClass("sidebar-is-closed");
        setTimeout(resizeGrid, 60);
    });
}

function showSidebarSubItemsOnHover() {
	var $subItemsList;
	var $activeItem = $(".active").find(".menu-item").next(":has(.second-level)");
	
	$(".first-level").not(" .active").hover(
		function(){
			$subItemsList = $(this).find(".menu-item").next(":has(.second-level)");
			if ($subItemsList.length > 0) {
				$(this).parent(".fisrst-level").addClass("selected");
				//$activeItem.slideUp('fast');
				$subItemsList.slideDown('fast', function(){
					slimScrollResize();
				});
			}
		},
		function(){
			if ($subItemsList.length > 0) {
				$(this).parent(".fisrst-level").removeClass("selected");
				$subItemsList.slideUp('fast');
				//$activeItem.slideDown('fast');
			}
		}
	)
}

$(document).ready(function(){

	$(window).load(function() { $("#loading").fadeOut("slow");});
	
	showSidebarOnHover();
	
	showSidebarSubItemsOnHover();	

	$(".res-grid li").outerHeight(getLiHeight());

	// STEPS # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
	$("#step-1").change(function() {
		$("#step-2").removeAttr("disabled");
		$(".step-2").addClass("current");
        $(".step-1").fadeTo("fast", 0.4, function () {
            $(".step-1").removeClass("current")
        });
		$("#step-2").change(function(){
			$(".items-to-change li").show();
			$(".not-chosen").hide();
	        $(".step-2").fadeTo("fast", 0.4, function () {
	            $(".step-2").removeClass("current")
	        });
			$(".step-3").addClass("current");
		})
		$(".items-to-change li").not(".not-chosen, .group-title").click(function(){
			$(".easyWizardSteps").hide("fast", function(){
				$(".notes").addClass("edit-mode");
				$(".editor").show();
				$('.toggle-zone').bootstrapToggle({
			        on: 'Enabled',
      				off: 'Disabled'
				});
				$('#toggle-one').change(function(){
					console.log($(this).prop("checked"));
					if($(this).prop("checked")){
						$(".note-editor").fadeTo("fast", 0.4, function(){
							$(".editor-action > a.btn").fadeTo("fast", 0);
						});
					} else{
						$(".note-editor").fadeTo("fast", 1, function(){
							$(".editor-action > a.btn").fadeTo("fast", 1);
						});
					}
				});
			});
			$(".items-to-change li").removeClass("active");
			$(this).addClass("active");
			$(".editor strong").text($(this).text());
			// FOR DEMONSTRATION ONLY
			/*$(".asset-info").text($(this).text());
			groupName = "Images on";
			$(".items-to-change .group-title").text(groupName + " " + $("#step-2").val());*/
		});
	});
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$('.toggle-zone').bootstrapToggle('destroy');
		$('.toggle-zone').bootstrapToggle({
	        on: 'Enabled',
			off: 'Disabled'
		});
	})

	//SLIM SCROLL
	$('.slimscroller').slimscroll({
		height: 'auto',
		position: 'right',
		color: '#DDD',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 20
	});
	$('.chat-widget').slimScroll({
		height: '300px',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.scroll-widget').slimScroll({
		height: '325px',
		position: 'left',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.scroll-user-widget').slimScroll({
		height: '500px',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.dropdown-message-scroll').slimScroll({
		height: '250px',
		position: 'left',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});
	$('.table-scroll').slimScroll({
		height: '300px',
		position: 'right',
		color: '#868686',
		size: '3px',
		railOpacity: 0.3,
		wheelStep: 5
	});


	//KNOB
	$(function() {
		$(".dial").knob();
	});



	//TOOLTIP
	$('body').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body",
		placement: "right",
	});

	$('.res-grid, .editor').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body",
		placement: "top",
	});

	function resizeGrids() {
	var reportObjectsGrid = $("#list");
	reportObjectsGrid.setGridWidth($(".page-heading").width());
	};

	//RESPONSIVE SIDEBAR
	$("body").on('click', 'button.show-sidebar', function() {
		ShowHideSidebar();
	});
	//ADD TITLE TO SIDEBAR
	$(".first-level").each(function() {
		var liTitle = $(this).children('a').text();
		$(this).attr('title', $.trim(liTitle));
	});

	/*/HIDE SIDEBAR ONCLICK
	$("body").prepend('<div class="overlay"></div>');
	$(".overlay").click(function() {
		$("body").removeClass("sidebar-is-opened").addClass("sidebar-is-closed");
		$(".overlay").addClass('none');
	});*/

	//SIDEBAR MENU
	$(".sidebar-menu li.first-level.active").addClass('selected');
	$(".sidebar-menu li.first-level.active ul").slideDown('fast');
	$(".sidebar-menu li.second-level.active").parents('li').addClass('active selected');
	$(".sidebar-menu li.second-level.active").parents('ul.second-level').slideDown('fast');
	/*$(".sidebar-menu .first-level.active .menu-item .fa-angle-double-down.i-right").css({
		'-webkit-transform': 'rotate(0deg)',
		   '-moz-transform': 'rotate(0deg)',
		    '-ms-transform': 'rotate(0deg)',
			 '-o-transform': 'rotate(0deg)',
			    'transform': 'rotate(0deg)',
	});*/
	$('.sidebar-menu ul li.first-level a .fa-angle-double-down')/*.not('.sidebar-menu ul li.second-level a')*/.click(function() {
		$('.sidebar-menu li').removeClass('selected');
		$(this).closest('li').addClass('selected');
		var checkElement = $(this).parents('a').next();
			if((checkElement.is('ul.second-level')) && (checkElement.is(':visible'))) {
				$(this).closest('li').removeClass('selected');
				checkElement.slideUp('fast');
			}
			if((checkElement.is('ul.second-level')) && (!checkElement.is(':visible'))) {
				$('.sidebar-menu ul ul:visible').slideUp('fast');
				checkElement.slideDown('fast');
			}
			if($(this).closest('li').find('ul').children().length == 0) {
				return true;
				} else {
				return false;
			}
	});


	//SUMMERNOTE
	$('.summernote').summernote({
		height: 220
	});


	$('.summernote-small').summernote({
		toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['fontsize', ['fontsize']],
		['color', ['color']],
		['para', ['ul', 'ol', 'paragraph']]
		],
		height: 200
	});


	//SELECT
	$('.selectpicker').selectpicker();
	//FILE INPUT
	$('input[type=file]').bootstrapFileInput();
	//DATE PICKER
	$('.datepicker-input').datepicker();
	//GALLERY
	$('.gallery-wrap').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a.zooming', // the selector for gallery item
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled:true
			}
		});
	});


	if ($('#morris-bar-home').length > 0){
		//MORRIS
		Morris.Bar({
			element: 'morris-bar-home',
			data: [
			{ y: 'Indonesia', a: 952},
			{ y: 'India', a: 985},
			{ y: 'Malaysia', a: 955},
			{ y: 'China', a: 785 },
			{ y: 'Philipina', a: 700 },
			{ y: 'Autralia', a: 601 },
			{ y: 'United Kingdom', a: 421 },
			{ y: 'United States', a: 725 },
			{ y: 'Taiwan', a: 350 },
			{ y: 'New Zealand', a: 120 },
			{ y: 'Singapore', a: 124}
			],
			xkey: 'y',
			ykeys: ['a'],
			labels: ['Visitor'],
			resize: true,
			barColors: ['#2C7439'],
			gridTextColor: ['#2C7439'],
			gridTextSize: 11,
			grid :false
		});

	}

	if ($('#morris-home').length > 0){
		//MORRIS
		Morris.Area({
			element: 'morris-home',
			data: [
			{ y: '2006', a: 100, b: 90, c: 112 },
			{ y: '2007', a: 75,  b: 65, c: 95 },
			{ y: '2008', a: 50,  b: 40, c: 80 },
			{ y: '2009', a: 75,  b: 65, c: 96 },
			{ y: '2010', a: 50,  b: 40, c: 75 },
			{ y: '2011', a: 75,  b: 65, c: 110 },
			{ y: '2012', a: 100, b: 90, c: 132 },
			{ y: '2013', a: 125, b: 110, c: 152 },
			{ y: '2014', a: 145, b: 135, c: 165 }
			],
			xkey: 'y',
			ykeys: ['a', 'b', 'c'],
			labels: ['New Visitor', 'Visitor', 'Page Hits'],
			resize: true,
			lineColors: ['#5CB85C', '#FFD600', '#D10D0D']
		});
	}


	function respChart(selector, data, options){

		// Define default option for line chart
		var option = {
			scaleOverlay : false,
			scaleOverride : false,
			scaleSteps : null,
			scaleStepWidth : null,
			scaleStartValue : null,
			scaleLineColor : "rgba(0,0,0,.1)",
			scaleLineWidth : 1,
			scaleShowLabels : true,
			scaleLabel : "<%=value%>",
			scaleFontFamily : "'proxima-nova'",
			scaleFontSize : 10,
			scaleFontStyle : "normal",
			scaleFontColor : "#909090",
			scaleShowGridLines : true,
			scaleGridLineColor : "rgba(0,0,0,.05)",
			scaleGridLineWidth : 1,
			bezierCurve : true,
			pointDot : true,
			pointDotRadius : 3,
			pointDotStrokeWidth : 1,
			datasetStroke : true,
			datasetStrokeWidth : 2,
			datasetFill : true,
			animation : true,
			animationSteps : 60,
			animationEasing : "easeOutQuart",
			onAnimationComplete : null
		}

		// check if the option is override to exact options
		// (bar, pie and other)
		if (options == false || options == null){
			options = option;
		}

		// get selector by context
		var ctx = selector.get(0).getContext("2d");
		// pointing parent container to make chart js inherit its width
		var container = $(selector).parent();

		// enable resizing matter
		$(window).resize( generateChart );

		// this function produce the responsive Chart JS
		function generateChart(){
			// make chart width fit with its container
			var ww = selector.attr('width', $(container).width() );
			// Initiate new chart or Redraw
			new Chart(ctx).Line(data, options);
		};

		// run function - render chart at first load
		generateChart();

	}

	respChart($("#canvas"),data);


});



/* ===========================================================
 * Bootstrap: inputmask.js v3.0.0-p7
 * http://jasny.github.io/bootstrap/javascript.html#inputmask
 * Based on Masked Input plugin by Josh Bush (digitalbush.com)
 * ===========================================================
 * Copyright 2012 Jasny BV, Netherlands.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

	var isIphone = (window.orientation !== undefined)
	var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1
	var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

	// INPUTMASK PUBLIC CLASS DEFINITION
	// =================================

	var Inputmask = function (element, options) {
		if (isAndroid) return // No support because caret positioning doesn't work on Android

		this.$element = $(element)
		this.options = $.extend({}, Inputmask.DEFAULS, options)
		this.mask = String(this.options.mask)

		this.init()
		this.listen()

		this.checkVal() //Perform initial check for existing values
	}

	Inputmask.DEFAULS = {
		mask: "",
		placeholder: "_",
		definitions: {
			'9': "[0-9]",
			'a': "[A-Za-z]",
			'?': "[A-Za-z0-9]",
			'*': "."
		}
	}

	Inputmask.prototype.init = function() {
		var defs = this.options.definitions
		var len = this.mask.length

		this.tests = []
		this.partialPosition = this.mask.length
		this.firstNonMaskPos = null

		$.each(this.mask.split(""), $.proxy(function(i, c) {
			if (c == '?') {
				len--
				this.partialPosition = i
			} else if (defs[c]) {
				this.tests.push(new RegExp(defs[c]))
				if(this.firstNonMaskPos === null)
					this.firstNonMaskPos =  this.tests.length - 1
			} else {
				this.tests.push(null)
			}
		}, this))

		this.buffer = $.map(this.mask.split(""), $.proxy(function(c, i) {
			if (c != '?') return defs[c] ? this.options.placeholder : c
		}, this))

		this.focusText = this.$element.val()

		this.$element.data("rawMaskFn", $.proxy(function() {
			return $.map(this.buffer, function(c, i) {
				return this.tests[i] && c != this.options.placeholder ? c : null
			}).join('')
		}, this))
	}

	Inputmask.prototype.listen = function() {
		if (this.$element.attr("readonly")) return

		var pasteEventName = (isIE ? 'paste' : 'input') + ".mask"

		this.$element
			.on("unmask.bs.inputmask", $.proxy(this.unmask, this))

			.on("focus.bs.inputmask", $.proxy(this.focusEvent, this))
			.on("blur.bs.inputmask", $.proxy(this.blurEvent, this))

			.on("keydown.bs.inputmask", $.proxy(this.keydownEvent, this))
			.on("keypress.bs.inputmask", $.proxy(this.keypressEvent, this))

			.on(pasteEventName, $.proxy(this.pasteEvent, this))
	}

	//Helper Function for Caret positioning
	Inputmask.prototype.caret = function(begin, end) {
		if (this.$element.length === 0) return
		if (typeof begin == 'number') {
			end = (typeof end == 'number') ? end : begin
			return this.$element.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end)
				} else if (this.createTextRange) {
					var range = this.createTextRange()
					range.collapse(true)
					range.moveEnd('character', end)
					range.moveStart('character', begin)
					range.select()
				}
			})
		} else {
			if (this.$element[0].setSelectionRange) {
				begin = this.$element[0].selectionStart
				end = this.$element[0].selectionEnd
			} else if (document.selection && document.selection.createRange) {
				var range = document.selection.createRange()
				begin = 0 - range.duplicate().moveStart('character', -100000)
				end = begin + range.text.length
			}
			return {
				begin: begin,
				end: end
			}
		}
	}

	Inputmask.prototype.seekNext = function(pos) {
		var len = this.mask.length
		while (++pos <= len && !this.tests[pos]);

		return pos
	}

	Inputmask.prototype.seekPrev = function(pos) {
		while (--pos >= 0 && !this.tests[pos]);

		return pos
	}

	Inputmask.prototype.shiftL = function(begin,end) {
		var len = this.mask.length

		if(begin<0) return

		for (var i = begin,j = this.seekNext(end); i < len; i++) {
			if (this.tests[i]) {
				if (j < len && this.tests[i].test(this.buffer[j])) {
					this.buffer[i] = this.buffer[j]
					this.buffer[j] = this.options.placeholder
				} else
					break
				j = this.seekNext(j)
			}
		}
		this.writeBuffer()
		this.caret(Math.max(this.firstNonMaskPos, begin))
	}

	Inputmask.prototype.shiftR = function(pos) {
		var len = this.mask.length

		for (var i = pos, c = this.options.placeholder; i < len; i++) {
			if (this.tests[i]) {
				var j = this.seekNext(i)
				var t = this.buffer[i]
				this.buffer[i] = c
				if (j < len && this.tests[j].test(t))
					c = t
				else
					break
			}
		}
	},

	Inputmask.prototype.unmask = function() {
		this.$element
			.unbind(".mask")
			.removeData("inputmask")
	}

	Inputmask.prototype.focusEvent = function() {
		this.focusText = this.$element.val()
		var len = this.mask.length
		var pos = this.checkVal()
		this.writeBuffer()

		var that = this
		var moveCaret = function() {
			if (pos == len)
				that.caret(0, pos)
			else
				that.caret(pos)
		}

		moveCaret()
		setTimeout(moveCaret, 50)
	}

	Inputmask.prototype.blurEvent = function() {
		this.checkVal()
		if (this.$element.val() !== this.focusText)
			this.$element.trigger('change')
	}

	Inputmask.prototype.keydownEvent = function(e) {
		var k=e.which

		//backspace, delete, and escape get special treatment
		if (k == 8 || k == 46 || (isIphone && k == 127)) {
			var pos = this.caret(),
			begin = pos.begin,
			end = pos.end

			if (end-begin === 0) {
				begin = k!=46 ? this.seekPrev(begin) : (end=this.seekNext(begin-1))
				end = k==46 ? this.seekNext(end) : end
			}
			this.clearBuffer(begin, end)
			this.shiftL(begin,end-1)

			return false
		} else if (k == 27) {//escape
			this.$element.val(this.focusText)
			this.caret(0, this.checkVal())
			return false
		}
	}

	Inputmask.prototype.keypressEvent = function(e) {
		var len = this.mask.length

		var k = e.which,
		pos = this.caret()

		if (e.ctrlKey || e.altKey || e.metaKey || k<32)  {//Ignore
			return true
		} else if (k) {
			if (pos.end - pos.begin !== 0) {
				this.clearBuffer(pos.begin, pos.end)
				this.shiftL(pos.begin, pos.end-1)
			}

			var p = this.seekNext(pos.begin - 1)
			if (p < len) {
				var c = String.fromCharCode(k)
				if (this.tests[p].test(c)) {
					this.shiftR(p)
					this.buffer[p] = c
					this.writeBuffer()
					var next = this.seekNext(p)
					this.caret(next)
				}
			}
			return false
		}
	}

	Inputmask.prototype.pasteEvent = function() {
		var that = this

		setTimeout(function() {
			that.caret(that.checkVal(true))
		}, 0)
	}

	Inputmask.prototype.clearBuffer = function(start, end) {
		var len = this.mask.length

		for (var i = start; i < end && i < len; i++) {
			if (this.tests[i])
				this.buffer[i] = this.options.placeholder
		}
	}

	Inputmask.prototype.writeBuffer = function() {
		return this.$element.val(this.buffer.join('')).val()
	}

	Inputmask.prototype.checkVal = function(allow) {
		var len = this.mask.length
		//try to place characters where they belong
		var test = this.$element.val()
		var lastMatch = -1

		for (var i = 0, pos = 0; i < len; i++) {
			if (this.tests[i]) {
				this.buffer[i] = this.options.placeholder
				while (pos++ < test.length) {
					var c = test.charAt(pos - 1)
					if (this.tests[i].test(c)) {
						this.buffer[i] = c
						lastMatch = i
						break
					}
				}
				if (pos > test.length)
					break
			} else if (this.buffer[i] == test.charAt(pos) && i != this.partialPosition) {
				pos++
				lastMatch = i
			}
		}
		if (!allow && lastMatch + 1 < this.partialPosition) {
			this.$element.val("")
			this.clearBuffer(0, len)
		} else if (allow || lastMatch + 1 >= this.partialPosition) {
			this.writeBuffer()
			if (!allow) this.$element.val(this.$element.val().substring(0, lastMatch + 1))
		}
		return (this.partialPosition ? i : this.firstNonMaskPos)
	}


	// INPUTMASK PLUGIN DEFINITION
	// ===========================

	var old = $.fn.inputmask

	$.fn.inputmask = function (options) {
		return this.each(function () {
			var $this = $(this)
			var data = $this.data('inputmask')

			if (!data) $this.data('inputmask', (data = new Inputmask(this, options)))
		})
	}

	$.fn.inputmask.Constructor = Inputmask


	// INPUTMASK NO CONFLICT
	// ====================

	$.fn.inputmask.noConflict = function () {
		$.fn.inputmask = old
		return this
	}


	// INPUTMASK DATA-API
	// ==================

	$(document).on('focus.bs.inputmask.data-api', '[data-mask]', function (e) {
		var $this = $(this)
		if ($this.data('inputmask')) return
		$this.inputmask($this.data())
	})

}(window.jQuery);
