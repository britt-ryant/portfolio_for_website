-- \c portfolio_projects

DROP TABLE IF EXISTS project_info;


CREATE TABLE project_info (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  tech VARCHAR(255),
  link VARCHAR(255),
  about VARCHAR(500)
);
