import React, { useState, useEffect } from "react";
import HotPost from "./HotPost/HotPost";
import "./blogpage.css";
import axios from "axios";
import PostBlock from "./PostBlock/PostBlock";
import PostAside from "./PostAside/PostAside";
import { useLocation, Link } from "react-router-dom";
import MultiLevelBreadcrumb from "../../../component/BreadCrumb/MultiLevelBreadcrumb";

const category = ["Fruit", "History", "Knowledge", "Live", "Other"];

const categoryText = ["水果", "歷史", "知識", "生活", "其他"];
const convertCategoryToText = (v) => {
  const index = category.indexOf(v);

  return categoryText[index];
};

function deleteHtmlTag(str) {
  str = str.replace(/<[^>]+>|&[^>]+;/g, "").trim();
  return str;
}

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [hotArticle, setHotArticle] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const { search } = useLocation();
  console.log(search.slice(1, search.length));

  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1500);
  }, []);

  // const serverUrl = "http://localhost:5000/api"
  useEffect(() => {
    const fetchPosts = async () => {
      // const cat=
      const res = await axios.get(
        "/post/" + (search ? `cat/${search.slice(1, search.length)}` : "")
      );
      console.log(res);

      console.log(res.data);
      setPosts(res.data);
      setHotArticle(res.data.slice(0, 5));
	  setDataLoading(true)
    };

    fetchPosts();
  }, [search]);

  // console.log(posts[0])

  return <>
	  {dataLoading? 
	  <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>: <>
				<MultiLevelBreadcrumb />
				<div className="container mt-2">
					<div className="section-hero row">
						<div
							className="
						col-12 col-lg-8
						main-article
						d-flex
						flex-column
						justify-content-between
					"
						>
							<div className="catagory mt-4 ms-3">
								<span
									className={`catagory-block ${posts[0] && posts[0].category}`}
								>
									L
								</span>
								<span className="catagory-content">
									{posts[0] && convertCategoryToText(posts[0].category)}
								</span>
							</div>
							<div className="article-title mb-5 ms-3 mt-5 position-relative">
								<Link to={`/post/${posts[0] && posts[0].id}`}>
									<h1 className="text-white mb-3">
										{posts[0] && posts[0].title}
									</h1>
									<p className="text-white mb-3">
										- 作者 {posts[0] && posts[0].author} ·2021-05-11 17:46:17
									</p>
									<p className="text-white text-bk">
										{posts[0] && deleteHtmlTag(posts[0].content)}
									</p>
								</Link>
							</div>
						</div>

						<div
							className="
						col-12 col-lg-4
						hit-article
						d-flex
						flex-column
						justify-content-between
					"
						>
							{hotArticle &&
								hotArticle.map((p, i) => {
									return <HotPost post={p} key={i} />;
								})}
						</div>
					</div>
				</div>

				<div className="container mt-5">
					<div className="row">
						<div className="col-12 col-xl-8">
							<div className="row gx-5 gy-5">
								{posts &&
									posts.map((p, i) => {
										return <PostBlock post={p} key={i} />;
									})}
							</div>
						</div>
						<PostAside hotArticle={hotArticle} />
					</div>
				</div>
			</>}
  </>;
}
export default BlogPage;
