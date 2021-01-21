CREATE TABLE IF NOT EXISTS

authors (
    authors_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author_name VARCHAR(50) NOT NULL,
    author_lastName VARCHAR(50) NOT NULL,
    author_email VARCHAR(50) NOT NULL,
    author_country VARCHAR(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS
articles (
    article_id SERIAL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    headline VARCHAR(200) NOT NULL,
    subline VARCHAR(400) NOT NULL,
    content VARCHAR NOT NULL,
    authorid INT,
    categoryId INT,
    FOREIGN KEY (authorid) REFERENCES authors(authors_id),
    FOREIGN KEY (categoryId) REFERENCES categories(categoryId)
);
CREATE TABLE IF NOT EXISTS
reactions(
    reactionsId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    reaction_text CHAR (50) NOT NULL,
    is_clapped BOOLEAN,
    author_id INT,
    articleId INT,
    FOREIGN KEY (author_id) REFERENCES authors(authors_id),
    FOREIGN KEY (articleId) REFERENCES articles(article_id) 
);
CREATE TABLE IF NOT EXISTS
categories (
    categoryId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(50) NOT NULL
);
