# Giới thiệu
- Project là 1 trang ecommerce bán sản phẩm ...
- Project có 3 env:
  - Dev:
  - UAT:
  - Prod:

# Cấu trúc thư mục

├───.github
│   └───workflows
├───node_modules //Thư mục chứa thư viện của playwright 
│   ├───.bin
│   ├───@playwright
│   │   └───test
│   ├───@types
│   │   └───node
│   │       ├───assert
│   │       ├───compatibility
│   │       ├───dns
│   │       ├───fs
│   │       ├───readline
│   │       ├───stream
│   │       ├───timers
│   │       ├───ts5.6
│   │       │   └───compatibility
│   │       ├───ts5.7
│   │       │   └───compatibility
│   │       └───web-globals
│   ├───playwright
│   │   ├───lib
│   │   │   ├───agents
│   │   │   ├───common
│   │   │   ├───isomorphic
│   │   │   ├───loader
│   │   │   ├───matchers
│   │   │   ├───mcp
│   │   │   │   ├───browser
│   │   │   │   │   └───tools
│   │   │   │   ├───extension
│   │   │   │   ├───sdk
│   │   │   │   └───test
│   │   │   ├───plugins
│   │   │   ├───reporters
│   │   │   │   └───versions
│   │   │   ├───runner
│   │   │   ├───third_party
│   │   │   ├───transform
│   │   │   └───worker
│   │   └───types
│   ├───playwright-core
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───cli
│   │   │   ├───client
│   │   │   ├───generated
│   │   │   ├───protocol
│   │   │   ├───remote
│   │   │   ├───server
│   │   │   │   ├───android
│   │   │   │   ├───bidi
│   │   │   │   │   └───third_party
│   │   │   │   ├───chromium
│   │   │   │   ├───codegen
│   │   │   │   ├───dispatchers
│   │   │   │   ├───electron
│   │   │   │   ├───firefox
│   │   │   │   ├───har
│   │   │   │   ├───recorder
│   │   │   │   ├───registry
│   │   │   │   ├───trace
│   │   │   │   │   ├───recorder
│   │   │   │   │   ├───test
│   │   │   │   │   └───viewer
│   │   │   │   ├───utils
│   │   │   │   │   └───image_tools
│   │   │   │   └───webkit
│   │   │   │       └───wsl
│   │   │   ├───third_party
│   │   │   ├───utils  
│   │   │   │   └───isomorphic
│   │   │   ├───utilsBundleImpl
│   │   │   └───vite
│   │   │       ├───htmlReport
│   │   │       ├───recorder
│   │   │       │   └───assets
│   │   │       └───traceViewer
│   │   │           └───assets
│   │   └───types
│   └───undici-types
├───src
│   ├───config
│   ├───fixture
│   ├───pom      // folder chưa POM dự án 
│   │   ├───api  // POM API
│   │   └───page // POM UI
│   │       ├───dashboard
│   │       └───storefront
│   └───utils    //Chứa những funtion common của project 
└───tests        //folder chưa test script của từng module 
    ├───authentication
    └───checkout
        ├───paypal
        │   ├───paypal-express
        │   └───paypal-standard
        ├───spay
        └───stripe

# Convention
## Quy tắc đặt tên
- Biến
- Funtions
- File name

## PR
- Cần những nội dung gì?
- Add reviewer
- Request review

## Coding convention 
- Logic trong câu điều kiện luôn luôn cần có dấu `{}`
  - Bad:
        ```js
        if(a>b){
            console.log("a>b");
        }
        ```
  - Good:
      ```js
        if(a>b){
            console.log("a>b");
        }
        ```

## Workflow
- Tạo branch mới
- Tạo PR
- Gửi review 