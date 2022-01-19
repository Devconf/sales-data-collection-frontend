import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
	${normalize}
	html,
	body { 
		min-width : 850px;
		height: 100%;
    padding : 0;
    margin : 0 auto;
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.colors.main}
	}
	#root {
		height: 100%;
	}
	* {
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
