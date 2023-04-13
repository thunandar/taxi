import "./Blog.css";

import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import Blog4 from "../../assets/blog4.jpg";
import Blog5 from "../../assets/blog5.jpg";

const Blog = () => {
  return (
    <div className="blog section" id="blog">
      <div className="section__title">
        <h2 className="section__description">Blog</h2>
        <h3 className="section__header">
          Before hiring a Taxi in Perth, these are five things you must check.
        </h3>
      </div>

      <div className="blog__container">
        <div className="blog__container-one">
          <div className="blog__container-article">
            <div className="blog__container-article-image">
              <img src={Blog1} alt="blog_image" />
            </div>
            <div className="blog__container-article-content">
              <div>
                <p>APRIL 8, 2022</p>
                <h3>Perth’s premier professional individual taxi drivers?</h3>
              </div>
              <p className="more">Read More</p>
            </div>
          </div>
        </div>

        <div className="blog__container-two">
          <div className="blog__container-article">
            <div className="blog__container-article-image">
              <img src={Blog2} alt="blog_image" />
            </div>
            <div className="blog__container-article-content">
              <div>
                <p>APRIL 1, 2022</p>
                <h3>5 reasons to use a taxi service in Perth</h3>
              </div>
              <p className="more">Read More</p>
            </div>
          </div>

          <div className="blog__container-article">
            <div className="blog__container-article-image">
              <img src={Blog3} alt="blog_image" />
            </div>
            <div className="blog__container-article-content">
              <div>
                <p>MARCH 26, 2022</p>
                <h3>Know your taxi ride cost in advance with Perth taxi</h3>
              </div>
              <p className="more">Read More</p>
            </div>
          </div>

          <div className="blog__container-article">
            <div className="blog__container-article-image">
              <img src={Blog4} alt="blog_image" />
            </div>
            <div className="blog__container-article-content">
              <div>
                <p>FEBRUARY 25, 2019</p>
                <h3>Know how taxi services Perth can help you save money</h3>
              </div>
              <p className="more">Read More</p>
            </div>
          </div>

          <div className="blog__container-article">
            <div className="blog__container-article-image">
              <img src={Blog5} alt="blog_image" />
            </div>
            <div className="blog__container-article-content">
              <div>
                <p>FEBRUARY 7, 2019</p>
                <h3>
                  Explore the tourist attractions in Perth with Perth taxis
                </h3>
              </div>
              <p className="more">Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
