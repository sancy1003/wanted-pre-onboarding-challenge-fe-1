# wanted-pre-onboarding-challenge-fe-1

## 프로젝트 실행

```
yarn
yanr start
```

<br/>

## 주요 폴더 구조

- hooks : custom hook을 모아 놓은 폴더입니다.
- pages : 페이지를 구성하는 컴포넌트들을 모아 놓은 폴더입니다.
- types : API 응답 데이터의 인터페이스를 모아 놓은 폴더입니다.

<br/>

## hooks

- useFetch.ts : 데이터를 가져오는 API를 호출할 때 사용하는 hook입니다. api를 호출하는 fetch 함수, 로딩 상태, 에러 상태, 결과 값을 반환합니다.
- useMutation.ts : 데이터를 변화시키는 API를 호출할 때 사용하는 hook입니다. api를 호출하는 mutate 함수, 로딩 상태, 에러 상태, 결과 값을 반환합니다.
- useUser.ts : 사용자의 token이 유효한지 검사할 때 사용하는 hook 입니다. 사용자의 토큰이 유효하지 않다면 로그인 화면으로 이동시키는 checkUser 함수를 반환합니다.

<br/>

## pages

각 페이지를 구성하는 컴포넌트들을 역할에 맞게 분리하였습니다.<br/>
폴더의 최상단에 중복되는 데이터를 관리하고 조건에 맞는 컴포넌트들을 보여주는 XXXPage.tsx 파일이 존재하고 componets 폴더 안에 특정 기능을 수행하는 컴포넌트들이 존재합니다.

```
└─ pages
	└─ auth
		└─ AuthPage.tsx         // 조건에 맞는 컴포넌트를 보여주는 Container
		└─ components
		       └─ Login.tsx     // 회원가입 UI
		       └─ Signup.tsx    // 로그인 UI
	└─ todo
		└─ atoms.ts                 // 전역 상태인 todoListState 생성
		└─ TodoPage.tsx             // 조건에 맞는 컴포넌트를 보여주는 Container
		└─ components
		       └─ Layout.tsx        // 공통 레이아웃
		       └─ TodoEditor.tsx    // 일정 추가, 수정 UI 및 기능
		       └─ TodoItem.tsx      // 일정 목록의 아이템 UI
		       └─ TodoList.tsx      // 일정 목록 UI 및 기능
		       └─ TodoViewer.tsx    // 일정 상세보기 UI 및 기능
```

<br/>
많은 컴포넌트에서 호출하고 변경하는 todo 목록은 recoil을 사용하여 전역 상태로 관리하였고 todo를 추가하거나 수정한 뒤 응답을 받는다면 실시간으로 전역 상태의 todoListState에 반영합니다.
