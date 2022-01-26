var str = '';

str += '<header class="jm-header">';
str += '  <div class="jm-header-body">';
str += '    <h1><a href="#"><i></i> <span>주민등록증 모바일 확인서비스</span></a></h1>';
str += '    <div class="jm-nav-open">';
str += '      <button type="button" class="jm-n-btns"> <!-- LNB 활성화 시 jm-nav-toggle -->';
str += '        <span></span>';
str += '        <span></span>';
str += '        <span></span>';
str += '      </button>';
str += '    </div>';
str += '  </div>';
str += '  <nav class="jm-nav"> <!-- LNB 활성화 시 jm-nav-active -->';
str += '    <div class="jm-n-body">';
str += '      <ul class="jm-nav-step1">';
str += '        <li><a href="UI-MW-SER-001.html">이용내역</a></li>';
str += '        <li class="jm-sub">';
str += '          <a href="javascript:void(0);">고객센터</a> <!-- LNB 2뎁스 활성화 시 jm-s-active -->';
str += '          <ul class="jm-nav-step2">';
str += '            <li><a href="UI-MW-BOR-001.html">공지사항</a></li>';
str += '            <li><a href="UI-MW-BOR-003.html">FAQ</a></li>';
str += '            <li><a href="UI-MW-BOR-005.html">활용처</a></li>';
str += '            <li><a href="UI-MW-BOR-006.html">이용안내</a></li>';
str += '            <li><a href="UI-MW-ETC-001.html">개인정보처리방침</a></li>';
str += '            <li><a href="UI-MW-ETC-002.html">이용약관</a></li>';
str += '          </ul>';
str += '        </li>';
str += '        <li><a href="UI-MW-SER-002.html">인증수단설정</a></li>';
str += '        <li><a href="UI-MW-SER-005.html" class="color_red">서비스해지</a></li>';
str += '      </ul>';
str += '    </div>';
str += '    <div class="jm-blind"></div>';
str += '  </nav>';
str += '</header>';

document.write(str);



