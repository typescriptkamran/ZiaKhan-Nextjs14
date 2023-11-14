"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const utils_1 = require("../../utils");
const ArticleCard = (article) => {
    const articleURL = `/articles/${(0, utils_1.composeArticleSlug)(article.id, article.title)}`;
    return (<div style={{ width: "275px", margin: "10px" }}>
      <link_1.default href={articleURL} passHref>
        <a style={{ textDecoration: "none", color: "black" }}>
          <div>
            <image_1.default src={article.image.url} alt={article.title} width="275px" height="200px"/>
          </div>

          <div>
            <div>{article.title}</div>
            <div>{(0, utils_1.cutTextToLength)(article.body, 100)}</div>
            <hr />
            <div>Written by {article.author.name}</div>
          </div>
        </a>
      </link_1.default>
    </div>);
};
exports.default = ArticleCard;
