# radius_app_clone_ssocca
    1. 설치
        - npm config set save-exact=true
            노드 패키지 매니저를 통해 설치 하는 라이브러리, 모듈들의 버전을 고정
        - react-native init SsoccaApp
        - cd SsoccaApp
        -- 네비게이션
            - npm install --save @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
            - npm install --save @react-navigation/stack @react-navigation/drawer @react-navigation/bottom-tabs
        - Async storage
            - npm install --save @react-native-community/async-storage
        - 앱아이콘/ 스플래시 이미지 생성 lib 설치
            - npm install --save-dev @bam.tech/react-native-make
            - npm install --save react-native-splash-screen
        - 앱아이콘 적용
            - react-native set-icon --path ./src/Assets/Images/app_icon.png
        - 앱스플래쉬 적용
            - react-native set-splash --path ./src/Assets/Images/app_splash.png
        - typescript 설치
            - npm install typescript @types/react @types/react-native --save-dev
        - tsconfig.json 생성
            {
                "compilerOptions": {
                "allowJs": true,
                "allowSyntheticDefaultImports": true,
                "esModuleInterop": true,
                "isolatedModules": true,
                "jsx": "react",
                "lib": [
                    "es6"
                ],
                "moduleResolution": "node",
                "noEmit": true,
                "strict": true,
                "target": "esnext",
                "baseUrl": "./src",
                "paths": {
                    "~/*": [
                    "*"
                    ]
                }
                },
                "exclude": [
                "node_modules",
                "babel.config.js",
                "metro.config.js",
                "jest.config.js"
                ]
            }
        - Styled Components 적용
            - npm install --save styled-components
            - npm install --save-dev @types/styled-components
        - 절대경로로 컴포넌트 추가
            - npm install --save-dev @types/styled-components
            - babel.config.js 수정
                module.exports = {
                presets: ['module:metro-react-native-babel-preset'],
                plugins: [
                    [
                    'babel-plugin-root-import',
                    {
                        rootPathPrefix: '~',
                        rootPathSuffix: 'src',
                    },
                    ],
                ]
                };

