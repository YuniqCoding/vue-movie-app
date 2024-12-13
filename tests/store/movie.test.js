import movieStore from "~/store/movie";
import _cloneDeep from "lodash/cloneDeep";
import axios from "axios";

describe("store/movie.js", () => {
  let store;

  beforeEach(() => {
    // 주소를 복사하면 내부 값이 변경되므로 cloneDeep 사용
    store = _cloneDeep(movieStore);
    store.state = store.state();
    // this.$store.state.movies
    // 실제 commit과 dispatch처럼 작동하도록 내부 구현
    store.commit = (name, payload) => {
      store.mutations[name](store.state, payload);
    };
    store.dispatch = (name, payload) => {
      const context = {
        state: store.state,
        commit: store.commit,
        dispatch: store.dispatch,
      };
      // actions는 비동기함수기 때문에 return 처리
      return store.actions[name](context, payload);
    };
  });

  test("영화 데이터를 초기화합니다.", () => {
    store.commit("updateState", {
      movies: [{ imdbID: "1" }],
      message: "Hello world",
      loading: true,
    });
    store.commit("resetMovies");
    // 해당 방식으로도 가능하지만 실제 vue 환경과 동일하게 세팅하는 것이 좋다
    // store.mutations.updateState(store.state, {});
    // store.dispatch("searchMovies", {});

    expect(store.state.movies).toEqual([]);
    expect(store.state.message).toBe("Search for the movie title!");
    expect(store.state.loading).toBe(false);
  });

  test("영화 목록을 잘 가져온 경우 데이터를 확인합니다.", async () => {
    const res = {
      data: {
        totalResults: "1",
        Search: [
          {
            imdbID: "1",
            Title: "Hello",
            Poster: "hello.jpg",
            Year: "2021",
          },
        ],
      },
    };
    // axios 기능을 모의함수로 구현
    // axios.get = jest.fn(() => {
    //   return new Promise((resolve) => {
    //     resolve(res);
    //   });
    // });
    axios.get = jest.fn().mockResolvedValue(res);
    // 검색한 영화 정보를 movies 데이터에 담는 함수
    await store.dispatch("searchMovies");
    expect(store.state.movies).toEqual(res.data.Search);
  });

  test("영화 아이템이 중복된 경우 고유하게 처리합니다.", async () => {
    const res = {
      data: {
        totalResults: "1",
        Search: [
          {
            imdbID: "1",
            Title: "Hello",
            Poster: "hello.jpg",
            Year: "2021",
          },
          {
            imdbID: "1",
            Title: "Hello",
            Poster: "hello.jpg",
            Year: "2021",
          },
          {
            imdbID: "1",
            Title: "Hello",
            Poster: "hello.jpg",
            Year: "2021",
          },
        ],
      },
    };
    axios.get = jest.fn().mockResolvedValue(res);
    await store.dispatch("searchMovies");
    // 기존 함수의 uniqBy 때문에 같은 imdbID를 가지고 있으면 하나로 처리된다
    expect(store.state.movies.length).toBe(1);
  });

  test("단일 영화의 상세 정보를 잘 가져온 경우 데이터를 확인합니다.", async () => {
    const res = {
      data: {
        imdbID: "1",
        Title: "Frozen",
        Poster: "frozen.jpg",
        Year: "2021",
      },
    };
    axios.get = jest.fn().mockResolvedValue(res);
    // 영화의 imdbID 값으로 해당 영화의 상세 정보를 가져오는 메소드 실행
    await store.dispatch("searchMovieWithId", 1);
    expect(store.state.theMovie).toEqual(res.data);
  });
});
