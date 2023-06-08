import React, { Component } from "react";
 
class NodeCard extends Component {
  render() {
    let cardUrl = this.props.cardUrl;
    let btnUrl = this.props.btnUrl;
    let imgSrc = this.props.src;
    let imgAlt = this.props.alt;
    let title = this.props.title;
    let tags = this.props.tags;
    return (
      <article>
        <img src={imgSrc} alt={imgAlt} />
        <div className="content-txt">
          <h3>{title}</h3>
          <p>Click the button below to view the repository.</p>
          <form action={btnUrl} target="_blank">
              <input type="submit" value="View repository" className="card-btn" />
          </form>
          <div className="tag-container">
            {tags.map((tag,id) => (
              <span className="tag tag-sm" key={id}>{tag}</span>
            ))}
          </div>
        </div>
      </article>
    );
  }
}
 
export default NodeCard;