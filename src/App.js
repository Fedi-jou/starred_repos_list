import Card from "./components/card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { url } from "./api/ApiLink";
import useFetch from "./api/useFetch";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Header from "./components/header/Header";

function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  const result = useFetch(url);

  useEffect(() => {
    if (!result.response) {
      console.log("error");
    } else {
      setItems(result.response.items);
    }
  }, [result.response]);

  const fetchNextPage = async () => {
    const res = await fetch(`${url}&page=${page}`);
    const data = await res.json();
    return data.items;
  };

  const fetchData = async () => {
    const reposFromServer = await fetchNextPage();
    setItems([...items, ...reposFromServer]);
    if (page === 34) {
      setHasMore(false);
    } else {
      setHasMore(true);
      setPage(page + 1);
    }
    // console.log(`The page number ${page} is currently loaded`);
  };

  return (
    <>
      <Header />
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        }
        endMessage={
          <h3 style={{ textAlign: "center", fontFamily: "Libre Baskerville" }}>
            Your reached the end of the List it contains 1000 repos ..
          </h3>
        }
      >
        {items &&
          items.map((element) => {
            return (
              <Card
                key={element.id}
                avatar={element.owner.avatar_url}
                username={element.owner.login}
                reponame={element.name}
                description={element.description}
                stars={element.watchers}
                issues={element.open_issues_count}
                link={element.html_url}
                date={element.created_at}
              />
            );
          })}
      </InfiniteScroll>
    </>
  );
}

export default App;
