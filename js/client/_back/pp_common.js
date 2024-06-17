/* 클라이언트 ui 스크립트 */
/*var sessionUserId = '';

if(sesseionUserId == ""){
   //로그인 안했을때
	console.log("로그인x");
} else {
   //로그인 했을때
	console.log("로그인o");
}*/

// header
function headerStyle(){

	//gnb 메뉴용
	var windowWidth = $(window).outerWidth();
	var target = $('.gnb_1depth > li').index();
	
	if (windowWidth < 1025) {
		//console.log('모바일,태블릿');

		// 기본 설정
		$(window).off('scroll');
		$('body').removeClass('scrolly on');
		$('body').off('scrolly');
		$('.gnb_1depth').off();
		$('.gnb_1depth').removeClass('on');
		$('.gnb_2depth').removeClass('on');
		$('.gnb_2depth').removeAttr('style');
		$('.gnb_2depth li').off();
		$('.gnb_3depth').removeAttr('style');
		$('.btn_menu').removeClass('on');
		$('.search_area').removeAttr('style');
		$('.sitemap').removeClass('on');
		$('.function_area').insertAfter('.gnb_list');
		//프로그램 더보기 버튼 위치 조정
		$(".mainprogram_wrap .main_more").insertAfter(".mainprogram_swiper");
	
		// gnb
		$('.btn_menu').on('click', function(e){
			e.stopImmediatePropagation();
			$('.gnb_1depth').removeClass('on');
			$('.gnb_2depth').hide();
			//$('.gnb_1depth:first-child').addClass('on');
			//$('.gnb_1depth:first-child').find('.gnb_2depth').show();
			if( $(this).hasClass('on') ){
				$('body').removeClass('on');
				$(this).removeClass('on');
			} else {
				$('body').addClass('on');
				$(this).addClass('on');
			}
		});

		//2depth 아코디언메뉴
		$('.header_bottom .gnb_2depth').hide();
		$(".gnb_1depth > a").unbind("click");
		$('.gnb_1depth').removeClass("target");
		$('.gnb_1depth > a').click(function () {
			//var target = $(this).parent('li').index();
			//$('.gnb_2depth').hide();//
			//$('.gnb_2depth').eq(target).show();
			//$('.gnb_1depth').removeClass("on");

			$('.gnb_1depth').removeClass("on");
			$('.gnb_1depth').removeClass("target");
			if ($(this).next().children().is(':hidden')) {
				$(this).parent().parent().find('.gnb_2depth').hide();
				$(this).next().show();
				$(this).parent().addClass("on");
				$(this).parent().addClass("target");
			} else {
				$(this).parent().addClass("on");
				$(this).parent().addClass("target");
			}
		});
		
	} else {
		//console.log("PC");

		// 기본 설정
		$('body').removeClass('scrolly on');
		//$('.gnb_1depth').removeClass('on');
		$('.gnb_1depth > a').off();
		//$('.gnb_wrap .gnb_2depth').unload();
		$('.gnb_2depth').removeClass('on');
		$('.gnb_2depth').removeAttr('style');
		$('.gnb_3depth').removeAttr('style');
		$('.search_area').removeAttr('style');
		$('.sitemap').removeClass('on');
		$('.function_area').insertBefore('.btn_sitemapmenu');
		//프로그램 더보기 버튼 위치 조정
		$(".mainprogram_wrap .main_more").appendTo(".mainprogram_wrap .main_tit");

		

		//2depth 메뉴
		$(".gnb_1depth").on({
			'mouseenter focusin' : function(){
				$(this).addClass('on');
				$(this).find(".gnb_2depth").stop().slideDown('fast');
			},
			'mouseleave focusout' : function(){
				$(this).removeClass('on');
				$(this).find(".gnb_2depth").stop().slideUp('fast');
			}
		});

		//3depth 메뉴
		$(".header_bottom .gnb_2depth li").on({
			'mouseenter focusin' : function(){
				if($(this).children("ul").length) {
					$(this).find(".gnb_3depth").stop().slideDown('fast');
				}
			},
			'mouseleave focusout' : function(){
				$(this).find(".gnb_3depth").stop().slideUp('fast');
			}
		});

		//snb 메뉴
		$('.snb_1depth').each(function(){
			if($(this).hasClass('on')){
				$(this).find('.snb_2depth').show();
			}
		});
		
		$('.snb_1depth > a').on('click', function(e){
			e.stopImmediatePropagation();
			$('.snb_2depth').slideUp();
			$('.snb_2depth li').removeClass('on');
			$('.snb_1depth').removeClass('on');
			$(this).parent().addClass('on');
			if($(this).siblings($('.snb_2depth')).is(':hidden')){
				$(this).parent().addClass('on');
				$(this).siblings('.snb_2depth').stop().slideDown(200);
			}else {
				$(this).siblings('.snb_2depth').stop().slideUp(200);
			}
			
		});
		
		// header 스크롤시
		$(window).on('scroll', function(){
			var scr = $(this).scrollTop();
			if ( scr > 0) {
				$('body').addClass('scrolly');
			} else {
				$('body').removeClass('scrolly');
			}
			return false;
		});
		

	}

	// 검색창 (pc)
	$('.btn_searchunified').on('click', function(){
		// gnb 열려있을때
		if( $('.gnb_submenu .gnb_2depth').is(':visible') ){
			$('body').removeClass('on');
			$('.gnb_submenu .gnb_2depth').stop().slideUp();
			$('.btn_menu').removeClass('on');
		}
		$('.search_area').stop().slideDown(200);
	});
	$('.search_area .btn_searchclose').on('click', function(){
		$('.search_area').stop().slideUp(200);
	});

	var scrollChk;
	var _pathLength;
	$(function(){
		$(window).scroll(function(){
			var windowWidth = $(window).outerWidth();
			var svg = $('.move_top svg');
			var top = $(this).scrollTop();
			if($(".move_top").length > 0){
				scrollChk = $(this).scrollTop();

				if(windowWidth < 480 ){
					_pathLength = 145;
					svg.width(50);
					svg.height(50);
					document.getElementById("cir").setAttribute("r", 23);
					document.getElementById("cir").setAttribute("cx", 25);
					document.getElementById("cir").setAttribute("cy", 25);
				}else {
					_pathLength = 214;
					svg.width(70);
					svg.height(70);
					document.getElementById("cir").setAttribute("r", 34);
					document.getElementById("cir").setAttribute("cx", 35);
					document.getElementById("cir").setAttribute("cy", 35);
				}
				
				$(".move_top circle").css("stroke-dasharray", _pathLength + Math.floor(($(window).scrollTop() / ($(document).height() - $(window).height())) * _pathLength));
				$(".move_top .percent").text(Math.floor($(window).scrollTop() / ($(document).height() - $(window).height()) * 100) + "% 스크롤 진행");
			}
		}).scroll();
	});
	
}

// 윈도우 resize 시 :
var resizeTimer;
$( window ).on( 'resize', function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resizeEnd, 1000);
} );

function resizeEnd() {
	// header
	headerStyle();
}

/* header fix */
function headerFix() {
	var subVisualHeight = $(".subpage_visual").height();

	$(window).scroll(function () {
		var sticky = $(".lnb_wrap");
		var	scroll = $(window).scrollTop();
		
		if (scroll >= subVisualHeight) {
			sticky.addClass("fixed_menu");
			$('.header_wrap').css('box-shadow','none');
		} else {
			sticky.removeClass("fixed_menu");
			$('.header_wrap').css('box-shadow','0 4px 10px rgba(0,0,0,0.3)');
		}
	});
}

// 언어선택 셀렉트박스
function selectLangBox(){

	//var windowWidth = $(window).outerWidth();
	var select = $('.select_lang').children('p');
	var selectList = select.next().children('li');
	var select1 = $('.select_lang li:nth-child(1)');
	var select2 = $('.select_lang li:nth-child(2)');

	select.on('click',function(e){
		e.stopImmediatePropagation();
		$(this).next().stop().slideToggle('fast');
	});

	selectList.on('click',function(){
		selectList.not($(this)).removeClass('on');
		$(this).addClass('on');
		$(this).parent().slideUp(400);
	});

	// 클릭시 변환
	select1.on('click',function(){
		$(this).parent().siblings(select).html('KOR');
	});
	select2.on('click',function(){
		$(this).parent().siblings(select).html('ENG');
	});
}
//sitemap 
function siteMap(){
	$('.btn_sitemapmenu').on('click', function(e){
		e.stopImmediatePropagation();
		$('body').addClass('on');
		$(".sitemap").addClass('on');
	});

	$('.btn_sitemap').on('click', function(e){
		e.stopImmediatePropagation();
		$('body').removeClass('on');
		$(".sitemap").removeClass('on');
	});

	$('.sitemap .gnb_2depth').on({
		'mouseenter focusin':function(){
			$(this).find('.gnb_tit').addClass('on');
			$(this).find('.gnb_tit').siblings('ul').stop().slideDown();
		},
		'mouseleave focusout':function(){
			$(this).find('.gnb_tit').removeClass('on');
			$(this).find('.gnb_tit').siblings('ul').stop().slideUp();
		}
	});
}

// lnb 메뉴
function lnbMenu(){
	
	// 서브 lnb 있을 경우 : 
	//$(".lnb_list").children('li').each(function(){
	//	var target = $(this);
	//	target.children('a').children('span').hide();
	//	if ( target.find('.sub_lnb').length ) {
	//		$('<span>펼쳐보기</span>').appendTo( target.children('a') );
	//	} 
	//});
	
	// 마우스오버시 하위메뉴 show/hide :
	//$(".lnb_list").children('li').on({
	//	'mouseenter focus':function(){
	//		if ( $(this).find('.sub_lnb').length ) {
	//			$(this).children('a').css('border-bottom-color','rgba(0,0,0,0)');
	//		}
	//		$(this).children('a').next().stop().slideDown(300);
	//	},
	//	'mouseleave blur':function(){
	//		if ( $(this).hasClass('on') ) {
	//			$(this).children('a').css('border-bottom-color','#77314c');
	//		}
	//		$(this).children('a').next().stop().slideUp(300);
	//	}
	//})
	
}

//페이지 상단 이동
function moveTop() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.move_top').addClass('on');
		} else {
			$('.move_top').removeClass('on');
		}
	});
	$('.move_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
}

//swiper 메인 - 진단센터 진단
function swiperSlide1() {
	var swiper = new Swiper('.maintest_wrap .test .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.test_wrap .test .move_wrap .arrow_right',
			prevEl: '.test_wrap .test .move_wrap .arrow_left',
		}, 
	});
}
//swiper 메인 - 진단센터 설문
function swiperSlide2() {
	var swiper = new Swiper('.maintest_wrap .survey .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.test_wrap .survey .move_wrap .arrow_right',
			prevEl: '.test_wrap .survey .move_wrap .arrow_left',
		}, 
	});
}

//swiper 메인 - 비교과 프로그램
function swiperSlide3() {
	var swiper = new Swiper('.mainprogram_swiper .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.mainprogram_swiper .arrow_right',
			prevEl: '.mainprogram_swiper .arrow_left',
		},
		breakpoints: {
			1280: {
				slidesPerView: 3
			}, 
			1024: { 
				slidesPerView: 2,
				spaceBetween: 15,
			}, 
			768: {
				slidesPerView: 2.1,
				spaceBetween: 10,
			},
			480: {
				slidesPerView: 1.1,
				spaceBetween: 10,
			}
		}
	});
}

//swiper 메인 - 공지사항
function swiperSlide4() {
	var swiper = new Swiper('.mainnotice_wrap .swiper-container', {
		slidesPerView: 1, 
		spaceBetween: 20,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.mainnotice_wrap .arrow_right',
			prevEl: '.mainnotice_wrap .arrow_left',
		}
	});
}


// 바로가기 등록
function shortcutSelect(){
	var wrapper = $('#shortcut_select');

	// 기본 설정
	wrapper.find('.check_only input:checked').parents('tr').find('td').addClass('td_selected');

	// 클릭시
	wrapper.find('.check_only').on('change',function(){
		var target = $(this).find('input');
		var targetChecked = wrapper.find('.check_only input:checked');

		// 체크 표시
		if( target.is(':checked') ){
			target.prop('checked', true);
			$(this).parents('tr').find('td').addClass('td_selected');

		} else {
			target.prop('checked', false);
			$(this).parents('tr').find('td').removeClass('td_selected');
		}

		// 갯수 제한
		if( targetChecked.length > 6 ){
			alert('최대 6개 메뉴를 선택해주세요.');
			target.prop('checked', false);
			$(this).parents('tr').find('td').removeClass('td_selected');
		}
	});
}

// tab : '.tab_js' 안에 '.tab_list_js' 와 '.tab_cnt_js'로 구분지어 사용.
function tab(){
	$('.tab_js').each(function(){
		var tabs = $(this).find('.tab_list_js').children('li');
		var panels = $(this).find('.tab_cnt_js').children('div');
		var lastTab = tabs.filter('.on');
		var lastPanel = $(lastTab.children('a').attr('href'));
		panels.hide();
		lastPanel.show();
		tabs.on('click',function(e){
			e.preventDefault();
			var thisTab = $(this);
			var thisPanel = $(thisTab.children('a').attr('href'));
			lastTab.removeClass('on');
			thisTab.addClass('on');
			lastPanel.hide();
			thisPanel.show();
			lastTab = thisTab;
			lastPanel = thisPanel;
		});
	})
}

// tab 모양만
function tabSwitch(){
	$('.tab_switch_js').each(function(){
		var tab = $(this).children('li');

		tab.on('click',function(e){
			e.preventDefault();
			tab.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// 셀렉트 텝
function tabSelect(){
	$('.tab_js').each(function(){
		
		if ( $(this).find('.tab_select_js').is(':visible') ) {
			var tabs = $(this).find('.tab_select_js').children('select');
			var panels = $(this).children('.tab_cnt_js').children('div');
			var lastTab = tabs.children('option:selected');
			var lastPanel = $(lastTab.val());
			panels.hide();
			lastPanel.show();

			tabs.on('click',function(e){
				e.preventDefault();
				var thisTab = $(this).children('option:selected');
				var thisPanel = $(thisTab.val());
				lastTab.prop('selected',false);
				thisTab.prop('selected',true);
				lastPanel.hide();
				thisPanel.show();

				lastTab = thisTab;
				lastPanel = thisPanel;
			});
			
		}
		
	});
}

// tab 세로형 (진단결과 내 역량별 설명)
function tabListRow (){
	$('.capainfo_wrap').each(function(){
		var windowWidth = $(window).outerWidth();
		var target = $(this).children('.tab_list_row').children('li');
		var no = $(this).children('.tab_list_row').children('li').length;
		var calWd = no / $(this).width() * 100;
		var calHg = $(this).height() / no;

		if ( windowWidth < 1025 ) {
			target.outerWidth('calWd + "%"');
		} else {
			target.outerHeight(calHg);
		}

	});
}

// 책갈피 기능
function bookmark () {
	$('.bookmark_js').each(function(){
		var bookmark = $(this).find('a');

		bookmark.on('click',function(e){
			e.preventDefault();
			bookmark.removeClass('on');

			var target = $(this).attr('href');

			if (target.length) {
				$(this).addClass('on');
				$('html,body').animate({
					scrollTop: $(target).offset().top - 80
				}, 'slow');
			}
		})
	})
}

// accordion : '.accordion_js' 안에 '.acd_list_js' 와 '.acd_cnt_js'로 구분지어 사용.
function accordion(){
	$('.accordion_js').each(function(){
		var acd_list = $(this).find('.acd_list_js');

		$('.acd_cnt_js').hide();

		// '.on'이 붙은 아이는 페이지 진입시 열어놓기
		acd_list.filter('.on').next('.acd_cnt_js').show();

		acd_list.on('click',function(){
			var thisList = $(this);
			var thisCnt = thisList.next('.acd_cnt_js');
			var notThisList = acd_list.not(thisList);
			var notThisCnt = notThisList.next();

			if(notThisList){
				notThisList.removeClass('on');
				notThisCnt.slideUp(300);
			}

			thisList.toggleClass('on');
			thisCnt.stop().slideToggle(300);
		});
	})
}

// 클릭시 클래스 'on' 제어
function toggleOnClick(){
	$('.on_js').on('click',function(){
		$(this).toggleClass('on');
	});
}

// hover시 클래스 'on' 제어
function toggleOnHover(){
	var windowWidth = $(window).outerWidth();
	
	if( windowWidth > 1024 ) {
		$('.hv_js').on({
			'mouseenter focusin':function(){
				$(this).addClass('on');
			},
			'mouseleave focusout':function(){
				$(this).removeClass('on');
			}
		});
	} 
}

// selectbox
function selectBox() {
	$('.select_form').each(function(){
		var target = $(this).children('select'); 
		var targetName = target.children('option:selected').text();
		var label = target.siblings('label');

		target.children('option:selected').attr('selected','selected');
		label.text(targetName);

		target.on('change',function(){
			var thisTarget = $(this).children('select'); 
			var thisTargetName = $(this).children('option:selected').text();
			
			/*target.children('option').removeAttr('selected');*/
			thisTarget.children('option:selected').attr('selected','selected');
			label.text(thisTargetName);
		});
	});
}

// 체크박스 토글(row) : 검색창 셀렉트박스
function checkToggleRow(){
	// 클릭시 셀렉트 박스 보여졌다 사라지는 동작
	$('.show_checktxt').on('click',function(){
		$('.check_row_wrap').slideToggle(300);
	})

	var checkBox = $('.show_checktxt');
	var check = $('input:checkbox[name=check_row]');
	var checkAll = $('input:checkbox[name=checkall_row]');
	var checkAllSelected = $('input:checkbox[name=checkall_row]:checked');
	var checkTotalCnt = $('input:checkbox[name=check_row]').length;

	// '전체'외 나머지 선택시
	check.on('change', function(){
		var checkSelected = $('input:checkbox[name=check_row]:checked');
		var checkAllSelected = $('input:checkbox[name=checkall_row]:checked');
		var showCheck = checkSelected.next().html();

		checkBox.text(showCheck);

		if(checkSelected.length == checkTotalCnt){
			check.prop('checked',false);
			checkAll.prop('checked',true);
			checkBox.text('전체');
		}else if(checkSelected.length >= 2){
			checkAllSelected.prop('checked',false);
			checkBox.text('다중선택');
		}else if(checkSelected.length >= 1){
			checkAllSelected.prop('checked',false);
			checkBox.text(showCheck);
		}else{
			checkAll.prop('checked',true);
		}
	});

	// '전체' 선택시
	checkAll.on('change', function(){
		checkAll.prop('checked',true);
		checkBox.text('전체');
		check.prop('checked',false);
	});
}

//체크박스 토글(col) : 체크박스 버튼
function checkToggleCol(){
	$('.check_col_wrapper').each(function(){
		var checkAll = $(this).find('input[name="checkall_col"]');
		var check = $(this).find('input[name="check_col"]');
		var checkTotalCnt = check.length;

		checkAll.on('change',function(){
			check.prop('checked',false);
			$(this).prop('checked',true);
		})

		check.on('change',function(){
			var checkSelected =  check.filter(':checked');
			checkAll.prop('checked',false);

			if(checkSelected.length >= checkTotalCnt){
				checkAll.prop('checked',true);
				check.prop('checked',false);
			}

		})
	})
}

//라디오 토글
function radioToggle() {
	$(".radio_toggle>input[type='radio']").click(function () {
		var previousRadio = $(this).data('storedRadio');
		if (previousRadio) {
			$(this).prop('checked', !previousRadio);
			$(this).data('storedRadio', !previousRadio);
		} else {
			$(this).data('storedRadio', true);
			$(".radio_toggle>input[type=radio]:not(:checked)").data("storedRadio", false);
		}
		if ($(this).is(":checked")){
			$(".radio_toggle").removeClass("on");
			$(this).parent().addClass("on");
		} else {
			$(this).parent().removeClass("on");
		}
	});
}

// 워크넷 진단 결과보기
function worknetResult() {
	$(".worknet_box").each(function() {
		var resultBtn = $(this).find(".btn");
		resultBtn.on("click", function(){
			$(this).toggleClass('on');
			$(this).parent().parent().next().slideToggle();
		});
	});
}

// 카드형,리스트형 활성화
function cardSwitch(){
	$('.programlist_row .searchtoggle_right').each(function(){
		var card = $(this).children('button');

		card.on('click',function(e){
			e.preventDefault();
			card.removeClass('on');
			$(this).addClass('on');
		})
	})
}

// 진단결과 선택하기
function resultCheck1() {
	// 기본 설정
	$('.box_checklist1 .testdo_checkbox.on .check_only input').prop("checked", true);

	// 클릭시
	$(".box_checklist1 .testdo_checkbox").on("click", function(){
		$(".box_checklist1 .testdo_checkbox").removeClass("on");
		$(".box_checklist1 .testdo_checkbox .check_only input").prop("checked", false);
		$(this).addClass("on");
		$(this).find('.check_only').children('input').prop("checked", true);
	});
}

// 글자수 표기 1000자 제한
function letterCount1000(){
	var wrapper = $('#letter_count1000');

	wrapper.find('textarea').keyup(function() {
		var countLength = $(this).val().length;
		var conuntLimit = 1000;

		wrapper.find('#letter_counter').html(countLength + '/' + conuntLimit);

		if (countLength > conuntLimit) {
			alert('댓글은 1000자 이내로 작성하여 주십시오');
			$(this).val($(this).val().substr(0, conuntLimit));
			$('#letter_counter').html(conuntLimit + '/' + conuntLimit);
		}	
	});
	wrapper.find('textarea').keyup();
}

// 글자수 표기 2000자 제한
function letterCount2000(){
	var wrapper = $('#letter_count2000');
	
	wrapper.find('textarea').keyup(function() {
		var countLength = $(this).val().length;
		var conuntLimit = 2000;
		
		wrapper.find('#letter_counter').html(countLength + '/' + conuntLimit);

		if (countLength > conuntLimit) {
			alert('상담 내용은 2000자 이내로 작성하여 주십시오');
			$(this).val($(this).val().substr(0, conuntLimit));
			$('#letter_counter').html(conuntLimit + '/' + conuntLimit);
		}	
	});
	wrapper.find('textarea').keyup();
}

// 핵심역량검사 : 글자수 100자이상 2000자이하 제한 
function testLetterCount(){
	
	$('.test_lettercount').each(function(){
		var wrapper = $(this);

		wrapper.find('textarea').keyup(function() {
			var countLength = $(this).val().length;
			var conuntLimit = 2000;

			wrapper.find('.letter_counter').html(countLength + '/' + conuntLimit);

			if (countLength > conuntLimit) {
				alert('답변은 2000자 이내로 작성하여 주십시오');
				$(this).val($(this).val().substr(0, conuntLimit));
				$('.letter_counter').html(conuntLimit + '/' + conuntLimit);
			}	
		});
		
		wrapper.find('textarea').on('focusout', function(){
			var countLength = $(this).val().length;
			
			if (countLength < 100) {
				alert('답변은 100자 이상 작성하여 주십시오');
				$(this).css('border-color','#f64f2e');
			} else {
				$(this).css('border-color','#d0ccc9');
			}
		});
		
		wrapper.find('textarea').keyup();
	});
	
}

// input 텝키 사용
function tabEnter(){
	$('.check_row').keypress(function(e){
		if((e.keyCode ? e.keyCode : e.which) == 13){
			$(this).find('input').trigger('click');
		}
	});
}

// 학습유형 진단결과 
function typeTestResult(){
	var wrapper = $('.typeresult_wrap');
	var no = wrapper.children('.type_list').children('div').children('div').filter('.on').parent().index();
	
	wrapper.children('.type_result').children('div').hide();
	wrapper.children('.type_result').children('div').eq(no).show();
}

// 독서인증현황
function readStep(){
	var no = $('.readstep_wrap').children('.readstep_list').children('li').filter('.on').length;
	var target = $('.readstep_wrap').find('.readstep_line').children('.step_point').children('span');
	
	target.removeClass('on').eq(no).prevAll().addClass('on');
	
}

// 답글 남기기 (토론광장)
function reply(){
	var targetBox = $('.letter_count').find('.re_tit');
	targetBox.hide();
	
	$('.btn_rereply').on('click',function(){
		var scrTop = $('.rewrite_box').offset().top;
		var txt = $(this).parent().prev().find('.re_id').text();
		
		targetBox.slideDown(300).find('span').text('@' + txt);
		
		$('body,html').animate({
			scrollTop: scrTop
		}, 800);
		return false;
	});
	
	targetBox.find('.btn_del').on('click',function(){
		$(this).parent().slideUp(300);
	});
}

// 대표 이력서 설정
function setBasicPortfolio(){
	$('.resume_wrap').each(function(){
		var wrapper = $(this);
		var btn = wrapper.find('.btn_setbasic');
		btn.on('click', function(){
			wrapper.children('li').removeClass('on');
			$(this).parent().parent().parent().addClass('on');
			btn.removeClass('on');
			$(this).addClass('on');
		});
	});
}

// 진로탐색
function cardSelect(){
	$('.cardselect_wrap').each(function(){
		var card = $(this).find('.card_select');
		card.on('click', function(){
			card.not($(this)).removeClass('on');
			$(this).addClass('on');
		});
	});
	
}

// 페이징버튼 클릭시 페이지 상단부분으로 이동
function testUp(){
	var windowWidth = $(window).outerWidth();
	var target = $('.testlist_wrap').find('.testlist_move').not('.disabled');
	
	if(windowWidth < 1025) {
		target.on('click', function(e){
			if(!$(this).hasClass("disabled")) { 
				e.preventDefault(); 
				$('body,html').animate({scrollTop: 150 }, 300); 
			} 
		});
	}else {
		target.on('click', function(e){
			if(!$(this).hasClass("disabled")) { 
				e.preventDefault(); 
				$('body,html').animate({scrollTop: 200 }, 300); 
			} 
		});
	}
}

// login 팝업
function loginInput(){
	$('.login_input input').on({
		'focus' : function(){
			$(this).addClass('on');
		},
		'blur' : function(){
			if( $(this).val().length ){
				$(this).addClass('on');
			} else {
				$(this).removeClass('on');
			}
		}
	});
}

//개인정보수집 동의서 
function privacy(){
	var checkAll = $('.privacyagree_box').children('.check_row').children('input');
	var checkEach = $('.privacy_list').find('.check_row').find('input');
	var checkTotal = checkEach.length;

	checkAll.on('change',function(){
		if($(this).is(':checked')){
			checkEach.prop('checked', true);
		}else {
			checkEach.prop('checked', false);
		}
	});

	checkEach.on('change',function(){
		var checkSelected = checkEach.filter(':checked');
		if(checkSelected.length >= checkTotal){
			checkAll.prop('checked',true);
		}else {
			checkAll.prop('checked',false);
		}

	})
}

// 상세검색창
function searchDetails(){
	var windowWidth = $(window).outerWidth();
	
	if (windowWidth < 768) {
		// console.log('tablet,mobile');
		$('.search_box3 .btn_detail').each(function(){
			var wrapper = $(this).parents('.search_box3');
			$(this).appendTo(wrapper);
		});
		$('.search_box3 .btn_detail').on('click', function(){
			$(this).prev('.search_detail').slideToggle(300);
		});
	}
	
	$('.search_box3 .btn_detail').on('click', function(){
		$(this).toggleClass('on');
		$(this).parent().next('.search_detail').slideToggle(300);
	});
}

// 스크롤 패럴럭스
function setScrollEffect(selector, extra) {
	checkVisibility();
	$(window).on('scroll resize', function() {
		checkVisibility();
	});

	function checkVisibility() {
		$(selector).each(function(){
			var target = $(this);
			var scrollTop = $(document).scrollTop();
			var minShow = target.offset().top - $(window).height() * extra;

			if ( scrollTop >= minShow ){
				target.addClass('on');
			}
		});
	}
}

// 비교과 프로그램 카드(hover)
function programCardHover(){
	var windowWidth = $(window).outerWidth();
	var target = $('.program_cardtype');
	
	if( windowWidth > 1024 ) {
		$('.program_cardtype a').on({
			'mouseenter focus' : function(){
				$(this).parents('.program_cardtype').addClass('on');
			},
			'mouseleave blur' : function(){
				$(this).parents('.program_cardtype').removeClass('on');
			}
		})
	}
	
}

/*
$(".first_menu").on("click", function(e) { 
	e.stopImmediatePropagation(); 
	
	var _navHref = $(this).next("div").children("ul").children("li").children("a:eq(0)").attr("href"); 
	
	if ($(this).next("div").children("ul").children("li").children("ul").length > 0) { 
		_navHref = $(this).next("div").children("ul").children("li").children("ul").children("li").children("a:eq(0)").attr("href"); 
	} 
	
	location.href= _navHref; 
}) 
*/

// 테이블 스크롤 커스텀
function tableScroll() {
	// 모바일 기기 접속 여부 체크 후 PC일때만 스크롤 mCustomScrollbar 실행
	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
			//alert('모바일');
			//테이블 스크롤  커스터마이징 해제
			$(".scrollx_tbl_xxl, .scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs, .scrollx_tbl_xxs").mCustomScrollbar("destroy");
		} else {
			//alert('PC');
			//테이블 스크롤  커스터마이징
			$(".scrollx_tbl_xxl, .scrollx_tbl_xl, .scrollx_tbl_lg, .scrollx_tbl_md, .scrollx_tbl_sm, .scrollx_tbl_xs, .scrollx_tbl_xxs").mCustomScrollbar({
				axis: "x",
				theme: "dark",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				}
			});
		}
	}
}

//학업설계 hover 
function academicHover() {
	var process = $('.academic_wrapper > div a');

	process.on({
		'mouseenter focusin':function(){
			$(this).parent().parent().addClass('on');
		},
		'mouseleave focusout':function(){
			$(this).parent().parent().removeClass('on');
		}
	});
}

//리얼타임 
function realTime() {
	var Target = document.getElementById("clock");
	var Target2 = document.getElementById("clock2");
	function clock() {
		var time = new Date();

		var year = time.getYear();
		var month = time.getMonth();
		var date = time.getDate();

		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();

		Target.innerText = 
		`${year + 1900}-${month + 1}-${date} ` +
		`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

		Target2.innerText = 
		`${year + 1900}-${month + 1}-${date} ` +
		`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
			
	}
	clock();
	setInterval(clock, 1000);
}

//테이블 체크
function tableCheck() {
	$('.tbl_choice').each(function(){
		var checkAll = $(this).find('input[name="check_all"]');
		var check = $(this).find('input[name="check"]');
		var checkTotalCnt = check.length;

		checkAll.on('change',function(){
			if($(this).prop("checked") == true){
				check.prop('checked',true);
				$(this).prop('checked',true);
				check.parents('tr').addClass('bg_skyblue');
			}else {
				check.prop('checked',false);
				$(this).prop('checked',false);
				check.parents('tr').removeClass('bg_skyblue');
			}
		})

		check.on('change',function(){
			var checkSelected =  check.filter(':checked');

			if($(this).prop("checked") == true){
				$(this).prop('checked',true);
				$(this).parents('tr').addClass('bg_skyblue');
			}else {
				$(this).prop('checked',false);
				$(this).parents('tr').removeClass('bg_skyblue');
			}

			if(checkSelected.length >= checkTotalCnt){
				checkAll.prop('checked',true);
			}else {
				checkAll.prop('checked',false);
			}

		})
	})
}

//수업시간 캘린더
function classTime() {
	$('.time_box').each(function(){
		var box = $('.time_box');
		var edit = box.find('.btn_edit');
		var close = box.find('.function_close');

		edit.on('click', function(){
			$(this).siblings('.function_pop').show();
		});

		close.on('click', function(){
			$(this).parents('.function_pop').hide();
		});

	})
}


// IE 버전 체크 (UserAgent)
var ua = navigator.userAgent.toLowerCase();
// IE7엔 브라우저 엔진명인 Trident가 없고 IE11엔 MSIE란 문자열이 없으므로 두 가지 경우를 모두 체크.
if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
	var version = 11;
	ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
	if( ua )
	{
		version = parseInt( ua[ 1 ] );
	}
	var classNames = '';
	// 기존 방식에 is-ie 라는 클래스 추가
	classNames += ' is-ie';
	// 기존 방식에 현재 버전 클래스 추가
	classNames += ' ie' + version;
	for( var i = version + 1; i <= 11; i++ ) {
		classNames +=  ' lt-ie' + i;
	}
	// html 태그에 클래스 추가
	document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
}

$(document).ready(function () {
	
	// header
	headerStyle();
	
	//headerFix
	//headerFix();

	// 언어선택 셀렉트박스
	selectLangBox();

	//sitemap 
	siteMap();

	////lnb 메뉴
	//lnbMenu();
	
	////페이지 상단으로 이동
	moveTop();

	////swiper
	swiperSlide1();
	swiperSlide2();
	swiperSlide3();
	swiperSlide4();

	//// 바로가기 등록
	//shortcutSelect();

	//// tab 기본
	tab();

	//// tab 모양만
	tabSwitch();

	//// 셀렉트 텝
	tabSelect();
	
	//// tab 세로형 (진단결과 내 역량별 설명)
	//tabListRow();
	
	//// 책갈피 기능
	//bookmark(); 

	//// accordion
	accordion();
	
	//// 클릭시 클래스 'on' 제어
	//toggleOnClick();

	//// hover시 클래스 'on' 제어
	//toggleOnHover();

	//// selectbox
	selectBox();

	//// 체크박스 토글(row) : 검색창 셀렉트박스
	//checkToggleRow();

	////체크박스 토글(col) : 체크박스 버튼
	checkToggleCol();

	////라디오 토글
	//radioToggle();

	//// 워크넷 진단 결과보기
	//worknetResult();

	//// 카드형,리스트형 활성화
	cardSwitch();

	// 진단결과 선택하기
	resultCheck1();

	//// 글자수 표기
	//letterCount1000();
	//letterCount2000();
	//testLetterCount();
	
	//// input 텝키 사용
	//tabEnter();
	
	//// 학습유형 진단결과 
	//typeTestResult();
	
	//// 독서인증현황
	//readStep();
	
	//// 답글 남기기 (토론광장)
	//reply();

	//// 대표 이력서 설정
	//setBasicPortfolio();
	
	//// 진로탐색
	//cardSelect();
	
	//// 페이징버튼 클릭시 페이지 상단부분으로 이동
	//testUp();
	
	//// login 팝업
	//loginInput();
	
	////개인정보수집 동의서 
	///*privacy();*/
	
	//// 상세검색창
	searchDetails();
	
	//// 스크롤 패럴럭스
	setScrollEffect('.fadeup', 1.1);
	setScrollEffect('.fadein', 1.1);
	
	//// 비교과 프로그램 카드(hover)
	programCardHover();
	
	$(window).on('resize', function () {
		headerStyle();
	});
	
	// 브라우저 알림창 닫기
	$(".browser_alert_close").on("click", function() {
		$("#browser_alert").slideUp();
	});

	// select2 설정
	$(".sel_search_row select").select2({
		formatNoMatches: function() {
			return '결과가 없습니다.';
		}
	});

	// 이미지 라이트박스
	$('.openimg').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		callbacks: {
			resize: changeImgSize,
			imageLoadComplete: changeImgSize,
			change: changeImgSize
		}
	});

	function changeImgSize() {
		var img = this.content.find('img');
		img.css('max-height', '100%');
		img.css('height', 'auto');
		img.css('width', 'auto');
		img.css('max-width', '810px');
	}

	//학업설계 hover
	academicHover();

	//리얼타임 
	// realTime();

	//테이블 체크
	tableCheck();

	//수업시간 캘린더
	classTime();

});


$(window).on("load", function () {
	tableScroll();
});

// outline 설정 - 키보드로 접근시엔 아웃라인을 보여주고 마우스로 접근할때는 아웃라인을 없애줌
(function (d) {
	var style_element = d.createElement('STYLE'),
		dom_events = 'addEventListener' in d,
		add_event_listener = function (type, callback) {
			// Basic cross-browser event handling
			if (dom_events) {
				d.addEventListener(type, callback);
			} else {
				d.attachEvent('on' + type, callback);
			}
		},
		set_css = function (css_text) {
			// Handle setting of <style> element contents in IE8
			!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
		};

	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	/*add_event_listener('mousedown', function () {
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});*/
	add_event_listener('keydown', function () {
		set_css(':focus{outline:dotted 1px #193296}::-moz-focus-inner{border:dotted 1px #193296;}');
	});
})(document);


